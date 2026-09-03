# Error Guessing

Error Guessing is a test design technique where testers use their experience, knowledge of common defects, and understanding of the system to identify test cases that are likely to reveal failures.

Unlike techniques that derive tests mainly from formal requirements, Error Guessing relies on the tester's ability to anticipate how a system might fail.

The technique is useful for identifying risks that may not be obvious from the requirements alone.

Error Guessing can be applied to many types of systems and can be especially valuable when combined with other test design techniques such as Equivalence Partitioning, Boundary Value Analysis, Decision Table Testing, and State Transition Testing.

---

## Example Requirement

Consider a login form with the following requirement:

A user can access the application when the username and password are valid and the account is active.

The formal requirement tells us what the system should do, but it may not describe every way the implementation could fail.

A tester can use experience and knowledge of common defects to identify additional test ideas.

For example, the tester might consider:

| Risk | Possible Test |
|---|---|
| Empty username | Submit the login form without a username. |
| Empty password | Submit the login form without a password. |
| Incorrect password | Enter a valid username with an incorrect password. |
| Very long input | Enter an unusually long username or password. |
| Special characters | Enter unexpected characters in the input fields. |
| Repeated failed attempts | Attempt to log in incorrectly multiple times. |

These tests are not necessarily derived from a single explicit rule in the requirement.

They come from anticipating common ways that a login system might fail.

Error Guessing therefore complements requirement-based test design by encouraging the tester to think about likely failure modes.

---

## Identifying Common Defect Patterns

Error Guessing starts with recognizing situations where defects commonly occur.

A tester can use previous experience, knowledge of the application, and common software failure patterns to identify high-risk test ideas.

For a login system, common areas to investigate include:

| Defect Pattern | Test Idea |
|---|---|
| Missing input | Submit the form with required fields empty. |
| Invalid input | Enter incorrect credentials. |
| Boundary input | Use inputs at or near length limits. |
| Unexpected characters | Enter special characters or unusual symbols. |
| Excessively long input | Enter values much longer than normally expected. |
| Repeated actions | Attempt multiple failed logins in sequence. |
| Incorrect state handling | Attempt to log in while the account is locked. |
| Case sensitivity | Try different uppercase and lowercase combinations. |
| Whitespace | Add leading or trailing spaces to the input. |

The purpose is not to assume that the system contains these defects.

The purpose is to identify areas where defects are plausible and design tests that can expose them.

The tester should prioritize error guesses based on the risk and context of the system.

---

## Designing Error-Guessing Test Cases

Once potential defect patterns have been identified, the tester can turn them into specific test cases.

For the login example:

| Test Case | Test Idea | Expected Result |
|---|---|---|
| TC-01 | Submit with an empty username | Login is rejected. |
| TC-02 | Submit with an empty password | Login is rejected. |
| TC-03 | Enter an incorrect password | Login is rejected. |
| TC-04 | Enter an unusually long username | System handles the input safely. |
| TC-05 | Enter special characters | System handles the input safely. |
| TC-06 | Add leading or trailing spaces | System handles the input according to the defined rules. |
| TC-07 | Attempt login after the account is locked | Access remains blocked. |

The expected result should be based on the application's requirements and security rules.

Error Guessing does not mean randomly creating unusual test data.

The tester should have a reason for selecting each test, such as a known defect pattern, previous experience, or a specific risk in the system.

This makes Error Guessing a structured way of applying tester experience rather than simply testing random scenarios.

---

## Combining Error Guessing with Other Techniques

Error Guessing is most effective when it is combined with other test design techniques.

Each technique provides a different way of identifying useful tests.

For example:

| Technique | Main Focus |
|---|---|
| Equivalence Partitioning | Groups of inputs with similar expected behavior |
| Boundary Value Analysis | Values at and around boundaries |
| Decision Table Testing | Combinations of conditions and business rules |
| State Transition Testing | Changes between system states |
| Error Guessing | Likely defects and failure patterns |

