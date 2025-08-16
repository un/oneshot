import { createAuthClient } from "better-auth/react";
import { convexClient } from "@convex-dev/better-auth/client/plugins";

export const authClient = createAuthClient({
  // For Next.js, use the app's URL with the auth base path
  baseURL: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
  basePath: "/api/auth",
  plugins: [
    convexClient(),
  ],
});