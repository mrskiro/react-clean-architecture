import { CompanyDriver, CompaniesJson } from "../interface/driver/company";

export class CompanyDriverImpl implements CompanyDriver {
  async findAll(): Promise<CompaniesJson> {
    const res = await fetch("http://localhost:3000/companies");
    return await res.json();
  }
}
