import { Code2, Zap, Binary, Trophy } from "lucide-react";
import { StepCard } from "./StepCard";

export function HowItWorksSection() {
	return (
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
	);
}