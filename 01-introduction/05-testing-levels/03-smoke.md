# Smoke Testing

Smoke Testing is a preliminary testing activity performed to verify that the most critical functionalities of an application work correctly before more detailed testing begins.

Its purpose is to answer a simple question:

> **Is the application stable enough for further testing?**

---

# Purpose

Detect critical failures immediately after a new build or deployment.

If Smoke Testing fails, no further testing should continue until the issues are resolved.

---

# Characteristics

- Fast execution
- Covers critical functionality
- High-level validation
- Usually automated
- Executed frequently

---

# Typical Smoke Tests

Examples include:

- Application starts
- Login works
- Database connection succeeds
- Home page loads
- Main API responds
- Navigation works

---

# Example

After deploying an e-commerce application:

Smoke Checklist

```
✓ Application starts

✓ Login works

✓ Products load

✓ Shopping cart opens

✓ Checkout page opens
```

If any of these fail, the build is rejected.

---

# When Is Smoke Testing Performed?

- After every deployment
- Before Regression Testing
- Before System Testing
- Before User Acceptance Testing
- During Continuous Integration

---

# Advantages

- Detects major issues quickly.
- Saves testing time.
- Prevents unstable builds from progressing.
- Supports Continuous Delivery.

---

# Smoke vs Regression

| Smoke Testing | Regression Testing |
|---------------|--------------------|
| Small subset | Large test suite |
| Critical functionality | Entire application |
| Fast | Slower |
| Build verification | Change verification |

---

# Common Automation Tools

- Cypress
- Playwright
- Selenium
- Postman
- Newman

---

# Best Practices

- Keep smoke tests short.
- Automate whenever possible.
- Include only critical workflows.
- Execute after every deployment.
- Fail fast when critical issues are detected.

---

# Example Workflow

```
New Build
      ↓
Smoke Tests
      ↓
Passed?
      ↓
Yes
      ↓
Continue Testing

No
      ↓
Reject Build
```

---

# Key Takeaways

- Smoke Testing validates build stability.
- It focuses on critical functionality.
- It is the first automated checkpoint after deployment.
- Passing Smoke Tests allows deeper testing to begin.
