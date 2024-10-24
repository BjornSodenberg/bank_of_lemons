import AddIcon from "../../../assets/icons/add";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Сотрудники</h1>
        <div className={styles.add}>
          <AddIcon fill="#ffffff" />
        </div>
      </div>
      {/* search field */}
      <div className={styles.actionsContainer}>
        <div className={styles.action}>Выбрать</div>
        <div className={styles.action}>Выбрать все</div>
      </div>
    </div>
  );
};
