"use client";

import { authClient } from "@/src/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Github, LogOut } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export function AuthButton() {
  const user = useQuery(api.auth.getCurrentUser);

  const handleGitHubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
  };

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  if (user === undefined) {
    return <Button disabled>Loading...</Button>;
  }

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {user.image && (
            <img
              src={user.image}
              alt={user.name || "User"}
              className="w-8 h-8 rounded-full"
            />
          )}
          <span className="text-sm font-medium">{user.name || user.email}</span>
        </div>
        <Button onClick={handleSignOut} variant="outline" size="sm">
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <Button onClick={handleGitHubSignIn}>
      <Github className="w-4 h-4 mr-2" />
      Sign in with GitHub
    </Button>
  );
}