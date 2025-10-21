import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#6B3FA0] via-[#8B5FC8] to-[#6B3FA0] text-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="sm:col-span-2">
            <div className="mb-4">
              <img
                src="/ONDA PRO WHITE.png"
                alt="Onda Pro"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm md:text-base text-white/80 mb-4 max-w-md leading-relaxed">
              Importadora de materiais escolares e office. CNPJ 80.574.965/0001-27
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-4 font-mono">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-sm md:text-base text-white/80 hover:text-white transition-all-300">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#catalogo" className="text-sm md:text-base text-white/80 hover:text-white transition-all-300">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#contato" className="text-sm md:text-base text-white/80 hover:text-white transition-all-300">
                  Contato
                </a>
              </li>
              <li>
                <a href="#privacidade" className="text-sm md:text-base text-white/80 hover:text-white transition-all-300">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-4 font-mono">Redes Sociais</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all-300 transform hover:scale-110 border border-white/20"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all-300 transform hover:scale-110 border border-white/20"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all-300 transform hover:scale-110 border border-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 md:pt-8 text-center text-white/70">
          <p className="text-xs md:text-sm">&copy; 2025 Onda Pro - Importadora de materiais escolares e office. CNPJ 80.574.965/0001-27</p>
        </div>
      </div>
    </footer>
  );
}
