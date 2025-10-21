import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToForm = () => {
    const formElement = document.getElementById('cadastro');
    formElement?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/98 backdrop-blur-xl shadow-md fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 items-center px-3 md:px-6 py-2 md:py-0 md:grid-cols-[auto_1fr] lg:flex lg:justify-between">
          <a href="#" className="flex items-center transform transition-transform hover:scale-105">
            <img
              src="/LOGO_ONDAPRO_ROXO (3).png"
              alt="Onda Pro"
              className="h-8 md:h-14 w-auto object-contain"
            />
          </a>

          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center justify-self-end lg:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-gray-900"
              animate={mobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={topLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-gray-900"
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={middleLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-gray-900"
              animate={mobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={bottomLineVariants}
            />
          </button>

          <motion.div
            variants={{
              open: {
                height: "auto",
                opacity: 1,
              },
              close: {
                height: 0,
                opacity: 0,
              },
            }}
            initial="close"
            animate={mobileMenuOpen ? "open" : "close"}
            transition={{ duration: 0.3 }}
            className="col-span-2 overflow-hidden lg:flex lg:items-center lg:justify-end lg:opacity-100 lg:h-auto"
          >
            <nav className="flex flex-col lg:flex-row lg:items-center lg:gap-2">
              <a
                href="#produtos"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('produtos');
                }}
                className="block py-3 text-left text-base text-gray-700 hover:text-[#009bac] font-semibold transition-all duration-300 lg:px-5 lg:py-6 relative group"
              >
                Produtos
                <span className="absolute bottom-4 left-5 right-5 h-0.5 bg-gradient-to-r from-[#009bac] to-[#8c4091] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 hidden lg:block"></span>
              </a>
              <a
                href="#como-funciona"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('como-funciona');
                }}
                className="block py-3 text-left text-base text-gray-700 hover:text-[#009bac] font-semibold transition-all duration-300 lg:px-5 lg:py-6 relative group"
              >
                Como Funciona
                <span className="absolute bottom-4 left-5 right-5 h-0.5 bg-gradient-to-r from-[#009bac] to-[#8c4091] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 hidden lg:block"></span>
              </a>
              <a
                href="#diferenciais"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('diferenciais');
                }}
                className="block py-3 text-left text-base text-gray-700 hover:text-[#009bac] font-semibold transition-all duration-300 lg:px-5 lg:py-6 relative group"
              >
                Diferenciais
                <span className="absolute bottom-4 left-5 right-5 h-0.5 bg-gradient-to-r from-[#009bac] to-[#8c4091] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 hidden lg:block"></span>
              </a>
            </nav>

            <div className="mt-4 mb-6 flex flex-col gap-3 lg:ml-6 lg:mt-0 lg:mb-0 lg:flex-row lg:items-center">
              <button
                onClick={scrollToForm}
                className="bg-gradient-to-r from-[#8c4091] to-[#9d5ba3] hover:from-[#7a3680] hover:to-[#8c4091] text-white px-7 py-3.5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm lg:text-base w-full lg:w-auto"
              >
                Receber Catálogo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};
