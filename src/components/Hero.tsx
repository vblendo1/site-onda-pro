import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentHook, setCurrentHook] = useState(0);

  const hooks = [
    "Frete grátis pra todo o Brasil.",
    "Produtos com até 200% de margem de lucro.",
    "Design que vende sozinho — e faz tua vitrine trabalhar por você.",
    "Importadora parceira de +300 lojas em todo o Brasil."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHook((prev) => (prev + 1) % hooks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('cadastro');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  return (
    <section className="relative text-white pt-20 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 z-10"></div>
        <video
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 scale-105"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://video.zig.ht/api/videos/file/1761071939321-564642586.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-7xl mx-auto relative z-20 w-full">
        <div className="max-w-4xl mx-auto text-center px-2">
          <div className="min-h-[120px] md:min-h-[160px] mb-10 md:mb-14 flex items-center justify-center">
            <p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold text-white transition-opacity duration-500 text-shadow-lg leading-tight px-4 tracking-tight">
              {hooks[currentHook]}
            </p>
          </div>

          <div className="flex flex-col gap-5 justify-center max-w-lg mx-auto">
            <button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-[#009bac] to-[#00b8cc] hover:from-[#008299] hover:to-[#009bac] text-white font-bold px-8 py-4 md:px-10 md:py-5 rounded-full text-base md:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#009bac]/50 w-full"
            >
              Quero meu Catálogo Exclusivo
            </button>

            <button
              onClick={handleWhatsApp}
              className="border-2 border-white/90 bg-white/15 backdrop-blur-lg text-white hover:bg-white hover:text-[#8c4091] font-bold px-8 py-4 md:px-10 md:py-5 rounded-full text-base md:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl w-full"
            >
              Falar com o Comercial Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
