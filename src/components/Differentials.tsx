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
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossos diferenciais fazem o lucro trabalhar pra você.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#8c4091] to-[#9e61a4] rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Sem atravessador, sem enrolação. Só produto com giro rápido, boa apresentação e margem de verdade.
          </p>
          <button
            onClick={scrollToForm}
            className="bg-[#009bac] hover:bg-[#008299] text-white font-bold px-8 py-4 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Quero ver os produtos campeões de venda
          </button>
        </div>
      </div>
    </section>
  );
}
