import Button from './common/Button';

type HeroSectionProps = {
  product: {
    name: string;
    description: string;
    image: { desktop: string };
    slug: string;
    new: boolean;
  };
};

export const HeroSection = ({ product }: HeroSectionProps) => {
  // Ensure the image path starts with '/assets/'
  const imagePath = product.image.desktop.replace(/^\.?\/?assets/, '/assets');

  return (
    <section className="w-full bg-[#101010] rounded-xl flex items-center justify-between px-16 py-16 mb-16 min-h-[600px] relative overflow-hidden">
      {/* Left: Text */}
      <div className="flex flex-col gap-6 max-w-lg z-10">
        {product.new && (
          <span className="uppercase text-white/50 tracking-[0.7em] text-sm mb-2">New Product</span>
        )}
        <h1 className="text-white font-extrabold text-5xl leading-tight tracking-wider mb-4">
          {product.name.split(' ').slice(0, 3).join(' ')}<br />
          {product.name.split(' ').slice(3).join(' ')}
        </h1>
        <p className="text-white/75 text-base font-medium mb-8 max-w-md">
          {product.description}
        </p>
        <Button as="link" href={`/product/${product.slug}`}>
          See Product
        </Button>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex justify-end items-center h-full">
        <img
          src={imagePath}
          alt={product.name}
          className="max-h-[420px] w-auto object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default HeroSection; 