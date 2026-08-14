# Bug Life Cycle

The Bug Life Cycle describes the sequence of states that a software defect goes through from the moment it is discovered until it is resolved and closed.

Understanding the Bug Life Cycle helps QA Engineers, developers, and project managers collaborate efficiently during defect resolution.

---

# Purpose

Provide a standardized workflow for tracking defects throughout the software development process.

A well-defined life cycle ensures that:

- Defects are not forgotten.
- Progress is visible.
- Responsibilities are clearly assigned.
- Quality is maintained.

---

# Typical Bug Life Cycle

```
New
 ↓
Assigned
 ↓
In Progress
 ↓
Fixed
 ↓
Ready for QA
 ↓
Retest
 ↓
Closed
```

Possible alternative paths:

```
Rejected
Duplicate
Cannot Reproduce
Deferred
Reopened
```

---

# States

## New

The defect has been reported but has not yet been reviewed.

Responsible:

QA Engineer

---

## Assigned

The defect is assigned to a developer.

Responsible:

Team Lead or Project Manager

---

## In Progress

The developer investigates and fixes the issue.

Responsible:

Developer

---

## Fixed

The developer believes the issue has been resolved.

Responsible:

Developer

---

## Ready for QA

The fix has been deployed to the testing environment.

Responsible:

Developer

---

## Retest

QA verifies the fix.

Possible outcomes:

- Pass
- Fail

---

## Closed

The defect has been successfully fixed and verified.

Responsible:

QA Engineer

---

# Alternative States

## Reopened

The issue still exists after being marked as fixed.

---

## Duplicate

The defect has already been reported.

---

## Rejected

The reported behavior is not considered a defect.

---

## Cannot Reproduce

The development team cannot reproduce the reported issue.

---

## Deferred

The defect will be fixed in a future release.

---

# Example

```
User cannot log in.

↓

QA reports BUG-104

↓

Assigned

↓

Developer fixes authentication logic

↓

Ready for QA

↓

QA verifies

↓

Closed
```

---

# Best Practices

- Write reproducible bug reports.
- Update status promptly.
- Include evidence.
- Communicate clearly.
- Reopen defects when necessary.

---

# Key Takeaways

- Every defect follows a defined workflow.
- Bug status reflects its current stage.
- Proper defect management improves collaboration and software quality.
