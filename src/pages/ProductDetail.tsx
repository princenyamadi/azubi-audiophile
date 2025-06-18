import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/common/Button';
import ResponsiveImage from '../components/common/ResponsiveImage';
import { getProductBySlug } from '../services/productService';
import { useCartContext } from '../contexts/CartContext';
import type { Product } from '../services/productService';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (slug) {
      const foundProduct = getProductBySlug(slug);
      setProduct(foundProduct || null);
    }
  }, [slug]);

  if (!product) {
    return (
      <main className="pt-[90px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-2 mb-4">Product not found</h1>
          <Link to="/" className="text-primary hover:text-primary-light">
            Return to home
          </Link>
        </div>
      </main>
    );
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image.desktop,
      slug: product.slug,
    }, quantity);
  };

  return (
    <main className="pt-[90px]">
      {/* Back Button */}
      <section className="py-8">
        <div className="container">
          <Link
            to={`/${product.category}`}
            className="inline-flex items-center text-black/50 hover:text-primary transition-colors"
          >
            <span className="body">Go Back</span>
          </Link>
        </div>
      </section>

      {/* Product Info */}
      <section className="py-12 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Product Image */}
            <div>
              <ResponsiveImage
                images={product.image}
                alt={product.name}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div>
              {product.new && (
                <span className="overline text-primary mb-4 block">
                  New Product
                </span>
              )}
              <h1 className="heading-2 mb-6">{product.name}</h1>
              <p className="body text-black/50 mb-8">{product.description}</p>
              <p className="heading-4 mb-8">$ {product.price.toLocaleString()}</p>

              {/* Add to Cart */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center bg-gray">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="px-4 py-3 text-black/50 hover:text-primary transition-colors"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-3 font-bold">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="px-4 py-3 text-black/50 hover:text-primary transition-colors"
                  >
                    +
                  </button>
                </div>
                <Button onClick={handleAddToCart}>Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 lg:py-40">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-3 mb-8">Features</h2>
              <div className="body text-black/50 whitespace-pre-line">
                {product.features}
              </div>
            </div>
            <div>
              <h2 className="heading-3 mb-8">In the Box</h2>
              <ul className="space-y-3">
                {product.includes.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-primary font-bold mr-6">
                      {item.quantity}x
                    </span>
                    <span className="body text-black/50">{item.item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 lg:py-40">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <ResponsiveImage
                images={product.gallery.first}
                alt={`${product.name} gallery 1`}
                className="w-full h-auto rounded-lg"
              />
              <ResponsiveImage
                images={product.gallery.second}
                alt={`${product.name} gallery 2`}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <ResponsiveImage
                images={product.gallery.third}
                alt={`${product.name} gallery 3`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      <section className="py-24 lg:py-40">
        <div className="container">
          <h2 className="heading-3 text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.others.map((other) => (
              <div key={other.slug} className="text-center">
                <ResponsiveImage
                  images={other.image}
                  alt={other.name}
                  className="w-full h-auto rounded-lg mb-8"
                />
                <h3 className="heading-5 mb-8">{other.name}</h3>
                <Button href={`/product/${other.slug}`}>
                  See Product
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail; 