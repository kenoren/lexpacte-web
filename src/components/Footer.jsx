import { Linkedin } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Footer = () => {
  const { theme } = useTheme()

  return (
    <footer className="bg-[#0C2A4D] dark:bg-[#0C2A4D] text-white border-t border-gold/10 dark:border-gold/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo and Slogan */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={theme === 'dark' ? "/logo-sombre.webp" : "/logo-sombre.webp"} 
                alt="Lexpacte.ai Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Confidentialité et Excellence Juridique
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-end md:space-x-8 space-y-4 md:space-y-0 md:col-span-2">
            <div className="flex flex-col space-y-3">
              <a
                href="#produit"
                className="text-gray-300 hover:text-gold transition-colors duration-200 text-sm"
              >
                Produit
              </a>
              <a
                href="#securite"
                className="text-gray-300 hover:text-gold transition-colors duration-200 text-sm"
              >
                Sécurité
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/mathis-fourey-7348b0198/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-300 hover:text-gold transition-colors duration-200 text-sm"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            © 2026 Lexpacte - Développé avec soin en France.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
