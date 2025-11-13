import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope } from 'react-icons/fa'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    setSubscribed(true)
    setTimeout(() => {
      setSubscribed(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <FaEnvelope className="text-6xl text-white mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Get Sweet Updates
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Subscribe to receive exclusive offers, new cake designs, and baking tips!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button
              type="submit"
              disabled={subscribed}
              className="px-8 py-4 bg-white text-primary-500 font-semibold rounded-full hover:bg-primary-50 transition-all hover:scale-105 disabled:opacity-50"
            >
              {subscribed ? '✓ Subscribed!' : 'Subscribe'}
            </button>
          </form>

          <p className="text-primary-100 text-sm mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter
