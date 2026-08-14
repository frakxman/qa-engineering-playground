# Functional Testing

Functional Testing verifies that a software application behaves according to its functional requirements.

It focuses on **what the system does**, validating that each feature produces the expected output when provided with valid and invalid inputs.

Functional Testing does not evaluate how fast, secure, or scalable the application is. Its primary objective is to ensure that the software functions correctly.

---

# Purpose

Validate that every software feature behaves according to the specified business requirements.

Functional Testing answers questions such as:

- Does the login work?
- Can users register?
- Is the payment processed correctly?
- Is the generated report accurate?

---

# Characteristics

- Requirement-driven
- Business-oriented
- Black-box testing technique
- Can be manual or automated
- Verifies expected outputs

---

# Examples

Typical functional tests include:

- User authentication
- Registration
- Password recovery
- CRUD operations
- Shopping cart
- Checkout process
- Report generation
- Search functionality

---

# Example

Requirement:

```
Users must log in using a valid email and password.
```

Test Cases:

✅ Valid credentials

Expected Result:

```
User accesses the dashboard.
```

---

❌ Invalid password

Expected Result:

```
An error message is displayed.
```

---

❌ Empty email

Expected Result:

```
Validation message appears.
```

---

# Functional Testing Levels

Functional Testing can be performed at different levels.

```
Unit Testing
        ↓
Integration Testing
        ↓
System Testing
        ↓
Acceptance Testing
```

---

# Advantages

- Validates business requirements.
- Detects functional defects.
- Improves software reliability.
- Ensures expected behavior.

---

# Limitations

Functional Testing does not evaluate:

- Performance
- Security
- Scalability
- Accessibility
- Reliability

These belong to Non-Functional Testing.

---

# Common Tools

Manual

- TestRail
- Jira

Automation

- Cypress
- Playwright
- Selenium

API

- Postman
- Newman

---

# Best Practices

- Test positive scenarios.
- Test negative scenarios.
- Validate boundary conditions.
- Use realistic test data.
- Trace tests to business requirements.

---

# Functional vs Non-Functional

| Functional | Non-Functional |
|------------|----------------|
| What the software does | How the software behaves |
| Business requirements | Quality attributes |
| Login | Response time |
| Registration | Performance |
| Payments | Security |

---

# Key Takeaways

- Functional Testing verifies software behavior.
- It focuses on business requirements.
- It can be manual or automated.
- It answers the question: **Does the application work correctly?**
