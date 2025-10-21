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
    <section className="relative pt-20 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-[#8c4091] via-[#9d5ba3] to-[#009bac]">
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00b8cc] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left px-2 order-2 lg:order-1">
            <div className="mb-8 md:mb-12">
              <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white transition-opacity duration-500 leading-tight tracking-tight drop-shadow-2xl">
                {hooks[currentHook]}
              </p>
            </div>

            <div className="flex flex-col gap-5 max-w-lg">
              <button
                onClick={scrollToForm}
                className="bg-white hover:bg-gray-100 text-[#8c4091] font-bold px-8 py-4 md:px-10 md:py-5 rounded-full text-base md:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl w-full"
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

          <div className="relative order-1 lg:order-2 flex items-center justify-center">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
              <img
                src="/Prisma 12 cores (1) copy.png"
                alt="Criança com produto PRISMA"
                className="relative z-10 w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
