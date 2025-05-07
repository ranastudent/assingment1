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
