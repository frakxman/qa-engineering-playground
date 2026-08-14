# Testing Quadrants

The Agile Testing Quadrants classify testing activities according to their business purpose and technical focus.

Unlike the Testing Pyramid, the quadrants help teams understand *why* different tests are performed.

---

# Agile Testing Quadrants

```
                 Business Facing
                       ▲
                       │
        Q2             │             Q3
-----------------------│-----------------------
Supports Team          │ Critiques Product
Functional Tests       │ Exploratory Tests
Acceptance Tests       │ Usability Tests
-----------------------│-----------------------
        Q1             │             Q4
Technology Facing      │ Technology Facing
Supports Team          │ Critiques Product
Unit Tests             │ Performance
Integration Tests      │ Security
Component Tests        │ Load Testing
                       ▼
```

---

# Quadrant 1 (Q1)

Technology-facing.

Supports developers.

Examples:

- Unit Testing
- Component Testing
- API Testing
- Integration Testing

Goal:

Ensure code works correctly.

---

# Quadrant 2 (Q2)

Business-facing.

Supports the team.

Examples:

- Acceptance Testing
- Functional Testing
- User Stories Validation

Goal:

Verify business requirements.

---

# Quadrant 3 (Q3)

Business-facing.

Critiques the product.

Examples:

- Exploratory Testing
- Usability Testing
- User Experience Testing

Goal:

Evaluate the product from the user's perspective.

---

# Quadrant 4 (Q4)

Technology-facing.

Critiques the product.

Examples:

- Performance Testing
- Security Testing
- Load Testing
- Scalability Testing

Goal:

Assess system quality under different technical conditions.

---

# Why Are Quadrants Important?

They remind teams that software quality is broader than functional correctness.

A complete testing strategy includes activities from all four quadrants.

---

# Summary

| Quadrant | Focus | Examples |
|----------|-------|----------|
| Q1 | Code Quality | Unit, Integration |
| Q2 | Business Requirements | Acceptance, Functional |
| Q3 | User Experience | Exploratory, Usability |
| Q4 | Technical Quality | Performance, Security |

---

# Key Takeaways

- The quadrants organize testing by purpose.
- Different quadrants answer different quality questions.
- Effective QA strategies combine activities from all four quadrants.