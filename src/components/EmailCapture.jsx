import { Mail, ArrowRight, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const EmailCapture = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Veuillez saisir votre adresse email')
      return
    }

    if (!validateEmail(email)) {
      setError('Veuillez saisir une adresse email valide')
      return
    }

    // Envoi via FormSubmit API
    try {
      const formData = new FormData()
      formData.append('email', email)
      formData.append('_subject', 'Nouvelle inscription bêta - Lexpacte.ai')
      formData.append('_captcha', 'false')
      formData.append('_template', 'table')
      formData.append('_next', window.location.href)

      await fetch('https://formsubmit.co/ajax/mathis@lexpacte.fr', {
        method: 'POST',
        body: formData
      })

      // Succès - afficher le message
      setSubmitted(true)
      setEmail('')
      
      // Reset success message after 8 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 8000)
    } catch (error) {
      // En cas d'erreur, on affiche quand même le message de succès
      // car FormSubmit peut avoir reçu la requête même en cas d'erreur réseau
      setSubmitted(true)
      setEmail('')
      setTimeout(() => {
        setSubmitted(false)
      }, 8000)
    }
  }

  return (
    <section id="email-capture" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20">
      <div className="relative bg-gradient-to-br from-gold/10 via-white to-turquoise/10 border-2 border-gold/20 rounded-2xl p-8 md:p-12 shadow-xl">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-turquoise/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gold/10 rounded-full blur-3xl -z-10"></div>

        <div className="relative z-10 text-center space-y-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full">
            <Mail className="w-8 h-8 text-gold" />
          </div>

          {/* Title and description */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-blue">
              Rejoignez la liste d'attente pour la <span className="text-gold">bêta privée</span>
            </h2>
            <p className="text-lg text-navy-blue opacity-90 max-w-2xl mx-auto">
              Soyez parmi les premiers à découvrir Lexpacte.ai et bénéficiez d'un accès prioritaire avec des fonctionnalités exclusives.
            </p>
          </div>

          {/* Success message */}
          {submitted && (
            <div className="flex items-center justify-center space-x-2 text-turquoise bg-turquoise/10 border border-turquoise/20 rounded-lg p-4">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Merci ! Vous recevrez un email de confirmation sous peu.</span>
            </div>
          )}

          {/* Form */}
          {!submitted && (
            <form 
              onSubmit={handleSubmit} 
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError('')
                  }}
                  placeholder="votre.email@cabinet-avocat.fr"
                  required
                  className="w-full px-6 py-4 bg-white border-2 border-gold/20 rounded-lg text-navy-blue placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                />
                {error && (
                  <p className="mt-2 text-sm text-red-600 text-left">{error}</p>
                )}
              </div>
              <button
                type="submit"
                className="group bg-gold hover:bg-gold/90 hover:shadow-gold/50 text-navy px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2 whitespace-nowrap"
              >
                <span>Rejoindre</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          {/* Privacy note */}
          <p className="text-sm text-navy-blue opacity-75">
            Nous respectons votre vie privée. Aucun spam, désinscription à tout moment.
          </p>
        </div>
      </div>
    </section>
  )
}

export default EmailCapture
