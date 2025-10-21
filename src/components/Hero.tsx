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
    }, 4000);
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
    <section className="bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-500 lg:grid lg:h-screen lg:place-content-center">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-white sm:text-5xl leading-tight">
            Venda hoje. Pague depois. <br />
            <span className="text-white/90">Até 60 dias pra lucrar antes de investir.</span>
          </h1>

          <p className="mt-6 text-lg text-white/90 transition-opacity duration-500">
            {hooks[currentHook]}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
            <button
              onClick={scrollToForm}
              className="inline-block rounded-full bg-white px-6 py-3 text-base font-semibold text-purple-700 shadow-md transition hover:bg-gray-100"
            >
              Quero meu Catálogo Exclusivo
            </button>

            <button
              onClick={handleWhatsApp}
              className="inline-block rounded-full border border-white/80 px-6 py-3 text-base font-medium text-white shadow-sm transition hover:bg-white hover:text-purple-700"
            >
              Falar com o Comercial Agora
            </button>
          </div>

          <p className="mt-4 text-sm text-white/80">
            Sem compromisso. Atendimento exclusivo pra CNPJ varejista.
          </p>
        </div>

        <div className="relative mt-10 md:mt-0 flex justify-center md:justify-end">
          <img
            src="/Prisma 12 cores (1) copy.png"
            alt="Criança segurando kit de marcadores"
            className="w-64 md:w-80 lg:w-96 drop-shadow-2xl rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
