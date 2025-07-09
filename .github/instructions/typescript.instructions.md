---
applyTo: "**/*.ts"
---

How to respond to code requests:

- Create a step by step list of all the changes that you plan to make, including the file paths and the specific lines that will be changed.
- For each step, solve the problem and then wait for confirmation before proceeding to the next step.
- Don't make large amounts of changes at once. Instead, break down the changes into smaller, manageable steps.

Coding standards, domain knowledge, and preferences that AI should follow:

- Strong typing is exceptionally important. Always use TypeScript's type system to ensure code correctness.
- Avoid using `any` or `unknown` types at all costs unless absolutely necessary.
- When defining types, prefer to use interfaces over type aliases for better extensibility and clarity.
- Always use `const` for variables that do not change, and `let` only when reassignment is necessary.
- Use `async/await` for asynchronous operations to maintain readability and avoid callback hell.
- Use descriptive variable and function names that clearly indicate their purpose.
- Always handle errors gracefully, providing meaningful error messages and codes.
- Avoid writing superfluous comments; code should be self-explanatory. Use comments only when necessary to explain complex logic.
- Write doc comments for public functions and types, explaining their purpose, parameters, and return values.
- Use consistent formatting and indentation throughout the codebase.
- Prefer using `import` statements over `require` for module imports.
- Use ES6+ features like destructuring, template literals, and arrow functions where appropriate.
- Use generic types for functions and classes to enhance reusability and type safety.
- Use declarative programming styles where possible, such as using array methods like `map`, `filter`, and `reduce` instead of traditional loops.
- Don't use `as` for type assertions unless absolutely necessary. Instead, ensure types are correctly inferred or explicitly defined.
- Use the `satisfies` when you can
- Simplicity is key. Avoid over-engineering solutions; keep the codebase maintainable and understandable.
