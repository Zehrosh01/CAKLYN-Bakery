import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1920&auto=format"
          alt="Beautiful cake background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-chocolate/80 via-chocolate/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto md:mx-0"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Delicious Cakes Made with Love
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed"
          >
            Custom cakes for birthdays, weddings, and every celebration
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button onClick={scrollToContact} className="btn-primary group">
              Order Now
              <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={scrollToContact} className="btn-secondary">
              Get a Quote
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex flex-wrap gap-6 justify-center md:justify-start text-white"
          >
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
              <span className="text-sm">5.0 Rating</span>
            </div>
            {/* <div className="border-l border-white/30 pl-6">
              <span className="font-semibold">FSSAI Certified</span>
            </div> */}
            <div className="border-l border-white/30 pl-6">
              <span className="font-semibold">100+ Happy Customers</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        {/* <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white rounded-full" />
        </motion.div> */}
      </motion.div>
    </section>
  )
}

export default Hero
