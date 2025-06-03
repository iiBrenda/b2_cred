module.exports = {
  theme: {
    extend: {
      colors: {
        // Paleta B2Cred (dourado/preto/branco)
        gold: {
          50: '#FFF9E5',
          100: '#F5E6C0',
          200: '#EED89E',
          300: '#D4AF37', // Dourado principal (logo)
          400: '#B8931E',
          500: '#A67C00', // Dourado escuro
        },
        black: '#000000',
        white: '#FFFFFF',
        ice: '#F5F5F5',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(90deg, #D4AF37 0%, #A67C00 100%)',
      },
      boxShadow: {
        'gold-md': '0 4px 6px -1px rgba(212, 175, 55, 0.3)',
      }
    }
  }
}