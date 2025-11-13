import { Helmet } from 'react-helmet-async'
import Hero from './components/Hero'
import Categories from './components/Categories'
import WhyChooseUs from './components/WhyChooseUs'
import Portfolio from './components/Portfolio'
// import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <>
      <Helmet>
        <title>Sweet Delights Bakery - Custom Cakes for Every Celebration</title>
        <meta name="description" content="Order custom birthday cakes, wedding cakes, cupcakes, and festive treats. Fresh ingredients, custom designs, and on-time delivery. FSSAI certified bakery in Hyderabad." />
        <meta name="keywords" content="custom cakes, birthday cakes, wedding cakes, cupcakes, bakery, Hyderabad, cake delivery, fresh cakes" />
        <meta property="og:title" content="Sweet Delights Bakery - Delicious Cakes Made with Love" />
        <meta property="og:description" content="Custom cakes for birthdays, weddings, and every celebration. Order now!" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen">
        <Hero />
        <Categories />
        <WhyChooseUs />
        <Portfolio />
        {/* <Gallery/> */}
        <Testimonials />
        <ContactForm />
        <Newsletter />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default App

