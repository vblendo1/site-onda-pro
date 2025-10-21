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
    <section id="diferenciais" className="bg-gradient-to-br from-gray-50 to-white py-12 md:py-24 px-3 md:px-6 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
            Nossos diferenciais fazem o lucro trabalhar pra você.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#8c4091] to-[#9e61a4] rounded-xl flex items-center justify-center mb-3 md:mb-4">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center px-2">
          <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto">
            Sem atravessador, sem enrolação. Só produto com giro rápido, boa apresentação e margem de verdade.
          </p>
          <button
            onClick={scrollToForm}
            className="bg-[#009bac] hover:bg-[#008299] text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Quero ver os produtos campeões de venda
          </button>
        </div>
      </div>
    </section>
  );
}
