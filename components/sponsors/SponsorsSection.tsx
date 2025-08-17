import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

export function SponsorsSection() {
	return (
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
	);
}