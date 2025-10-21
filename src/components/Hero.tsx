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
    <section className="relative bg-gradient-to-br from-[#8c4091] to-[#9e61a4] text-white pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 overflow-hidden min-h-[90vh] md:min-h-screen flex items-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
              Venda hoje. Pague depois. Até 60 dias pra lucrar antes de investir.
            </h1>

            <div className="h-16 md:h-20 mb-6 md:mb-8 flex items-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#009bac] transition-opacity duration-500">
                {hooks[currentHook]}
              </p>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed">
              Produtos com giro alto, margens absurdas e condições que protegem o teu caixa. Tudo direto da importadora que entende o que o lojista precisa pra vender mais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                onClick={scrollToForm}
                className="bg-[#009bac] hover:bg-[#008299] text-white font-bold px-8 py-4 rounded-full text-base md:text-lg transition-all-300 transform hover:scale-105 shadow-2xl"
              >
                Quero meu Catálogo Exclusivo
              </button>

              <button
                onClick={handleWhatsApp}
                className="border-2 border-white text-white hover:bg-white hover:text-[#8c4091] font-bold px-8 py-4 rounded-full text-base md:text-lg transition-all-300 transform hover:scale-105"
              >
                Falar com o Comercial Agora
              </button>
            </div>

            <p className="text-sm md:text-base text-white/70 italic">
              Sem compromisso. Atendimento exclusivo pra CNPJ varejista.
            </p>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#e0f1f5] blur-3xl opacity-30 rounded-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-white/20 shadow-2xl">
                <div className="aspect-[3/4] w-full max-w-md bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-[#009bac] rounded-full mx-auto mb-6 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Catálogo Exclusivo</h3>
                    <p className="text-white/80">Milhares de produtos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
