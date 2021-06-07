import * as React from "react";
import { Companies } from "./components/Companies";
import { CompanyUseCase } from "../interface/usecase/company";
import { Company } from "../domain/company";

type Props = {
  useCase: CompanyUseCase;
};

export const App: React.VFC<Props> = (props) => {
  const [companies, setCompanies] = React.useState<Company[]>([]);

  const fetchCompanies = React.useCallback(async () => {
    console.log(await props.useCase.fetchCompanies());
    setCompanies(await props.useCase.fetchCompanies());
  }, []);
  console.log({ companies });

  React.useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  return <Companies companies={companies} />;
};
