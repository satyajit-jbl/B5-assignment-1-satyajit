function formatString(input: string, toUpper?: boolean): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
  }
  


  function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    // return items.filter(item=>item.rating>=5);
    items.forEach(item => {
        if (item.rating>=4) return items
    });
    return items
  }



  function concatenateArrays<T>(...arrays: T[][]): T[]{
    let result : T[] = [];
    for(const arr of arrays){
        result=[...result, ...arr];
    }
    return result
  }



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


  
  function processValue(value: string | number): number{
    if(typeof value === "string"){
        return value.length;
    } else {
        return value *2;
    }
  }
 


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



  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if(day === Day.Saturday || day === Day.Sunday){
        return "Weekend";
    } else { return "Weekday";}
  }

 

  async function squareAsync(n: number): Promise<number>{
    if(n<0){
        throw new Error("Negative number is not allowed")
    }

    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(n*n)
        }, 1000);
    })
  }


