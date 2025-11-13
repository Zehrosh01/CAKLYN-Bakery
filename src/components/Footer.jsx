// import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaHeart } from 'react-icons/fa'

// const Footer = () => {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="bg-chocolate text-white">
//       <div className="container-custom py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//           {/* Brand */}
//           <div>
//             <h3 className="font-display text-2xl font-bold mb-4">Sweet Delights</h3>
//             <p className="text-primary-100 mb-4">
//               Creating moments of joy, one cake at a time.
//             </p>
//             <div className="flex gap-4">
//               <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
//                 <FaFacebook />
//               </a>
//               <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
//                 <FaInstagram />
//               </a>
//               <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
//                 <FaTwitter />
//               </a>
//               <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
//                 <FaYoutube />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
//             <ul className="space-y-2 text-primary-100">
//               <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Our Menu</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Custom Orders</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="font-semibold text-lg mb-4">Services</h4>
//             <ul className="space-y-2 text-primary-100">
//               <li><a href="#" className="hover:text-white transition-colors">Birthday Cakes</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Wedding Cakes</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Corporate Orders</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Cake Delivery</a></li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-semibold text-lg mb-4">Contact</h4>
//             <ul className="space-y-2 text-primary-100">
//               <li>123 Baker Street</li>
//               <li>Hyderabad, TG 500033</li>
//               <li className="pt-2">+91 98765 43210</li>
//               <li>orders@sweetdelights.com</li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-primary-100">
//           <p>© {currentYear} Sweet Delights Bakery. All rights reserved.</p>
//           <p className="flex items-center gap-2">
//             Made with <FaHeart className="text-primary-500" /> for cake lovers
//           </p>
//           <div className="flex gap-6">
//             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
//             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer








import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaHeart, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-chocolate text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">CAKLYN <br /><p className="font-display text-xl font-bold mb-4">Sweet Delight Bakery</p></h3>
            
            <p className="text-primary-100 mb-4">
              Creating moments of joy.
            </p>
            <div className="flex gap-4">
              {/* <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="Visit our Facebook page"
              >
                <FaFacebook />
              </a> */}
              <a 
                href="https://www.instagram.com/fch_fouziyas_cake_house?igsh=MTd4amwzdmowOTlubA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="Visit our Instagram page"
              >
                <FaInstagram />
              </a>
              {/* <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="Visit our Twitter page"
              >
                <FaTwitter />
              </a> */}
              <a 
                href="https://youtube.com/@arzoo5380?si=rL2-JdRoE0NZzTMr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="Visit our YouTube channel"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-100">
              <li><a href="#" className="hover:text-primary-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Our Menu</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Custom Orders</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-primary-100">
              <li><a href="#" className="hover:text-primary-500 transition-colors">Birthday Cakes</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Wedding Cakes</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Corporate Orders</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Cake Delivery</a></li>
            </ul>
          </div>

          {/* Contact - with icons and clickable phone and email */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-primary-100">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-primary-300 mt-1 flex-shrink-0" />
                <span>
                  CAKLYN, near nagpuri gate<br />
                  Amravati, MH 444601
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-primary-300 flex-shrink-0" />
                <a 
                  href="tel:+918080116940" 
                  className="hover:text-primary-500 transition-colors"
                >
                  +91 80801 16940
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-primary-300 flex-shrink-0" />
                <a 
                  href="mailto:orders@sweetdelights.com" 
                  className="hover:text-primary-500 transition-colors"
                >
                  fziyaahmad@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-primary-100">
          <p>© {currentYear} Sweet Delights Bakery. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Made with <FaHeart className="text-primary-500" /> for cake lovers
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
