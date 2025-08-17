"use client";

import { Card } from "@/components/ui/card";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { PrizeCard } from "./PrizeCard";

export function PrizesSection() {
	const prizes = useQuery(api.prizes.getActivePrizes);
	const totalCashValue = useQuery(api.prizes.getTotalCashValue);

	return (
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
	);
}