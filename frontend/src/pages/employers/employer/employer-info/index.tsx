import { useAtom } from "jotai";
import styles from "./employer-info.module.css";
import { Employer } from "../../../../models/employer";
import { getDepartmentByIdAtom } from "../../../../state/atoms/departmentAtom";
import { Department } from "../../../../models/department";

type EmployerInfoProps = Pick<Employer, "fullname" | "email" | "department_id">;

export const EmployerInfo: React.FC<EmployerInfoProps> = ({
  fullname,
  email,
  department_id,
}) => {
  const [getDepartment] = useAtom(getDepartmentByIdAtom);
  const department: Department | undefined = getDepartment(department_id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <span className={styles.fullname}>{fullname}</span>

        <span className={styles.email}>{email}</span>
      </div>

      <span className={styles.department}>{department?.name || ""}</span>
    </div>
  );
};
