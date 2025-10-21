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
    <section className="relative text-white pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 overflow-hidden min-h-[90vh] md:min-h-screen flex items-center">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video
          className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://video.zig.ht/api/videos/file/1761071939321-564642586.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-7xl mx-auto relative z-20 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-20 md:h-24 mb-6 md:mb-8 flex items-center justify-center">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white transition-opacity duration-500 drop-shadow-2xl">
              {hooks[currentHook]}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToForm}
              className="bg-[#009bac] hover:bg-[#008299] text-white font-bold px-8 py-4 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Quero meu Catálogo Exclusivo
            </button>

            <button
              onClick={handleWhatsApp}
              className="border-2 border-white bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-[#8c4091] font-bold px-8 py-4 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Falar com o Comercial Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
