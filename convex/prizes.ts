import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

// Query to get all active prizes
export const getActivePrizes = query({
  args: {},
  handler: async (ctx) => {
    const prizes = await ctx.db
      .query("prizes")
      .withIndex("by_active")
      .filter((q) => q.neq(q.field("isActive"), false))
      .collect();
    
    // Sort by order field, or by cashValue descending if no order specified
    return prizes.sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order;
      }
      return b.cashValue - a.cashValue;
    });
  },
});

// Query to get total cash value of all active prizes
export const getTotalCashValue = query({
  args: {},
  handler: async (ctx) => {
    const prizes = await ctx.db
      .query("prizes")
      .withIndex("by_active")
      .filter((q) => q.neq(q.field("isActive"), false))
      .collect();
    
    return prizes.reduce((total, prize) => total + prize.cashValue, 0);
  },
});

// Mutation to seed initial prize data (run this once)
export const seedPrizes = mutation({
  args: {},
  handler: async (ctx) => {
    const existingPrizes = await ctx.db.query("prizes").collect();
    
    // Only seed if no prizes exist
    if (existingPrizes.length > 0) {
      return { message: "Prizes already seeded" };
    }
    
    const prizes = [
      {
        publicName: "Best Consumer App",
        publicDescription: "Create an app that solves everyday problems for regular users",
        cashValue: 3000,
        sponsoredBy: undefined,
        order: 1,
        isActive: true,
        gradientClass: "from-cyber-green-400 to-cyber-green-600",
      },
      {
        publicName: "Best Commercial App",
        publicDescription: "Build a B2B solution or enterprise-focused application",
        cashValue: 3000,
        sponsoredBy: undefined,
        order: 2,
        isActive: true,
        gradientClass: "from-cyber-cyan-400 to-cyber-cyan-600",
      },
      {
        publicName: "Best Developer Tool",
        publicDescription: "Tools that make developers more productive and efficient",
        cashValue: 2000,
        sponsoredBy: undefined,
        order: 3,
        isActive: true,
        gradientClass: "from-cyber-orange-400 to-cyber-orange-600",
      },
      {
        publicName: "Most Creative",
        publicDescription: "Push boundaries with unique and innovative applications",
        cashValue: 1500,
        sponsoredBy: undefined,
        order: 4,
        isActive: true,
        gradientClass: "from-pink-400 to-pink-600",
      },
      {
        publicName: "Best UI/UX",
        publicDescription: "Beautiful, intuitive interfaces that users love",
        cashValue: 1500,
        sponsoredBy: undefined,
        order: 5,
        isActive: true,
        gradientClass: "from-indigo-400 to-purple-600",
      },
      {
        publicName: "People's Choice",
        publicDescription: "Voted by the community as their favorite submission",
        cashValue: 1000,
        sponsoredBy: undefined,
        order: 6,
        isActive: true,
        gradientClass: "from-yellow-400 to-amber-600",
      },
    ];
    
    for (const prize of prizes) {
      await ctx.db.insert("prizes", prize);
    }
    
    return { message: "Prizes seeded successfully", count: prizes.length };
  },
});

// Admin mutations for managing prizes
export const addPrize = mutation({
  args: {
    publicName: v.string(),
    publicDescription: v.string(),
    cashValue: v.number(),
    sponsoredBy: v.optional(v.string()),
    order: v.optional(v.number()),
    gradientClass: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("prizes", {
      ...args,
      isActive: true,
    });
  },
});

export const updatePrize = mutation({
  args: {
    id: v.id("prizes"),
    publicName: v.optional(v.string()),
    publicDescription: v.optional(v.string()),
    cashValue: v.optional(v.number()),
    sponsoredBy: v.optional(v.string()),
    order: v.optional(v.number()),
    isActive: v.optional(v.boolean()),
    gradientClass: v.optional(v.string()),
  },
  handler: async (ctx, { id, ...updates }) => {
    return await ctx.db.patch(id, updates);
  },
});

export const deletePrize = mutation({
  args: { id: v.id("prizes") },
  handler: async (ctx, { id }) => {
    return await ctx.db.delete(id);
  },
});