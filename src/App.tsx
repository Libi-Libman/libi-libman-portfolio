import Header from "./components/Header";
import Hero from "./components/Hero";
import A11yStats from "./components/A11yStats";
import QuestLog from "./components/QuestLog";
import StatsSection from "./components/StatsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-forest text-cream">
      <Header />

      <main id="main" className="scroll-mt-4 bg-forest px-6 py-16 sm:px-12 sm:py-20">
        <Hero />
        <A11yStats />
      </main>

      <QuestLog />
      <StatsSection />
      <Contact />
      <Footer />
    </div>
  );
}
