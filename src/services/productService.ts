import productData from "../mocks/data.json";

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Array<{
    quantity: number;
    item: string;
  }>;
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others: Array<{
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }>;
}

export const getAllProducts = (): Product[] => {
  return productData as Product[];
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return productData.find((product) => product.slug === slug) as
    | Product
    | undefined;
};

export const getProductsByCategory = (category: string): Product[] => {
  return productData.filter(
    (product) => product.category === category
  ) as Product[];
};

export const getFeaturedProducts = (): Product[] => {
  // Return the first 3 products as featured
  return productData.slice(0, 3) as Product[];
};

export const getNewProducts = (): Product[] => {
  return productData.filter((product) => product.new) as Product[];
};
