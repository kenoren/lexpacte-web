import { Upload, Brain, FileText, ArrowRight } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      number: '01',
      title: 'Upload',
      description: 'Importez vos contrats et documents juridiques en toute simplicité. Support des formats PDF, Word et images avec OCR intégré. Vos données sont chiffrées dès l\'upload.',
      gradient: 'from-gold/20 to-gold/5'
    },
    {
      icon: Brain,
      number: '02',
      title: 'Analyse',
      description: 'Notre IA, basée sur des modèles Mistral AI fine-tunés pour le droit des affaires, analyse chaque clause, détecte les risques et identifie les points critiques en quelques secondes.',
      gradient: 'from-turquoise/20 to-turquoise/5'
    },
    {
      icon: FileText,
      number: '03',
      title: 'Rapport',
      description: 'Générez automatiquement un rapport de synthèse structuré avec les points clés, les risques identifiés et les recommandations. Export au format de votre choix.',
      gradient: 'from-gold/20 to-turquoise/5'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-white to-gray-50/50 dark:from-navy/20 dark:to-navy/40 transition-colors duration-300">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-blue dark:text-white transition-colors duration-300">
            Comment ça <span className="text-gold">fonctionne</span>
          </h2>
          <p className="text-xl text-navy-blue dark:text-gray-300 opacity-90 transition-colors duration-300">
            Un processus simple et sécurisé en trois étapes
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 text-6xl font-bold text-gold/10 -z-10">
                  {step.number}
                </div>

                <div className="group relative bg-white dark:bg-navy/30 border border-gold/20 dark:border-gold/30 rounded-lg p-8 h-full hover:border-gold/40 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/10">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    <div className="w-14 h-14 bg-gold/20 rounded-lg flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-navy-blue dark:text-white group-hover:text-gold transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-navy-blue dark:text-gray-300 leading-relaxed opacity-90 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow between steps (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-gold/40" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
