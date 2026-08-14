# Software Testing Life Cycle (STLC)

The **Software Testing Life Cycle (STLC)** is a structured process followed by QA teams to ensure software quality throughout the testing phase.

Each phase has specific objectives, activities, and deliverables that help identify defects early and verify that the application meets business requirements.

---

# STLC Phases

```
Requirements Analysis
        ↓
Test Planning
        ↓
Test Design
        ↓
Environment Setup
        ↓
Test Execution
        ↓
Defect Reporting
        ↓
Regression Testing
        ↓
Test Closure
```

---

# 1. Requirements Analysis

The QA team reviews functional and non-functional requirements to understand what needs to be tested.

Activities:

- Analyze business requirements.
- Identify testable features.
- Clarify ambiguities.
- Estimate testing scope.

Deliverables:

- Requirement review.
- Initial test scenarios.

---

# 2. Test Planning

The testing strategy is defined.

Activities:

- Define testing scope.
- Select testing techniques.
- Estimate effort.
- Assign responsibilities.
- Identify risks.

Deliverables:

- Test Plan.
- Testing schedule.
- Resource allocation.

---

# 3. Test Design

QA Engineers create test artifacts based on the requirements.

Activities:

- Design test cases.
- Create test scenarios.
- Prepare test data.
- Build traceability matrix.

Deliverables:

- Test Cases.
- Test Data.
- Test Scenarios.

---

# 4. Test Environment Setup

Prepare the environment where tests will be executed.

Activities:

- Configure databases.
- Deploy the application.
- Configure browsers.
- Prepare APIs.
- Validate environment readiness.

Deliverables:

- Test Environment.
- Configuration documentation.

---

# 5. Test Execution

Execute manual or automated test cases.

Activities:

- Run test cases.
- Compare expected vs actual results.
- Record evidence.
- Report issues.

Deliverables:

- Test Results.
- Execution Report.

---

# 6. Defect Reporting

Report defects discovered during execution.

Activities:

- Create bug reports.
- Assign severity.
- Assign priority.
- Communicate with developers.

Typical Bug Status:

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
Closed
```

Possible alternative:

```
Reopened
```

---

# 7. Regression Testing

After defects are fixed, previously working functionality must be tested again.

Purpose:

- Verify fixes.
- Ensure no new defects were introduced.
- Maintain software stability.

Regression testing is commonly automated using frameworks such as Cypress, Playwright, Selenium, or Jest.

---

# 8. Test Closure

Evaluate the testing process and prepare final documentation.

Activities:

- Review completed testing.
- Collect testing metrics.
- Identify lessons learned.
- Archive test artifacts.

Deliverables:

- Test Summary Report.
- Defect Metrics.
- Test Closure Report.

---

# STLC vs SDLC

| SDLC | STLC |
|------|------|
| Builds the software | Validates the software |
| Focuses on development | Focuses on quality |
| Performed by the development team | Performed mainly by QA Engineers |

Testing activities can begin early in the SDLC following the **Shift-Left Testing** approach.

---

# Benefits of Following the STLC

- Improves software quality.
- Detects defects earlier.
- Reduces development costs.
- Increases release confidence.
- Standardizes the testing process.

---

# Key Takeaways

- STLC provides a structured approach to software testing.
- Every phase produces valuable deliverables.
- Early planning and requirement analysis improve testing effectiveness.
- Regression testing helps maintain software stability after changes.
- Test closure allows teams to measure quality and improve future projects.