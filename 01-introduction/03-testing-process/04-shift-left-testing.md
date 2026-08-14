# Shift-Left Testing

Shift-Left Testing is a software quality strategy that encourages testing activities to begin as early as possible in the Software Development Life Cycle (SDLC).

Instead of waiting until development is complete, QA participates from the beginning of the project.

---

# Traditional Approach

```
Requirements
      ↓
Design
      ↓
Development
      ↓
Testing
      ↓
Production
```

Problems:

- Bugs discovered late
- Expensive fixes
- Delayed releases

---

# Shift-Left Approach

```
Requirements
      ↓
Testing
      ↓
Design
      ↓
Testing
      ↓
Development
      ↓
Testing
      ↓
Deployment
```

Testing becomes a continuous activity.

---

# Benefits

- Earlier defect detection
- Lower development costs
- Better collaboration
- Faster releases
- Higher software quality

---

# QA Responsibilities

Modern QA Engineers contribute during:

Requirements

- Review acceptance criteria
- Identify missing requirements

Design

- Review architecture
- Identify testing risks

Development

- Pair with developers
- Review testability
- Create automated tests

Deployment

- Validate production readiness
- Execute smoke tests

---

# Cost of Fixing Defects

```
Requirements   $
Design         $$
Development    $$$
Testing        $$$$
Production     $$$$$$$$
```

The later a defect is found, the more expensive it becomes to fix.

---

# Shift-Left Practices

- Requirement Reviews
- Static Analysis
- Code Reviews
- Unit Testing
- Continuous Integration
- Test Automation
- Pair Programming
- Behavior-Driven Development (BDD)

---

# Example

Traditional

```
Developer
      ↓
QA
      ↓
Bug Found
      ↓
Developer
```

Shift-Left

```
Developer
      ↓
Code Review
      ↓
Unit Tests
      ↓
QA Review
      ↓
Deployment
```

Many defects are prevented before reaching QA.

---

# Key Takeaways

- Testing starts from the first project phase.
- QA is involved throughout the SDLC.
- Early feedback reduces cost and risk.
- Shift-Left improves collaboration and delivery speed.
- Quality becomes a shared responsibility across the entire development team.