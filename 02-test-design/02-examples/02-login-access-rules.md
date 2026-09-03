# Login Access Rules Example

This example demonstrates how Decision Table Testing can be applied to a login access requirement.

The purpose is to show how multiple conditions can be combined into meaningful rules and how those rules can be converted into test cases.

The example focuses on three conditions:

- Username validity
- Password validity
- Account state

---

## Requirement

A user can access the application when:

- The username is valid.
- The password is valid.
- The account is active.

If all three conditions are satisfied, access is granted.

If any of the required conditions is not satisfied, access is denied.

This requirement means that access depends on a combination of conditions rather than on a single input.

Decision Table Testing can be used to identify meaningful combinations of these conditions and define the expected result for each combination.

---

## Conditions

The login decision depends on three conditions.

| Condition | Possible States |
|---|---|
| Username | Valid / Invalid |
| Password | Valid / Invalid |
| Account | Active / Locked / Inactive |

The username condition determines whether the supplied username is recognized as valid.

The password condition determines whether the supplied password is correct.

The account condition determines whether the account is currently allowed to access the application.

Each condition contributes to the final access decision.

The combination of these conditions is what determines the expected outcome.

---

## Decision Table

The conditions can be combined into rules that define the expected access behavior.

| Rule | Username | Password | Account | Expected Result |
|---|---|---|---|---|
| R1 | Valid | Valid | Active | Access granted |
| R2 | Valid | Valid | Locked | Access denied |
| R3 | Valid | Invalid | Active | Access denied |
| R4 | Invalid | Valid | Active | Access denied |
| R5 | Invalid | Invalid | Active | Access denied |
| R6 | Valid | Valid | Inactive | Access denied |

Rule R1 represents the combination where all required conditions are satisfied.

The remaining rules represent combinations where at least one required condition prevents access.

The decision table makes the relationship between conditions and expected outcomes explicit.

In a real project, the tester should review whether additional combinations are required based on the business rules, risks, and scope of the feature.

---

## Test Cases

Each decision-table rule can be converted into a test case.

The test case should establish the conditions described by the rule and verify that the actual result matches the expected result.

| Test Case | Username | Password | Account | Expected Result |
|---|---|---|---|---|
| TC-01 | Valid | Valid | Active | Access granted |
| TC-02 | Valid | Valid | Locked | Access denied |
| TC-03 | Valid | Invalid | Active | Access denied |
| TC-04 | Invalid | Valid | Active | Access denied |
| TC-05 | Invalid | Invalid | Active | Access denied |
| TC-06 | Valid | Valid | Inactive | Access denied |

The relationship between the rules and test cases makes the test design easier to review.

For example:

- TC-01 covers Rule R1.
- TC-02 covers Rule R2.
- TC-03 covers Rule R3.
- TC-04 covers Rule R4.
- TC-05 covers Rule R5.
- TC-06 covers Rule R6.

This traceability helps the tester confirm that each defined rule has a corresponding test.

The tester should also review whether the selected rules provide sufficient coverage for the business requirement and whether additional combinations should be tested.

---

## Key Takeaway

The login access requirement is a good example of a situation where system behavior depends on multiple conditions.

Decision Table Testing helps make those conditions and their combinations explicit.

For this example:

- Username must be valid.
- Password must be valid.
- Account must be active.

When all three conditions are satisfied, access is granted.

When any required condition is not satisfied, access is denied.

The decision table can then be used to derive test cases and establish a clear relationship between the requirement, the rules, and the expected results.

The key skill is learning to identify meaningful combinations of conditions and verify that each combination produces the correct business outcome.

Decision tables are particularly useful when testing authentication, authorization, permissions, eligibility, pricing, and other rule-driven functionality.

