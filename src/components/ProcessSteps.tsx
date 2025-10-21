import { ClipboardList, Mail, ShoppingCart, Gift } from 'lucide-react';

export default function ProcessSteps() {
  const steps = [
    {
      number: '1',
      icon: ClipboardList,
      title: 'Preencha o formulário',
      description: 'Cadastre sua empresa em menos de 2 minutos'
    },
    {
      number: '2',
      icon: Mail,
      title: 'Receba o catálogo',
      description: 'Condições exclusivas direto no seu e-mail'
    },
    {
      number: '3',
      icon: ShoppingCart,
      title: 'Faça seu pedido',
      description: 'Direto com a importadora, sem intermediários'
    },
    {
      number: '4',
      icon: Gift,
      title: 'Receba com benefícios',
      description: 'Frete grátis e 60 dias para pagar'
    }
  ];

  return (
    <section id="como-funciona" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#6B3FA0] mb-4 font-mono leading-tight px-4">
            Da importadora direto pra sua loja — simples assim
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative group">
              <div className="mb-6 relative inline-block">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto shadow-xl transition-all-300 group-hover:scale-110">
                  <step.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-[#6B3FA0] rounded-full flex items-center justify-center text-white font-bold shadow-lg font-mono text-sm md:text-base">
                  {step.number}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#6B3FA0] mb-3 font-mono px-4">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed px-4">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
