"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

interface CountdownTimerProps {
	targetDate: Date;
	label?: string;
}

export function CountdownTimer({}: CountdownTimerProps) {
	const [timeLeft, setTimeLeft] = useState<TimeLeft>({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const calculateTimeLeft = () => {
			const difference = new Date("2025-09-13T23:59:00").getTime() - Date.now();

			if (difference > 0) {
				return {
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
					minutes: Math.floor((difference / 1000 / 60) % 60),
					seconds: Math.floor((difference / 1000) % 60),
				};
			}

			return { days: 0, hours: 0, minutes: 0, seconds: 0 };
		};

		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		setTimeLeft(calculateTimeLeft());

		return () => clearInterval(timer);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div className="flex flex-col items-center gap-4">
			<p className="text-xs uppercase tracking-wider text-cyber-green-400/80">
				Submissions open September 1st, 2025
			</p>
			<div className="flex gap-4">
				<TimeUnit value={timeLeft.days} label="Days" />
				<TimeUnit value={timeLeft.hours} label="Hours" />
				<TimeUnit value={timeLeft.minutes} label="Minutes" />
				<TimeUnit value={timeLeft.seconds} label="Seconds" />
			</div>
			<p className="text-xs uppercase tracking-wider text-cyber-green-400/80">
				Submission Deadline September 13th, 2025
			</p>
		</div>
	);
}

function TimeUnit({ value, label }: { value: number; label: string }) {
	return (
		<div className="flex flex-col items-center gap-1">
			<div className="relative group">
				<div className="absolute inset-0 bg-gradient-to-br from-cyber-green-600/20 to-cyber-cyan-600/20 blur-xl group-hover:from-cyber-orange-600/20 group-hover:to-cyber-orange-400/20 transition-all" />
				<div className="relative bg-gradient-to-br from-cyber-dark-800 to-cyber-dark-900 border border-cyber-green-500/30 hover:border-cyber-orange-500/50 rounded-lg p-4 min-w-[80px] transition-all">
					<span className="text-3xl font-bold bg-gradient-to-br from-cyber-green-400 to-cyber-cyan-400 bg-clip-text text-transparent animate-pulse-glow">
						{value.toString().padStart(2, "0")}
					</span>
				</div>
			</div>
			<span className="text-xs uppercase tracking-wider text-cyber-orange-400/60">
				{label}
			</span>
		</div>
	);
}
