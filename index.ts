function formatString(input: string, toUpper?: boolean): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
  }
  
  console.log(formatString("Hello"));
  console.log(formatString("Hello", true));
  console.log(formatString("Hello", false));


  function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    // return items.filter(item=>item.rating>=5);
    items.forEach(item => {
        if (item.rating>=4) return items
    });
    return items
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];

  const result = filterByRating(books);
  console.log(result);

  function concatenateArrays<T>(...arrays: T[][]): T[]{
    let result : T[] = [];
    for(const arr of arrays){
        result=[...result, ...arr];
    }
    return result
  }

  console.log(concatenateArrays(["a", "b"], ["c"]));
  console.log(concatenateArrays([1, 2], [3, 4], [5]));


  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number){
        this.make = make;
        this.year = year;
    }

    public getInfo(): string{
         return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  class Car extends Vehicle{
    private model: string;

    constructor(make: string, year: number, model: string){
        super(make, year);
        this.model = model
    }

    public getModel():string{
        return `Model: ${this.model}`;
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");
  console.log(myCar.getInfo());
  console.log(myCar.getModel());
  
  function processValue(value: string | number): number{
    if(typeof value === "string"){
        return value.length;
    } else {
        return value *2;
    }
  }
  console.log(processValue("hello"));
  console.log(processValue(10));


  interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length === 0){
        return null;
    }
    let mostExpensive = products[0];

    for(const product of products){
        if(product.price > mostExpensive.price){
            mostExpensive = product;
        }  
    }
    return mostExpensive;
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];

  console.log(getMostExpensiveProduct(products));