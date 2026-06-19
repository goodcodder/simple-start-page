import { createFileRoute } from "@tanstack/react-router";
import dashboardImg from "@/assets/dashboard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vectr — Operate at the speed of thought" },
      { name: "description", content: "The precision interface for high-output engineering teams." },
      { property: "og:title", content: "Vectr — Operate at the speed of thought" },
      { property: "og:description", content: "The precision interface for high-output engineering teams." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-display selection:bg-primary/20">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-6 h-16 max-w-6xl mx-auto">
          <span className="font-mono font-medium tracking-tighter text-lg">VECTR.</span>
          <div className="size-10 grid place-items-center">
            <div>
              <div className="w-5 h-0.5 bg-foreground mb-1" />
              <div className="w-5 h-0.5 bg-foreground" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-12 pb-16 overflow-hidden max-w-6xl mx-auto">
        <header className="max-w-prose">
          <div className="inline-block px-2 py-1 mb-6 bg-primary/5 border border-primary/10 rounded-[2px]">
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-medium">
              v2.0 Release
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.9] text-balance mb-6 animate-slide-up">
            OPERATE AT THE SPEED OF THOUGHT.
          </h1>
          <p className="text-lg text-muted leading-relaxed text-pretty mb-8 [animation-delay:150ms] animate-slide-up">
            The precision interface for high-output teams. No bloat, just the essential tools for scaling engineering culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 [animation-delay:300ms] animate-slide-up">
            <button className="h-14 bg-foreground text-background font-bold px-8 rounded-[4px] active:scale-95 transition-transform">
              Get Started Now
            </button>
            <button className="h-14 border border-border font-bold px-8 rounded-[4px] flex items-center justify-center gap-2">
              Documentation
              <span className="font-mono text-xs opacity-40">{"->"}</span>
            </button>
          </div>
        </header>

        <div className="mt-16 relative animate-reveal [animation-delay:450ms]">
          <img
            src={dashboardImg}
            alt="Vectr product interface dashboard"
            className="w-full aspect-[4/5] object-cover outline-1 -outline-offset-1 outline-black/5 rounded-[4px]"
          />
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20 bg-foreground text-background">
        <div className="space-y-12 max-w-3xl mx-auto">
          {[
            { n: "01 — ARCHITECTURE", h: "Built for persistence", p: "Distributed state management that works even when the network doesn't. Native-first performance in a browser shell." },
            { n: "02 — INTEGRATION", h: "Deep hooks by default", p: "Plug into your existing CI/CD pipelines with zero-config exporters for every major cloud provider." },
            { n: "03 — SECURITY", h: "Encrypted at rest", p: "Enterprise-grade key rotation and audited access logs. We don't see your data, and neither does anyone else." },
          ].map((f) => (
            <div key={f.n} className="border-t border-background/10 pt-8">
              <span className="font-mono text-xs text-background/40 block mb-4">{f.n}</span>
              <h3 className="text-2xl font-bold mb-3">{f.h}</h3>
              <p className="text-background/60 leading-relaxed">{f.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <div className="bg-primary p-8 rounded-[4px] text-primary-foreground">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">READY TO SHIP?</h2>
          <p className="mb-8 text-primary-foreground/80">
            Join 2,000+ teams building the future on Vectr. Free 14-day trial starts instantly.
          </p>
          <button className="w-full h-14 bg-background text-primary font-bold rounded-[4px] shadow-xl">
            Create Account
          </button>
          <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-tighter text-primary-foreground/60">
            No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border bg-card">
        <div className="flex flex-col gap-10 max-w-6xl mx-auto">
          <div className="space-y-4">
            <span className="font-mono font-medium tracking-tighter text-lg">VECTR.</span>
            <p className="text-sm text-muted max-w-sm">
              Precision tooling for the next generation of digital infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 font-mono text-[11px] uppercase tracking-widest">
            <div className="flex flex-col gap-3">
              <span className="text-foreground font-bold">Product</span>
              <a href="#" className="text-muted">Changelog</a>
              <a href="#" className="text-muted">Pricing</a>
              <a href="#" className="text-muted">Security</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-foreground font-bold">Legal</span>
              <a href="#" className="text-muted">Privacy</a>
              <a href="#" className="text-muted">Terms</a>
              <a href="#" className="text-muted">Contact</a>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex justify-between items-center">
            <span className="font-mono text-[10px] text-muted uppercase">© 2024 Vectr Labs</span>
            <div className="flex items-center gap-2">
              <div className="size-2 bg-primary rounded-full" />
              <span className="font-mono text-[10px] text-muted uppercase">Systems Nominal</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
