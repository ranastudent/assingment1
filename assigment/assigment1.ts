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