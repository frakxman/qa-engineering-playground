# 02 · Test Design

## Objective

Learn how to design effective test cases from requirements by
identifying meaningful input classes, boundaries, combinations,
state changes, and likely defect patterns.

Test design techniques help testers achieve useful coverage without
having to test every possible input or scenario.

---

## Learning Path

### 01 · Equivalence Partitioning

Group inputs that are expected to behave in the same way.

Key idea:

> Test representative values from meaningful groups instead of
> testing every possible value.

---

### 02 · Boundary Value Analysis

Focus testing around the edges of valid and invalid partitions.

Key idea:

> Defects frequently occur at boundaries, so test the boundary and
> the values immediately around it.

---

### 03 · Decision Table Testing

Identify combinations of conditions and their expected outcomes.

Key idea:

> When system behavior depends on multiple conditions, represent
> the business rules systematically.

---

### 04 · State Transition Testing

Test how a system behaves when an object changes from one state
to another.

Key idea:

> The same action can produce different results depending on the
> current state.

---

### 05 · Error Guessing

Use tester experience and knowledge of common defect patterns to
identify additional high-risk tests.

Key idea:

> Some useful tests come from anticipating how a system is likely
> to fail.

---

## Practice Roadmap

| Experiment | Technique | Scenario |
|---|---|---|
| 01 | Equivalence Partitioning | Age validation |
| 02 | Boundary Value Analysis | Age boundaries |
| 03 | Decision Tables | Login access rules |
| 04 | State Transition Testing | Account states |
| 05 | Error Guessing | Common defect patterns |

---

## Test Design Mindset

Good test design is not about creating the largest possible number
of test cases.

The goal is to identify tests that provide meaningful coverage of:

- Valid behavior
- Invalid behavior
- Boundaries
- Business rules
- State changes
- High-risk conditions
- Common failure patterns

---

## Learning Progression

Understand
↓
Identify conditions
↓
Design test cases
↓
Execute tests
↓
Analyze results
↓
Improve coverage

---

## Interactive Playground

The concepts in this module are demonstrated through interactive
experiments in the QA Engineering Playground.

The experiments allow the learner to change inputs, evaluate the
expected behavior, and understand why a particular test design
technique produces a particular result.
