# Testing Pyramid

The Testing Pyramid is a software testing strategy that helps teams balance different types of automated tests.

It suggests writing many fast, inexpensive tests and fewer slow, expensive tests.

---

# Testing Pyramid

```
           UI / E2E
          ----------
        Integration
      ----------------
         Unit Tests
```

---

# Unit Tests

Located at the base of the pyramid.

Characteristics:

- Fast
- Cheap
- Easy to maintain
- Highly reliable

Purpose:

Verify individual functions, classes, or components.

Examples:

- Angular Component Tests
- Service Tests
- Utility Functions

---

# Integration Tests

Located in the middle.

Characteristics:

- Moderate speed
- Moderate cost
- Validate interaction between components

Purpose:

Verify that different modules work correctly together.

Examples:

- Frontend + API
- API + Database
- Service Integration

---

# End-to-End (E2E) Tests

Located at the top.

Characteristics:

- Slow
- Expensive
- Complex
- High maintenance

Purpose:

Validate complete user workflows.

Examples:

- Login
- Checkout
- User Registration
- Payment Process

---

# Why the Pyramid?

Having many E2E tests creates:

- Slow pipelines
- Fragile automation
- Difficult maintenance

A healthy testing strategy includes:

- Many Unit Tests
- Some Integration Tests
- Few E2E Tests

---

# Cost Comparison

| Test Type | Speed | Cost | Maintenance |
|------------|------|------|-------------|
| Unit | High | Low | Low |
| Integration | Medium | Medium | Medium |
| E2E | Low | High | High |

---

# Example

A Login Feature might include:

Unit Tests

- Validate email
- Validate password
- Hash password

Integration Tests

- Login Service + Database
- Authentication API

E2E Tests

- User logs in through the browser
- Dashboard loads correctly

---

# Best Practices

- Prioritize Unit Tests.
- Keep Integration Tests focused.
- Automate only critical user journeys with E2E tests.
- Avoid duplicating the same validations at multiple levels.

---

# Key Takeaways

- Unit tests provide the highest return on investment.
- Integration tests verify collaboration between components.
- E2E tests validate complete business workflows.
- A balanced pyramid improves maintainability and delivery speed.