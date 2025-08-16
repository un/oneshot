import { components, internal } from "./_generated/api";
import { Resend, vOnEmailEventArgs } from "@convex-dev/resend";
import { internalMutation } from "./_generated/server";
import { v } from "convex/values";

// Initialize Resend component
// testMode: true by default - only sends to test addresses
// Set testMode: false when ready for production
export const resend: Resend = new Resend(components.resend, {
  testMode: true, // Keep this true during development
  onEmailEvent: internal.emails.handleEmailEvent,
});

// Handle email status events (delivered, bounced, etc.)
// Use the vOnEmailEventArgs validator from the Resend component
export const handleEmailEvent = internalMutation({
  args: vOnEmailEventArgs,
  handler: async (ctx, args) => {
    // Log email events for monitoring
    console.log(`Email ${args.id} event:`, args.event.type);
    
    // You can add custom logic here based on event type
    switch (args.event.type) {
      case "email.delivered":
        console.log(`Email ${args.id} delivered`);
        break;
      case "email.bounced":
        console.error(`Email ${args.id} bounced`);
        // Could trigger alerts or update user records
        break;
      case "email.complained":
        console.error(`Email ${args.id} marked as spam`);
        // Important: Handle spam complaints to maintain sender reputation
        break;
      case "email.sent":
        console.log(`Email ${args.id} sent successfully`);
        break;
      case "email.opened":
        console.log(`Email ${args.id} was opened`);
        break;
      case "email.clicked":
        console.log(`Email ${args.id} link was clicked`);
        break;
    }
  },
});

// Send a welcome email when a user signs up
export const sendWelcomeEmail = internalMutation({
  args: {
    email: v.string(),
    name: v.optional(v.string()),
  },
  handler: async (ctx, { email, name }) => {
    const emailId = await resend.sendEmail(ctx, {
      from: "Oneshothack <noreply@oneshothack.com>",
      to: email,
      subject: "Welcome to Oneshothack! 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1>Welcome${name ? `, ${name}` : ''}!</h1>
          <p>Thanks for signing up for Oneshothack. We're excited to have you on board!</p>
          <p>You've successfully authenticated with GitHub, and you're all set to start using our platform.</p>
          <h2>What's Next?</h2>
          <ul>
            <li>Explore our features</li>
            <li>Join a collaborative session</li>
            <li>Start building something amazing</li>
          </ul>
          <p style="margin-top: 30px; color: #666;">
            If you have any questions, feel free to reach out to our support team.
          </p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #999;">
            You're receiving this email because you signed up for Oneshothack.
            If you didn't sign up, please ignore this email.
          </p>
        </div>
      `,
      text: `
        Welcome${name ? `, ${name}` : ''}!
        
        Thanks for signing up for Oneshothack. We're excited to have you on board!
        
        You've successfully authenticated with GitHub, and you're all set to start using our platform.
        
        What's Next?
        - Explore our features
        - Join a collaborative session
        - Start building something amazing
        
        If you have any questions, feel free to reach out to our support team.
        
        ---
        You're receiving this email because you signed up for Oneshothack.
        If you didn't sign up, please ignore this email.
      `,
    });
    
    return emailId;
  },
});

// Send a notification email
export const sendNotificationEmail = internalMutation({
  args: {
    email: v.string(),
    subject: v.string(),
    content: v.string(),
  },
  handler: async (ctx, { email, subject, content }) => {
    const emailId = await resend.sendEmail(ctx, {
      from: "Oneshothack Notifications <notifications@oneshothack.com>",
      to: email,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          ${content}
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #999;">
            You're receiving this notification from Oneshothack.
            Manage your notification preferences in your account settings.
          </p>
        </div>
      `,
      text: content + "\n\n---\nYou're receiving this notification from Oneshothack.\nManage your notification preferences in your account settings.",
    });
    
    return emailId;
  },
});