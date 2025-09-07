# MOMO Website

A modern, professional, and fully responsive website for MOMO, a National Disability Insurance Scheme (NDIS) service provider built with Next.js, Tailwind CSS, TypeScript, and ShadCN/UI.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with calming color palette (blues, greens, whites)
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Professional Typography**: Poppins font family for a friendly, inclusive feel
- **Smooth Animations**: Hover effects and transitions throughout the site
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Accessibility**: Built with accessibility best practices

## 📄 Pages

1. **Home Page** - Hero section, about overview, services preview, testimonials, and CTA
2. **About Page** - Mission, vision, values, team introduction, and achievements
3. **Services Page** - Detailed service cards with pricing and features
4. **Resources Page** - NDIS guides, official resources, FAQ, and support contacts
5. **Contact Page** - Contact form, location info, business hours, and FAQ

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework for styling
- **ShadCN/UI** - Modern UI components (Button, Card, Input, Textarea)
- **Lucide React** - Beautiful, customizable icons
- **Poppins Font** - Professional, friendly typography

## 🎨 Design Features

- Rounded corners and soft shadows
- Gradient backgrounds and modern color scheme
- Interactive hover effects and animations
- Card-based layouts with clean spacing
- Professional stock image placeholders
- Consistent iconography throughout

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd momo-fam-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🎯 Key Sections

### Home Page
- Hero banner with compelling headline and CTA buttons
- About section with mission statement
- Services overview with interactive cards
- Why Choose Us section with key benefits
- Client testimonials carousel
- Call-to-action section

### Services
- Personal Care assistance
- Community Participation support
- Support Coordination services
- Household Tasks help
- Allied Health & Therapy services

### Resources
- NDIS getting started guide
- Official government resources
- Frequently asked questions
- Support contact information

## 🔧 Customization

### Colors
The color scheme can be customized in `tailwind.config.ts`:
- Primary: Blue tones
- Secondary: Green accents
- Neutral: Gray scale

### Content
All content is easily editable in the respective page components:
- `src/app/page.tsx` - Home page
- `src/app/about/page.tsx` - About page
- `src/app/services/page.tsx` - Services page
- `src/app/resources/page.tsx` - Resources page
- `src/app/contact/page.tsx` - Contact page

### Components
Reusable components are located in `src/components/`:
- `Header.tsx` - Navigation header
- `Footer.tsx` - Site footer
- `ui/` - ShadCN/UI components

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Deployment Options
- **Netlify**: Connect GitHub repository
- **AWS Amplify**: Deploy from Git repository
- **Railway**: Deploy with zero configuration

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions about this website template, please contact:
- Email: info@momofam.com.au
- Phone: (02) 1234 5678

---

Built with ❤️ for the NDIS community
