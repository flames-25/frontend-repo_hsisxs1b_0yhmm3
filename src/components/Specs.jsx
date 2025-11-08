export default function Specs() {
  const specGroups = [
    {
      title: 'Kamera',
      items: [
        'Triple Camera 50MP (GN2) + 48MP Periscope (5x optik, 120x AI Zoom) + 48MP Ultra-wide',
        'Video 8K, HDR10+, Night Mode, Pro Mode',
        'Selfie 20MP, PDAF',
      ],
    },
    {
      title: 'Layar',
      items: [
        'AMOLED 6.81" WQHD+ (3200x1440), 120Hz, Dolby Vision, 1700 nits peak',
        'Kaca depan Gorilla Glass Victus; always-on display',
      ],
    },
    {
      title: 'Performa',
      items: [
        'Snapdragon 888 5G, GPU Adreno 660',
        'RAM 8/12GB LPDDR5, Storage 256/512GB UFS 3.1',
        'MIUI berbasis Android 13',
      ],
    },
    {
      title: 'Baterai & Pengisian',
      items: [
        '5000 mAh, 67W wired, 67W wireless, 10W reverse',
      ],
    },
    {
      title: 'Konektivitas',
      items: [
        '5G SA/NSA, Wi-Fi 6E, Bluetooth 5.2, NFC, IR Blaster',
      ],
    },
    {
      title: 'Desain Edisi Khusus',
      items: [
        'Backdoor matte Cosmic Orange (Mate finish)',
        'Frame glossy Cosmic Orange muda',
        'Liquid glass aesthetic, tahan sidik jari lebih baik',
      ],
    },
  ];

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold text-white">Spesifikasi Lengkap</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {specGroups.map((group) => (
          <div key={group.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
              background:
                'radial-gradient(160px_160px_at_15%_0%,rgba(255,140,0,0.15),transparent_60%)',
            }} />
            <h3 className="text-xl font-semibold text-orange-300">{group.title}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-white/80">
              {group.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
