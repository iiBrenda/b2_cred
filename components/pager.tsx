import Header from '@/components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gold-300">EMPRESÁRIO</span>, PRECISA DE <br/>
            <span className="text-gold-300">CAPITAL DE GIRO</span>?
          </h1>
          <p className="text-xl mb-8">A B2Cred ajuda seu CNPJ a crescer!</p>
          <button className="btn-gold">
            SIMULE AGORA
          </button>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-ice">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            NOSSAS <span className="text-gold-500">SOLUÇÕES</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Antecipação de Recebíveis",
                desc: "Tenha capital imediato para seu negócio"
              },
              {
                title: "Empréstimo Empresarial",
                desc: "Até R$100.000 em 12x"
              },
              {
                title: "Capital de Giro",
                desc: "Carência de 30 dias"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg border border-gold-200">
                <h3 className="text-xl font-bold text-gold-500 mb-4">{item.title}</h3>
                <p className="text-black">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}