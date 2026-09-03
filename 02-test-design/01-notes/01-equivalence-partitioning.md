# Equivalence Partitioning

## What is Equivalence Partitioning?

Equivalence Partitioning is a test design technique where input
values are divided into groups, called partitions, that are expected
to be handled in the same way by the system.

Instead of testing every possible input value, the tester selects
representative values from each partition.

---

## Example Requirement

Users must be between 18 and 65 years old.

This requirement creates three meaningful partitions.

| Partition | Values | Expected Behavior |
|---|---|---|
| Invalid | `< 18` | Reject |
| Valid | `18–65` | Accept |
| Invalid | `> 65` | Reject |

The important idea is that values within the same partition are
expected to behave similarly.

---

## Selecting Test Values

We do not need to test:

```text
1
2
3
4
...
17
If the requirement treats all values below 18 in the same way,
one representative value may be enough for equivalence-partition
coverage.

For example:

Test Case	Input	Partition	Expected
TC-01	17	Invalid < 18	Reject
TC-02	25	Valid 18–65	Accept
TC-03	66	Invalid > 65	Reject

Why This Helps
Without equivalence partitioning, a tester may create many redundant
tests.

For example, testing every age from 1 to 120 would produce many
tests that exercise essentially the same rule.

Equivalence Partitioning reduces the number of tests while
maintaining meaningful coverage of the defined input classes.

Important Limitation
Equivalence Partitioning alone does not focus specifically on the
edges of a partition.

For example, if the valid range is:

18–65

testing 25 verifies the valid partition, but it does not specifically
target the risk around 18 or 65.

That is where Boundary Value Analysis becomes useful.

Connection to the Next Experiment
Equivalence Partitioning asks:

Which groups of inputs behave differently?

Boundary Value Analysis asks:

What happens at and immediately around the edges of those groups?

These techniques work well together.


---

# Step 4 — Connect it to your existing Experiment 01

Your Vue code already has this exact model:

```text
< 18       → Invalid
18–65      → Valid
> 65       → Invalid
