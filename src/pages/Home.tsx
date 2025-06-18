import { useEffect } from 'react';
import Button from '../components/common/Button';
import ProductCard from '../components/product/ProductCard';
import ResponsiveImage from '../components/common/ResponsiveImage';
import { getFeaturedProducts, getProductBySlug } from '../services/productService';

const Home = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProducts = getFeaturedProducts();
  const heroProduct = getProductBySlug('xx99-mark-two-headphones');
  const zx9Product = getProductBySlug('zx9-speaker');
  const zx7Product = getProductBySlug('zx7-speaker');
  const yx1Product = getProductBySlug('yx1-earphones');

  return (
    <main className="pt-[90px]">
      {/* Hero Section */}
      <section className="bg-black text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between py-24 lg:py-32">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-16">
              <span className="overline text-white/50 mb-4 block">
                New Product
              </span>
              <h1 className="heading-1 mb-6">
                XX99 Mark II Headphones
              </h1>
              <p className="body text-white/75 mb-10 max-w-[349px]">
                Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
              </p>
              <Button as="link" href="/product/xx99-mark-two-headphones">
                See Product
              </Button>
            </div>
            <div className="lg:w-1/2">
              {heroProduct && (
                <ResponsiveImage
                  images={heroProduct.image}
                  alt={heroProduct.name}
                  className="w-full h-auto rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 lg:py-40">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ZX9 Speaker Section */}
      <section className="py-24 lg:py-40">
        <div className="container">
          <div className="bg-primary rounded-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 p-12 lg:p-24">
                <h2 className="heading-2 text-white mb-6">
                  ZX9 Speaker
                </h2>
                <p className="body text-white/75 mb-10">
                  Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </p>
                <Button as="link" variant="secondary" href="/product/zx9-speaker">
                  See Product
                </Button>
              </div>
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                {zx9Product && (
                  <ResponsiveImage
                    images={zx9Product.image}
                    alt={zx9Product.name}
                    className="w-full max-w-md h-auto"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZX7 Speaker Section */}
      <section className="py-24 lg:py-40">
        <div className="container">
          <div className="relative rounded-lg overflow-hidden">
            {zx7Product && (
              <ResponsiveImage
                images={zx7Product.image}
                alt={zx7Product.name}
                className="w-full h-[320px] lg:h-[400px] object-cover"
              />
            )}
            <div className="absolute inset-0 flex items-center">
              <div className="p-12 lg:p-24">
                <h2 className="heading-4 mb-8">ZX7 Speaker</h2>
                <Button as="link" variant="secondary" href="/product/zx7-speaker">
                  See Product
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YX1 Earphones Section */}
      <section className="py-24 lg:py-40">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              {yx1Product && (
                <ResponsiveImage
                  images={yx1Product.image}
                  alt={yx1Product.name}
                  className="w-full h-[320px] lg:h-[400px] object-cover"
                />
              )}
            </div>
            <div className="bg-gray rounded-lg p-12 lg:p-24 flex flex-col justify-center">
              <h2 className="heading-4 mb-8">YX1 Earphones</h2>
              <Button as="link" variant="secondary" href="/product/yx1-earphones">
                See Product
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Best Gear Section */}
      <section className="py-24 lg:py-40">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-24">
              <h2 className="heading-2 mb-8">
                Bringing you the <span className="text-primary">best</span> audio gear
              </h2>
              <p className="body text-black/50">
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/assets/shared/desktop/image-best-gear.jpg"
                alt="Best Audio Gear"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home; 