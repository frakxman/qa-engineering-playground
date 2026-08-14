# Test Case

A Test Case is a documented set of conditions, inputs, actions, and expected results used to verify that a software feature behaves according to its requirements.

Test cases provide a repeatable and structured approach to software validation.

---

# Purpose

The objective of a Test Case is to verify that a specific functionality works correctly under predefined conditions.

A good test case should be:

- Clear
- Repeatable
- Independent
- Traceable
- Easy to understand

---

# Typical Structure

A test case usually contains:

| Field | Description |
|--------|-------------|
| ID | Unique identifier |
| Title | Short description |
| Preconditions | Required setup |
| Steps | Actions to perform |
| Test Data | Input values |
| Expected Result | Expected behavior |
| Actual Result | Observed behavior |
| Status | Pass / Fail |

---

# Example

## Test Case

```
ID:
TC-LOGIN-001
```

Title

```
Valid User Login
```

Preconditions

- User account exists

Test Data

```
Email:
john@example.com

Password:
Password123
```

Steps

1. Open Login page.
2. Enter email.
3. Enter password.
4. Click Login.

Expected Result

```
Dashboard is displayed.
```

---

# Good Test Cases

Good test cases should:

- Test only one objective.
- Be independent.
- Use realistic data.
- Be easy to reproduce.
- Include expected outcomes.

---

# Positive vs Negative Test Cases

Positive

```
Valid credentials
```

Expected

```
Login succeeds.
```

Negative

```
Invalid password
```

Expected

```
Error message displayed.
```

---

# Benefits

- Repeatable testing
- Better documentation
- Easier automation
- Improved communication
- Requirement validation

---

# Best Practices

- Write concise steps.
- Avoid ambiguity.
- Use meaningful IDs.
- Keep expected results measurable.
- Review test cases regularly.

---

# Key Takeaways

- Test Cases verify specific functionality.
- They standardize software validation.
- Well-written test cases simplify manual and automated testing.
