# Severity vs Priority

Severity and Priority are two different attributes used to classify software defects.

Although they are often confused, they answer different questions.

---

# Severity

Severity measures the technical impact of a defect on the software.

Question:

> How serious is this defect?

Severity is usually determined by the QA Engineer.

---

# Severity Levels

## Critical

The application cannot continue operating.

Examples:

- System crash
- Data loss
- Security breach

---

## High

Major functionality is broken.

Examples:

- Login fails
- Payment processing fails

---

## Medium

Core functionality works, but with noticeable issues.

Examples:

- Incorrect calculations
- Validation problems

---

## Low

Minor cosmetic or usability issues.

Examples:

- Typographical errors
- Misaligned buttons
- Incorrect colors

---

# Priority

Priority determines how quickly the defect should be fixed.

Question:

> How urgently should this defect be resolved?

Priority is typically assigned by the Product Owner or Project Manager.

---

# Priority Levels

High

Must be fixed immediately.

Medium

Fix during the current sprint.

Low

Can be scheduled for a future release.

---

# Severity vs Priority

| Severity | Priority |
|-----------|-----------|
| Technical impact | Business urgency |
| QA perspective | Business perspective |
| Software stability | Release planning |

---

# Examples

## Critical Severity + High Priority

```
Payment system unavailable.
```

Fix immediately.

---

## Low Severity + High Priority

```
Company logo is incorrect on the homepage before launch.
```

Not technically serious, but important for business.

---

## High Severity + Low Priority

```
A rarely used report crashes.

Only administrators access it once per year.
```

Technically severe but not urgent.

---

# Matrix

| Severity | Priority | Example |
|-----------|-----------|---------|
| Critical | High | Application crashes |
| High | Medium | Search fails |
| Medium | Medium | Incorrect calculations |
| Low | High | Branding issue before release |
| Low | Low | Typographical error |

---

# Best Practices

- Separate technical impact from business urgency.
- Discuss disagreements during triage meetings.
- Document severity and priority clearly.

---

# Key Takeaways

- Severity measures impact.
- Priority measures urgency.
- A severe bug is not always the highest priority.
