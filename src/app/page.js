"use client";
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import styles from './page.module.css';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  // Define the JSON-LD inside the component so it can access 'products'
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Product Listing Page',
    'description': 'Explore our exclusive collection of products.',
    'itemListElement': products.map((product, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': product.title,
      'image': product.image,
    })),
  };

  return (
    <>
      {/* Requirement 6d: SEO Schema settings */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar />
      <Header />
      
      <main className="container">
        <div className={styles.filterBar}>
          <div className={styles.filterControls}>
            <span className={styles.itemCount}>{products.length} ITEMS</span>
            <button 
              className={styles.toggleBtn} 
              onClick={() => setShowFilter(!showFilter)}
            >
              {showFilter ? '< HIDE FILTER' : '> SHOW FILTER'}
            </button>
          </div>
          <select className={styles.sortSelect}>
            <option>RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>PRICE: HIGH TO LOW</option>
            <option>PRICE: LOW TO HIGH</option>
          </select>
        </div>

        <div className={styles.mainContent}>
          {showFilter && <FilterSidebar />}
          <div className={`${styles.productGrid} ${showFilter ? styles.withSidebar : ''}`}>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}