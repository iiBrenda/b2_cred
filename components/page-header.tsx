import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-gold-300 font-bold text-2xl">
          B2CRED
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/servicos" className="hover:text-gold-300 transition">
            Serviços
          </Link>
          <Link href="/simulador" className="hover:text-gold-300 transition">
            Simulador
          </Link>
          <Link href="/contato" className="hover:text-gold-300 transition">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}