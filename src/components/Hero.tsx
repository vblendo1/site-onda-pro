import { ShoppingBag, Package, TrendingUp } from 'lucide-react';

export default function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById('cadastro');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-[#6B3FA0] via-[#8B5FC8] to-[#6B3FA0] text-white pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 overflow-hidden min-h-[90vh] md:min-h-screen flex items-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-full mb-6 md:mb-8 border border-white/20">
            <Package className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm font-medium">Produtos que movem negócios</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight font-gotham px-4">
            Materiais escolares e office<br />
            <span className="text-cyan-300">direto da importadora</span>
            <span className="inline-block animate-blink ml-1">|</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            Condições exclusivas para papelarias e comércios. Sem intermediários, com qualidade garantida.
          </p>

          <button
            onClick={scrollToForm}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg transition-all-300 transform hover:scale-105 shadow-2xl"
          >
            Receber Catálogo Agora
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-4 md:px-0">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center border border-white/20 hover:bg-white/15 transition-all-300 transform hover:scale-105">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <ShoppingBag className="w-7 h-7 md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 font-mono">Preços Competitivos</h3>
            <p className="text-sm md:text-base text-white/80">Importação direta sem atravessadores</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center border border-white/20 hover:bg-white/15 transition-all-300 transform hover:scale-105">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Package className="w-7 h-7 md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 font-mono">Amplo Catálogo</h3>
            <p className="text-sm md:text-base text-white/80">Milhares de produtos para seu negócio</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center border border-white/20 hover:bg-white/15 transition-all-300 transform hover:scale-105">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <TrendingUp className="w-7 h-7 md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 font-mono">60 Dias para Pagar</h3>
            <p className="text-sm md:text-base text-white/80">Frete grátis em compras qualificadas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
