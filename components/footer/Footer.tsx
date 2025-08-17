import { Terminal, Github, MessageSquare } from "lucide-react";
import Link from "next/link";

export function Footer() {
	return (
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
	);
}