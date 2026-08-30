import Header from "./components/Header";
import Hero from "./components/Hero";
import PortfolioGrid from "./components/PortfolioGrid";
import PricingSection from "./components/PricingSection";
import JobTicketForm from "./components/JobTicketForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--ink)]">
      <Header />
      <Hero />
      <PortfolioGrid isPreview={true} />
      <PricingSection />
      <JobTicketForm />
      <Footer />
    </main>
  );
}
