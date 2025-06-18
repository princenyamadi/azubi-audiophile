import { HashRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Routes from './Routes';
import { OrderProvider } from './contexts/OrderContext';
import { CartProvider } from './contexts/CartContext';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <OrderProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <Routes />
            <Footer />
          </div>
        </OrderProvider>
      </CartProvider>
    </Router>
  );
};

export default App;
