# Bug Report

A Bug Report is a formal document describing a software defect.

A good bug report enables developers to reproduce, understand, and fix the issue efficiently.

---

# Purpose

Provide all necessary information to reproduce a defect consistently.

A high-quality bug report reduces communication overhead and accelerates bug resolution.

---

# Typical Structure

| Field | Description |
|--------|-------------|
| ID | Unique identifier |
| Title | Short summary |
| Environment | Browser, OS, Version |
| Preconditions | Required setup |
| Steps to Reproduce | Actions performed |
| Expected Result | Intended behavior |
| Actual Result | Observed behavior |
| Severity | Technical impact |
| Priority | Business urgency |
| Attachments | Screenshots, Videos, Logs |

---

# Example

ID

```
BUG-125
```

Title

```
Login fails with valid credentials.
```

Environment

```
Chrome 140
Windows 11
```

Steps

1. Open Login page.
2. Enter valid credentials.
3. Click Login.

Expected Result

```
Dashboard loads.
```

Actual Result

```
"Internal Server Error" appears.
```

Severity

```
High
```

Priority

```
High
```

Attachments

- Screenshot
- Browser Console
- Network Log

---

# Characteristics of a Good Bug Report

- Clear
- Concise
- Reproducible
- Objective
- Complete

---

# Common Mistakes

- Missing steps
- Missing evidence
- Vague descriptions
- No environment information
- No expected result

---

# Best Practices

- Use descriptive titles.
- Attach screenshots.
- Include logs when available.
- Describe one issue per report.
- Verify reproducibility before reporting.

---

# Key Takeaways

- Good bug reports save developer time.
- Reproducibility is essential.
- Clear communication improves defect resolution.
