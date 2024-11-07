import Navbar from "@/components/Navbar";
import HeroComponent from "@/components/HeroComponent";
import { Spacing } from "@/components/Spacing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <>
          <Navbar/>
          <main>
              <Spacing size="sm" />
              <HeroComponent />

              <Spacing size="md" />
          </main>

          <Footer />
      </>
  );
}
