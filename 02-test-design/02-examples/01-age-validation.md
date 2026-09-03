# Age Validation Example

This example demonstrates how Equivalence Partitioning and Boundary Value Analysis can be applied to the same requirement.

The purpose is to show how a simple requirement can be transformed into meaningful test cases using different test design techniques.

---

## Requirement

Users must be between 18 and 65 years old.

Values below 18 are invalid.

Values from 18 through 65 are valid.

Values above 65 are invalid.

This requirement contains two boundaries:

- Minimum boundary: 18
- Maximum boundary: 65

---

## Equivalence Partitions

The requirement can be divided into three equivalence partitions.

| Partition | Values | Expected Behavior |
|---|---|---|
| Invalid | `< 18` | Reject |
| Valid | `18–65` | Accept |
| Invalid | `> 65` | Reject |

Each partition contains values that are expected to produce the same system behavior.

A representative value can be selected from each partition:

| Test Case | Input | Partition | Expected Result |
|---|---:|---|---|
| TC-01 | 17 | Invalid `< 18` | Reject |
| TC-02 | 25 | Valid `18–65` | Accept |
| TC-03 | 66 | Invalid `> 65` | Reject |

These tests provide representative coverage of the three equivalence partitions.

---

## Boundary Value Analysis

The same requirement can be tested using Boundary Value Analysis.

The important values are the boundary itself and the values immediately around each boundary.

| Test Case | Input | Boundary Position | Expected Result |
|---|---:|---|---|
| TC-04 | 17 | Immediately below minimum | Reject |
| TC-05 | 18 | Minimum boundary | Accept |
| TC-06 | 19 | Immediately above minimum | Accept |
| TC-07 | 64 | Immediately below maximum | Accept |
| TC-08 | 65 | Maximum boundary | Accept |
| TC-09 | 66 | Immediately above maximum | Reject |

These tests focus on the points where the expected behavior changes.

A defect in the implementation of a comparison operator could cause a boundary value such as 18 or 65 to be handled incorrectly.

Boundary Value Analysis therefore provides additional confidence around the edges of the valid range.

---

## Comparing the Techniques

Equivalence Partitioning and Boundary Value Analysis can be applied to the same requirement, but they have different focuses.

| Technique | Main Focus | Example |
|---|---|---|
| Equivalence Partitioning | Groups of inputs | 17, 25, 66 |
| Boundary Value Analysis | Values at and around boundaries | 17, 18, 19, 64, 65, 66 |

Equivalence Partitioning helps identify representative values from different input groups.

Boundary Value Analysis focuses specifically on the edges of those groups.

For the age requirement, Equivalence Partitioning can provide a small set of representative tests, while Boundary Value Analysis provides more detailed coverage around the minimum and maximum values.

Using both techniques together provides stronger input-focused test coverage.

---

## Key Takeaway

The age validation requirement is a simple example of how different test design techniques can be applied to the same requirement.

Equivalence Partitioning identifies the meaningful input groups:

- `< 18` → Invalid
- `18–65` → Valid
- `> 65` → Invalid

Boundary Value Analysis then focuses on the edges of those groups:

- `17`, `18`, `19`
- `64`, `65`, `66`

The two techniques complement each other.

Equivalence Partitioning helps select representative values from different groups, while Boundary Value Analysis helps investigate the areas where the expected behavior changes.

Together, they provide a practical foundation for designing effective input-validation tests.

