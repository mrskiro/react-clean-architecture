import { CompanyRepository } from "../interface/repository/company";
import { CompanyDriver } from "../interface/driver/company";
import { Company } from "../domain/company";
import { Employee } from "../domain/employee";

export class CompanyRepositoryImpl implements CompanyRepository {
  private readonly companyDriver: CompanyDriver;

  constructor(companyDriver: CompanyDriver) {
    this.companyDriver = companyDriver;
  }

  async findAll(): Promise<Company[]> {
    const res = await this.companyDriver.findAll();
    return res.companies.map(
      (companyEntity) =>
        new Company(
          companyEntity.id,
          companyEntity.name,
          companyEntity.employees.map(
            (employeeEntity) =>
              new Employee(
                employeeEntity.id,
                employeeEntity.name,
                new Date(employeeEntity.createdAt)
              )
          ),
          new Date(companyEntity.createdAt)
        )
    );
  }
}
