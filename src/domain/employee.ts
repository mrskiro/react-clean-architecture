export class Employee {
  readonly id: number;
  readonly name: string;
  readonly createdAt: Date;

  constructor(id: number, name: string, createdAt: Date) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
  }
}
