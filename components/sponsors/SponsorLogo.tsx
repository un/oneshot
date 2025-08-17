interface SponsorLogoProps {
	hoverColor: string;
	svgPath: React.ReactNode;
}

export function SponsorLogo({ hoverColor, svgPath }: SponsorLogoProps) {
	return (
		<div className={`flex items-center justify-center p-6 bg-cyber-dark-800/50 border border-cyber-green-900/20 rounded-lg hover:border-${hoverColor}/30 transition group`}>
			<svg
				className={`w-32 h-12 text-gray-400 group-hover:text-${hoverColor} transition`}
				viewBox="0 0 120 40"
				fill="currentColor"
			>
				{svgPath}
			</svg>
		</div>
	);
}