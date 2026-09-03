# Boundary Value Analysis

Boundary Value Analysis is a test design technique that focuses on values at the edges of input ranges.

It is based on the idea that defects are more likely to occur at boundaries where the system changes from one behavior to another.

Instead of testing only values inside a valid or invalid range, the tester deliberately tests values at and around the boundary.

---

## Example Requirement

Users must be between 18 and 65 years old.

The valid input range is:

- Minimum boundary: 18
- Maximum boundary: 65

Values outside this range are invalid.

The requirement can be represented as:

| Input Range | Expected Behavior |
|---|---|
| `< 18` | Reject |
| `18–65` | Accept |
| `> 65` | Reject |

Boundary Value Analysis focuses on the values around 18 and 65 rather than selecting only a typical value from the valid range.

---

## Identifying the Boundaries

A boundary is a point where the expected behavior of the system changes.

For the requirement that users must be between 18 and 65 years old, there are two important boundaries:

| Boundary | Valid Value | Invalid Value Below | Invalid Value Above |
|---|---:|---:|---:|
| Minimum | 18 | 17 | 19 |
| Maximum | 65 | 64 | 66 |

The minimum boundary is 18 because values below 18 are invalid and values from 18 onward are valid.

The maximum boundary is 65 because values up to 65 are valid and values above 65 are invalid.

The key idea is to identify where the expected system behavior changes.

---

## Selecting Boundary Values

Once the boundaries have been identified, the tester selects values at and immediately around each boundary.

For the age requirement, the important values are:

| Test Case | Input | Boundary Position | Expected |
|---|---:|---|---|
| TC-01 | 17 | Immediately below minimum | Reject |
| TC-02 | 18 | Minimum boundary | Accept |
| TC-03 | 19 | Immediately above minimum | Accept |
| TC-04 | 64 | Immediately below maximum | Accept |
| TC-05 | 65 | Maximum boundary | Accept |
| TC-06 | 66 | Immediately above maximum | Reject |

These values are useful because they test the points where implementation errors are more likely to occur.

For example, a defect such as using `>` instead of `>=` could incorrectly reject the minimum value of 18.

Similarly, using `<` instead of `<=` could incorrectly reject the maximum value of 65.

---

## Why Boundary Values Matter

Boundaries are common places for defects because developers must implement rules that determine whether a value belongs inside or outside an allowed range.

A small mistake in a comparison operator can change the expected behavior.

For example, the requirement says:

18–65

If the implementation uses:

age > 18

instead of:

age >= 18

then the valid boundary value `18` would be incorrectly rejected.

Another possible defect is:

age < 65

instead of:

age <= 65

In that case, the valid boundary value `65` would also be incorrectly rejected.

Boundary Value Analysis helps expose these types of defects by deliberately testing values at and around the boundaries.

It is especially useful for numeric ranges, dates, lengths, quantities, limits, and other requirements with clearly defined boundaries.

---

## Boundary Value Analysis vs Equivalence Partitioning

Equivalence Partitioning divides inputs into groups that are expected to behave in the same way.

Boundary Value Analysis focuses on the edges of those groups.

For the requirement that users must be between 18 and 65 years old:

| Technique | Focus | Example Values |
|---|---|---|
| Equivalence Partitioning | Input groups | 17, 25, 66 |
| Boundary Value Analysis | Values at and around boundaries | 17, 18, 19, 64, 65, 66 |

Equivalence Partitioning helps reduce redundant tests by selecting representative values from each partition.

Boundary Value Analysis increases confidence around the points where system behavior changes.

The two techniques complement each other.

A tester might first identify the partitions using Equivalence Partitioning and then apply Boundary Value Analysis to investigate the boundaries of those partitions.

Using both techniques can provide stronger coverage than relying on either technique alone.

---

## QA Thinking

When applying Boundary Value Analysis, ask:

1. What are the minimum and maximum valid values?
2. What happens immediately below the minimum?
3. What happens at the minimum boundary?
4. What happens immediately above the minimum?
5. What happens immediately below the maximum?
6. What happens at the maximum boundary?
7. What happens immediately above the maximum?

The important skill is learning to identify where the expected system behavior changes and then designing tests around those points.

Do not assume that testing a typical valid value is enough.

A value such as 25 may confirm that the system accepts a value inside the valid range, but it does not provide confidence that the boundaries themselves are implemented correctly.

---

## Interactive Experiment

The QA Engineering Playground demonstrates Boundary Value Analysis through an interactive age-validation experiment.

### Requirement

Users must be between 18 and 65 years old.

The learner enters an age and evaluates its position relative to the boundaries.

Possible results:

| Input | Boundary Position | Expected Result |
|---:|---|---|
| 17 | Below minimum | Reject |
| 18 | Minimum boundary | Accept |
| 19 | Above minimum | Accept |
| 64 | Below maximum | Accept |
| 65 | Maximum boundary | Accept |
| 66 | Above maximum | Reject |

The experiment allows the learner to change the test value and observe how the system classifies it.

The goal is to understand why values immediately around a boundary are important test cases.

---

## Key Takeaway

Boundary Value Analysis helps testers focus on values where the expected system behavior changes.

Testing the boundary itself and the values immediately around it can reveal defects that may not be detected by testing only typical values.

For a range such as 18–65, a strong boundary-focused test set includes:

- 17 → below the minimum
- 18 → minimum boundary
- 19 → above the minimum
- 64 → below the maximum
- 65 → maximum boundary
- 66 → above the maximum

Boundary Value Analysis works especially well together with Equivalence Partitioning.

Equivalence Partitioning helps identify meaningful groups of inputs, while Boundary Value Analysis helps investigate the edges of those groups.

The key skill is not memorizing a list of values.

The key skill is learning to identify boundaries from requirements and deliberately test the risks around them.
