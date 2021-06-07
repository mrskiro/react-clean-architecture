import { Company } from "../../domain/company";

export interface CompanyUseCase {
  fetchCompanies(): Promise<Company[]>;
}
