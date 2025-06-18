import { useParams } from 'react-router-dom';
import './Category.css';

// Mock data for products
const products = [
  { id: 1, name: 'Product 1', category: 'headphones' },
  { id: 2, name: 'Product 2', category: 'headphones' },
  { id: 3, name: 'Product 3', category: 'speakers' },
  { id: 4, name: 'Product 4', category: 'earphones' },
];

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const filteredProducts = products.filter(product => product.category === category);

  const categoryTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';

  return (
    <div className="category">
      <h1>{categoryTitle}</h1>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product">
            {product.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category; 