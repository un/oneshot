"use client";

import { api } from "@/convex/_generated/api";
import usePresence from "@convex-dev/presence/react";
import { useQuery } from "convex/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PresenceIndicatorProps {
  roomId: string;
}

export function PresenceIndicator({ roomId }: PresenceIndicatorProps) {
  const currentUser = useQuery(api.auth.getCurrentUser);
  
  // Initialize presence tracking for the current user
  const presenceState = usePresence(
    api.presence,
    roomId,
    currentUser?.userId || "anonymous"
  );

  if (!presenceState) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse" />
        Connecting...
      </div>
    );
  }

  const otherUsers = presenceState.filter(user => user.userId !== currentUser?.userId);
  const totalUsers = presenceState.length;

  return (
    <div className="flex items-center gap-4">
      {/* Online indicator */}
      <div className="flex items-center gap-2 text-sm">
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-muted-foreground">
          {totalUsers} {totalUsers === 1 ? 'user' : 'users'} online
        </span>
      </div>

      {/* User avatars */}
      {otherUsers.length > 0 && (
        <div className="flex -space-x-2">
          {otherUsers.slice(0, 5).map((user) => (
            <Avatar key={user.userId} className="h-8 w-8 border-2 border-background">
              <AvatarImage 
                src={user.image} 
                alt={user.name || "User"} 
              />
              <AvatarFallback>
                {(user.name || user.userId || "U").charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          ))}
          {otherUsers.length > 5 && (
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs">
              +{otherUsers.length - 5}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Simplified version without avatars
export function SimplePresenceIndicator({ roomId }: PresenceIndicatorProps) {
  const currentUser = useQuery(api.auth.getCurrentUser);
  const presenceState = usePresence(
    api.presence,
    roomId,
    currentUser?.userId || "anonymous"
  );

  if (!presenceState) return null;

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="h-2 w-2 rounded-full bg-green-500" />
        <div className="absolute inset-0 h-2 w-2 rounded-full bg-green-500 animate-ping" />
      </div>
      <span className="text-sm text-muted-foreground">
        {presenceState.length} online
      </span>
    </div>
  );
}