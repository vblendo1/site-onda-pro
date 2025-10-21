import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#8c4091] to-[#9e61a4] text-white py-12 md:py-16 px-4 md:px-6">
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
            <p className="text-sm md:text-base text-white/80 mb-6 max-w-md leading-relaxed">
              Importadora de materiais escolares e office. Produtos com giro alto e margens que fazem diferença.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">São Paulo, SP - Brasil</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contato@ondapro.com.br</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="#produtos" className="text-sm md:text-base text-white/80 hover:text-white transition-all-300">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-sm md:text-base text-white/80 hover:text-white transition-all-300">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#cadastro" className="text-sm md:text-base text-white/80 hover:text-white transition-all-300">
                  Solicitar Catálogo
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base text-white/80 hover:text-white transition-all-300">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base text-white/80 hover:text-white transition-all-300">
                  Termos Comerciais
                </a>
              </li>
              <li>
                <a href="#" className="text-sm md:text-base text-white/80 hover:text-white transition-all-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-4">Redes Sociais</h3>
            <div className="flex gap-3 mb-6">
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
            <p className="text-xs text-white/70 italic">
              Atendimento exclusivo para CNPJ varejista
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 md:pt-8">
          <div className="text-center">
            <p className="text-xs md:text-sm text-white/80 mb-2">
              CNPJ: 80.574.965/0001-27
            </p>
            <p className="text-xs md:text-sm text-white/70">
              © Onda Pro. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
