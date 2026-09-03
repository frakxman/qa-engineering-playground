# State Transition Testing

State Transition Testing is a test design technique used to verify how a system behaves when it moves from one state to another.

A state represents a condition or situation in which the system can exist.

A transition occurs when an event or action causes the system to move from one state to another.

This technique is useful when the system behavior depends on its current state and the events that occur.

State Transition Testing is especially useful for account lifecycles, authentication, workflows, order processing, payment systems, and other systems where actions cause changes in state.

---

## Example Requirement

A user account starts in the Active state.

After three consecutive failed login attempts, the account becomes Locked.

A locked account cannot be used to access the application.

An administrator can unlock the account, returning it to the Active state.

The requirement can be represented as:

| Current State | Event | Next State |
|---|---|---|
| Active | Failed login attempt 1 | Active |
| Active | Failed login attempt 2 | Active |
| Active | Failed login attempt 3 | Locked |
| Locked | Administrator unlocks account | Active |

The important idea is that the expected behavior depends on the current state of the account and the event that occurs.

---

## Identifying States

The first step in State Transition Testing is to identify the states in which the system can exist.

For the account login example, the main states are:

| State | Description |
|---|---|
| Active | The account can be used to access the application. |
| Locked | The account cannot be used to access the application because the login failure limit has been reached. |

The account can also have an intermediate condition while failed login attempts are being counted.

For example:

| Failed Attempts | Account State |
|---:|---|
| 0 | Active |
| 1 | Active |
| 2 | Active |
| 3 | Locked |

The important point is that a state represents the condition of the system at a particular moment.

The number of failed attempts influences when the account transitions from Active to Locked.

---

## Identifying Transitions

A transition is the change from one state to another caused by an event or action.

For the account example, the important transitions are:

| Current State | Event | Condition | Next State |
|---|---|---|---|
| Active | Failed login | First failed attempt | Active |
| Active | Failed login | Second failed attempt | Active |
| Active | Failed login | Third failed attempt | Locked |
| Locked | Login attempt | Account remains locked | Locked |
| Locked | Administrator unlocks account | Unlock is successful | Active |

The third consecutive failed login is important because it causes the account to change from Active to Locked.

The administrator unlock action creates the transition from Locked back to Active.

Testing should verify not only that each state is correct, but also that the system moves to the correct next state after each event.

A useful question is:

> Given the current state and an event, does the system move to the expected next state?

---

## Building the State Transition Model

A state transition model shows how the system moves between states in response to events.

For the account example, the model can be represented as:

Active
  |
  | 3 consecutive failed login attempts
  v
Locked
  |
  | Administrator unlocks account
  v
Active

The model shows two important transitions:

- Active → Locked
- Locked → Active

The failed login attempts are also important because the transition to Locked does not happen after the first or second failed attempt.

The system must maintain the correct state while the failure count is below the configured limit.

A tester should therefore consider both valid transitions and events that should not cause a transition.

For example:

| Current State | Event | Expected State |
|---|---|---|
| Active | Failed login 1 | Active |
| Active | Failed login 2 | Active |
| Active | Failed login 3 | Locked |
| Locked | Failed login | Locked |
| Locked | Administrator unlock | Active |

This model gives the tester a clear structure for designing state-based test cases.

---

## Selecting Test Cases

State Transition Testing should cover both valid transitions and events that should not cause an unexpected transition.

For the account example, useful test cases include:

| Test Case | Initial State | Event | Expected State | Expected Behavior |
|---|---|---|---|---|
| TC-01 | Active | Failed login 1 | Active | Account remains available |
| TC-02 | Active | Failed login 2 | Active | Account remains available |
| TC-03 | Active | Failed login 3 | Locked | Account becomes locked |
| TC-04 | Locked | Login attempt | Locked | Access remains blocked |
| TC-05 | Locked | Administrator unlocks account | Active | Account becomes available |
| TC-06 | Active | Successful login | Active | Account remains active |

The test cases follow the transitions identified in the state model.

The sequence of events is important because the same event can produce different results depending on the current state.

For example, a failed login while the account is Active can contribute to the lock condition, while a login attempt while the account is Locked should not return the account to Active.

State-based testing should therefore consider both what the system is allowed to do and what it must prevent.

---

## QA Thinking

When applying State Transition Testing, ask:

1. What states can the system be in?
2. What events or actions can cause a state change?
3. What conditions must be satisfied for each transition?
4. What is the expected next state?
5. Which transitions are valid?
6. Which transitions should be prevented?
7. What happens when an event occurs in an unexpected state?
8. Does the system maintain the correct state after each transition?

The important skill is learning to think about the system as a sequence of states and events rather than testing each action in isolation.

For example, testing a failed login without considering previous failed attempts may miss the rule that locks an account after three consecutive failures.

A tester should therefore consider the history of relevant events when the current state depends on previous actions.

State Transition Testing is particularly valuable when the order of events affects the expected behavior.

---

## Interactive Experiment

The QA Engineering Playground demonstrates State Transition Testing through an interactive account-state experiment.

### Requirement

A user account starts in the Active state.

After three consecutive failed login attempts, the account becomes Locked.

A locked account cannot be used to access the application.

An administrator can unlock the account, returning it to the Active state.

The learner performs login-related actions and observes how the account state changes.

Possible states include:

| State | Description |
|---|---|
| Active | The account is available for normal use. |
| Locked | The account is blocked after reaching the failed-login limit. |

The experiment demonstrates the transition:

Active → Locked

after three consecutive failed login attempts.

It also demonstrates the transition:

Locked → Active

when an administrator successfully unlocks the account.

The goal is to understand that the expected result of an action depends on the current state of the system.

The learner should pay particular attention to the sequence of events because the same action can produce different results depending on the current state.

---

## Key Takeaway

State Transition Testing helps testers verify how a system behaves as it moves between different states.

The technique focuses on states, events, conditions, and transitions.

A good state-based test set should verify:

- important states;
- valid transitions;
- transitions that should not occur;
- the conditions required for each transition;
- the expected state after each event.

For the account example, the key transitions are:

Active → Locked

after three consecutive failed login attempts, and:

Locked → Active

when an administrator successfully unlocks the account.

The key skill is learning to consider the current state and the sequence of events when determining the expected behavior.

State Transition Testing is especially useful for authentication, account management, workflows, order processing, payment systems, and other systems where previous actions influence future behavior.

