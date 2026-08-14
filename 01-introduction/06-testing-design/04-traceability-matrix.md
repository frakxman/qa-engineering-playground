# Requirement Traceability Matrix (RTM)

A Requirement Traceability Matrix (RTM) is a document that links business requirements with their corresponding test cases.

Its purpose is to ensure that every requirement is validated and that no functionality is left untested.

---

# Purpose

Provide complete visibility between:

- Requirements
- Test Cases
- Test Execution
- Defects

The RTM answers:

> Has every requirement been tested?

---

# Typical Structure

| Requirement | Test Case | Status | Defects |
|-------------|-----------|--------|----------|
| RQ-001 | TC-001 | Pass | None |
| RQ-002 | TC-005 | Fail | BUG-014 |
| RQ-003 | TC-010 | Pass | None |

---

# Example

Requirement

```
Users can reset their password.
```

Linked Test Cases

```
TC-021

TC-022

TC-023
```

Execution

```
Pass

Pass

Fail
```

Defect

```
BUG-081
```

---

# Benefits

- Ensures complete requirement coverage.
- Simplifies impact analysis.
- Improves project visibility.
- Supports audits and compliance.
- Helps identify missing tests.

---

# Forward Traceability

Requirement

↓

Test Case

↓

Execution

Verifies that every requirement is tested.

---

# Backward Traceability

Test Case

↓

Requirement

Verifies that every test case has a valid business purpose.

---

# Best Practices

- Assign unique IDs.
- Update continuously.
- Link every requirement.
- Track execution status.
- Include defect references.

---

# RTM vs Test Case

| RTM | Test Case |
|------|-----------|
| Requirement coverage | Functional validation |
| High-level view | Detailed execution |
| Project tracking | Testing execution |

---

# Key Takeaways

- The RTM connects requirements and testing.
- It guarantees complete test coverage.
- It improves project management and quality assurance.
- It is an essential artifact in medium and large software projects.
