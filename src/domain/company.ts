import { Employee } from "./employee";

export class Company {
  readonly id: number;
  readonly name: string;
  readonly employees: Employee[];
  readonly createdAt: Date;

  constructor(
    id: number,
    name: string,
    employees: Employee[],
    createdAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.employees = employees;
    this.createdAt = createdAt;
  }
}
