import { useState } from "react";
import DiamondIcon from "../../../assets/icons/diamond";
import LemonIcon from "../../../assets/icons/lemon";
import CustomCheckbox from "../../../components/checkbox";
import Separator from "../../../components/separator";
import { Employer } from "../../../models/employer";
import { BalanceByCurrency } from "./balance";
import { EmployerInfo } from "./employer-info";
import styles from "./employer.module.css";

export const EmployerComponent: React.FC<{ employer: Employer }> = ({
  employer,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.employerContainer}>
      <div className={styles.employerInfo}>
        <CustomCheckbox selected={isChecked} onChange={setIsChecked}/>
        <EmployerInfo
          fullname={employer.fullname}
          email={employer.email}
          department_id={employer.department_id}
        />
      </div>
      <div className={styles.employerBalance}>
        <BalanceByCurrency value={employer.lemons} icon={<LemonIcon />} />
        <Separator />
        <BalanceByCurrency value={employer.diamonds} icon={<DiamondIcon />} />
      </div>
    </div>
  );
};
