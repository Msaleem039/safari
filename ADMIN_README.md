# Desert Dubai Tourism - Admin Panel

This admin panel allows you to manage tour packages and services for your Desert Dubai Tourism website.

## Features

### 🏠 Dashboard
- Overview of your business metrics
- Quick access to create products and view existing ones
- Recent activity tracking

### ➕ Create Product
- Add new tour packages with all necessary details
- Dynamic inclusion management (add/remove inclusions)
- Form validation and error handling
- Success/error feedback

### 📦 Products Management
- View all existing products in a beautiful card layout
- Expandable product details showing full inclusions
- Product metadata (title, type, price, button text, creation date)
- Image display with fallback for missing images

## API Integration

The admin panel connects to your backend API at `https://api.fsroyaldesertsafaridubai.com/api/produc`:

- **GET** `/api/produc` - Fetch all products
- **POST** `/api/produc` - Create new product

## Getting Started

1. **Ensure your backend is running** at `https://api.fsroyaldesertsafaridubai.com`
2. **Navigate to the admin panel** at `/admin`
3. **Use the sidebar navigation** to access different sections

## Product Structure

Each product includes:
- **Title** (required): Tour package name
- **Type** (required): Category (e.g., "For Friends & Family")
- **Price** (required): Cost information (e.g., "AED150/Per Person")
- **Button** (optional): Call-to-action text (defaults to "BOOK NOW")
- **Image** (optional): URL to product image
- **Inclusions** (required): Array of included services/features

## Example Product Data

```json
{
  "title": "RED DUNE SAFARI WITH VIP SERVICE",
  "type": "For Friends & Family",
  "price": "AED150/Per Person",
  "button": "BOOK NOW",
  "image": "https://example.com/image.jpg",
  "inclusions": [
    "Pickup and Drop off by 4×4 Vehicle",
    "Estimated Pickup Time 3:00 - 3:30 pm",
    "Red Dunes Desert Safari 30 min"
  ]
}
```

## Styling

The admin panel uses your existing design system:
- **Primary Color**: Red (#dc2626) - Desert Rose theme
- **Secondary Color**: Gold (#f59e0b) - Desert sand
- **Background**: Warm desert tones
- **Typography**: Consistent with your main website

## Navigation

- **Dashboard** (`/admin`) - Main overview
- **Create Product** (`/admin/create-product`) - Add new tours
- **Products** (`/admin/products`) - Manage existing tours
- **Back to Website** - Return to main site

## Error Handling

- Form validation with helpful error messages
- API error handling with retry options
- Loading states for better user experience
- Success confirmations for completed actions

## Responsive Design

The admin panel is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Troubleshooting

### API Connection Issues
- Ensure your backend server is running on port 5000
- Check that the API endpoint `/api/produc` is accessible
- Verify CORS settings if needed

### Form Issues
- All required fields must be filled
- Image URLs must be valid URLs
- At least one inclusion is required

### Styling Issues
- Ensure TailwindCSS is properly configured
- Check that custom CSS variables are loaded
- Verify component imports are correct

## Support

If you encounter any issues:
1. Check the browser console for error messages
2. Verify your backend API is responding correctly
3. Ensure all dependencies are installed (`npm install`)

---

**Built with**: Next.js 15, React 19, TypeScript, TailwindCSS, React Hook Form, Zod, Axios 