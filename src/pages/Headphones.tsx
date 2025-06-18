import { useEffect } from 'react';
import ResponsiveImage from '../components/common/ResponsiveImage';
import Button from '../components/common/Button';
import { getProductsByCategory } from '../services/productService';

const Headphones = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headphonesProducts = getProductsByCategory('headphones');

  return (
    <main className="pt-[90px]">
      {/* Hero Section */}
      <section className="bg-black text-white py-32">
        <div className="container">
          <h1 className="heading-2 text-center tracking-[0.15em]">HEADPHONES</h1>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32 lg:py-48">
        <div className="container">
          <div className="space-y-40">
            {headphonesProducts.map((product, index) => (
              <div
                key={product.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-32 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Product Image */}
                <div className="flex items-center justify-center">
                  <ResponsiveImage
                    images={product.image}
                    alt={product.name}
                    className="w-full h-auto max-h-[560px] object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="text-center lg:text-left max-w-[445px] mx-auto lg:mx-0">
                  {product.new && (
                    <span className="overline text-primary mb-6 block tracking-[0.5em]">
                      NEW PRODUCT
                    </span>
                  )}
                  <h2 className="heading-2 mb-8 tracking-[0.1em]">{product.name}</h2>
                  <p className="body text-black/50 mb-10 leading-relaxed">{product.description}</p>
                  <Button as="link" href={`/product/${product.slug}`}>See Product</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Headphones; 