import React, { useState } from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className={styles.card}>
      
      <div className={styles.imageContainer}>
        <img 
          src={product.image} 
          alt={`Image of ${product.title}`} 
          className={styles.image}
        />
      </div>

      <div className={styles.details}>
        <div className={styles.titleRow}>
          <h2 className={styles.productTitle}>
            {product.title.length > 25 
              ? `${product.title.substring(0, 25)}...` 
              : product.title}
          </h2>
          
          
          <button 
            className={styles.wishlistBtn} 
            onClick={() => setIsWishlisted(!isWishlisted)}
            aria-label="Toggle Wishlist"
          >
            {isWishlisted ? (
              <span className={styles.heartSolid}>❤️</span>
            ) : (
              <span className={styles.heartOutline}>♡</span>
            )}
          </button>
        </div>

      
        <p className={styles.pricingText}>
          <span className={styles.signInLink}>Sign in</span> or Create an account to see pricing
        </p>
      </div>
    </div>
  );
};

export default ProductCard;