Consider the age requirement:

Users must be between 18 and 65 years old.

Equivalence Partitioning might select:

25 → representative valid value

Boundary Value Analysis might select:

17, 18, 19, 64, 65, 66

Error Guessing might add tests such as:

- Negative age
- Extremely large age
- Empty input
- Decimal age
- Non-numeric input

These tests come from anticipating common input-handling defects rather than only covering the defined partitions and boundaries.

The techniques can therefore complement each other and provide broader test coverage.

The tester should choose the techniques that are appropriate for the requirement, risk, and context of the system.

---

## Why Error Guessing Matters

Requirements describe the behavior that the system is expected to provide, but they may not describe every way the system could fail.

Error Guessing helps testers look beyond the obvious scenarios and consider defects that are common, plausible, or specific to the system being tested.

It can help identify problems such as:

- incorrect input validation;
- missing handling of empty values;
- unexpected behavior with unusual input;
- incorrect state handling;
- problems caused by repeated actions;
- incorrect handling of boundaries;
- failures caused by unexpected characters or formats.

Error Guessing is particularly valuable when the tester has knowledge of previous defects, similar systems, technical risks, or areas of the application that are known to be complex.

The technique can also help improve an existing test suite by adding tests for risks that were not identified through formal test design techniques.

However, Error Guessing should not replace systematic test design.

It works best as a complementary technique that adds tester experience and risk awareness to the overall test strategy.

---

## QA Thinking

When applying Error Guessing, ask:

1. What could commonly go wrong in this feature?
2. Have I seen similar defects in other systems?
3. What inputs or actions are likely to cause failures?
4. What unusual or unexpected behavior should I investigate?
5. Which parts of the system have the highest risk?
6. What happens when users repeat an action?
7. What happens when users provide unexpected input?
8. Are there scenarios that the formal requirements do not explicitly describe?

The important skill is learning to think beyond the happy path.

A tester should not only ask:

> What should the system do?

A tester should also ask:

> How could this system fail?

This mindset helps testers identify test ideas that may not be obvious from the requirements alone.

Error Guessing becomes stronger as the tester gains experience with common defects, application risks, and failure patterns.

---

## Interactive Experiment

The QA Engineering Playground demonstrates Error Guessing through an interactive login-testing challenge.

### Requirement

A user can access the application when the username and password are valid and the account is active.

The learner is presented with potential failure scenarios and identifies which test cases are worth investigating.

Possible scenarios include:

| Scenario | Why Test It? |
|---|---|
| Empty username | Required input may not be handled correctly. |
| Empty password | Required input validation may be missing. |
| Incorrect password | Authentication failure must be handled correctly. |
| Very long input | Input length handling may contain defects. |
| Special characters | Unexpected input may expose validation problems. |
| Leading or trailing spaces | Input normalization may be incorrect. |
| Repeated failed login attempts | Account-locking behavior may fail. |
| Login attempt on a locked account | The system may incorrectly allow access. |

The goal is not to test every unusual input.

The learner should identify scenarios that represent realistic risks or common defect patterns.

This experiment demonstrates how tester experience and risk awareness can generate additional test ideas beyond those directly stated in the requirement.

---

## Key Takeaway

Error Guessing helps testers identify test ideas by anticipating how a system might fail.

The technique uses tester experience, knowledge of common defects, understanding of the application, and awareness of risk.

A good error-guessing approach considers:

- common defect patterns;
- unusual or unexpected inputs;
- repeated actions;
- incorrect state handling;
- missing validation;
- areas of the system with higher risk.

Error Guessing is not a replacement for systematic test design techniques.

Instead, it complements techniques such as Equivalence Partitioning, Boundary Value Analysis, Decision Table Testing, and State Transition Testing.

The key skill is learning to think beyond the happy path.

A tester should ask not only:

> What should the system do?

but also:

> How could this system fail?

The goal is to use that thinking to identify valuable tests that might otherwise be missed.
