import { useState } from 'react';
import { X, Palette, Heart, Briefcase, Download } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ProductCatalog() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    nomeLoja: '',
    cidadeEstado: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const products = [
    {
      icon: Palette,
      title: "Linha PRISMA",
      description: "Marcadores vibrantes com cores intensas e design moderno que chamam atenção na vitrine.",
      margin: "Margem: até 200%",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Linha Cute Station",
      description: "Itens de balcão com alto giro. Design encantador que gera impulso de compra imediato.",
      margin: "Margem: até 180%",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Briefcase,
      title: "Linha Office Pro",
      description: "Essenciais de escritório com qualidade premium e preço competitivo para seu cliente.",
      margin: "Margem: até 150%",
      color: "from-[#009bac] to-teal-600"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            nome: formData.nome,
            whatsapp: formData.whatsapp,
            nome_loja: formData.nomeLoja,
            cidade_estado: formData.cidadeEstado,
            origem: 'Catálogo de Produtos'
          }
        ]);

      if (error) throw error;

      setSubmitMessage('Catálogo será enviado no seu WhatsApp em até 2 minutos!');
      setFormData({ nome: '', whatsapp: '', nomeLoja: '', cidadeEstado: '' });

      setTimeout(() => {
        setShowModal(false);
        setSubmitMessage('');
      }, 3000);
    } catch (error) {
      setSubmitMessage('Erro ao enviar. Tente novamente.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="produtos" className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-28 px-4 md:px-6 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 md:mb-6 px-2 leading-tight tracking-tight">
              Conheça os produtos que transformam prateleiras em lucro.
            </h2>
            <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto px-2 leading-relaxed">
              Escolha entre linhas que unem qualidade, apelo visual e rentabilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-7 md:p-9 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent hover:-translate-y-3"
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center mb-5 md:mb-7 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-5 leading-relaxed">
                    {product.description}
                  </p>
                  <p className="text-[#009bac] font-extrabold text-lg md:text-xl">
                    {product.margin}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center px-2">
            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-[#8c4091] to-[#9e61a4] hover:from-[#7a3680] hover:to-[#8c4091] hover:shadow-2xl text-white font-bold px-8 py-4 md:px-10 md:py-5 rounded-full text-base md:text-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 md:gap-4 shadow-xl"
            >
              <Download className="w-5 h-5 md:w-6 md:h-6" />
              Baixar Catálogo Completo em PDF
            </button>
            <p className="text-sm md:text-base text-gray-600 mt-4 md:mt-5 italic font-medium">
              O catálogo é enviado direto pro seu WhatsApp em até 2 minutos.
            </p>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 relative shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8c4091] to-[#9e61a4] rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Receber Catálogo Completo
              </h3>
              <p className="text-gray-600">
                Preencha os dados e receba no WhatsApp
              </p>
            </div>

            {submitMessage && (
              <div className={`mb-4 p-4 rounded-lg text-center ${
                submitMessage.includes('Erro')
                  ? 'bg-red-100 text-red-700'
                  : 'bg-green-100 text-green-700'
              }`}>
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nome completo"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8c4091] focus:border-transparent outline-none transition-all"
              />
              <input
                type="tel"
                placeholder="WhatsApp (com DDD)"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8c4091] focus:border-transparent outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Nome da Loja"
                value={formData.nomeLoja}
                onChange={(e) => setFormData({ ...formData, nomeLoja: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8c4091] focus:border-transparent outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Cidade/Estado"
                value={formData.cidadeEstado}
                onChange={(e) => setFormData({ ...formData, cidadeEstado: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8c4091] focus:border-transparent outline-none transition-all"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#009bac] hover:bg-[#008299] text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Receber Catálogo no WhatsApp'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
