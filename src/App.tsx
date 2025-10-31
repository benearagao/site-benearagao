import { Header, Footer } from "./components/layout";
import {
  HeroSection,
  AboutSection,
  ArticlesSection,
  VideosSection,
  PhotographySection,
  SpotifySection,
  ContactSection,
} from "./components/sections";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ArticlesSection />
        <VideosSection />
        <PhotographySection />
        <SpotifySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
