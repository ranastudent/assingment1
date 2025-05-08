# Blog   ----> Interview Questions - Blog Task

Q1---> What are some differences between interfaces and types in TypeScript?

ANS : In TypeScript, both interfaces and type aliases can be used to define the shape of an object, but there are some differences:
1. Extending:
   * Interfaces are better for extending: they can be extended using extends or by    declaring the same interface name multiple times.
   * Types use intersections (&) for combining, which is more limited.
2. Declaration Merging:
   * Interfaces support declaration merging — if you declare the same interface name twice, TypeScript merges them.
   * Types don’t support merging — redeclaring the same type name causes an error.
3. Use Cases:
   * Use interfaces for object shapes .
   * Use types for any kind of data like array and object .
4. Syntax Capabilities:
   * Types can represent unions, intersections, and mapped types, which interfaces cannot do directly.

Q2---->What is the use of the keyof keyword in TypeScript? Provide an example.

ANS : keyof is helpful when you want to refer to the keys of a type safely and dynamically, especially in generic functions or utility types.  just like keyof T means 'the keys of T  
      Example :
      
      type Person = {
      name: string;
      age: number;
      };
      type PersonKeys = keyof Person;
      // here  PersonKeys is "name" | "age"


Q3---->Explain the difference between any, unknown, and never types in TypeScript.

ANS : 1. any
            * Disables type checking completely.
            * You can assign anything to it, and you can also access any property or method without error.
      2. unknown
            * Similar to any, but type-safe.
            * You can assign anything to it, but you cannot use it until you check or assert its type.
            Example :
                  let value: unknown = "hello";
                  // value.toUpperCase();  Error
                  if (typeof value === "string") {
                console.log(value.toUpperCase()); //  Safe
                  }

                    
          
                      
    3. never
          * Represents values that never occur.
          * Used in:
                  * Functions that never return (e.g., throw an error or infinite loop).
                  * Exhaustiveness checks in switch statements
                  example : 
                            function throwError(message: string): never {
                            throw new Error(message); // never returns
                              }


Q4.What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

ANS: enums (short for enumerations) are a feature that allows you to define a set of named constants.   Enums come in two main types:
      1. Numeric Enums
      2. String Enums

     1. Numeric Enum
      In a numeric enum, members are assigned numeric values, starting from 0 by default or from a custom value.

      typescript
      Copy
      Edit
      enum Direction {
      Up,      // 0
      Down,    // 1
      Left,    // 2
      Right    // 3
      }

      // Usage
      let move: Direction = Direction.Up;
      console.log(move); // Output: 0

      2. String Enum
        In a string enum, each member must be initialized with a string literal. This is often more readable in logs and debugging.

        typescript
        Copy
        Edit
        enum Direction {
        Up = "UP",
        Down = "DOWN",
        Left = "LEFT",
        Right = "RIGHT"
        }

        // Usage
        let move: Direction = Direction.Left;
        console.log(move); // Output: "LEFT"

        Why Use Enums?
          Improves readability and maintainability

          Ensures type safety

          Provides semantic meaning to sets of values

          Useful in switch statements or condition checks involving fixed categories

          Would you like to see how enums are compiled to JavaScript?











      
