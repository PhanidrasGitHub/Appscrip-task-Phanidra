// src/app/layout.js
import "./globals.css"; // This line imports your CSS

export const metadata = {
  title: "Discover Our Products | mettā muse",
  description: "Explore our collection of high-quality products including backpacks and accessories.",
}; // Satisfies SEO requirements 6a and 6b

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}