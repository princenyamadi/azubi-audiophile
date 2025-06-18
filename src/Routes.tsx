import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

const Routes = () => {
  return (
    <div className="flex-grow">
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </RouterRoutes>
    </div>
  );
};

export default Routes; 