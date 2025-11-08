import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(255,115,0,0.15),transparent),radial-gradient(900px_400px_at_10%_10%,rgba(255,115,0,0.1),transparent),radial-gradient(900px_400px_at_90%_20%,rgba(0,153,255,0.08),transparent)]">
      {/* Liquid glass card overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(650px_280px_at_70%_10%,rgba(255,140,0,0.12),transparent_60%)]" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Ao-qpnKUMOxV2eTA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Header content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-16">
        <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-[0_8px_60px_rgba(0,0,0,0.45)]">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Liquid Glass Interface
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Futuristic dark theme with cosmic orange navigation and neon glow interactions.
          </p>
        </div>
      </div>
    </section>
  );
}
