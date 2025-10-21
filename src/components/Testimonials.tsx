import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Antes eu comprava tudo no marketplace. Com a Onda Pro, o giro triplicou e pago só depois de vender.",
      author: "Papelaria Criativa",
      location: "MG",
      rating: 5
    },
    {
      text: "Comecei com 1 kit, hoje já trabalho com 4 linhas da marca.",
      author: "Arte & Papel",
      location: "SP",
      rating: 5
    },
    {
      text: "Frete grátis e 60 dias no boleto me salvaram no início da temporada.",
      author: "Papelaria Esquina",
      location: "RS",
      rating: 5
    }
  ];

  const scrollToForm = () => {
    const formElement = document.getElementById('cadastro');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gradient-to-br from-[#8c4091] to-[#9e61a4] py-16 md:py-24 px-4 md:px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Histórias reais de quem viu o estoque girar de verdade.
          </h2>
        </div>

        <div className="relative">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl lg:text-3xl text-center mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div className="text-center">
              <p className="font-bold text-lg md:text-xl">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-white/80">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 transition-all duration-300"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 transition-all duration-300"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-8' : 'bg-white/40'
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={scrollToForm}
            className="bg-[#009bac] hover:bg-[#008299] text-white font-bold px-8 py-4 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Quero ter o mesmo resultado
          </button>
        </div>
      </div>
    </section>
  );
}
