"use client";

import { CountdownTimer } from "@/components/landing/CountdownTimer";
import { Button } from "@/components/ui/button";
import { Cpu, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect } from "react";
import { Stat } from "./Stat";

interface HeroSectionProps {
	submissionDeadline: Date;
}

export function HeroSection({ submissionDeadline }: HeroSectionProps) {
	const prizes = useQuery(api.prizes.getActivePrizes);
	const totalCashValue = useQuery(api.prizes.getTotalCashValue);
	const seedPrizes = useMutation(api.prizes.seedPrizes);

	useEffect(() => {
		if (prizes && prizes.length === 0) {
			seedPrizes();
		}
	}, [prizes, seedPrizes]);

	return (
		<section className="relative z-10 pt-20 pb-32">
			<div className="container mx-auto px-4">
				<div className="max-w-5xl mx-auto text-center space-y-8">
					<div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-cyber-orange-500/10 border border-cyber-orange-500/30">
						<Cpu className="h-6 w-6 text-cyber-orange-400 animate-pulse" />
						<div className="flex flex-col gap-0 items-start">
							<span className="text-sm text-cyber-orange-300">
								The AI Prompt Hackathon
							</span>
							<span className="text-sm text-cyber-orange-300">
								${totalCashValue}+ in prizes
							</span>
						</div>
					</div>

					<div className="text-2xl md:text-4xl font-bold  ">
						<div className="flex flex-col gap-4">
							<span className="bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
								If you had
							</span>

							<div className="flex flex-col md:flex-row gap-4 items-center justify-center">
								<span className="text-5xl md:text-7xl bg-gradient-to-r from-cyber-green-400 to-cyber-cyan-400 bg-clip-text text-transparent animate-pulse-glow">
									one shot,{" "}
								</span>
								<span className="text-5xl  md:text-7xl bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
									one prompt,
								</span>
							</div>

							<span className="text-5xl  md:text-7xl bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent text-balance">
								to code something useful,
							</span>

							<div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
								<span className="text-2xl md:text-4xl bg-gradient-to-r from-cyber-orange-400 to-cyber-orange-600 bg-clip-text text-transparent">
									would you nail it,
								</span>

								<span className="text-2xl md:text-4xl bg-gradient-to-r from-cyber-orange-400 to-cyber-orange-600 bg-clip-text text-transparent">
									or would you flop?
								</span>
							</div>
						</div>
					</div>
					<div className="py-8">
						<CountdownTimer targetDate={submissionDeadline} />
					</div>

					<div className="flex flex-col gap-4">
						<p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
							Submit a single, masterfully crafted prompt.
						</p>
						<p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
							Watch it transform into a fully functioning application.
						</p>
						<p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
							No code submissions. No iterations.
						</p>
						<p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
							Just one shot at greatness.
						</p>
					</div>

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
	);
}
