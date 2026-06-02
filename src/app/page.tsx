import Navigation from "./components/Navigation";
import AudioToggle from "./components/AudioToggle";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Philosophy from "./sections/Philosophy";
import Founders from "./sections/Founders";
import FutureGames from "./sections/FutureGames";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Founders />
        <FutureGames />
      </main>
      <Footer />
      <AudioToggle />
    </>
  );
}
