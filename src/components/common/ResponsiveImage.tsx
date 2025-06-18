interface ResponsiveImageProps {
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  alt: string;
  className?: string;
}

const ResponsiveImage = ({ images, alt, className = '' }: ResponsiveImageProps) => {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={images.desktop} />
      <source media="(min-width: 768px)" srcSet={images.tablet} />
      <img
        src={images.mobile}
        alt={alt}
        className={className}
      />
    </picture>
  );
};

export default ResponsiveImage; 