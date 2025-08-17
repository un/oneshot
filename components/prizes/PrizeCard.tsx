import { Card } from "@/components/ui/card";
import { Gift } from "lucide-react";

interface PrizeCardProps {
	title: string;
	prize: string;
	description: string;
	gradient: string;
	sponsoredBy?: string;
}

export function PrizeCard({
	title,
	prize,
	description,
	gradient,
	sponsoredBy,
}: PrizeCardProps) {
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