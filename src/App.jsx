import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialLinks from '@/components/SocialLinks';
import Home from '../src/page/Home';
import About from '../src/page/About';
import Contact from '../src/page/Contact';
import Location from '../src/page/Location';
import Shop from '../src/page/Shop';
import ProductDetails from '../src/page/ProductDetails';
import { CartProvider } from '@/context/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/location" element={<Location />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </main>
          <SocialLinks />
          <Footer />
          <Toaster />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;