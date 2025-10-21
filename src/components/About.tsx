import { Target, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Mais que produtos. Uma importadora feita pra lojistas que pensam em crescimento.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              A Onda Pro nasceu com um propósito simples: ajudar papelarias e comércios a vender mais com produtos que chamam atenção, giram rápido e mantêm margem saudável. Do primeiro contato à entrega, nossa missão é facilitar o dia a dia de quem revende.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="border-2 border-[#8c4091] text-[#8c4091] hover:bg-[#8c4091] hover:text-white font-bold px-8 py-4 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105"
            >
              Conhecer mais sobre a Onda Pro
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-br from-[#8c4091] to-[#9e61a4] rounded-xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nossa Missão</h3>
              <p className="text-gray-600">
                Conectar importação direta com lojistas brasileiros, eliminando intermediários e oferecendo condições que protegem o caixa.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-br from-[#009bac] to-teal-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nosso Compromisso</h3>
              <p className="text-gray-600">
                Atendimento humano, prazo flexível e frete grátis. Trabalhamos para que você venda antes de investir.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nosso Diferencial</h3>
              <p className="text-gray-600">
                Mais de 300 lojas ativas em todo o Brasil confiam em produtos com design que vendem sozinhos e margens que valem a pena.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
