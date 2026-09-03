# Boundary Value Analysis

## What is Boundary Value Analysis?

Boundary Value Analysis (BVA) is a test design technique that
focuses on values at the edges of input ranges and values immediately
around those edges.

The purpose is to target defects that occur when developers
incorrectly implement conditions such as:

- `<`
- `<=`
- `>`
- `>=`

---

## Example Requirement

Users must be between 18 and 65 years old.

The boundaries are:

```text
18
65

We are interested in the values immediately around them.

Minimum Boundary
17   → below
18   → boundary
19   → above

Maximum Boundary
64   → below
65   → boundary
66   → above

Boundary Test Set
Test Case	Value	Position	Expected
TC-01	17	Immediately below minimum	Reject
TC-02	18	Minimum boundary	Accept
TC-03	19	Immediately above minimum	Accept
TC-04	64	Immediately below maximum	Accept
TC-05	65	Maximum boundary	Accept
TC-06	66	Immediately above maximum	Reject

Why Boundaries Matter
Consider an implementation mistake:

age > 18

instead of:

age >= 18

A normal valid value such as 25 would still pass.

But testing the boundary value 18 exposes the defect.

This is why boundary-focused tests are valuable.