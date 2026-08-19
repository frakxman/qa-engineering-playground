# Unit Testing

Unit Testing verifies the smallest testable parts of an application in isolation.

A unit is typically a single function, method, class, or component whose behavior can be validated independently from the rest of the system.

Unit tests are usually written and maintained by developers and executed automatically during development or Continuous Integration (CI).

---

# Purpose

The primary goal of Unit Testing is to ensure that individual pieces of code behave correctly according to their specifications.

Unit tests help developers detect defects early before they affect other parts of the application.

---

# Characteristics

- Fast execution
- Easy to automate
- Independent from external systems
- Highly reliable
- Low maintenance cost
- Executed frequently during development

---

# Automation Perspective

Unit Testing is one of the most automated levels of software testing.

Because unit tests validate isolated pieces of code, they are usually the easiest tests to automate and execute frequently during development and Continuous Integration (CI).

Automation at this level provides:

- Fast feedback to developers.
- Early defect detection.
- Confidence during code changes.
- Continuous validation of business logic.

Unit tests are commonly executed automatically on every code change through CI pipelines.

Example workflow:

Developer changes code
↓
Unit Tests execute automatically
↓
Results reported
↓
Build continues or fails

---

# What Should Be Tested?

Examples include:

- Functions
- Methods
- Classes
- Components
- Utility libraries
- Validation logic
- Business rules

---

# Example

Consider the following function:

```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

A unit test verifies that:

```
add(2, 3) = 5
```

The test only evaluates this function and does not involve databases, APIs, or user interfaces.

---

# Advantages

- Detects bugs early.
- Simplifies debugging.
- Improves code quality.
- Encourages modular design.
- Provides confidence during refactoring.

---

# Limitations

Unit tests do not verify:

- Communication with APIs
- Database interactions
- User interface behavior
- Complete business workflows

These concerns are covered by higher testing levels.

---

# Common Tools

JavaScript / TypeScript

- Jest
- Jasmine
- Vitest

Angular

- Karma
- Jasmine
- Jest

Python

- unittest
- pytest

Java

- JUnit

---

# Best Practices

- Test one behavior at a time.
- Keep tests small and independent.
- Avoid external dependencies.
- Use descriptive test names.
- Follow the Arrange–Act–Assert pattern.

---

# Example Workflow

```
Function
      ↓
Unit Test
      ↓
Expected Result
```

---

# Key Takeaways

- Unit Testing validates isolated pieces of code.
- It is the foundation of the Testing Pyramid.
- Unit tests are fast, reliable, and inexpensive.
- They provide rapid feedback during development.
