import styles from "./balance.module.css";

type BalanceByCurrencyProps = {
  value: number;
  icon: React.ReactNode;
};

export const BalanceByCurrency = ({ value, icon }: BalanceByCurrencyProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.value}>{value}</span>
      {icon}
    </div>
  );
};
