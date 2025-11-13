import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa'
import { portfolioItems } from '../data/mockData'

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return (prevIndex + 1) % portfolioItems.length
      }
      return prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    })
  }

  const popularCakes = portfolioItems.filter(item => item.popular)

  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mb-4">
            Our Masterpieces
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our collection of beautifully crafted cakes
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full h-full"
              >
                <img
                  src={portfolioItems[currentIndex].image}
                  alt={portfolioItems[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-chocolate/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-2">
                    {portfolioItems[currentIndex].title}
                  </h3>
                  <p className="text-lg md:text-xl mb-4">
                    {portfolioItems[currentIndex].description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold">
                      {portfolioItems[currentIndex].price}
                    </span>
                    {portfolioItems[currentIndex].popular && (
                      <span className="bg-primary-500 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <FaStar /> Popular
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all z-10"
            aria-label="Previous cake"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all z-10"
            aria-label="Next cake"
          >
            <FaArrowRight />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-primary-500' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Popular This Week */}
        <div>
          <h3 className="font-display text-3xl font-bold text-chocolate mb-8 text-center">
            Popular This Week
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularCakes.map((cake, index) => (
              <motion.div
                key={cake.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                <div className="relative h-48">
                  <img
                    src={cake.image}
                    alt={cake.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <FaStar /> Popular
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-lg text-chocolate mb-1">
                    {cake.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {cake.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary-500">
                      {cake.price}
                    </span>
                    <button className="text-primary-500 font-semibold hover:underline">
                      Order Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
