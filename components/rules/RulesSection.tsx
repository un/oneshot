import { CheckCircle } from "lucide-react";

export function RulesSection() {
	return (
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
	);
}