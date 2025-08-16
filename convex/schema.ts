import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Note: Better Auth manages its own tables in the component space.
// These tables include: users, sessions, accounts, verifications, etc.
// They are automatically created and managed by the Better Auth component.
// See: https://convex-better-auth.netlify.app/ for more details.

export default defineSchema({
  // Application users table - linked to Better Auth users via ID
  // The Better Auth component will create users here via onCreateUser hook
  users: defineTable({
    // Add any application-specific fields here
    // Better Auth stores email, name, image, etc. in its own tables
    // This table is for your app-specific user data
    // For example:
    // bio: v.optional(v.string()),
    // githubUsername: v.optional(v.string()),
    // role: v.optional(v.string()), // "hacker", "judge", "sponsor", "admin"
  }),
  
  // Prizes table for the hackathon
  prizes: defineTable({
    publicName: v.string(),
    publicDescription: v.string(),
    cashValue: v.number(),
    sponsoredBy: v.optional(v.string()),
    order: v.optional(v.number()), // For display ordering
    isActive: v.optional(v.boolean()), // To enable/disable prizes
    gradientClass: v.optional(v.string()), // For custom gradient styling
  })
    .index("by_order", ["order"])
    .index("by_active", ["isActive"]),
});
