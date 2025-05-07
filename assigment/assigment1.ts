//
function formatString (input : string , flag ? : boolean) : string {
      if (flag == true || flag == null){
            return input.toUpperCase();
      }
      if (flag == false) {
            return input.toLowerCase();
      }
      else {
            return `${input} is not a string`
      }
}

const example1 = formatString("Hello");
const example2 = formatString("Hello", false);
const example3 = formatString("Hello", true);

console.log(example1)
console.log(example2)
console.log(example3)
//

//
type Book = {
      title : string,
      rating : number
}

function filterByRating(items : Book[]) : Book[] {
      return items.filter(item => item.rating >= 4);
}

const books = [
      { title: "Book A", rating: 4.5 },
      { title: "Book B", rating: 3.2 },
      { title: "Book C", rating: 5.0 }
    ];
    
    console.log(filterByRating(books))

//

//
function concatenateArrays<T>(...arrays: T[][]): T[] {
      return arrays.reduce((acc, array)=> acc.concat(array), []);
}

const result1 = concatenateArrays<number>([1,2,3], [4,5,6]);
const result2 = concatenateArrays<string>(["a", "b", "c"], ["d", "e", "f"]);

console.log(result1);
console.log(result2);
//

//
class Vehicle {
       private make : string;
       private year : number;

       constructor(make : string, year : number){
            this.make = make;
            this.year = year;
       }
       
        getInfo = () : void => {
            console.log(`Make: ${this.make}, year: ${this.year}`)
       }
}

class Car extends Vehicle {
      private model : string;
      constructor(make : string, year : number, model : string){
            super(make, year);
            this.model = model;
      }

      getModel = () : void => {
            console.log(`Model: ${this.model}`)
      }
}

const myCar = new Car("Toytata", 2022, "Camry");

myCar.getInfo();
myCar.getModel();

//
function processValue(value: string | number): number {
      if (typeof value === "string") {
            return value.length
      }
      if (typeof value === "number") {
            return value * 2 ;
      }
      else {
            return 0 ;
      }
}
console.log(processValue("Hello"));
console.log(processValue(5));
//

interface Product {
      name : string,
      price : number
}

function getMostExpensiveProduct(products: Product[]): Product | null {
      if (products.length == 0) {
            return null;
      }

      return products.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
}

const products: Product[] = [
      {name : "Product A", price : 10},
      {name : "Product B", price : 20},
      {name : "Product c", price : 30},
      {name : "Product D", price : 25},
]

console.log(getMostExpensiveProduct(products))

//

//
enum Day {
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      Sunday
    }
    
    function getDayType(day: Day): string {
      if (day == Day.Saturday || day == Day.Sunday) {
            return "Weekend";
      }
      else {
            return "Weekday"
      }
    }

    console.log(getDayType(Day.Monday));
    console.log(getDayType(Day.Sunday))
//

//

async function squareAsync(n: number): Promise<number> {
      return new Promise((resolve, reject) => {
            if (n < 0) {
                  reject(new Error("Input number cannot be negative"))
            } else {
                  setTimeout(()=> {
                        resolve(n * n);
                  }, 1000)
            }
      })
}

squareAsync(4)
    .then(console.log)        
    .catch(console.error);

squareAsync(-3)      
    .then(console.log)        
    .catch(console.error);


//