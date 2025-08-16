"use client";

import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

export function SendTestEmail() {
  const currentUser = useQuery(api.auth.getCurrentUser);
  const sendWelcomeEmail = useMutation(api.emails.sendWelcomeEmail);
  const sendNotification = useMutation(api.emails.sendNotificationEmail);
  
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [customEmail, setCustomEmail] = useState("");
  const [customSubject, setCustomSubject] = useState("");
  const [customContent, setCustomContent] = useState("");

  const handleSendWelcomeEmail = async () => {
    if (!currentUser?.email) return;
    
    setSending(true);
    setStatus("idle");
    
    try {
      await sendWelcomeEmail({
        email: currentUser.email,
        name: currentUser.name || undefined,
      });
      setStatus("success");
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  const handleSendCustomEmail = async () => {
    if (!customEmail || !customSubject || !customContent) return;
    
    setSending(true);
    setStatus("idle");
    
    try {
      await sendNotification({
        email: customEmail,
        subject: customSubject,
        content: customContent,
      });
      setStatus("success");
      // Clear form
      setCustomEmail("");
      setCustomSubject("");
      setCustomContent("");
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  if (!currentUser) {
    return (
      <div className="p-4 border rounded-lg bg-muted">
        <p className="text-sm text-muted-foreground">
          Please sign in to test email functionality
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Send Welcome Email */}
      <div className="p-4 border rounded-lg space-y-4">
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          <h3 className="font-semibold">Send Welcome Email</h3>
        </div>
        
        <p className="text-sm text-muted-foreground">
          Send a test welcome email to your registered email address: {currentUser.email}
        </p>
        
        <Button 
          onClick={handleSendWelcomeEmail}
          disabled={sending}
          className="w-full sm:w-auto"
        >
          {sending ? (
            <>Sending...</>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Send Welcome Email
            </>
          )}
        </Button>
        
        {status === "success" && (
          <div className="flex items-center gap-2 text-sm text-green-600">
            <CheckCircle className="h-4 w-4" />
            Email sent successfully! Check your inbox.
          </div>
        )}
        
        {status === "error" && (
          <div className="flex items-center gap-2 text-sm text-red-600">
            <AlertCircle className="h-4 w-4" />
            Failed to send email. Please try again.
          </div>
        )}
      </div>

      {/* Send Custom Notification */}
      <div className="p-4 border rounded-lg space-y-4">
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          <h3 className="font-semibold">Send Custom Notification</h3>
        </div>
        
        <div className="space-y-3">
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="recipient@example.com"
              value={customEmail}
              onChange={(e) => setCustomEmail(e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="Notification subject"
              value={customSubject}
              onChange={(e) => setCustomSubject(e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="content">Content (HTML)</Label>
            <textarea
              id="content"
              className="w-full min-h-[100px] px-3 py-2 text-sm rounded-md border border-input bg-background"
              placeholder="<h2>Hello!</h2><p>Your notification content here...</p>"
              value={customContent}
              onChange={(e) => setCustomContent(e.target.value)}
            />
          </div>
        </div>
        
        <Button 
          onClick={handleSendCustomEmail}
          disabled={sending || !customEmail || !customSubject || !customContent}
          className="w-full sm:w-auto"
        >
          {sending ? (
            <>Sending...</>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Send Notification
            </>
          )}
        </Button>
      </div>

      {/* Important Note */}
      <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
        <p className="text-sm text-yellow-800 dark:text-yellow-200">
          <strong>Note:</strong> Emails are currently in test mode. Only test addresses 
          (like delivered@resend.dev) will receive emails. To send to real addresses, 
          set testMode: false in convex/emails.ts and add a valid Resend API key.
        </p>
      </div>
    </div>
  );
}