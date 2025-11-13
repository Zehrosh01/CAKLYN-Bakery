import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronDown } from 'react-icons/fa'
import wedd1 from './assests/wedd/wedd1.jpg'
import hb1 from './assests/hb/hb1.jpg'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxImage, setLightboxImage] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const INITIAL_DISPLAY_COUNT = 8

  const categories = [
    { id: 'all', label: 'All Cakes' },
    { id: 'birthday', label: 'Birthday' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'custom', label: 'Custom Design' },
    { id: 'cupcakes', label: 'Cupcakes' },
  ]

  const galleryImages = [
    {
      id: 1,
      category: 'birthday',
      image: hb1,
      title: 'Rainbow Birthday Cake',
      description: '3-tier colorful celebration cake'
    },
    {
      id: 2,
      category: 'wedding',
      image: wedd1,
      title: 'Elegant Wedding Cake',
      description: '5-tier white wedding masterpiece'
    },
    {
      id: 3,
      category: 'custom',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format',
      title: 'Chocolate Delight',
      description: 'Rich chocolate custom cake'
    },
    {
      id: 4,
      category: 'birthday',
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&auto=format',
      title: 'Unicorn Dream',
      description: 'Magical unicorn themed cake'
    },
    {
      id: 5,
      category: 'cupcakes',
      image: 'https://images.unsplash.com/photo-1426869981800-95ebf51ce900?w=800&auto=format',
      title: 'Assorted Cupcakes',
      description: 'Dozen gourmet cupcakes'
    },
    {
      id: 6,
      category: 'wedding',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format',
      title: 'Floral Wedding Cake',
      description: 'Beautiful floral design wedding cake'
    },
    {
      id: 7,
      category: 'custom',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format',
      title: 'Fresh Fruit Cake',
      description: 'Custom fruit topped celebration'
    },
    {
      id: 8,
      category: 'birthday',
      image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=800&auto=format',
      title: 'Red Velvet Special',
      description: 'Classic red velvet birthday cake'
    },
    {
      id: 9,
      category: 'cupcakes',
      image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=800&auto=format',
      title: 'Chocolate Cupcakes',
      description: 'Premium chocolate cupcakes'
    },
    {
      id: 10,
      category: 'custom',
      image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&auto=format',
      title: 'Black Forest Luxury',
      description: 'Artisan black forest creation'
    },
    {
      id: 11,
      category: 'wedding',
      image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&auto=format',
      title: 'Modern Wedding Cake',
      description: 'Contemporary wedding design'
    },
    {
      id: 12,
      category: 'birthday',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format',
      title: 'Tiramisu Birthday',
      description: 'Coffee-flavored birthday special'
    },
    {
      id: 13,
      category: 'custom',
      image: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=800&auto=format',
      title: 'Strawberry Dream',
      description: 'Fresh strawberry layered cake'
    },
    {
      id: 14,
      category: 'wedding',
      image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&auto=format',
      title: 'Classic White Wedding',
      description: 'Timeless white elegance'
    },
    {
      id: 15,
      category: 'birthday',
      image: 'https://images.unsplash.com/photo-1562440499-64c9a74f0f77?w=800&auto=format',
      title: 'Chocolate Celebration',
      description: 'Decadent chocolate birthday cake'
    },
    {
      id: 16,
      category: 'cupcakes',
      image: 'https://images.unsplash.com/photo-1599785209796-786432b228bc?w=800&auto=format',
      title: 'Vanilla Cupcakes',
      description: 'Classic vanilla with buttercream'
    },
  ]

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  // Show only first 12 items initially, or all if showAll is true
  const displayedImages = showAll 
    ? filteredImages 
    : filteredImages.slice(0, INITIAL_DISPLAY_COUNT)

  const hasMoreImages = filteredImages.length > INITIAL_DISPLAY_COUNT

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
    setShowAll(false) // Reset to show only 12 when changing category
  }

  const handleViewMore = () => {
    setShowAll(true)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our delicious creations and get inspired for your next celebration
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg scale-105'
                  : 'bg-cream text-chocolate hover:bg-primary-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {displayedImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setLightboxImage(item)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-chocolate/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-primary-100">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        {hasMoreImages && !showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mt-12"
          >
            <button
              onClick={handleViewMore}
              className="btn-primary group"
            >
              View More
              <FaChevronDown className="inline-block ml-2 group-hover:translate-y-1 transition-transform" />
            </button>
                <p className="text-gray-600 mt-4">
                Showing {displayedImages.length} of {filteredImages.length} cakes
                </p>
          </motion.div>
        )}

        {/* Show Less Button (optional - when viewing all) */}
        {showAll && hasMoreImages && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => {
                setShowAll(false)
                // Scroll to gallery top
                document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-secondary"
            >
              Show Less
            </button>
          </motion.div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-chocolate hover:bg-primary-500 hover:text-white transition-colors z-10"
                onClick={() => setLightboxImage(null)}
              >
                <FaTimes className="text-2xl" />
              </motion.button>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="bg-white rounded-b-2xl p-6 text-center">
                  <h3 className="font-display text-2xl font-bold text-chocolate mb-2">
                    {lightboxImage.title}
                  </h3>
                  <p className="text-gray-600">{lightboxImage.description}</p>
                  <button className="mt-4 btn-primary">
                    Order Similar Cake
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Gallery
