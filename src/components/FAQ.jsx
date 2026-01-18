import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "L'IA remplace-t-elle l'avocat ?",
      answer: "Non, Lexpacte est un assistant qui accélère la lecture et la synthèse, mais le jugement final reste l'expertise de l'avocat."
    },
    {
      question: "Quid de la confidentialité de mes documents ?",
      answer: "Chaque document est chiffré et supprimé de nos serveurs dès que l'analyse est terminée. Nous ne stockons rien."
    },
    {
      question: "Quels formats sont supportés ?",
      answer: "Lexpacte accepte les fichiers PDF, Word (.docx) et même les scans de mauvaise qualité grâce à notre OCR intégré."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-blue">
            Questions <span className="text-gold">fréquentes</span>
          </h2>
          <p className="text-xl text-navy-blue opacity-90">
            Tout ce que vous devez savoir sur Lexpacte.ai
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gold/20 rounded-lg overflow-hidden hover:border-gold/40 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-semibold text-navy-blue group-hover:text-gold transition-colors pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-navy-blue opacity-90 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
