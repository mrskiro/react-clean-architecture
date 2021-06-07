import * as React from "react";
import { Company } from "../../domain/company";
import { CompanyItem } from "./CompanyItem";

type Props = {
  companies: Company[];
};

export const Companies: React.VFC<Props> = (props) => (
  <>
    {props.companies.map((company) => (
      <CompanyItem key={company.id} company={company} />
    ))}
  </>
);
