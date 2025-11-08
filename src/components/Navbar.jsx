import { useState } from 'react';
import { Home, Rocket, Star, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'launch', label: 'Launch', Icon: Rocket },
  { id: 'stars', label: 'Stars', Icon: Star },
  { id: 'settings', label: 'Settings', Icon: Settings },
];

export default function Navbar() {
  const [active, setActive] = useState('home');

  return (
    <div className="sticky top-0 z-20">
      <div className="mx-auto mt-6 w-fit rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl shadow-black/40">
        <nav className="flex items-center gap-2 px-3 py-2">
          {navItems.map(({ id, label, Icon }) => {
            const isActive = active === id;
            return (
              <motion.button
                key={id}
                onClick={() => setActive(id)}
                whileTap={{ scale: 0.92 }}
                className={`relative group flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-orange-300' : 'text-white/70 hover:text-orange-200'
                }`}
                aria-label={label}
              >
                {/* Neon glow background when active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        background:
                          'radial-gradient(120px 120px at 50% 50%, rgba(255,140,0,0.18), transparent 60%)',
                      }}
                    />
                  )}
                </AnimatePresence>

                <span className="relative z-10 flex items-center gap-2">
                  <Icon
                    className={`h-5 w-5 transition-all ${
                      isActive
                        ? 'text-orange-400 drop-shadow-[0_0_14px_rgba(255,140,0,0.8)]'
                        : 'text-white/80 group-hover:text-orange-300'
                    }`}
                  />
                  <span>{label}</span>
                </span>

                {/* Ring effect on click */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      key={`${id}-ring`}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.15 }}
                      transition={{ type: 'spring', stiffness: 120, damping: 16 }}
                      className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-orange-500/40"
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
