# Error vs Defect vs Failure

Understanding the difference between **Error**, **Defect**, and **Failure** is one of the most important concepts in Software Testing. These terms are closely related but describe different stages in the software development process.

---

# Error

An **Error** is a human mistake made during software development.

Errors are introduced by developers, analysts, designers, or any team member involved in the software lifecycle.

Examples:

- Misunderstanding a business requirement.
- Writing incorrect logic.
- Making a typo in the source code.
- Incorrect system configuration.

An error is the root cause of many software problems.

---

# Defect (Bug)

A **Defect** (commonly called a **Bug**) is an issue in the software caused by one or more human errors.

The defect exists in the source code, design, documentation, or configuration before the software is executed.

Examples:

- Incorrect calculation.
- Missing validation.
- Broken API endpoint.
- Wrong database query.

QA Engineers identify defects during testing.

---

# Failure

A **Failure** occurs when the software behaves differently from the expected result during execution.

A failure is the visible consequence of one or more defects.

Examples:

- Application crashes.
- Login does not work.
- Wrong information is displayed.
- Payment cannot be completed.

Users experience failures, not defects.

---

# Relationship

The relationship between these concepts can be summarized as follows:

```
Human Mistake
      ↓
    Error
      ↓
Incorrect Code
      ↓
    Defect
      ↓
Application Execution
      ↓
    Failure
```

---

# Example

Requirement:

```
Users must be at least 18 years old to register.
```

Developer writes:

```typescript
if (age > 18)
```

instead of

```typescript
if (age >= 18)
```

Result:

- Error → Developer misunderstood the requirement.
- Defect → Incorrect comparison operator in the code.
- Failure → Users who are exactly 18 years old cannot register.

---

# Comparison

| Concept | Description | Who Causes It? | When It Happens |
|----------|-------------|----------------|-----------------|
| Error | Human mistake | Developer, Analyst, Designer | During development |
| Defect | Problem in the software | Generated from an error | Before execution |
| Failure | Incorrect software behavior | Triggered by a defect | During execution |

---

# Key Takeaways

- Errors are human mistakes.
- Defects are flaws in the software.
- Failures are incorrect software behaviors observed during execution.
- Not every defect immediately causes a failure.
- Multiple defects may produce a single failure.
