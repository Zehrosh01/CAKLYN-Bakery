// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     message: ''
//   })

//   const [submitted, setSubmitted] = useState(false)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Form submitted:', formData)
//     setSubmitted(true)
//     setTimeout(() => {
//       setSubmitted(false)
//       setFormData({ name: '', phone: '', email: '', message: '' })
//     }, 3000)
//   }

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   return (
//     <section id="contact" className="section-padding bg-gradient-to-br from-cream to-white">
//       <div className="container-custom">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mb-4">
//             Get in Touch
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Ready to order your dream cake? We'd love to hear from you!
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h3 className="font-display text-2xl font-bold text-chocolate mb-6">
//               Contact Information
//             </h3>
            
//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
//                   <FaPhone className="text-primary-500 text-xl" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-chocolate mb-1">Phone</h4>
//                   <p className="text-gray-600">+91 98765 43210</p>
//                   <p className="text-gray-600">+91 98765 43211</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
//                   <FaEnvelope className="text-primary-500 text-xl" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-chocolate mb-1">Email</h4>
//                   <p className="text-gray-600">orders@sweetdelights.com</p>
//                   <p className="text-gray-600">info@sweetdelights.com</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
//                   <FaMapMarkerAlt className="text-primary-500 text-xl" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-chocolate mb-1">Address</h4>
//                   <p className="text-gray-600">
//                     123 Baker Street, Jubilee Hills<br />
//                     Hyderabad, Telangana 500033
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8 p-6 bg-primary-50 rounded-xl">
//               <h4 className="font-semibold text-chocolate mb-3">Business Hours</h4>
//               <div className="space-y-2 text-gray-700">
//                 <p>Monday - Saturday: 9:00 AM - 9:00 PM</p>
//                 <p>Sunday: 10:00 AM - 8:00 PM</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
//               <div className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-semibold text-chocolate mb-2">
//                     Your Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-semibold text-chocolate mb-2">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
//                     placeholder="+91 98765 43210"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-semibold text-chocolate mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
//                     placeholder="john@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-semibold text-chocolate mb-2">
//                     Your Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows="4"
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
//                     placeholder="Tell us about your cake requirements..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={submitted}
//                   className={`w-full btn-primary flex items-center justify-center gap-2 ${
//                     submitted ? 'opacity-50 cursor-not-allowed' : ''
//                   }`}
//                 >
//                   {submitted ? (
//                     'Message Sent!'
//                   ) : (
//                     <>
//                       Request a Callback
//                       <FaPaperPlane />
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ContactForm




// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     message: ''
//   })

//   const [submitted, setSubmitted] = useState(false)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Form submitted:', formData)
//     setSubmitted(true)
//     setTimeout(() => {
//       setSubmitted(false)
//       setFormData({ name: '', phone: '', email: '', message: '' })
//     }, 3000)
//   }

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   return (
//     <section id="contact" className="section-padding bg-gradient-to-br from-cream to-white">
//       <div className="container-custom">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mb-4">
//             Get in Touch
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Ready to order your dream cake? We'd love to hear from you!
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h3 className="font-display text-2xl font-bold text-chocolate mb-6">
//               Contact Information
//             </h3>
            
//             <div className="space-y-6">
//               {/* Clickable Phone Numbers */}
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
//                   <FaPhone className="text-primary-500 text-xl" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-chocolate mb-1">Phone</h4>
//                   <a 
//                     href="tel:+919876543210" 
//                     className="text-gray-600 hover:text-primary-500 transition-colors block hover:underline"
//                   >
//                     +91 98765 43210
//                   </a>
//                   <a 
//                     href="tel:+919876543211" 
//                     className="text-gray-600 hover:text-primary-500 transition-colors block hover:underline"
//                   >
//                     +91 98765 43211
//                   </a>
//                 </div>
//               </div>

//               {/* Clickable Email Addresses */}
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
//                   <FaEnvelope className="text-primary-500 text-xl" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-chocolate mb-1">Email</h4>
//                   <a 
//                     href="mailto:orders@sweetdelights.com" 
//                     className="text-gray-600 hover:text-primary-500 transition-colors block hover:underline"
//                   >
//                     orders@sweetdelights.com
//                   </a>
//                   <a 
//                     href="mailto:info@sweetdelights.com" 
//                     className="text-gray-600 hover:text-primary-500 transition-colors block hover:underline"
//                   >
//                     info@sweetdelights.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
//                   <FaMapMarkerAlt className="text-primary-500 text-xl" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-chocolate mb-1">Address</h4>
//                   <p className="text-gray-600">
//                     123 Baker Street, Jubilee Hills<br />
//                     Hyderabad, Telangana 500033
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8 p-6 bg-primary-50 rounded-xl">
//               <h4 className="font-semibold text-chocolate mb-3">Business Hours</h4>
//               <div className="space-y-2 text-gray-700">
//                 <p>Monday - Saturday: 9:00 AM - 9:00 PM</p>
//                 <p>Sunday: 10:00 AM - 8:00 PM</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
//               <div className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-semibold text-chocolate mb-2">
//                     Your Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-semibold text-chocolate mb-2">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
//                     placeholder="+91 98765 43210"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-semibold text-chocolate mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
//                     placeholder="john@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-semibold text-chocolate mb-2">
//                     Your Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows="4"
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
//                     placeholder="Tell us about your cake requirements..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={submitted}
//                   className={`w-full btn-primary flex items-center justify-center gap-2 ${
//                     submitted ? 'opacity-50 cursor-not-allowed' : ''
//                   }`}
//                 >
//                   {submitted ? (
//                     '✓ Message Sent!'
//                   ) : (
//                     <>
//                       Request a Callback
//                       <FaPaperPlane />
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ContactForm












import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    from_name: '',
    phone: '',
    from_email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setError('')

    // 🔥 REPLACE THESE WITH YOUR EMAILJS CREDENTIALS
    const SERVICE_ID = 'YOUR_SERVICE_ID'      // Get from EmailJS dashboard
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'    // Get from EmailJS dashboard
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'      // Get from EmailJS dashboard

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log('✅ Email sent successfully!', result.text)
        setSubmitted(true)
        setSending(false)
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitted(false)
          setFormData({ from_name: '', phone: '', from_email: '', message: '' })
        }, 3000)
      })
      .catch((error) => {
        console.error('❌ Email send failed:', error.text)
        setError('Failed to send message. Please try again or contact us directly.')
        setSending(false)
      })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-cream to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to order your dream cake? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-bold text-chocolate mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {/* Clickable Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-primary-500 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-chocolate mb-1">Phone</h4>
                  <a 
                    href="tel:+918080116940" 
                    className="text-gray-600 hover:text-primary-500 transition-colors block"
                  >
                    +91 80801 16940
                  </a>
                  {/* <a 
                    href="tel:+919876543211" 
                    className="text-gray-600 hover:text-primary-500 transition-colors block hover:underline"
                  >
                    +91 98765 43211
                  </a> */}
                </div>
              </div>

              {/* Clickable Email Addresses */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-primary-500 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-chocolate mb-1">Email</h4>
                  <a 
                    href="mailto:orders@sweetdelights.com" 
                    className="text-gray-600 hover:text-primary-500 transition-colors block"
                  >
                    fziyaahmad@gmail.com
                  </a>
                  {/* <a 
                    href="mailto:info@sweetdelights.com" 
                    className="text-gray-600 hover:text-primary-500 transition-colors"
                  >
                    info@sweetdelights.com
                  </a> */}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-primary-500 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-chocolate mb-1">Address</h4>
                  <p className="text-gray-600">
                    CAKLYN, near nagpuri gate<br />
                  Amravati, MH 444601
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-xl">
              <h4 className="font-semibold text-chocolate mb-3">Business Hours</h4>
              <div className="space-y-2 text-gray-700">
                <p>Monday - Saturday: 9:00 AM - 9:00 PM</p>
                <p>Sunday: 10:00 AM - 8:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={form} onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-semibold text-chocolate mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-chocolate mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="from_email" className="block text-sm font-semibold text-chocolate mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-chocolate mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your cake requirements..."
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitted || sending}
                  className={`w-full btn-primary flex items-center justify-center gap-2 ${
                    (submitted || sending) ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {sending ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Sending...
                    </>
                  ) : submitted ? (
                    '✓ Message Sent!'
                  ) : (
                    <>
                      Request a Callback
                      <FaPaperPlane />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

