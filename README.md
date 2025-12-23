Product Listing Page (PLP) - Appscrip Task
A fully functional, responsive Product Listing Page built with Next.js using the App Router. This project replicates the provided Figma design while adhering to high standards of SEO, performance, and clean code.

🚀 Live Demo
Netlify URL: [Your Netlify Link Here]

🛠️ Technical Stack & Implementation
To fulfill the requirement of "minimal dependencies" and "pure CSS", this project uses:

Framework: Next.js 14+ (React)

Styling: Pure CSS via CSS Modules (No Bootstrap, No Tailwind)

Data Fetching: Server-Side Rendering (SSR) for optimal SEO and performance

Mock API: Integrated with Fake Store API for dynamic content

✨ Features & Requirements Met
1. Responsive Design
Desktop: 4-column product grid with a collapsible filter sidebar.

Tablet: 2-column grid to maintain readability.

Mobile: 2-column grid as per the specific mobile UI design provided.

Sticky Navbar: Fixed at the top for easy access during scrolling.

2. SEO Optimization
Semantic HTML: Used tags like <header>, <main>, <section>, and <footer>.

Heading Hierarchy: Proper use of <h1> for the page title and <h2> for products.

Metadata: Defined descriptive titles and meta-descriptions.

Schema.org: Injected JSON-LD ItemList schema for better search engine indexing.

Images: All images include descriptive alt text for accessibility and SEO.

3. Clean Code & Performance
CSS Modules: Locally scoped styles to prevent conflicts and ensure a modular structure.

Minimal DOM: Avoided unnecessary nesting to keep the DOM size minimal.

Z-Index Management: Correctly handled the sticky header and card shadows to prevent overlapping issues.

💻 How to Run Locally
Clone the repository:

Bash

git clone https://github.com/yourusername/appscrip-task-phani.git
Navigate to the directory:

Bash

cd appscrip-task-phani
Install dependencies:

Bash

npm install
Run the development server:

Bash

npm run dev
View in browser: Open http://localhost:3000

📁 Project Structure
/src/app: Contains the main layout and page logic (SSR).

/src/components: Reusable UI components (Navbar, Header, ProductCard, FilterSidebar, Footer).

/public: Static assets like the Logo and Favicons.