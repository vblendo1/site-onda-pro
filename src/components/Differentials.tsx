import { Truck, Calendar, TrendingUp, Headphones, Sparkles } from 'lucide-react';

export default function Differentials() {
  const scrollToForm = () => {
    const formElement = document.getElementById('cadastro');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: Truck,
      title: "Frete grátis para todo o Brasil",
      description: "Entrega sem custo adicional em todo território nacional"
    },
    {
      icon: Calendar,
      title: "Até 60 dias para pagar no boleto",
      description: "Venda primeiro, pague depois. Seu caixa protegido"
    },
    {
      icon: TrendingUp,
      title: "Margens de 110% a 200%",
      description: "Lucro real e margem que faz diferença no resultado"
    },
    {
      icon: Headphones,
      title: "Atendimento exclusivo para lojistas",
      description: "Suporte dedicado que entende o seu negócio"
    },
    {
      icon: Sparkles,
      title: "Design que vende sozinho",
      description: "Produtos com visual que atrai e gera desejo de compra"
    }
  ];

  return (
    <section id="diferenciais" className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 md:py-28 px-4 md:px-6 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 px-2 leading-tight tracking-tight">
            Nossos diferenciais fazem o lucro trabalhar pra você.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-7 md:p-9 shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#009bac]/20 hover:-translate-y-2"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#009bac] to-[#00d4e8] rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center px-2">
          <p className="text-lg md:text-2xl text-gray-700 mb-8 md:mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
            Sem atravessador, sem enrolação. Só produto com giro rápido, boa apresentação e margem de verdade.
          </p>
          <button
            onClick={scrollToForm}
            className="bg-gradient-to-r from-[#009bac] to-[#00b8cc] hover:from-[#008299] hover:to-[#009bac] text-white font-bold px-8 py-4 md:px-10 md:py-5 rounded-full text-base md:text-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Quero ver os produtos campeões de venda
          </button>
        </div>
      </div>
    </section>
  );
}
