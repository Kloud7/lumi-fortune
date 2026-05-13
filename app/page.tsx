export default function Home() {
  return (
    <main className="min-h-screen bg-[#070617] text-white overflow-hidden">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6d5dfc55,transparent_35%),radial-gradient(circle_at_bottom,#ff7bd555,transparent_35%)]" />

        <div className="relative z-10 max-w-3xl">
          <div className="mx-auto mb-8 flex h-52 w-52 items-center justify-center rounded-full bg-white/10 shadow-2xl backdrop-blur">
            <img
              src="/lumi.png"
              alt="Lumi Fortune mascot"
              className="h-48 w-48 rounded-full object-cover"
            />
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-200">
            AI Spirit Fortune
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Meet Lumi, your daily fortune companion.
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-lg text-white/70">
            Create your little star guardian and receive a gentle AI-powered
            reading for love, luck, money, and mood every day.
          </p>

          <a
            href="/fortune"
            className="inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#070617] shadow-lg transition hover:scale-105"
          >
            Start today&apos;s reading
          </a>

          <p className="mt-6 text-sm text-white/40">
            Free daily reading · No account required
          </p>
        </div>
      </section>
    </main>
  );
}