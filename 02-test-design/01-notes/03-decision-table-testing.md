# Decision Table Testing

Decision Table Testing is a test design technique used when system behavior depends on combinations of conditions.

A decision table represents different combinations of conditions and the expected outcome for each combination.

Instead of testing conditions in isolation, the tester identifies meaningful combinations and verifies that the system produces the correct result for each rule.

Decision tables are especially useful for business rules involving authentication, permissions, eligibility, pricing, discounts, workflows, and other situations where multiple conditions influence the outcome.

---

## Example Requirement

A user can access the application when:

- The username is valid.
- The password is valid.
- The account is active.

If all three conditions are satisfied, access is granted.

If any of the required conditions is not satisfied, access is denied.

This requirement contains multiple conditions that work together to determine the final outcome.

That makes it a good candidate for Decision Table Testing.

---

## Identifying the Conditions

The first step in creating a decision table is to identify the conditions that influence the system outcome.

For the login requirement, there are three conditions:

| Condition | Possible States |
|---|---|
| Username | Valid / Invalid |
| Password | Valid / Invalid |
| Account | Active / Locked / Inactive |

Each condition can change the final decision.

The username and password conditions have two possible states each.

The account condition has three possible states.

The tester can combine these conditions to create different rules that represent possible system scenarios.

For example:

- Valid username + valid password + active account → access should be granted.
- Valid username + valid password + locked account → access should be denied.
- Invalid username + valid password + active account → access should be denied.

The important step is to identify the conditions before deciding which combinations need to be tested.

---

## Building the Decision Table

A decision table organizes conditions and expected outcomes into rules.

For the login requirement, each rule represents a combination of:

- Username state
- Password state
- Account state

A simplified decision table can be written as:

| Rule | Username | Password | Account | Expected Result |
|---|---|---|---|---|
| R1 | Valid | Valid | Active | Access granted |
| R2 | Valid | Valid | Locked | Access denied |
| R3 | Valid | Invalid | Active | Access denied |
| R4 | Invalid | Valid | Active | Access denied |
| R5 | Invalid | Invalid | Active | Access denied |
| R6 | Valid | Valid | Inactive | Access denied |

The first rule represents the only combination in this table that grants access.

The other rules represent combinations where at least one required condition prevents access.

The table makes the business rule visible and easier to review.

A tester can compare each rule with the requirement and ask whether the expected outcome is correct.

---

## Selecting Test Cases

Each decision-table rule can be converted into a test case.

The test case should set up the conditions described by the rule and verify that the actual result matches the expected result.

For the login requirement:

| Test Case | Username | Password | Account | Expected Result |
|---|---|---|---|---|
| TC-01 | Valid | Valid | Active | Access granted |
| TC-02 | Valid | Valid | Locked | Access denied |
| TC-03 | Valid | Invalid | Active | Access denied |
| TC-04 | Invalid | Valid | Active | Access denied |
| TC-05 | Invalid | Invalid | Active | Access denied |
| TC-06 | Valid | Valid | Inactive | Access denied |

The test cases are derived from the rules rather than created independently.

This creates a clear relationship between the requirement, the decision table, and the tests.

A useful review question is:

> Does every meaningful rule have a corresponding test case?

If an important combination is missing, the decision table can reveal the coverage gap before the tests are executed.

---

## Why Decision Tables Matter

When a system depends on multiple conditions, it is easy to miss important combinations when designing tests.

For example, a tester might test a valid username, an invalid password, and a locked account separately without considering how those conditions interact.

Decision tables make these combinations explicit.

They help testers:

- identify combinations of conditions;
- make business rules visible;
- reduce the risk of missing important scenarios;
- connect requirements directly to test cases;
- review expected outcomes before executing tests.

Decision tables are particularly valuable when the number of possible combinations becomes difficult to manage mentally.

They can also reveal redundant, missing, or contradictory rules.

The goal is not always to test every mathematically possible combination.

The tester should identify the meaningful combinations required by the business rules and risk of the system.

---

## QA Thinking

When applying Decision Table Testing, ask:

1. What conditions influence the system outcome?
2. What possible states can each condition have?
3. Which combinations of conditions are meaningful?
4. What should the system do for each combination?
5. Are any important combinations missing?
6. Are any rules redundant or contradictory?
7. Can each rule be traced to a requirement?

The important skill is learning to think in terms of combinations rather than isolated conditions.

For example, testing an invalid password alone does not tell us what should happen when the account is also locked.

The combination of conditions may produce a different business rule and therefore requires deliberate consideration.

A decision table helps make this reasoning explicit before the test is executed.

---

## Interactive Experiment

The QA Engineering Playground demonstrates Decision Table Testing through an interactive login access experiment.

### Requirement

A user can access the application when:

- The username is valid.
- The password is valid.
- The account is active.

The learner selects the state of each condition and evaluates the combination against the decision table.

Possible conditions:

| Condition | Options |
|---|---|
| Username | Valid / Invalid |
| Password | Valid / Invalid |
| Account | Active / Locked / Inactive |

The experiment identifies the rule that matches the selected combination and displays the expected result.

For example:

| Username | Password | Account | Expected Result |
|---|---|---|---|
| Valid | Valid | Active | Access granted |
| Valid | Valid | Locked | Access denied |
| Invalid | Valid | Active | Access denied |

The learner can change the conditions, evaluate the combination, and observe which decision-table rule matches.

The goal is to understand how multiple conditions combine to produce a business outcome.

---

## Key Takeaway

Decision Table Testing helps testers design tests for systems whose behavior depends on combinations of conditions.

The technique provides a structured way to identify conditions, define meaningful combinations, determine expected outcomes, and derive test cases from those rules.

A decision table can help reveal missing, redundant, or contradictory scenarios before tests are executed.

For the login example, the key business rule is:

All required conditions must be satisfied for access to be granted.

If the username is invalid, the password is invalid, or the account is not active, access is denied.

The key skill is learning to think about how conditions interact rather than testing each condition in isolation.

Decision Table Testing is especially useful for authentication, authorization, pricing, eligibility, permissions, and other rule-driven systems.
