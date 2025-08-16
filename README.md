# OneShotHack 🚀

> **"If you had one shot, one prompt to code something super useful, would you capture it or would you let it flop?"**

## About OneShotHack

OneShotHack is a revolutionary hackathon where participants don't submit code – they submit a single, masterfully crafted prompt. The challenge? Create an entire functioning application with just one prompt to an AI LLM.

### The Concept

- **One Prompt**: Participants craft a single, comprehensive prompt
- **Full Application**: The prompt must generate a complete, working application
- **AI-Powered**: Prompts are run through AI LLMs (Claude, Cursor, etc.) to generate code
- **Real Testing**: Generated code is executed and evaluated for functionality

## 🏆 Prize Categories

- **Best Consumer App** - Applications that solve everyday problems
- **Best Commercial App** - B2B or enterprise-focused solutions
- **Best Developer Tool** - Tools that help developers be more productive
- **Most Creative** - Unique and innovative applications
- **Best UI/UX** - Applications with exceptional user experience
- *(More categories to be announced)*

## 📋 Rules & Guidelines

### How to Participate

1. **Register** - Sign up with GitHub authentication
2. **Craft Your Prompt** - Develop your prompt locally on your own system
3. **Submit** - Submit your prompt through our platform
4. **Choose LLM** - Select which AI model should run your prompt (Claude, Cursor, etc.)
5. **Wait for Judging** - Judges will run your prompt and evaluate the generated application

### Prompt Requirements

- Must be a single prompt (no follow-ups or iterations)
- Should specify all necessary components, features, and functionality
- Must result in a runnable application
- Can specify frameworks, libraries, and tools to use

### What We Provide

- **Environment Variables**: Published list of available environment variables
- **MCP Servers**: List of available Model Context Protocol servers
- **Execution Environment**: Standardized environment for running generated code
- **Testing Framework**: Automated testing of generated applications

## 🛠 Technical Stack

This landing page and submission platform is built with:

- **Frontend**: Next.js 15+ with TypeScript
- **Backend**: Convex (real-time, reactive database)
- **Authentication**: Better Auth with GitHub OAuth
- **Components**: shadcn/ui components
- **Email**: Resend for transactional emails
- **Presence**: Real-time user presence tracking
- **Styling**: Tailwind CSS

## 👥 User Roles

### Hackers
- Register and submit prompts
- Track submission status
- View results and feedback

### Judges
- Review submissions
- Run prompts through LLMs
- Score and provide feedback

### Sponsors
- Offer prizes for specific categories
- View relevant submissions

### Administrators
- Manage the hackathon
- Add categories and prizes
- Configure available LLMs and environments

## 🚀 Getting Started (Development)

### Prerequisites

- Node.js 18+
- pnpm package manager
- GitHub OAuth app credentials
- Convex account

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/oneshothack.git
cd oneshothack

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local
# Update .env.local with your credentials

# Run development server
pnpm run dev
```

### Environment Setup

Required environment variables:

- `CONVEX_DEPLOYMENT` - Your Convex deployment
- `NEXT_PUBLIC_CONVEX_URL` - Convex public URL
- `BETTER_AUTH_SECRET` - Authentication secret
- `GITHUB_CLIENT_ID` - GitHub OAuth client ID
- `GITHUB_CLIENT_SECRET` - GitHub OAuth client secret

Optional:
- `RESEND_API_KEY` - For email functionality
- `RESEND_WEBHOOK_SECRET` - For email event tracking

### Setting up GitHub OAuth

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set callback URL: `http://localhost:3000/api/auth/callback/github`
4. Copy credentials to `.env.local`

### Convex Setup

```bash
# Set Better Auth secret
pnpx convex env set BETTER_AUTH_SECRET "your-secret"

# (Optional) Set Resend API key
pnpx convex env set RESEND_API_KEY "re_your-key"
```

## 📊 Database Schema

The application uses Convex for real-time data synchronization:

- **Users**: Hacker profiles and authentication
- **Submissions**: Prompt submissions and metadata
- **Categories**: Prize categories and rules
- **Prizes**: Sponsor-provided prizes
- **Judges**: Judge assignments and scores
- **Requests**: MCP server and environment variable requests

## 🔄 Submission Workflow

1. **Submit** → Prompt enters review queue
2. **Review** → Admins validate submission
3. **Execute** → Judges run prompt through LLM
4. **Test** → Generated code is executed
5. **Score** → Judges evaluate functionality
6. **Results** → Scores aggregated and winners selected

## 🤝 Contributing

This is the official OneShotHack platform. For questions or issues:

- Open an issue on GitHub
- Contact the organizing team
- Join our Discord community

## 📜 License

[License information to be added]

---

**OneShotHack** - Where one prompt changes everything.