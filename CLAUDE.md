# OneShotHack - Technical Development Notes

## Project Overview

OneShotHack is a revolutionary hackathon platform where participants submit a single AI prompt instead of code. The prompt is then executed by an LLM to generate a complete, functioning application.

### Core Concept
**"If you had one shot, one prompt to code something super useful, would you capture it or would you let it flop?"**

## Application Architecture

### User Roles & Permissions

#### 1. **Hackers** (Participants)
- Register via GitHub OAuth
- Submit one prompt per hackathon
- Select target LLM (Claude, Cursor, etc.)
- Track submission status
- Request additional MCP servers or environment variables
- View judging results and feedback

#### 2. **Judges**
- Assigned by administrators
- Access to submission queue
- Execute prompts through LLMs
- Test generated applications
- Score submissions based on criteria
- Provide feedback

#### 3. **Sponsors**
- Create sponsored prize categories
- Define prize criteria
- View submissions in their categories
- Select additional winners (sponsor's choice)

#### 4. **Administrators/Staff**
- Full platform control
- Manage user roles
- Create/edit categories and prizes
- Configure available LLMs
- Publish environment variables
- Manage MCP server list
- Oversee judging process
- Handle disputes

## Database Schema Design

### Core Tables

```typescript
// Users table (extends Better Auth user)
users: {
  // Basic info from Better Auth
  role: "hacker" | "judge" | "sponsor" | "admin"
  githubUsername: string
  bio?: string
  company?: string
  website?: string
  registeredAt: Date
  agreedToTerms: boolean
}

// Hackathon events
hackathons: {
  name: string
  slug: string
  description: string
  startDate: Date
  endDate: Date
  submissionDeadline: Date
  status: "upcoming" | "active" | "judging" | "completed"
  rules: string
  environmentVariables: string[] // Published list
  mcpServers: string[] // Available MCP servers
  llmOptions: string[] // Available LLMs
}

// Submissions
submissions: {
  hackathonId: Id<"hackathons">
  userId: Id<"users">
  prompt: string // The actual prompt text
  targetLLM: string // Selected LLM
  submittedAt: Date
  status: "pending" | "reviewing" | "executing" | "testing" | "scored" | "disqualified"
  executionLog?: string
  generatedCode?: string
  testResults?: object
  finalScore?: number
  feedback?: string
}

// Categories
categories: {
  hackathonId: Id<"hackathons">
  name: string
  description: string
  criteria: string
  sponsorId?: Id<"users">
  prizeAmount?: string
  prizeDescription?: string
  order: number
}

// Scores
scores: {
  submissionId: Id<"submissions">
  judgeId: Id<"users">
  categoryId: Id<"categories">
  score: number // 1-10
  feedback: string
  scoredAt: Date
}

// Resource Requests
resourceRequests: {
  userId: Id<"users">
  hackathonId: Id<"hackathons">
  type: "mcp_server" | "env_variable"
  name: string
  description: string
  justification: string
  status: "pending" | "approved" | "rejected"
  adminResponse?: string
  createdAt: Date
}

// Announcements
announcements: {
  hackathonId: Id<"hackathons">
  title: string
  content: string
  type: "info" | "warning" | "success"
  publishedAt: Date
  authorId: Id<"users">
}
```

## Key Features to Implement

### Landing Page
- Hero section with tagline
- Countdown timer to submission deadline
- Live submission counter
- Categories and prizes showcase
- Rules and guidelines
- FAQ section
- Registration CTA

### Dashboard (Role-based)

#### Hacker Dashboard
- Submission form with rich text editor
- Submission status tracker
- Resource request forms
- Leaderboard (after judging)

#### Judge Dashboard
- Submission queue
- Execution interface
- Scoring rubric
- Batch operations

#### Admin Dashboard
- User management
- Category/prize management
- Environment configuration
- Analytics and metrics
- Judging oversight

### Real-time Features (using Convex)
- Live submission count
- Presence tracking (who's online)
- Real-time announcements
- Live leaderboard updates
- Collaborative judging sessions

## Technical Implementation Plan

### Phase 1: Foundation
- [x] Set up authentication with roles
- [x] Configure Convex components
- [ ] Design database schema
- [ ] Create base layouts

### Phase 2: Core Features
- [ ] Landing page with hero section
- [ ] Registration flow
- [ ] Submission system
- [ ] Role-based routing

### Phase 3: Judging System
- [ ] Judge assignment
- [ ] Execution interface
- [ ] Scoring system
- [ ] Results aggregation

### Phase 4: Advanced Features
- [ ] Resource requests
- [ ] Real-time updates
- [ ] Email notifications
- [ ] Analytics dashboard

### Phase 5: Polish
- [ ] UI/UX improvements
- [ ] Performance optimization
- [ ] Security hardening
- [ ] Documentation

## Design Guidelines

### Visual Design
- Modern, bold typography
- Gradient accents
- Dark mode support
- Smooth animations
- Mobile-responsive

### Component Library
- Use shadcn/ui as base
- Custom theme with brand colors
- Enhanced components:
  - Animated countdown timer
  - Live counter badges
  - Status indicators
  - Code editor for prompts
  - Markdown preview

### Brand Colors
```css
--primary: AI-inspired blue/purple gradient
--accent: Electric green for CTAs
--background: Dark with subtle grid pattern
--foreground: High contrast text
```

## Submission Workflow Details

1. **Registration**
   - GitHub OAuth login
   - Accept terms and conditions
   - Complete profile

2. **Prompt Creation**
   - Written locally by participant
   - Must be self-contained
   - Can specify frameworks/tools

3. **Submission**
   - Paste prompt into platform
   - Select target LLM
   - Confirm submission (no edits after)

4. **Admin Review**
   - Check for inappropriate content
   - Verify single prompt rule
   - Mark as ready for execution

5. **Judge Execution**
   - Copy prompt to LLM
   - Generate code
   - Save output

6. **Testing**
   - Run generated code in sandbox
   - Document functionality
   - Record demo video/screenshots

7. **Scoring**
   - Rate against category criteria
   - Provide constructive feedback
   - Submit scores

8. **Results**
   - Aggregate scores
   - Determine winners
   - Publish results

## Security Considerations

- Prompt sanitization
- Rate limiting on submissions
- Sandbox execution environment
- Code review before execution
- Audit logs for all actions

## Email Notifications (via Resend)

- Registration confirmation
- Submission received
- Status updates
- Winner announcements
- Important deadline reminders

## Analytics to Track

- Total registrations
- Submissions per category
- Popular LLM choices
- Completion rates
- Judge participation
- Time to score

## Environment Variables Management

### For Participants
- Published list of available env vars
- Documentation for each
- Request process for additions

### For Platform
- Secure storage in Convex
- Role-based access
- Audit trail

## MCP Server Configuration

- Curated list of approved servers
- Documentation and examples
- Request/voting system for new servers
- Version management

## Future Enhancements

- Multi-language prompt support
- Team submissions
- Prompt templates/examples
- AI-assisted prompt improvement suggestions
- Public voting for "People's Choice"
- Historical archive of winning prompts
- Integration with GitHub for code storage

## Development Progress

### Completed
- [x] Project setup with Next.js + Convex
- [x] Authentication with Better Auth
- [x] GitHub OAuth integration
- [x] Resend email component
- [x] Presence tracking component
- [x] Environment configuration with t3-env
- [x] Basic project documentation

### Next Steps
- [ ] Update landing page with OneShotHack branding
- [ ] Implement role-based authentication
- [ ] Create database schema
- [ ] Build submission system
- [ ] Design judge interface
- [ ] Implement scoring system
- [ ] Add admin dashboard
- [ ] Create resource request system

## Notes for Implementation

1. **Prompt Storage**: Store prompts in Convex with encryption for fairness
2. **Execution Logs**: Detailed logging of LLM execution for transparency
3. **Scoring Rubric**: Standardized criteria across all judges
4. **Real-time Updates**: Leverage Convex subscriptions for live features
5. **Mobile Experience**: Ensure submission works well on mobile devices

---

*This document is continuously updated as development progresses.*