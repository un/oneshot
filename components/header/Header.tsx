import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import Link from "next/link";

export function Header() {
	return (
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
	);
}