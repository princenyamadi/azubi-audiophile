# Audiophile E-commerce Website

A pixel-perfect implementation of the Audiophile e-commerce website design from Figma, built with React, TypeScript, and TailwindCSS.

## 🚀 Features

- **Pixel-perfect design implementation** - Exact match to Figma specifications
- **Responsive design** - Mobile-first approach with desktop optimization
- **Shopping cart functionality** - Add, remove, and update quantities
- **Product catalog** - Browse by category (Headphones, Speakers, Earphones)
- **Product detail pages** - Complete product information with gallery
- **Checkout process** - Multi-step form with validation
- **Accessibility** - WCAG compliant with proper ARIA labels
- **TypeScript** - Full type safety throughout the application
- **Modern React** - Using React 19 with hooks and functional components

## 🛠 Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Heroicons** - Beautiful SVG icons
- **Vite** - Fast build tool and dev server

## 📁 Project Structure

```
src/
├── components/
│   ├── common/           # Reusable UI components
│   │   ├── Button.tsx    # Button component with variants
│   │   └── Cart.tsx      # Shopping cart modal
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Navigation and cart
│   │   └── Footer.tsx    # Site footer
│   └── product/          # Product-specific components
│       └── ProductCard.tsx # Product display card
├── pages/                # Page components
│   ├── Home.tsx          # Landing page
│   ├── Headphones.tsx    # Headphones category
│   ├── Speakers.tsx      # Speakers category
│   ├── Earphones.tsx     # Earphones category
│   ├── ProductDetail.tsx # Individual product page
│   └── Checkout.tsx      # Checkout process
├── hooks/                # Custom React hooks
│   └── useCart.ts        # Cart state management
├── types/                # TypeScript definitions
│   └── product.ts        # Product interface
├── data/                 # Mock data
│   └── products.ts       # Product catalog
├── styles/               # Global styles
│   └── globals.css       # Tailwind and custom styles
└── App.tsx               # Main app component
```

## 🎨 Design System

### Typography
- **Font Family**: Manrope (Google Fonts)
- **Heading 1**: 56px, 58px line-height, 2px letter-spacing
- **Heading 2**: 40px, 44px line-height, 1.5px letter-spacing
- **Heading 3**: 32px, 36px line-height, 1.15px letter-spacing
- **Heading 4**: 28px, 38px line-height, 2px letter-spacing
- **Heading 5**: 24px, 33px line-height, 1.7px letter-spacing
- **Heading 6**: 18px, 24px line-height, 1.3px letter-spacing
- **Overline**: 14px, 19px line-height, 10px letter-spacing
- **Subtitle**: 13px, 25px line-height, 1px letter-spacing
- **Body**: 15px, 25px line-height

### Colors
- **Primary**: #D87D4A (Orange)
- **Primary Light**: #FBAF85 (Light Orange)
- **Black**: #000000
- **Black Light**: #101010
- **White**: #FFFFFF
- **White Light**: #FAFAFA
- **Gray**: #F1F1F1
- **Gray Dark**: #4C4C4C

### Spacing
- All spacing values match the Figma design exactly
- Custom spacing scale from 4.5 to 50.5 in 0.5rem increments
- Container max-width: 1440px
- Responsive breakpoints: mobile, tablet, desktop

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd audiofile
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Pages & Features

### Home Page (`/`)
- Hero section with featured product
- Product category cards
- Featured product sections (ZX9, ZX7, YX1)
- Best gear section

### Category Pages
- **Headphones** (`/headphones`)
- **Speakers** (`/speakers`) 
- **Earphones** (`/earphones`)

### Product Detail (`/product/:slug`)
- Product images and gallery
- Product information and features
- Add to cart functionality
- Related products

### Checkout (`/checkout`)
- Billing details form
- Shipping information
- Payment method selection
- Order summary
- Form validation

## 🛒 Shopping Cart

### Features
- Add/remove products
- Update quantities
- Persistent storage (localStorage)
- Cart badge with item count
- Modal cart interface
- Checkout integration

### Cart State Management
- Custom `useCart` hook
- Local storage persistence
- Real-time total calculation
- Quantity validation

## ♿ Accessibility

### Implemented Features
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels and descriptions
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance
- Form labels and IDs

### WCAG 2.1 Compliance
- Level AA standards
- Proper alt text for images
- Logical tab order
- Skip navigation links
- Error message association

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Responsive Features
- Mobile-first approach
- Flexible grid layouts
- Responsive images
- Adaptive typography
- Touch-friendly interactions

## 🔧 Customization

### Adding New Products
1. Update `src/data/products.ts` with product data
2. Add product images to `public/assets/`
3. Follow the Product interface structure

### Styling Changes
1. Modify `src/styles/globals.css` for global styles
2. Update `tailwind.config.js` for theme customization
3. Use Tailwind utility classes for component-specific styles

### Adding New Pages
1. Create new page component in `src/pages/`
2. Add route to `src/App.tsx`
3. Update navigation if needed

## 🧪 Testing

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Cart functionality works
- [ ] Checkout form validation
- [ ] Responsive design on all breakpoints
- [ ] Accessibility features work
- [ ] Performance is acceptable

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

## 📝 TODO & Future Enhancements

### High Priority
- [ ] Add more product data
- [ ] Implement search functionality
- [ ] Add product filtering and sorting
- [ ] Implement user authentication
- [ ] Add order history
- [ ] Integrate with payment gateway

### Medium Priority
- [ ] Add product reviews and ratings
- [ ] Implement wishlist functionality
- [ ] Add product comparison
- [ ] Implement email notifications
- [ ] Add admin dashboard

### Low Priority
- [ ] Add animations and transitions
- [ ] Implement PWA features
- [ ] Add multi-language support
- [ ] Implement dark mode
- [ ] Add product recommendations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from the Figma community
- Icons from Heroicons
- Fonts from Google Fonts
- React and TailwindCSS communities

---

**Note**: This is a frontend implementation. For a production e-commerce site, you would need to integrate with a backend API, payment processing, and other services.
