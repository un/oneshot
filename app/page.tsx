"use client";

import { CountdownTimer } from "@/components/landing/CountdownTimer";
import { FAQ } from "@/components/landing/FAQ";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Trophy,
	Code2,
	Sparkles,
	Zap,
	Users,
	Rocket,
	Terminal,
	Gift,
	ArrowRight,
	Github,
	MessageSquare,
	FileText,
	CheckCircle,
	Cpu,
	Binary,
} from "lucide-react";
import Link from "next/link";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect } from "react";

export default function Home() {
	// Set your hackathon deadline here
	const submissionDeadline = new Date("2025-02-15T23:59:59");

	// Fetch prizes from database
	const prizes = useQuery(api.prizes.getActivePrizes);
	const totalCashValue = useQuery(api.prizes.getTotalCashValue);
	const seedPrizes = useMutation(api.prizes.seedPrizes);

	// Seed prizes on first load if none exist
	useEffect(() => {
		if (prizes && prizes.length === 0) {
			seedPrizes();
		}
	}, [prizes, seedPrizes]);

	return (
		<div className="min-h-screen bg-gradient-to-b from-cyber-dark-900 via-cyber-dark-800 to-cyber-dark-900 relative overflow-hidden">
			{/* Animated cyber grid background */}
			<div className="fixed inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-20" />

			{/* Scanning line effect */}
			<div className="fixed inset-0 overflow-hidden pointer-events-none">
				<div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyber-green-500 to-transparent animate-cyber-scan opacity-30" />
			</div>

			{/* Header */}
			<header className="relative z-10 border-b border-cyber-green-900/30 backdrop-blur-sm bg-cyber-dark-900/50">
				<div className="container mx-auto px-4 py-4 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Terminal className="h-6 w-6 text-cyber-green-500 animate-pulse-glow" />
						<span className="text-xl font-bold bg-gradient-to-r from-cyber-green-400 to-cyber-cyan-400 bg-clip-text text-transparent">
							OneShotHack
						</span>
					</div>
					<nav className="hidden md:flex items-center gap-6">
						<Link
							href="#prizes"
							className="text-sm text-gray-400 hover:text-cyber-green-400 transition"
						>
							Prizes
						</Link>
						<Link
							href="#rules"
							className="text-sm text-gray-400 hover:text-cyber-green-400 transition"
						>
							Rules
						</Link>
						<Link
							href="#faq"
							className="text-sm text-gray-400 hover:text-cyber-green-400 transition"
						>
							FAQ
						</Link>
						<Button
							variant="outline"
							size="sm"
							className="border-cyber-green-500/50 text-cyber-green-400 hover:bg-cyber-green-500/10 hover:border-cyber-green-400"
						>
							Coming Soon
						</Button>
					</nav>
				</div>
			</header>

			{/* Hero Section */}
			<section className="relative z-10 pt-20 pb-32">
				<div className="container mx-auto px-4">
					<div className="max-w-5xl mx-auto text-center space-y-8">
						{/* Badge */}
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-orange-500/10 border border-cyber-orange-500/30">
							<Cpu className="h-4 w-4 text-cyber-orange-400 animate-pulse" />
							<span className="text-sm text-cyber-orange-300">
								The AI Prompt Hackathon
							</span>
						</div>

						{/* Main Tagline */}
						<h1 className="text-3xl md:text-5xl font-bold leading-tight ">
							<span className="bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent pb-12">
								If you had
							</span>
							<br />
							<span className="text-5xl md:text-7xl bg-gradient-to-r from-cyber-green-400 to-cyber-cyan-400 bg-clip-text text-transparent animate-pulse-glow">
								one shot,{" "}
							</span>

							<span className="text-5xl  md:text-7xl bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
								one prompt,
							</span>
							<br />
							<span className="text-5xl  md:text-7xl bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
								to code something useful,
							</span>
							<br />
							<span className="text-3xl md:text-5xl bg-gradient-to-r from-cyber-orange-400 to-cyber-orange-600 bg-clip-text text-transparent">
								would you nail it
							</span>
							<br />
							<span className="text-3xl md:text-5xl bg-gradient-to-r from-cyber-orange-400 to-cyber-orange-600 bg-clip-text text-transparent">
								or would you flop?
							</span>
						</h1>

						{/* Description */}
						<p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
							Submit a single, masterfully crafted prompt. Watch it transform
							into a fully functioning application. No code submissions. No
							iterations. Just one shot at greatness.
						</p>

						{/* Countdown Timer */}
						<div className="py-8">
							<CountdownTimer targetDate={submissionDeadline} />
						</div>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<Button
								size="lg"
								className="bg-gradient-to-r from-cyber-green-600 to-cyber-cyan-600 hover:from-cyber-green-500 hover:to-cyber-cyan-500 text-black font-bold px-8 shadow-lg shadow-cyber-green-500/25 hover:shadow-cyber-green-500/40 transition-all"
								disabled
							>
								Registration Opens Soon
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="border-cyber-orange-500/50 text-cyber-orange-400 hover:bg-cyber-orange-500/10 hover:border-cyber-orange-400"
								asChild
							>
								<Link href="#rules">
									<FileText className="mr-2 h-4 w-4" />
									Read the Rules
								</Link>
							</Button>
						</div>

						{/* Stats */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
							<Stat
								value={
									totalCashValue
										? `$${(totalCashValue / 1000).toFixed(0)}K+`
										: "Loading..."
								}
								label="In Prizes"
							/>
							<Stat
								value={prizes ? `${prizes.length}` : "..."}
								label="Categories"
							/>
							<Stat value="1" label="Prompt Only" />
							<Stat value="∞" label="Possibilities" />
						</div>
					</div>
				</div>
			</section>

			{/* Prize Categories - Moved Up */}
			<section
				id="prizes"
				className="relative z-10 py-20 border-t border-cyber-green-900/30"
			>
				<div className="container mx-auto px-4">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
							<span className="bg-gradient-to-r from-cyber-orange-400 to-cyber-orange-600 bg-clip-text text-transparent">
								Prize Categories
							</span>
						</h2>
						<p className="text-center text-gray-400 mb-12">
							{totalCashValue ? (
								<>
									<span className="text-cyber-green-400 font-bold">
										${totalCashValue.toLocaleString()}
									</span>{" "}
									in total cash prizes across {prizes?.length || 0} categories
								</>
							) : (
								"Multiple ways to win with your single prompt"
							)}
						</p>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{prizes ? (
								prizes.map((prize) => (
									<PrizeCard
										key={prize._id}
										title={prize.publicName}
										prize={`$${prize.cashValue.toLocaleString()}`}
										description={prize.publicDescription}
										gradient={
											prize.gradientClass ||
											"from-cyber-green-400 to-cyber-cyan-400"
										}
										sponsoredBy={prize.sponsoredBy}
									/>
								))
							) : (
								// Loading state
								<>
									{[1, 2, 3, 4, 5, 6].map((i) => (
										<Card
											key={i}
											className="bg-cyber-dark-800/80 border-cyber-green-900/30 p-6 animate-pulse"
										>
											<div className="h-6 bg-cyber-dark-600 rounded mb-4"></div>
											<div className="h-8 bg-cyber-dark-600 rounded mb-4"></div>
											<div className="h-4 bg-cyber-dark-600 rounded"></div>
										</Card>
									))}
								</>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section className="relative z-10 py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
							<span className="bg-gradient-to-r from-cyber-green-400 to-cyber-cyan-400 bg-clip-text text-transparent">
								How It Works
							</span>
						</h2>
						<p className="text-center text-gray-400 mb-12">
							Your journey from prompt to prize in 4 simple steps
						</p>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							<StepCard
								number="01"
								title="Craft Your Prompt"
								description="Design a comprehensive prompt that generates a complete application"
								icon={<Code2 />}
							/>
							<StepCard
								number="02"
								title="Submit Once"
								description="One submission, no edits, no iterations - make it count"
								icon={<Zap />}
							/>
							<StepCard
								number="03"
								title="AI Execution"
								description="Your prompt runs through Claude, Cursor, or other LLMs"
								icon={<Binary />}
							/>
							<StepCard
								number="04"
								title="Win Prizes"
								description="Generated apps are tested and scored by expert judges"
								icon={<Trophy />}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Sponsors Section */}
			<section className="relative z-10 py-20 border-t border-cyber-green-900/30">
				<div className="container mx-auto px-4">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
							<span className="bg-gradient-to-r from-cyber-cyan-400 to-cyber-green-400 bg-clip-text text-transparent">
								Our Sponsors
							</span>
						</h2>
						<p className="text-center text-gray-400 mb-12">
							Powered by leaders in AI and technology
						</p>

						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
							{/* Sponsor Logo 1 */}
							<div className="flex items-center justify-center p-6 bg-cyber-dark-800/50 border border-cyber-green-900/20 rounded-lg hover:border-cyber-green-500/30 transition group">
								<svg
									className="w-32 h-12 text-gray-400 group-hover:text-cyber-green-400 transition"
									viewBox="0 0 120 40"
									fill="currentColor"
								>
									<rect x="10" y="10" width="20" height="20" />
									<rect x="35" y="15" width="30" height="10" />
									<rect x="70" y="10" width="15" height="20" />
									<rect x="90" y="12" width="20" height="16" />
								</svg>
							</div>

							{/* Sponsor Logo 2 */}
							<div className="flex items-center justify-center p-6 bg-cyber-dark-800/50 border border-cyber-green-900/20 rounded-lg hover:border-cyber-orange-500/30 transition group">
								<svg
									className="w-32 h-12 text-gray-400 group-hover:text-cyber-orange-400 transition"
									viewBox="0 0 120 40"
									fill="currentColor"
								>
									<circle cx="20" cy="20" r="10" />
									<rect x="35" y="10" width="40" height="20" rx="10" />
									<polygon points="85,20 95,10 105,20 95,30" />
								</svg>
							</div>

							{/* Sponsor Logo 3 */}
							<div className="flex items-center justify-center p-6 bg-cyber-dark-800/50 border border-cyber-green-900/20 rounded-lg hover:border-cyber-cyan-500/30 transition group">
								<svg
									className="w-32 h-12 text-gray-400 group-hover:text-cyber-cyan-400 transition"
									viewBox="0 0 120 40"
									fill="currentColor"
								>
									<path d="M10 20 L30 10 L30 30 Z" />
									<rect x="35" y="15" width="35" height="10" />
									<circle cx="80" cy="20" r="8" />
									<circle cx="100" cy="20" r="8" />
								</svg>
							</div>

							{/* Sponsor Logo 4 */}
							<div className="flex items-center justify-center p-6 bg-cyber-dark-800/50 border border-cyber-green-900/20 rounded-lg hover:border-cyber-green-500/30 transition group">
								<svg
									className="w-32 h-12 text-gray-400 group-hover:text-cyber-green-400 transition"
									viewBox="0 0 120 40"
									fill="currentColor"
								>
									<rect x="10" y="15" width="25" height="10" />
									<polygon points="40,20 50,10 60,20 50,30" />
									<rect x="65" y="10" width="10" height="20" />
									<rect x="80" y="15" width="30" height="10" />
								</svg>
							</div>

							{/* Sponsor Logo 5 */}
							<div className="flex items-center justify-center p-6 bg-cyber-dark-800/50 border border-cyber-green-900/20 rounded-lg hover:border-cyber-orange-500/30 transition group">
								<svg
									className="w-32 h-12 text-gray-400 group-hover:text-cyber-orange-400 transition"
									viewBox="0 0 120 40"
									fill="currentColor"
								>
									<path
										d="M10 30 Q20 10 30 30 T50 30"
										stroke="currentColor"
										strokeWidth="3"
										fill="none"
									/>
									<circle cx="70" cy="20" r="10" />
									<rect x="85" y="10" width="25" height="20" rx="5" />
								</svg>
							</div>

							{/* Sponsor Logo 6 */}
							<div className="flex items-center justify-center p-6 bg-cyber-dark-800/50 border border-cyber-green-900/20 rounded-lg hover:border-cyber-cyan-500/30 transition group">
								<svg
									className="w-32 h-12 text-gray-400 group-hover:text-cyber-cyan-400 transition"
									viewBox="0 0 120 40"
									fill="currentColor"
								>
									<rect x="10" y="10" width="20" height="20" rx="10" />
									<rect x="35" y="10" width="20" height="20" rx="10" />
									<rect x="60" y="10" width="20" height="20" rx="10" />
									<rect x="85" y="10" width="20" height="20" rx="10" />
								</svg>
							</div>

							{/* Sponsor Logo 7 */}
							<div className="flex items-center justify-center p-6 bg-cyber-dark-800/50 border border-cyber-green-900/20 rounded-lg hover:border-cyber-green-500/30 transition group">
								<svg
									className="w-32 h-12 text-gray-400 group-hover:text-cyber-green-400 transition"
									viewBox="0 0 120 40"
									fill="currentColor"
								>
									<polygon points="20,10 40,10 50,20 40,30 20,30 10,20" />
									<rect x="55" y="15" width="50" height="10" />
								</svg>
							</div>

							{/* Sponsor Logo 8 */}
							<div className="flex items-center justify-center p-6 bg-cyber-dark-800/50 border border-cyber-green-900/20 rounded-lg hover:border-cyber-orange-500/30 transition group">
								<svg
									className="w-32 h-12 text-gray-400 group-hover:text-cyber-orange-400 transition"
									viewBox="0 0 120 40"
									fill="currentColor"
								>
									<path d="M10 20 L20 10 L30 20 L20 30 Z" />
									<path d="M30 20 L40 10 L50 20 L40 30 Z" />
									<path d="M50 20 L60 10 L70 20 L60 30 Z" />
									<rect x="75" y="15" width="35" height="10" />
								</svg>
							</div>
						</div>

						<div className="mt-12 text-center">
							<p className="text-gray-400 mb-4">
								Interested in sponsoring OneShotHack?
							</p>
							<Button
								variant="outline"
								size="lg"
								className="border-cyber-cyan-500/50 text-cyber-cyan-400 hover:bg-cyber-cyan-500/10 hover:border-cyber-cyan-400"
							>
								<Gift className="mr-2 h-4 w-4" />
								Become a Sponsor
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Rules Section */}
			<section
				id="rules"
				className="relative z-10 py-20 border-t border-cyber-green-900/30"
			>
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
							<span className="bg-gradient-to-r from-cyber-green-400 to-cyber-cyan-400 bg-clip-text text-transparent">
								Rules & Guidelines
							</span>
						</h2>

						<div className="grid md:grid-cols-2 gap-8">
							<div className="space-y-6">
								<h3 className="text-xl font-semibold text-white flex items-center gap-2">
									<CheckCircle className="h-5 w-5 text-cyber-green-400" />
									Submission Requirements
								</h3>
								<ul className="space-y-3 text-gray-300">
									<li className="flex items-start gap-2">
										<span className="text-cyber-green-400 mt-1">›</span>
										<span>
											Single prompt only - no follow-ups or iterations allowed
										</span>
									</li>
									<li className="flex items-start gap-2">
										<span className="text-cyber-green-400 mt-1">›</span>
										<span>Must generate a complete, runnable application</span>
									</li>
									<li className="flex items-start gap-2">
										<span className="text-cyber-green-400 mt-1">›</span>
										<span>Can use any frameworks, libraries, and tools</span>
									</li>
									<li className="flex items-start gap-2">
										<span className="text-cyber-green-400 mt-1">›</span>
										<span>No editing after submission deadline</span>
									</li>
								</ul>
							</div>

							<div className="space-y-6">
								<h3 className="text-xl font-semibold text-white flex items-center gap-2">
									<CheckCircle className="h-5 w-5 text-cyber-orange-400" />
									What We Provide
								</h3>
								<ul className="space-y-3 text-gray-300">
									<li className="flex items-start gap-2">
										<span className="text-cyber-orange-400 mt-1">›</span>
										<span>List of available environment variables</span>
									</li>
									<li className="flex items-start gap-2">
										<span className="text-cyber-orange-400 mt-1">›</span>
										<span>List of MCP (Model Context Protocol) servers</span>
									</li>
									<li className="flex items-start gap-2">
										<span className="text-cyber-orange-400 mt-1">›</span>
										<span>Standardized execution environment</span>
									</li>
									<li className="flex items-start gap-2">
										<span className="text-cyber-orange-400 mt-1">›</span>
										<span>
											Choice of LLM (Claude Code, Cursor, Cursor CLI, etc.)
										</span>
									</li>
								</ul>
							</div>
						</div>

						<div className="mt-12 p-6 bg-gradient-to-r from-cyber-green-500/10 to-cyber-cyan-500/10 border border-cyber-green-500/30 rounded-lg">
							<p className="text-center text-gray-300">
								<strong className="text-cyber-green-400">Remember:</strong> You
								have one shot, one opportunity. Make your prompt count. The
								entire application must be generated from a single prompt - no
								manual coding, no iterations, just pure prompt engineering
								excellence.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<FAQ />

			{/* Footer */}
			<footer className="relative z-10 border-t border-cyber-green-900/30 py-12">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center justify-between gap-6">
						<div className="flex items-center gap-2">
							<Terminal className="h-5 w-5 text-cyber-green-400" />
							<span className="font-semibold bg-gradient-to-r from-cyber-green-400 to-cyber-cyan-400 bg-clip-text text-transparent">
								OneShotHack
							</span>
							<span className="text-gray-500 text-sm">© 2025</span>
						</div>

						<div className="flex items-center gap-6">
							<Link
								href="#"
								className="text-gray-400 hover:text-cyber-green-400 transition"
							>
								<Github className="h-5 w-5" />
							</Link>
							<Link
								href="#"
								className="text-gray-400 hover:text-cyber-orange-400 transition"
							>
								<MessageSquare className="h-5 w-5" />
							</Link>
							<span className="text-sm text-gray-500">
								Where one prompt changes everything
							</span>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

// Component for stats
function Stat({ value, label }: { value: string; label: string }) {
	return (
		<div className="text-center">
			<div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-cyber-green-400 to-cyber-cyan-400 bg-clip-text text-transparent">
				{value}
			</div>
			<div className="text-sm text-gray-500 mt-1">{label}</div>
		</div>
	);
}

// Component for step cards
function StepCard({
	number,
	title,
	description,
	icon,
}: {
	number: string;
	title: string;
	description: string;
	icon: React.ReactNode;
}) {
	return (
		<div className="relative group">
			<div className="absolute inset-0 bg-gradient-to-r from-cyber-green-600/20 to-cyber-cyan-600/20 rounded-lg blur-xl group-hover:blur-2xl transition" />
			<Card className="relative bg-cyber-dark-800/80 border-cyber-green-900/30 p-6 h-full hover:border-cyber-green-500/50 transition backdrop-blur-sm">
				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<span className="text-4xl font-bold text-cyber-dark-600">
							{number}
						</span>
						<div className="text-cyber-green-400">{icon}</div>
					</div>
					<h3 className="text-lg font-semibold text-white">{title}</h3>
					<p className="text-sm text-gray-400">{description}</p>
				</div>
			</Card>
		</div>
	);
}

// Component for prize cards
function PrizeCard({
	title,
	prize,
	description,
	gradient,
	sponsoredBy,
}: {
	title: string;
	prize: string;
	description: string;
	gradient: string;
	sponsoredBy?: string;
}) {
	return (
		<Card className="relative bg-cyber-dark-800/80 border-cyber-green-900/30 p-6 hover:border-cyber-orange-500/50 transition group backdrop-blur-sm overflow-hidden">
			<div className="absolute top-0 right-0 p-4">
				<Gift
					className={`h-6 w-6 bg-gradient-to-r ${gradient} text-transparent bg-clip-text`}
				/>
			</div>
			<div
				className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition`}
			/>
			<div className="space-y-4 relative z-10">
				<div>
					<h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
					<div
						className={`text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent animate-pulse-glow`}
					>
						{prize}
					</div>
				</div>
				<p className="text-sm text-gray-400">{description}</p>
				{sponsoredBy && (
					<p className="text-xs text-cyber-cyan-400/60 mt-2">
						Sponsored by {sponsoredBy}
					</p>
				)}
			</div>
		</Card>
	);
}

