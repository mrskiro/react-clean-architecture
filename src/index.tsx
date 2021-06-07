import React from "react";
import ReactDOM from "react-dom";
import { App } from "./presenter/App";
import { CompanyRepositoryImpl } from "./repository/company";
import { CompanyDriverImpl } from "./driver/company";
import { CompanyUseCaseImpl } from "./usecase/company";

const repository = new CompanyRepositoryImpl(new CompanyDriverImpl());
const useCase = new CompanyUseCaseImpl(repository);

ReactDOM.render(
  <React.StrictMode>
    <App useCase={useCase} />
  </React.StrictMode>,
  document.getElementById("root")
);
