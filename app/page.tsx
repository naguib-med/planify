import Navbar from "@/components/Navbar";

export default function Home() {
  return (
      <>
          <Navbar/>
          <main className="flex flex-col items-center justify-center h-screen">
              <p className="text-lg text-center">Planify est une plateforme de prise de rendez-vous en ligne.</p>
              <p className="text-lg text-center">Planifiez vos rendez-vous en toute simplicité.</p>

              <a href="/appointments" className="text-blue-500">Prendre un rendez-vous</a>
          </main>

          <footer className="flex flex-col items-center justify-center gap-4">
              <p className="text-lg text-center">Made with ❤️ by <a href="
            https://x.com/NaguibMoma" className="text-blue-500">Naguib</a></p>
          </footer>
      </>
  );
}
