import { useState } from 'react';
import { motion } from 'framer-motion';

// Simple interactive 3D phone mock built with CSS layers
// Back panel: Cosmic Orange matte; Frame: glossy light cosmic orange
export default function ProductHero() {
  const [tilt, setTilt] = useState({ x: 8, y: -12 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rotY = (px - 0.5) * 30; // -15..15
    const rotX = (0.5 - py) * 20; // -10..10
    setTilt({ x: rotX, y: rotY });
  };

  const resetTilt = () => setTilt({ x: 8, y: -12 });

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(255,115,0,0.14),transparent),radial-gradient(900px_400px_at_10%_10%,rgba(255,115,0,0.09),transparent),radial-gradient(900px_400px_at_90%_20%,rgba(0,153,255,0.07),transparent)]">
      {/* Ambient auras */}
      <div className="pointer-events-none absolute inset-0" style={{
        background:
          'radial-gradient(650px_280px_at_70%_10%,rgba(255,140,0,0.12),transparent_60%)',
      }} />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pt-28 pb-16 md:grid-cols-2">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Xiaomi Mi 11 Ultra
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Edisi Cosmic Orange — backdoor matte berkilau halus, frame glossy orange muda. Kamera kelas pro, performa flagship, dan desain liquid-glass modern.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-sm text-orange-300">
              Cosmic Orange Mate Backdoor
            </span>
            <span className="rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-sm text-orange-300">
              Glossy Light Orange Frame
            </span>
          </div>
        </div>

        {/* 3D phone model */}
        <div
          className="relative mx-auto h-[520px] w-[280px] perspective-1000"
          onMouseMove={handleMove}
          onMouseLeave={resetTilt}
          aria-label="3D model of Xiaomi Mi 11 Ultra in Cosmic Orange"
        >
          <motion.div
            className="relative h-full w-full [transform-style:preserve-3d]"
            animate={{ rotateX: tilt.x, rotateY: tilt.y }}
            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            style={{ transformPerspective: 1000 }}
          >
            {/* Frame (glossy light orange) */}
            <div
              className="absolute inset-0 rounded-[38px]"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,200,140,0.85), rgba(255,160,80,0.85))',
                boxShadow:
                  'inset 0 0 0 2px rgba(255,170,90,0.7), 0 20px 60px rgba(0,0,0,0.5)',
                transform: 'translateZ(6px)',
              }}
            />

            {/* Back panel (Cosmic Orange matte) */}
            <div
              className="absolute inset-[6px] rounded-[32px]"
              style={{
                background:
                  'radial-gradient(120%_120% at 30% 20%, rgba(255,145,60,0.65), rgba(210,90,20,0.65) 55%, rgba(170,60,10,0.65)), linear-gradient(180deg, rgba(255,130,30,0.3), rgba(120,40,10,0.3))',
                backdropFilter: 'blur(4px)',
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.2), 0 10px 40px rgba(0,0,0,0.35)',
                transform: 'translateZ(12px)',
              }}
            >
              {/* subtle grain for matte */}
              <div className="absolute inset-0 rounded-[32px] opacity-25 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\' viewBox=\'0 0 120 120\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'2\' stitchTiles=\'stitch\'/><feColorMatrix type=\'saturate\' values=\'0\'/><feComponentTransfer><feFuncA type=\'linear\' slope=\'0.25\'/></feComponentTransfer></filter><rect width=\'120\' height=\'120\' filter=\'url(%23n)\'/></svg>")' }} />

              {/* Camera island */}
              <div
                className="absolute right-6 top-6 h-36 w-[160px] rounded-2xl"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(30,30,30,0.9), rgba(10,10,10,0.9))',
                  boxShadow:
                    '0 10px 30px rgba(0,0,0,0.6), inset 0 1px rgba(255,255,255,0.1)',
                }}
              >
                {/* Lenses */}
                <div className="absolute left-3 top-3 grid grid-cols-2 gap-3">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="h-12 w-12 rounded-full bg-gradient-to-b from-neutral-800 to-black shadow-[0_6px_16px_rgba(0,0,0,0.6)]">
                      <div className="relative h-full w-full">
                        <div className="absolute inset-2 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(120,200,255,0.6),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(0,0,0,1),rgba(10,10,10,1))]" />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Flash and text */}
                <div className="absolute bottom-2 right-3 text-[10px] text-white/70">120X Ultra Pixel AI</div>
                <div className="absolute bottom-3 left-3 h-4 w-10 rounded bg-yellow-300/80 blur-[1px]" />
              </div>

              {/* Logo */}
              <div className="absolute bottom-6 left-6 text-white/80" style={{ letterSpacing: 1 }}>MI</div>
            </div>

            {/* Subtle reflection */}
            <div
              className="absolute inset-[6px] rounded-[32px] opacity-25"
              style={{
                background: 'linear-gradient(160deg, rgba(255,255,255,0.35), transparent 35%)',
                mixBlendMode: 'screen',
                transform: 'translateZ(20px) rotateY(-10deg) translateX(-6px)',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
