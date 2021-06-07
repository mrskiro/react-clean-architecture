import { Company } from "../domain/company";
import { CompanyUseCase } from "../interface/usecase/company";
import { CompanyRepository } from "../interface/repository/company";

export class CompanyUseCaseImpl implements CompanyUseCase {
  readonly companyRepository: CompanyRepository;

  constructor(repository: CompanyRepository) {
    this.companyRepository = repository;
  }

  async fetchCompanies(): Promise<Company[]> {
    return await this.companyRepository.findAll();
  }
}
