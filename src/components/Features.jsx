import { Clock, Shield, Lock } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Gain de temps",
      description: "Analysez jusqu'à 100 pages de contrats complexes en seulement 2 minutes. Récupérez vos heures précieuses pour vous concentrer sur l'essentiel.",
      gradient: "from-gold/20 to-gold/5"
    },
    {
      icon: Shield,
      title: "Souveraineté",
      description: "Notre solution utilise exclusivement des modèles d'IA français comme Mistral AI. Vos données restent en France, garantissant une souveraineté totale.",
      gradient: "from-turquoise/20 to-turquoise/5"
    },
    {
      icon: Lock,
      title: "Confidentialité",
      description: "Toutes vos données sont chiffrées de bout en bout. Aucune donnée n'est utilisée pour l'entraînement de modèles. Votre confidentialité est notre priorité absolue.",
      gradient: "from-gold/20 to-turquoise/5"
    }
  ]

  return (
    <section id="produit" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-blue">
            Pourquoi choisir <span className="text-gold">Lexpacte.ai</span> ?
          </h2>
          <p className="text-xl text-navy-blue opacity-90">
            Une solution pensée pour les cabinets d'avocats d'affaires les plus exigeants
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white border border-gold/20 rounded-lg p-8 hover:border-gold/40 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/10"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}></div>
                
                {/* Content */}
                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 bg-gold/20 rounded-lg flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-navy-blue group-hover:text-gold transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-navy-blue leading-relaxed opacity-90">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
