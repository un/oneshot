export function Stat({ value, label }: { value: string; label: string }) {
	return (
		<div className="text-center">
			<div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-cyber-green-400 to-cyber-cyan-400 bg-clip-text text-transparent">
				{value}
			</div>
			<div className="text-sm text-gray-500 mt-1">{label}</div>
		</div>
	);
}