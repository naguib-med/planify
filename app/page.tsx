
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] text-[color:var(--geist-foreground)] bg-[color:var(--geist-background)] min-h-screen flex flex-col items-center justify-center gap-4">
      <header className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold text-center">Planify</h1>
        <p className="text-lg text-center">The best way to plan your appointments</p>
        </header>

        <main className="flex flex-col items-center justify-center gap-4">
            <p className="text-lg text-center">Book an appointment with a professional</p>
            <button className="px-4 py-2 text-lg font-bold text-white bg-primary rounded-xl">
                Book an appointment</button>
        </main>

        <footer className="flex flex-col items-center justify-center gap-4">
            <p className="text-lg text-center">Made with ❤️ by <a href="
            https://x.com/NaguibMoma" className="text-blue-500">Naguib</a></p>
        </footer>
    </div>
  );
}
