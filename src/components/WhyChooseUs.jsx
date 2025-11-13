import { motion } from 'framer-motion'
import { FaLeaf, FaPalette, FaClock, FaCertificate, FaStar } from 'react-icons/fa'
import { whyChooseUsPoints } from '../data/mockData'

const icons = [FaLeaf, FaPalette, FaClock, FaCertificate]

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mb-4">
            Why Choose Sweet Delights?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quality, creativity, and customer satisfaction are at the heart of everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {whyChooseUsPoints.map((point, index) => {
            const IconComponent = icons[index]
            return (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4">
                  <IconComponent className="text-4xl text-primary-500" />
                </div>
                <h3 className="font-semibold text-xl text-chocolate mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600">
                  {point.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">150+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">50+</div>
              <div className="text-gray-600">Cake Varieties</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">5.0</div>
              <div className="text-gray-600 flex items-center justify-center gap-1">
                Rating <FaStar className="text-yellow-400" />
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">100%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
