import { Shield, Lock, Server, CheckCircle2 } from 'lucide-react'

const Security = () => {
  const features = [
    {
      icon: Lock,
      title: 'Chiffrement de bout en bout',
      description: 'Toutes vos données sont chiffrées avec AES-256, le standard de l\'industrie.',
      technical: 'AES-256'
    },
    {
      icon: Shield,
      title: 'Données jamais utilisées pour l\'entraînement',
      description: 'Vos documents et analyses restent strictement privés. Nous n\'utilisons jamais vos données pour entraîner nos modèles. Garantie contractuelle.',
      technical: 'Zero training data policy'
    },
    {
      icon: Server,
      title: 'Hébergement souverain en France',
      description: 'Toutes nos infrastructures sont hébergées en France, garantissant la souveraineté des données et la conformité avec le RGPD et les exigences des cabinets d\'avocats.',
      technical: 'RGPD Compliant'
    }
  ]

  return (
    <section id="securite" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-4">
            <Shield className="w-8 h-8 text-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-blue dark:text-white transition-colors duration-300">
            Sécurité de <span className="text-gold">classe entreprise</span>
          </h2>
          <p className="text-xl text-navy-blue dark:text-gray-300 opacity-90 transition-colors duration-300">
            Nous prenons la sécurité de vos données au sérieux, avec des standards bancaires
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-navy/30 border-2 border-gold/20 dark:border-gold/30 rounded-lg p-8 hover:border-gold/40 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/10"
              >
                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 bg-gold/20 rounded-lg flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-turquoise opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-navy-blue dark:text-white group-hover:text-gold transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-navy-blue dark:text-gray-300 leading-relaxed opacity-90 transition-colors duration-300">
                      {feature.description}
                    </p>
                    <div className="pt-2">
                      <span className="inline-block px-3 py-1 bg-turquoise/10 text-turquoise text-xs font-mono rounded-md border border-turquoise/20">
                        {feature.technical}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Engagements de sécurité réels */}
        <div className="grid md:grid-cols-3 gap-6 pt-10">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/20">
              <Lock className="h-6 w-6 text-gold" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base font-semibold text-navy-blue dark:text-white">
                Protection des données
              </h3>
              <p className="text-sm text-navy-blue dark:text-gray-300">
                Vos documents sont analysés en mémoire vive et ne sont jamais stockés de façon permanente.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/20">
              <Server className="h-6 w-6 text-gold" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base font-semibold text-navy-blue dark:text-white">
                IA souveraine
              </h3>
              <p className="text-sm text-navy-blue dark:text-gray-300">
                Traitement assuré par Mistral AI, garantissant qu&apos;aucune donnée n&apos;est utilisée pour l&apos;entraînement des modèles.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/20">
              <Shield className="h-6 w-6 text-gold" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base font-semibold text-navy-blue dark:text-white">
                Conformité RGPD
              </h3>
              <p className="text-sm text-navy-blue dark:text-gray-300">
                Plateforme conçue dans le respect du RGPD pour garantir la confidentialité de vos échanges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Security
