import { Card } from "@/components/ui/card";
import React from "react";

interface StepCardProps {
	number: string;
	title: string;
	description: string;
	icon: React.ReactNode;
}

export function StepCard({ number, title, description, icon }: StepCardProps) {
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