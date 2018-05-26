export class Treatment {
  id: number;
  units: number;
  date: Date;
  type: string;
  brand: string;

  constructor(id?: number, units?: number, date?: Date, type?: string, brand?: string) {
    this.id = id;
    this.units = units;
    this.date = date;
    this.type = type;
    this.brand = brand;
  }
}
