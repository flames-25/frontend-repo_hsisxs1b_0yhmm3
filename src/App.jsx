import Navbar from './components/Navbar';
import ProductHero from './components/ProductHero';
import Specs from './components/Specs';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white selection:bg-orange-500/30 selection:text-white">
      {/* Cosmic gradient aura */}
      <div className="pointer-events-none fixed inset-0 opacity-70" style={{
        background:
          'radial-gradient(1000px_500px_at_50%_-10%,rgba(255,115,0,0.08),transparent), radial-gradient(800px_400px_at_20%_20%,rgba(255,140,0,0.06),transparent), radial-gradient(900px_500px_at_80%_10%,rgba(0,115,255,0.05),transparent)'
      }} />

      <Navbar />
      <ProductHero />
      <Specs />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
