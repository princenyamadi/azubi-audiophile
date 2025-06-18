import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'link';
  as?: 'button' | 'link';
  href?: string;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', as = 'button', href, className, children, ...props }, ref) => {
    const baseStyles = 'btn transition-all duration-200';
    const variantStyles = {
      primary: 'bg-primary text-white hover:bg-primary-light',
      secondary: 'bg-transparent text-black border border-black hover:bg-black hover:text-white',
      link: 'text-black/50 hover:text-primary',
    };

    const classes = clsx(baseStyles, variantStyles[variant], className);

    if (as === 'link' && href) {
      return (
        <Link to={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button; 