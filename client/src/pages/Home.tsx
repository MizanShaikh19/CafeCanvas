import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import Gallery from "@/components/sections/Gallery";
import Location from "@/components/sections/Location";
import InstagramFeed from "@/components/sections/Instagram";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Location />
      <InstagramFeed />
      <Footer />
    </div>
  );
}
