import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop',
    alt: 'Landscape dynamic range',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2000&auto=format&fit=crop',
    alt: 'Macro detail and texture',
  },
  {
    src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2000&auto=format&fit=crop',
    alt: 'Low light night mode',
  },
  {
    src: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=2000&auto=format&fit=crop',
    alt: 'Portrait with creamy bokeh',
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((p) => (p - 1 + images.length) % images.length);
  const next = () => setIndex((p) => (p + 1) % images.length);

  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-20">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Hasil Foto Mi 11 Ultra</h2>
        <p className="text-white/60">Diambil dengan kamera utama Mi 11 Ultra</p>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="h-[420px] w-full object-cover"
          loading="lazy"
        />
        {/* controls */}
        <button
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-2 text-white hover:bg-black/70"
          onClick={prev}
          aria-label="Sebelumnya"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-2 text-white hover:bg-black/70"
          onClick={next}
          aria-label="Berikutnya"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-4 rounded-full bg-black/40 px-3 py-1 text-xs text-white/80">
          {images[index].alt}
        </div>
      </div>

      {/* thumbnails */}
      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setIndex(i)}
            className={`overflow-hidden rounded-xl border ${
              i === index ? 'border-orange-400' : 'border-white/10'
            }`}
          >
            <img src={img.src} alt={img.alt} className="h-24 w-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>
    </section>
  );
}
