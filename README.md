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
