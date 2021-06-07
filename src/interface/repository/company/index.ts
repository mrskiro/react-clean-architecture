import { Company } from "../../../domain/company";

export interface CompanyRepository {
  findAll(): Promise<Company[]>;
}
