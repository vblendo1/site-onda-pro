export default function Header() {
  const scrollToForm = () => {
    const formElement = document.getElementById('cadastro');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50 transition-all-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <img
            src="/LOGO_ONDAPRO_ROXO (3).png"
            alt="Onda Pro"
            className="h-10 md:h-14 w-auto object-contain"
          />
        </div>

        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          <a href="#produtos" className="text-sm lg:text-base text-gray-700 hover:text-[#6B3FA0] font-medium transition-all-300">
            Produtos
          </a>
          <a href="#como-funciona" className="text-sm lg:text-base text-gray-700 hover:text-[#6B3FA0] font-medium transition-all-300">
            Como Funciona
          </a>
          <button
            onClick={scrollToForm}
            className="bg-gradient-to-r from-[#6B3FA0] to-[#8B5FC8] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold hover:shadow-lg transition-all-300 transform hover:scale-105 text-sm lg:text-base"
          >
            Receber Catálogo
          </button>
        </nav>

        <button
          onClick={scrollToForm}
          className="md:hidden bg-gradient-to-r from-[#6B3FA0] to-[#8B5FC8] text-white px-4 py-2 rounded-full font-bold text-xs transition-all-300 transform hover:scale-105"
        >
          Catálogo
        </button>
      </div>
    </header>
  );
}
