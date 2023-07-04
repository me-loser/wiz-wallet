import styles from "../styles/Header.module.css";
const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.tokens}>
        <h3 className={styles.active}>Wiz</h3>
      </div>
    </div>
  );
};

export default Sidebar;
