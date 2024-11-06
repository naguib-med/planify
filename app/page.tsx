import Navbar from "@/components/Navbar";
import HeroComponent from "@/components/HeroComponent";
import {Spacing} from "@/components/Spacing";

export default function Home() {
  return (
      <>
          <Navbar/>
          <main>
              <Spacing size="md"/>
              <HeroComponent />
          </main>

          <footer className="flex flex-col items-center justify-center gap-4">
              <p className="text-lg text-center">Made with ❤️ by <a href="
            https://x.com/NaguibMoma" className="text-blue-500">Naguib</a></p>
          </footer>
      </>
  );
}
