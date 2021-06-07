import * as React from "react";
import { Company } from "../../domain/company";

type Props = {
  company: Company;
};

export const CompanyItem: React.VFC<Props> = (props) => (
  <div style={{ display: "flex" }}>
    <div>{props.company.name}</div>
    <ul>
      {props.company.employees.map((employee) => (
        <li key={employee.id}>{employee.name}</li>
      ))}
    </ul>
  </div>
);
