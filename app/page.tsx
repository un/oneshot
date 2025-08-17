import { Header } from "@/components/header/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import { PrizesSection } from "@/components/prizes/PrizesSection";
import { HowItWorksSection } from "@/components/how-it-works/HowItWorksSection";
import { SponsorsSection } from "@/components/sponsors/SponsorsSection";
import { RulesSection } from "@/components/rules/RulesSection";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
	const submissionDeadline = new Date("2025-02-15T23:59:59");

	return (
		<div className="min-h-screen bg-gradient-to-b from-cyber-dark-900 via-cyber-dark-800 to-cyber-dark-900 relative overflow-hidden">
			{/* Animated cyber grid background */}
			<div className="fixed inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-20" />

			{/* Scanning line effect */}
			<div className="fixed inset-0 overflow-hidden pointer-events-none">
				<div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyber-green-500 to-transparent animate-cyber-scan opacity-30" />
			</div>

			<Header />
			<HeroSection submissionDeadline={submissionDeadline} />
			<PrizesSection />
			<HowItWorksSection />
			<SponsorsSection />
			<RulesSection />
			<FAQ />
			<Footer />
		</div>
	);
}