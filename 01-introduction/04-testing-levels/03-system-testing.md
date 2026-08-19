# System Testing

System Testing evaluates the complete software application as a fully integrated system.

The objective is to verify that the entire application satisfies both functional and non-functional requirements.

Unlike Unit or Integration Testing, System Testing focuses on complete business workflows.

---

# Purpose

Validate the behavior of the complete software system before it is released to users.

---

# Characteristics

- Tests the entire application.
- Performed in an environment similar to production.
- Covers complete user workflows.
- Includes functional and non-functional validation.

---

# Automation Perspective

System Testing is commonly automated to validate complete user workflows and critical business scenarios.

Because these tests simulate real user behavior, they usually have higher complexity and maintenance costs compared with lower testing levels.

Automation at this level is useful for:

- Regression testing.
- Critical business flows.
- End-to-end validation.
- Release confidence.

Common automated scenarios include:

- User registration.
- Login and authentication.
- Shopping workflows.
- Payment processes.
- Complete application journeys.

Example workflow:

User Action
↓
Application Flow
↓
Automated Validation
↓
Test Report
↓
Release Decision

---

# Examples

Examples include:

- User registration
- User login
- Shopping cart
- Online payment
- Report generation
- Order management

---

# Example

An e-commerce purchase flow:

```
Login
      ↓
Browse Products
      ↓
Add to Cart
      ↓
Checkout
      ↓
Payment
      ↓
Confirmation
```

System Testing verifies that the entire workflow functions correctly.

---

# Types of System Testing

- Functional Testing
- Performance Testing
- Security Testing
- Usability Testing
- Accessibility Testing
- Recovery Testing
- Compatibility Testing

---

# Advantages

- Validates complete business processes.
- Detects integration issues missed earlier.
- Simulates real user behavior.
- Provides confidence before release.

---

# Limitations

- Slower execution.
- Higher maintenance cost.
- More complex environments.
- Difficult to isolate failures.

---

# Common Tools

UI Automation

- Cypress
- Playwright
- Selenium

API Validation

- Postman
- Newman

Performance

- JMeter
- k6

---

# Best Practices

- Execute realistic user scenarios.
- Use production-like environments.
- Validate both positive and negative cases.
- Include non-functional testing.

---

# Comparison

| Level | Scope |
|--------|------|
| Unit | Single function |
| Integration | Multiple components |
| System | Complete application |

---

# Key Takeaways

- System Testing validates the entire software product.
- It simulates real-world usage.
- It verifies both business and technical requirements.
- It is performed before Acceptance Testing.
