import { createAuth } from "@/lib/auth";
import { convexAuthNextjsServerHelper } from "@convex-dev/better-auth/nextjs/server";

const handler = convexAuthNextjsServerHelper({
  createAuth,
  apiRoute: "/api/auth",
});

export const GET = handler;
export const POST = handler;