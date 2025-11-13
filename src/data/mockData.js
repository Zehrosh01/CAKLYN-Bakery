import { FaBirthdayCake, FaHeart, FaCookie, FaGift } from 'react-icons/fa'
import hb4 from '../components/assests/hb/hb4.jpg'
import browns from '../components/assests/wedd/browns.jpg'
import cupc5 from '../components/assests/cupc/cupc5.jpg'
import choctruf from '../components/assests/wedd/choctruf.jpg'
import rasmalai from '../components/assests/wedd/rasmalai.jpg'

export const categories = [
  {
    id: 1,
    title: 'Birthday Cakes',
    description: 'Custom designs for all ages, from kids to adults',
    icon: FaBirthdayCake,
    image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=500&auto=format',
  },
  {
    id: 2,
    title: 'Wedding Cakes',
    description: 'Elegant multi-tier cakes for your special day',
    icon: FaHeart,
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&auto=format',
  },
  {
    id: 3,
    title: 'Cupcakes',
    description: 'Perfect for parties, events, or everyday treats',
    icon: FaCookie,
    image: 'https://images.unsplash.com/photo-1426869981800-95ebf51ce900?w=500&auto=format',
  },
  {
    id: 4,
    title: 'Festive Specials',
    description: 'Holiday-themed cakes for every celebration',
    icon: FaGift,
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=500&auto=format',
  },
]

export const portfolioItems = [
  {
    id: 1,
    title: 'Chocolate Truffle Cake',
    description: 'Rich dark chocolate with velvety truffle ganache',
    image: choctruf,
    price: '₹1000',
    popular: true,
  },
  {
    id: 2,
    title: 'Nutty Delight Cake',
    description: 'Buttery sponge layered with roasted nuts and creamy praline frosting',
    image: 'https://images.unsplash.com/photo-1574344069030-b2926f1b3d06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bnV0cyUyMGNha2V8ZW58MHx8MHx8fDA%3D',
    price: '₹800',
    popular: true,
  },
  {
    id: 3,
    title: 'Rainbow Unicorn Cake',
    description: 'Colorful layers perfect for kids\' birthdays',
    image: hb4,
    price: '₹1200',
    popular: false,
  },
  {
    id: 4,
    title: 'Brownies',
    description: 'Italian-inspired coffee-flavored masterpiece',
    image: browns,
    price: '₹1000',
    popular: true,
  },
  {
    id: 5,
    title: 'Cup Cakes',
    description: 'Vanilla sponge topped',
    image: cupc5,
    price: '₹500',
    popular: false,
  },
  {
    id: 6,
    title: 'Fresh Fruit Paradise',
    description: 'Vanilla sponge topped with seasonal fruits',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format',
    price: '₹700',
    popular: false,
  },
  {
    id: 7,
    title: 'Ras Malai Classic',
    description: 'Classic ras malai with creamed topping',
    image: rasmalai,
    price: '₹1000',
    popular: true,
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Asiya Burhani',
    occasion: 'Birthday Celebration',
    rating: 5,
    text: 'The chocolate truffle cake was absolutely divine! Everyone at the party couldn\'t stop raving about it. Delivery was right on time too!',
    // image: '',
  },
  {
    id: 2,
    name: 'Dr Naved',
    occasion: 'Wedding Anniversary',
    rating: 5,
    text: 'Ordered a custom wedding cake and it exceeded all expectations. The design was exactly what we wanted and tasted heavenly!',
    // image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    name: 'Aarish Shah',
    occasion: 'Birthday Party',
    rating: 5,
    text: 'Cupcakes were a huge hit at our office event. Fresh, delicious, and beautifully decorated. Will definitely order again!',
    // image: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 4,
    name: 'Fiza Solanki',
    occasion: 'Office Party',
    rating: 5,
    text: 'Ordered fruit cake for our office event. Everyone at the party enjoyed a lot!',
    // image: 'https://i.pravatar.cc/150?img=3',
  },
]

export const whyChooseUsPoints = [
  {
    id: 1,
    title: 'Fresh Ingredients',
    description: 'Only the finest, freshest ingredients in every cake',
  },
  {
    id: 2,
    title: 'Custom Designs',
    description: 'Personalized cakes tailored to your vision',
  },
  {
    id: 3,
    title: 'On-Time Delivery',
    description: 'Guaranteed delivery for your special moment',
  },
  // {
  //   id: 4,
  //   title: 'FSSAI Certified',
  //   description: 'Fully licensed and hygienic kitchen',
  // },
  {
  id: 4,
  title: 'Home-Based & Hygienic',
  description: 'Lovingly baked in a clean, home kitchen with utmost care and safety',
}

]
