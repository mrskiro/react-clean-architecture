export interface CompanyDriver {
  findAll(): Promise<CompaniesJson>;
}

export type CompaniesJson = {
  companies: CompanyJson[];
};

export type CompanyJson = {
  id: number;
  name: string;
  employees: {
    id: number;
    name: string;
    createdAt: string;
  }[];
  createdAt: string;
};
