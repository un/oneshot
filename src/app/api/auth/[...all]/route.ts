import { nextJsHandler } from "@convex-dev/better-auth/nextjs";

// This creates the handler for Next.js App Router
const handler = nextJsHandler({
  convexSiteUrl: process.env.NEXT_PUBLIC_CONVEX_URL?.replace('.cloud', '.site'),
});

export const GET = handler.GET;
export const POST = handler.POST;