import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import ResponsiveImage from '../common/ResponsiveImage';
import type { Product } from '../../services/productService';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({
  product,
  className = '',
}: ProductCardProps) => {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {/* Product Image */}
      <div className="relative w-full max-w-[350px] mb-8">
        <div className="bg-gray rounded-lg p-8 flex items-center justify-center">
          <ResponsiveImage
            images={product.image}
            alt={product.name}
            className="w-full h-auto max-h-[200px] object-contain"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="max-w-[350px]">
        {product.new && (
          <span className="overline text-primary mb-4 block">
            New Product
          </span>
        )}
        <h2 className="heading-4 mb-4">{product.name}</h2>
        <p className="body text-black/50 mb-8">{product.description}</p>
        <Link
          to={`/product/${product.slug}`}
          className="inline-flex items-center text-primary hover:text-primary-light transition-colors group"
        >
          <span className="subtitle mr-2">See Product</span>
          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard; 