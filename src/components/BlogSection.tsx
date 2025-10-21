import { BookOpen, TrendingUp, Eye } from 'lucide-react';

export default function BlogSection() {
  const articles = [
    {
      icon: TrendingUp,
      title: "Como aumentar o ticket médio na volta às aulas",
      description: "Estratégias práticas para vender mais durante o período mais importante do ano.",
      color: "from-[#8c4091] to-[#9e61a4]"
    },
    {
      icon: BookOpen,
      title: "Tendências de papelaria para 2026",
      description: "Descubra quais produtos vão bombar nas prateleiras no próximo ano.",
      color: "from-[#009bac] to-teal-600"
    },
    {
      icon: Eye,
      title: "O segredo das vitrines que vendem sozinhas",
      description: "Aprenda a organizar sua loja para aumentar as vendas sem esforço extra.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Dicas que ajudam sua loja a vender mais (sem gastar mais).
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {articles.map((article, index) => {
            const Icon = article.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className={`h-48 bg-gradient-to-br ${article.color} flex items-center justify-center`}>
                  <Icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={() => window.open('#', '_blank')}
            className="border-2 border-[#8c4091] text-[#8c4091] hover:bg-[#8c4091] hover:text-white font-bold px-8 py-4 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105"
          >
            Acessar o Blog da Onda Pro
          </button>
        </div>
      </div>
    </section>
  );
}
