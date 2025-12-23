import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.mb_header}>
            <span className={styles.home}>HOME</span>
            <hr />
            <span className={styles.shop}>SHOP</span>
        </div>
      <div className="container">
      
        <h1 className={styles.mainTitle}>DISCOVER OUR PRODUCTS</h1>
      
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus 
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>
    </header>
  );
}