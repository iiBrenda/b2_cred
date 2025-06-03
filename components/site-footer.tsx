export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-gold-300 text-2xl font-bold mb-4">B2CRED</h3>
            <p className="text-ice">Soluções financeiras para seu negócio</p>
          </div>
          <div>
            <h4 className="text-gold-300 font-bold mb-4">CONTATO</h4>
            <p className="text-ice">61 98565-4567</p>
            <p className="text-ice">b2cred@outlook.com</p>
            <p className="text-ice">Ed. Alfa Mix Center - Águas Claras/DF</p>
          </div>
        </div>
        <div className="border-t border-gold-500 mt-8 pt-8 text-center text-gold-200">
          © {new Date().getFullYear()} B2Cred - Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}