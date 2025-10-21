import { useState } from 'react';
import { supabase, Lead } from '../lib/supabase';
import { CheckCircle2, Loader2 } from 'lucide-react';

export default function LeadForm() {
  const [formData, setFormData] = useState<Partial<Lead>>({
    nome_completo: '',
    nome_empresa: '',
    cnpj: '',
    email_comercial: '',
    whatsapp: '',
    cidade: '',
    estado: '',
    tipo_negocio: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('leads')
        .insert([formData as Lead]);

      if (submitError) throw submitError;

      setSuccess(true);
      setFormData({
        nome_completo: '',
        nome_empresa: '',
        cnpj: '',
        email_comercial: '',
        whatsapp: '',
        cidade: '',
        estado: '',
        tipo_negocio: ''
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Erro ao enviar formulário. Tente novamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section id="cadastro" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto text-center border border-gray-200">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-green-600" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#6B3FA0] mb-4 font-mono">
            Cadastro realizado com sucesso!
          </h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Você receberá nosso catálogo completo no e-mail informado em breve.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="cadastro" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#6B3FA0] mb-4 md:mb-6 font-mono leading-tight px-4">
            Quer revender Onda Pro?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
            Cadastre-se e receba o catálogo completo com condições exclusivas para papelarias e comércios.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 lg:p-12 border border-gray-200">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm md:text-base">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-xs md:text-sm font-semibold text-[#6B3FA0] mb-2">
                Nome completo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nome_completo"
                value={formData.nome_completo}
                onChange={handleChange}
                placeholder="Seu nome"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent text-sm md:text-base"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-semibold text-[#6B3FA0] mb-2">
                Nome da empresa <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nome_empresa"
                value={formData.nome_empresa}
                onChange={handleChange}
                placeholder="Razão social"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent text-sm md:text-base"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-semibold text-[#6B3FA0] mb-2">
                CNPJ <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="cnpj"
                value={formData.cnpj}
                onChange={handleChange}
                placeholder="00.000.000/0000-00"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent text-sm md:text-base"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-semibold text-[#6B3FA0] mb-2">
                E-mail comercial <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email_comercial"
                value={formData.email_comercial}
                onChange={handleChange}
                placeholder="contato@empresa.com"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent text-sm md:text-base"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-semibold text-[#6B3FA0] mb-2">
                WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent text-sm md:text-base"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-semibold text-[#6B3FA0] mb-2">
                Cidade <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                placeholder="Sua cidade"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent text-sm md:text-base"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-semibold text-[#6B3FA0] mb-2">
                Estado <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="estado"
                value={formData.estado}
                onChange={handleChange}
                placeholder="SP"
                maxLength={2}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent uppercase"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-semibold text-[#6B3FA0] mb-2">
                Tipo de negócio <span className="text-red-500">*</span>
              </label>
              <select
                name="tipo_negocio"
                value={formData.tipo_negocio}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent text-sm md:text-base"
              >
                <option value="">Selecione</option>
                <option value="Papelaria">Papelaria</option>
                <option value="Comércio">Comércio</option>
                <option value="Distribuidor">Distribuidor</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 md:mt-8 bg-gradient-to-r from-[#6B3FA0] to-[#8B5FC8] hover:from-[#5A3087] hover:to-[#6B3FA0] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-base md:text-lg transition-all-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Enviando...
              </>
            ) : (
              'Quero o Catálogo Agora'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
