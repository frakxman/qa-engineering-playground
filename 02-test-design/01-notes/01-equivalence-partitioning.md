# Equivalence Partitioning

Equivalence Partitioning is a test design technique where input values are divided into groups, called partitions, that are expected to be handled in the same way by the system.

Instead of testing every possible input value, the tester selects representative values from each partition.

## Example Requirement

Users must be between 18 and 65 years old.

This requirement creates three meaningful partitions.

| Partition | Values | Expected Behavior |
|---|---|---|
| Invalid | `< 18` | Reject |
| Valid | `18–65` | Accept |
| Invalid | `> 65` | Reject |

The important idea is that values within the same partition are expected to behave similarly.

---

## Selecting Test Values

We do not need to test every possible value below 18.

For example, the invalid partition contains values such as 1, 2, 3, and so on up to 17.

If the requirement treats all values below 18 in the same way, one representative value may be sufficient to cover that equivalence partition.

The same principle applies to the valid and upper-invalid partitions.

For example:

| Test Case | Input | Partition | Expected |
|---|---:|---|---|
| TC-01 | 17 | Invalid `< 18` | Reject |
| TC-02 | 25 | Valid `18–65` | Accept |
| TC-03 | 66 | Invalid `> 65` | Reject |

The selected values are representatives of their respective partitions.


---

## Why This Helps

Without equivalence partitioning, a tester may create many redundant tests.

For example, testing every age from 1 to 120 would produce many tests that exercise essentially the same rules.

Equivalence Partitioning reduces the number of tests while maintaining meaningful coverage of the defined input classes.

The goal is not to test fewer values simply for the sake of reducing the number of test cases.

The goal is to select values that represent different expected system behaviors.

---

## Important Limitation

Equivalence Partitioning alone does not focus specifically on the edges of a partition.

For example, if the valid range is 18–65, testing 25 verifies the valid partition, but it does not specifically target the risk around 18 or 65.

A defect could exist in the implementation of the boundary while the representative value 25 still behaves correctly.

That is where Boundary Value Analysis becomes useful.

---

## Connection to Boundary Value Analysis

Equivalence Partitioning asks:

> Which groups of inputs are expected to behave differently?

Boundary Value Analysis asks:

> What happens at and immediately around the edges of those groups?

For the requirement 18–65, Equivalence Partitioning identifies:

- `< 18` → Invalid
- `18–65` → Valid
- `> 65` → Invalid

Boundary Value Analysis then focuses on values around the boundaries:

- 17 → immediately below the minimum
- 18 → minimum boundary
- 19 → immediately above the minimum
- 64 → immediately below the maximum
- 65 → maximum boundary
- 66 → immediately above the maximum

These techniques work well together.

---

## QA Thinking

When applying Equivalence Partitioning, ask:

1. What inputs does the requirement accept?
2. What inputs does the requirement reject?
3. Which inputs are expected to behave the same way?
4. Where does the expected behavior change?
5. What representative value can I use for each partition?

The important skill is learning to derive partitions from the requirement rather than choosing test values randomly.

---

## Interactive Experiment

The QA Engineering Playground demonstrates this technique through an interactive age-validation experiment.

### Requirement

Users must be between 18 and 65 years old.

The learner enters an age and evaluates which equivalence partition the value belongs to.

Possible results:

| Input | Partition | Expected Result |
|---|---|---|
| `< 18` | Invalid | Reject |
| `18–65` | Valid | Accept |
| `> 65` | Invalid | Reject |

The experiment demonstrates how one input can represent an entire equivalence partition.

---

## Key Takeaway

Equivalence Partitioning helps testers design efficient tests by grouping inputs according to expected system behavior.

A good test set should include representative values from each meaningful partition.

However, partition coverage does not necessarily provide boundary coverage.

For stronger input-focused testing, Equivalence Partitioning should often be combined with Boundary Value Analysis.
