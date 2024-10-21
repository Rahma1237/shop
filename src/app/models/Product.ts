export class Product {
  constructor(
    public id: number,
    public title: string,
    public descreption: string,
    public category: string,
    public price: number,
    public stock: number,
    public images: string[]
  ) {}
}
