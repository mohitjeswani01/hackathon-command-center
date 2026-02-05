import Link from "next/link";
import LandingDemo from "@/components/marketing/LandingDemo";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
            ⌘
          </div>
          <span className="font-semibold text-sm tracking-tight text-gray-900">Hackathon Command Center</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#features" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors hidden md:block">Features</a>
          <a href="https://tambo.co" target="_blank" className="text-xs font-medium text-zinc-400 hover:text-zinc-600 transition-colors bg-zinc-100 px-3 py-1.5 rounded-full">Powered by Tambo</a>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center">

        {/* HERO SECTION */}
        <section className="w-full relative pt-20 pb-32 px-4 flex flex-col items-center overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-200/40 via-zinc-100/10 to-transparent rounded-[100%] blur-3xl -z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

          <div className="max-w-4xl mx-auto text-center space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-sm mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wide">System Online // v1.0</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-900 leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              Orchestrate by <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-zinc-900 via-zinc-600 to-zinc-400">Instinct.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              The first generative dashboard for hackathon organizers. <br />
              <span className="text-zinc-900 font-medium">No admin panels. Just intent.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <Link
                href="/chat"
                className="group px-8 py-4 rounded-full bg-zinc-900 text-white font-medium text-sm transition-all hover:bg-black hover:scale-105 shadow-xl shadow-zinc-900/20 active:scale-95 flex items-center gap-2 ring-4 ring-transparent hover:ring-zinc-900/10"
              >
                Enter Command Center
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>

          {/* LIVE DEMO CONTAINER */}
          <div className="mt-20 w-full max-w-6xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500 perspective-[2000px]">
            <div className="relative transform transition-transform hover:scale-[1.01] duration-700">
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 to-zinc-100 rounded-2xl blur opacity-50"></div>
              <div className="relative bg-white rounded-xl shadow-2xl border border-zinc-200 ring-1 ring-zinc-100 overflow-hidden">
                <LandingDemo />
              </div>
            </div>
          </div>
        </section>


        {/* SOCIAL PROOF TICKER */}
        <section className="w-full border-y border-zinc-100 bg-white py-10 overflow-hidden">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-8">Trusted specifically by nobody yet</p>
          <div className="flex justify-center gap-12 md:gap-24 opacity-40 grayscale mix-blend-multiply">
            {/* Placeholders for logos */}
            <span className="text-xl font-bold font-serif italic">The Verge</span>
            <span className="text-xl font-bold tracking-tight">TechCrunch</span>
            <span className="text-xl font-bold font-mono">Wired.</span>
            <span className="text-xl font-black tracking-tighter">GaryVee</span>
          </div>
        </section>


        {/* FEATURES GRID (Bento Box) */}
        <section id="features" className="w-full max-w-6xl mx-auto py-32 px-4">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">Generative UI at Scale.</h2>
            <p className="text-xl text-zinc-500 max-w-lg">Don't build admin panels. Let the AI build them for you, exactly when you need them.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
            {/* Feature 1: Large Left */}
            <div className="md:col-span-2 bg-zinc-900 rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group text-white shadow-2xl">
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center text-2xl">🪄</div>
                <h3 className="text-2xl font-bold">Context-Aware Morphing</h3>
                <p className="text-zinc-400 max-w-md">The interface rearranges itself based on your role (Judge, Organizer, Hacker) and the event phase.</p>
              </div>

              {/* Abstract Graphic */}
              <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-zinc-800 to-transparent opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-zinc-800 rounded-full blur-3xl opacity-50"></div>
            </div>

            {/* Feature 2: Top Right */}
            <div className="bg-zinc-100 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:bg-zinc-200 transition-colors border border-zinc-200">
              <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-xl mb-4 shadow-sm">💬</div>
              <h3 className="text-xl font-bold mb-2">Natural Language</h3>
              <p className="text-sm text-zinc-500">Just type "Start judging" or "Show me results". No clicks required.</p>
            </div>

            {/* Feature 3: Bottom Right */}
            <div className="bg-white rounded-3xl p-8 flex flex-col relative overflow-hidden group border border-zinc-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center text-xl mb-4 text-green-600">⚡</div>
              <h3 className="text-xl font-bold mb-2">Real-time State</h3>
              <p className="text-sm text-zinc-500">Built on `eventStore`. Syncs instantly across all connected clients.</p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="w-full py-32 bg-zinc-900 text-white flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 relative z-10">Ready to command?</h2>
          <Link
            href="/chat"
            className="px-10 py-5 rounded-full bg-white text-zinc-900 font-bold text-lg transition-all hover:bg-zinc-200 hover:scale-105 shadow-2xl active:scale-95 relative z-10"
          >
            Launch Dashboard
          </Link>
        </section>

      </main>

      <footer className="py-12 bg-white text-center border-t border-zinc-200">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center text-white text-[10px] font-bold">⌘</div>
          <span className="font-semibold text-zinc-900 tracking-tight">Hackathon Command Center</span>
        </div>
        <p className="text-zinc-400 text-sm">Design by Antigravity. Powered by Tambo AI. © 2024</p>
      </footer>
    </div>
  );
}
