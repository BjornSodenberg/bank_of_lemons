import React from "react";
import { Employer } from "../../models/employer";
import { Header } from "./header";
import { EmployerComponent } from "./employer/employer";
import { useAtom } from "jotai";
import { departmentAtom } from "../../state/atoms/departmentAtom";

export const EmployersComponent = () => {
  const [employers, setEmployers] = React.useState<Employer[]>([]);

  const [, setDepartments] = useAtom(departmentAtom);


  React.useEffect(() => {
    async function fetchEmployers() {
      const response = await fetch("http://localhost:8080/employers");
      const data = await response.json();
      setEmployers(data);
    }

    async function fetchDepartments() {
      const response = await fetch("http://localhost:8080/departments");
      const data = await response.json();
      setDepartments(data);
    }

    fetchDepartments();
    fetchEmployers();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <Header />
      {employers &&
        employers.map((employer) => <EmployerComponent employer={employer} key={employer.id}/>)}
    </div>
  );
};


