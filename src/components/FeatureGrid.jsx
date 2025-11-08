import { Sparkles, Shield, Cpu } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Neon Interactions',
    desc: 'Buttons and icons emit a soft neon glow with cosmic orange highlights.',
  },
  {
    icon: Shield,
    title: 'Frosted Surfaces',
    desc: 'Liquid glass cards with subtle blur and low-opacity borders on a dark canvas.',
  },
  {
    icon: Cpu,
    title: '3D Immersion',
    desc: 'A glossy, distorted black liquid orb sets the tone in an interactive hero.',
  },
];

export default function FeatureGrid() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
          >
            <div className="absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
              background:
                'radial-gradient(180px_180px_at_20%_0%,rgba(255,140,0,0.15),transparent_60%)',
            }} />

            <div className="relative z-10">
              <Icon className="h-6 w-6 text-orange-400 drop-shadow-[0_0_12px_rgba(255,140,0,0.75)]" />
              <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
