import { mutation, query } from "./_generated/server";
import { components } from "./_generated/api";
import { v } from "convex/values";
import { Presence } from "@convex-dev/presence";
import { betterAuthComponent } from "./auth";

// Initialize Presence component
export const presence = new Presence(components.presence);

// Heartbeat mutation - called regularly to maintain presence
export const heartbeat = mutation({
  args: { 
    roomId: v.string(), 
    userId: v.string(), 
    sessionId: v.string(), 
    interval: v.number() 
  },
  handler: async (ctx, { roomId, userId, sessionId, interval }) => {
    // Check if user is authenticated
    const authUser = await betterAuthComponent.getAuthUser(ctx);
    if (!authUser || authUser.userId !== userId) {
      throw new Error("Unauthorized");
    }
    
    return await presence.heartbeat(ctx, roomId, userId, sessionId, interval);
  },
});

// List users in a room
export const list = query({
  args: { roomToken: v.string() },
  handler: async (ctx, { roomToken }) => {
    // Avoid adding per-user reads so all subscriptions can share same cache
    return await presence.list(ctx, roomToken);
  },
});

// Disconnect a user from presence tracking
export const disconnect = mutation({
  args: { sessionToken: v.string() },
  handler: async (ctx, { sessionToken }) => {
    // Can't check auth here because it's called over http from sendBeacon
    // The sessionToken provides security
    return await presence.disconnect(ctx, sessionToken);
  },
});

// Get presence for a specific user across all rooms
export const listUserPresence = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    // Optional: Add auth check if needed
    const authUser = await betterAuthComponent.getAuthUser(ctx);
    if (!authUser) {
      return [];
    }
    
    return await presence.listUser(ctx, userId);
  },
});

// Get all users in a specific room with additional metadata
export const listRoom = query({
  args: { roomId: v.string() },
  handler: async (ctx, { roomId }) => {
    // Use the list function directly with roomId as the roomToken
    // The presence component uses roomId as the token identifier
    const users = await presence.list(ctx, roomId);
    
    if (!users || users.length === 0) {
      return [];
    }
    
    // Enrich with user data if needed
    const enrichedUsers = await Promise.all(
      users.map(async (user) => {
        // Get user metadata from Better Auth
        const authUser = await ctx.db.get(user.userId as any);
        return {
          ...user,
          // Add any additional user data you want
          // name: authUser?.name,
          // image: authUser?.image,
        };
      })
    );
    
    return enrichedUsers;
  },
});