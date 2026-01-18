import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-blue leading-tight text-balance">
              L'Intelligence Artificielle au service du <span className="text-gold">M&A</span>
            </h1>
            <p className="text-xl text-navy-blue leading-relaxed max-w-2xl opacity-90">
              Sécurisez vos due diligence. Analysez vos contrats et générez vos rapports de synthèse en quelques secondes. 
              <span className="text-gold font-medium"> Conçu pour l'excellence juridique.</span>
            </p>
          </div>

          <a 
            href="#email-capture"
            className="group bg-gold hover:bg-gold/90 hover:shadow-gold/50 text-navy px-8 py-4 rounded-md font-semibold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center space-x-2 inline-block w-fit"
          >
            <span>Démarrer un essai gratuit</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Demo Image */}
        <div className="relative">
          <div className="bg-gradient-to-br from-gold/10 to-turquoise/10 rounded-lg p-2 border border-gold/20 backdrop-blur-sm shadow-xl">
            <img 
              src="/unnamed.jpg" 
              alt="Interface de démonstration Lexpacte.ai - Analyse en temps réel des contrats" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-turquoise/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gold/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
