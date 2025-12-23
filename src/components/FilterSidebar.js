import styles from './FilterSidebar.module.css';

export default function FilterSidebar() {
  const sections = ["IDEAL FOR", "OCCASION", "WORK", "FABRIC", "SEGMENT", "SUITABLE FOR", "RAW MATERIALS", "PATTERN"];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.customizable}>
        <input type="checkbox" id="cust" />
        <label htmlFor="cust">CUSTOMIZABLE</label>
      </div>

      {sections.map((section) => (
        <div key={section} className={styles.section}>
          <div className={styles.sectionHeader}>
            <span>{section}</span>
            <span>⌵</span>
          </div>
          <p className={styles.subtext}>All</p>
        </div>
      ))}
    </aside>
  );
}