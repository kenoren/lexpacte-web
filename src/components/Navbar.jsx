import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.jpeg" 
              alt="Lexpacte.ai Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#produit" 
              className="text-navy-blue hover:text-gold transition-colors duration-200 font-medium"
            >
              Produit
            </a>
            <a 
              href="#securite" 
              className="text-navy-blue hover:text-gold transition-colors duration-200 font-medium"
            >
              Sécurité
            </a>
            <a 
              href="#email-capture"
              className="bg-gold hover:bg-gold/90 hover:shadow-gold/50 text-navy px-6 py-2.5 rounded-md font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 inline-block"
            >
              Accès Bêta
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-navy-blue hover:text-gold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <a 
              href="#produit" 
              className="block text-navy-blue hover:text-gold transition-colors duration-200 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Produit
            </a>
            <a 
              href="#securite" 
              className="block text-navy-blue hover:text-gold transition-colors duration-200 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sécurité
            </a>
            <a 
              href="#email-capture"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-gold hover:bg-gold/90 hover:shadow-gold/50 text-navy px-6 py-2.5 rounded-md font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 inline-block text-center"
            >
              Accès Bêta
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
