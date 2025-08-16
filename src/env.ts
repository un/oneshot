import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // Convex backend
    CONVEX_DEPLOYMENT: z.string().min(1),
    
    // Optional: for server-side Convex operations
    CONVEX_DEPLOY_KEY: z.string().optional(),
    
    // Better Auth
    BETTER_AUTH_SECRET: z.string().min(32),
    
    // GitHub OAuth
    GITHUB_CLIENT_ID: z.string().min(1),
    GITHUB_CLIENT_SECRET: z.string().min(1),
    
    // Resend (Optional - set in Convex dashboard)
    RESEND_API_KEY: z.string().optional(),
    RESEND_WEBHOOK_SECRET: z.string().optional(),
    
    // Node environment
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    
    // Optional: Vercel-specific
    VERCEL_URL: z.string().optional(),
    VERCEL_ENV: z.enum(["production", "preview", "development"]).optional(),
  },
  client: {
    // Convex public URL for client-side
    NEXT_PUBLIC_CONVEX_URL: z.string().url(),
    
    // Optional: App URL for sharing/redirects
    NEXT_PUBLIC_APP_URL: z.string().url().optional(),
  },
  // For Next.js >= 13.4.4, we only need to destructure client variables
  experimental__runtimeEnv: {
    NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
  // Skip validation during build for CI/CD
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  // Tell t3-env to not throw when accessing client variables on the server
  emptyStringAsUndefined: true,
});