export class Product {
  sku: string | undefined;
  name!: string;
  description!: string;
  unitPrice!: number;
  imageUrl!: string;
  active!: boolean;
  unitsInStock!: number;
  dateCreated!: Date;
  lastUpdate!: Date;
}
