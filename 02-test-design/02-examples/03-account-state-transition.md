# Account State Transition Example

This example demonstrates how State Transition Testing can be applied to an account security requirement.

The purpose is to show how a tester can identify system states, events that cause transitions, and test cases that verify the expected state after each event.

The example focuses on an account that can move between Active and Locked states based on login attempts.

---

## Requirement

A user account starts in the Active state.

After three consecutive failed login attempts, the account becomes Locked.

A locked account cannot be used to access the application.

An administrator can unlock the account, returning it to the Active state.

The requirement can be summarized as:

| Current State | Event | Expected Next State |
|---|---|---|
| Active | Failed login attempt 1 | Active |
| Active | Failed login attempt 2 | Active |
| Active | Failed login attempt 3 | Locked |
| Locked | Login attempt | Locked |
| Locked | Administrator unlocks account | Active |

The important idea is that the expected behavior depends on the current state of the account and the event that occurs.

The sequence of events also matters because the account becomes Locked only after three consecutive failed login attempts.

---

## States and Transitions

The first step in State Transition Testing is to identify the states in which the account can exist.

For this example, there are two main states:

| State | Description |
|---|---|
| Active | The account can be used to access the application. |
| Locked | The account is blocked and cannot be used to access the application. |

The relevant events are:

| Event | Description |
|---|---|
| Failed login | A login attempt uses incorrect credentials. |
| Administrator unlock | An administrator unlocks the account. |
| Login attempt | A user attempts to access the application. |

These events can cause the account to remain in its current state or transition to another state.

For example, the first and second failed login attempts do not change the account state.

The third consecutive failed login causes the transition:

Active → Locked

An administrator unlock then causes the transition:

Locked → Active

---

## State Transition Model

A state transition model shows how the account moves between states in response to events.

For this example, the main transition flow is:

Active
  |
  | 3 consecutive failed login attempts
  v
Locked
  |
  | Administrator unlocks account
  v
Active

The model shows that the account normally starts as Active.

The account remains Active after the first and second failed login attempts.

After the third consecutive failed login attempt, the account transitions to Locked.

While the account is Locked, another login attempt does not return the account to Active.

The account can return to Active when an administrator successfully unlocks it.

This model helps the tester identify both transitions that should occur and actions that should not cause an unexpected transition.

---

## Test Cases

The state transition model can be used to derive test cases.

Each test case should verify the current state, the event that occurs, and the expected state after that event.

| Test Case | Initial State | Event | Expected State | Expected Behavior |
|---|---|---|---|---|
| TC-01 | Active | Failed login attempt 1 | Active | Account remains available. |
| TC-02 | Active | Failed login attempt 2 | Active | Account remains available. |
| TC-03 | Active | Failed login attempt 3 | Locked | Account becomes locked. |
| TC-04 | Locked | Login attempt | Locked | Access remains blocked. |
| TC-05 | Locked | Administrator unlocks account | Active | Account becomes available. |
| TC-06 | Active | Successful login | Active | Account remains active. |

The sequence of events is important when testing this requirement.

For example, TC-03 should only be performed after two previous consecutive failed login attempts have already occurred.

The tester should also verify that an account in the Locked state cannot be accessed until the administrator unlocks it.

These tests cover the important transitions and help verify that the account maintains the correct state throughout the login process.

---

## Key Takeaway

State Transition Testing helps testers verify how a system behaves as it moves between different states.

For the account example, the important flow is:

Active → Locked

after three consecutive failed login attempts, and:

Locked → Active

when an administrator successfully unlocks the account.

The test cases should verify both the events that cause state changes and the events that should leave the account in its current state.

The sequence of events is important because the current state can depend on previous actions.

The key skill is learning to ask:

> Given the current state and the event that occurs, what should the next state be?

State Transition Testing is especially useful for authentication, account management, workflows, order processing, payment systems, and other systems where previous actions influence future behavior.

