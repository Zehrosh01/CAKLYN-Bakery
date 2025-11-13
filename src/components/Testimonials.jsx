import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { testimonials } from '../data/mockData'

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real reviews from real celebrations
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <FaQuoteLeft className="text-5xl text-primary-300 mb-6" />
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[current].image}
                  // alt={testimonials[current].name}
                  // className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg text-chocolate">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonials[current].occasion}
                  </p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-all ${
                  index === current ? 'w-8 bg-primary-500' : 'w-3 bg-gray-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
