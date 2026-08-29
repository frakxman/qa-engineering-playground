MASTER CONTEXT — QA Engineering Playground
1. Project Identity

I am building a project called:

qa-engineering-playground

This project is part of my personal QA Engineering learning journey. I am following a certification path consisting of approximately 25 QA courses, and I am applying the concepts learned in those courses to real projects.

The goal is not merely to create documentation.

The goal is to build an interactive QA Engineering Playground where QA concepts can be explained, demonstrated, executed, and connected to real applications and APIs.

2. Main Reference

The visual and conceptual inspiration for the project is:

Fabian Rivera Dev Playground

Reference:

https://fabian-rivera-dev.netlify.app/playground/concepts/overview

The qa-engineering-playground should be inspired by this experience:

Playground-oriented UI.
Concepts organized and browsable.
Clear navigation.
Documentation combined with interactive examples.
Interactive experimentation.
Clean developer-oriented presentation.
The user should be able to learn a concept and then interact with it.

Do NOT simply create a documentation website.

The final product should feel like a QA laboratory / interactive playground.

3. Three Independent Projects

There are three independent projects.

They must remain independent.

Project 1 — QA Playground

qa-engineering-playground

Purpose:

QA learning.
QA concepts.
Test design.
Test cases.
Interactive test execution.
Test results.
Assertions.
Evidence.
Links to the source projects.
Demonstrations of testing techniques.

This is the project we are currently building.

Project 2 — E-commerce Frontend

frakx-services-store

This is the real frontend application that we use as an Application Under Test (AUT).

It is an Angular application.

Its package.json currently contains approximately:

{
  "name": "frakx-services-store",
  "version": "0.1.0",
  "scripts": {
    "ng": "ng",
    "backend": "json-server --watch data/db.json",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "dependencies": {
    "@angular/animations": "^17.0.0",
    "@angular/common": "^17.0.0",
    "@angular/compiler": "^17.0.0",
    "@angular/core": "^17.0.0",
    "@angular/forms": "^17.0.0",
    "@angular/platform-browser": "^17.0.0",
    "@angular/platform-browser-dynamic": "^17.0.0",
    "@angular/router": "^17.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.2"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^17.0.0",
    "@angular/cli": "^17.0.0",
    "@angular/compiler-cli": "^17.0.0",
    "@types/jasmine": "~5.1.0",
    "autoprefixer": "^10.4.19",
    "jasmine-core": "~5.1.0",
    "autoprefixer": "^10.4.19",
    "json-server": "^1.0.0-alpha.23",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "typescript": "~5.2.2"
  }
}


Important versions:

Angular 17
TypeScript 5.2
Tailwind CSS 3.4.3
RxJS 7.8
json-server 1.0.0-alpha.23

Frontend is started from the frakx-services-store directory with:

ng s -o

Project 3 — E-commerce API

base-store

This is the backend/API for the e-commerce application.

It is also an independent project.

The API is started from the base-store directory with:

npm run start

4. Database / Infrastructure

The current environment uses MongoDB through Docker.

Normal startup flow:

Open Docker Desktop.
Start the container named:
mongo1

Open MongoDB Atlas.
Connect Atlas to the MongoDB instance running through Docker.

The infrastructure is used by the real application/API and should not be unnecessarily duplicated inside the QA playground.

5. Important Architectural Principle

The three projects must remain independent.

Do NOT merge them.

Do NOT copy the e-commerce application into the QA playground.

Do NOT turn the QA playground into the backend of the e-commerce application.

The relationship is:

                    QA ENGINEERING PLAYGROUND
                              |
             +----------------+----------------+
             |                                 |
             v                                 v
      frakx-services-store                base-store
          Frontend                           API
             |                                 |
             +---------------+-----------------+
                             |
                          MongoDB


The QA playground acts as the testing laboratory and learning interface.

It references the real projects.

It can execute tests against them.

It can link to their GitHub repositories.

6. GitHub References

The QA playground must be able to reference the GitHub repositories of:

frakx-services-store
base-store

GitHub is a reference to the actual implementation.

However:

GitHub links are NOT the main purpose of the playground.

The user must also be able to execute/interact with tests from the QA playground itself.

Example:

AUTH-001
Valid credentials

Application Under Test:
frakx-services-store

[View Test]
[Run Test]
[View GitHub]

7. Current QA Playground State

The qa-engineering-playground is currently NOT an Angular application.

It is currently a documentation-oriented repository.

The current file structure includes:

01-introduction/
├── 01-testing-fundamentals/
│   ├── 01-what_is_software_testing.md
│   ├── 02-software_quality.md
│   └── 03-why_testing_matters.md
│
├── 02-testing-principles/
│   ├── 01-seven-principles.md
│   ├── 02-error_defect_failure.md
│   └── 03-testing-life-cycle.md
│
├── 03-testing-process/
│   ├── 01-testing-phases.md
│   ├── 02-testing-pyramid.md
│   ├── 03-testing-quadrants.md
│   └── 04-shift-left-testing.md
│
├── 04-testing-levels/
│   ├── 01-unit-testing.md
│   ├── 02-integration-testing.md
│   ├── 03-system-testing.md
│   └── 04-acceptance-testing.md
│
├── 05-types-of-testing/
│   ├── 01-functional.md
│   ├── 02-non-functional.md
│   ├── 03-smoke.md
│   ├── 04-sanity.md
│   ├── 05-regression.md
│   └── 06-exploratory.md
│
├── 06-testing-design/
│   ├── 01-test-case.md
│   ├── 02-checklist.md
│   ├── 03-mind-map.md
│   └── 04-traceability-matrix.md
│
├── 07-bug-management/
│   ├── 01-bug-life-cycle.md
│   ├── 02-severity-vs-priority.md
│   ├── 03-bug-report.md
│   └── 04-debugging-vs-testing.md
│
└── 08-roles/
    ├── 01-qa-engineer.md
    ├── 02-qa-automation.md
    ├── 03-sdet.md
    └── 04-testing-career.md


There is also:

10-ci-cd-testing/
└── 01-test-automation-in-ci-cd.md


And an existing automation laboratory:

labs/
└── automation-testing-project/
    └── demos/
        ├── package.json
        ├── package-lock.json
        └── src/
            ├── 01-sum.js
            ├── 01-sum.test.js
            ├── 02-math.js
            └── 02-math.test.js


The root currently also contains:

README.md
authentication.md


Important:

The existing Markdown content must NOT be casually deleted or moved.

Before restructuring the repository, inspect the current structure and preserve existing learning material.

8. Product Vision

The QA playground should evolve from:

Documentation


into:

Documentation
      +
Interactive Concepts
      +
Interactive Labs
      +
Real Test Execution
      +
Results
      +
Evidence
      +
Project References


The ideal learning flow is:

Concept
   ↓
Explanation
   ↓
Example
   ↓
Test Design
   ↓
Test Case
   ↓
Interactive Test
   ↓
Execution
   ↓
Assertions
   ↓
PASS / FAIL
   ↓
Evidence
   ↓
Real Project / GitHub

9. First Interactive Module

The first module to implement is:

Authentication — Login

Requirement:

A registered user can log in with valid credentials.

Scope:

Validate the login functionality using valid and invalid authentication data.

This is the first real QA laboratory that will connect the playground to the e-commerce application/API.

10. Login Test Cases
AUTH-001
Title

Email válido + contraseña válida

Precondition
User is registered.
Email exists in the system.
Test Data
Email: usuario@test.com
Password: PasswordValido

Steps
Access /auth/login.
Enter registered email.
Enter valid password.
Press login button.
Expected Result
Login is successful.
User becomes authenticated.
An access_token is obtained.
User can access protected functionality.
AUTH-002
Title

Rechazar inicio de sesión con contraseña incorrecta

Precondition
User is registered.
Email exists in the system.
Test Data
Email: usuario@test.com
Password: PasswordIncorrecta

Steps
Access /auth/login.
Enter registered email.
Enter incorrect password.
Press login button.
Expected Result
Login is rejected.
No access_token is obtained.
User is not authenticated.
API returns an authentication error.
AUTH-003
Title

Email inexistente + contraseña válida

Precondition
Email does not exist.
Password is valid.
Test Data
Email: usuario1@test.com
Password: PasswordValido

Steps
Access /auth/login.
Enter email.
Enter password.
Press login button.
Expected Result
Login is unsuccessful.
Backend rejects credentials.
No user information is returned.
User is not authenticated.
AUTH-004
Title

Email inexistente + contraseña incorrecta

Precondition
Email does not exist.
Test Data
Email: usuario1@test.com
Password: PasswordInvalida

Steps
Access /auth/login.
Enter email.
Enter password.
Press login button.
Expected Result
Login is unsuccessful.
Backend rejects credentials.
No user information is returned.
User is not authenticated.
HTTP response is 403 Forbidden.
AUTH-005
Title

Email vacío

Precondition
Email field is empty.
Test Data
Email: empty

Steps
Access /auth/login.
Leave email empty.
Press login button.
Expected Result
Form displays required-field validation.
Angular performs frontend validation.
Frontend does NOT send a request to the backend.
No user information is obtained.
11. Important Testing Principle

Negative tests can have a PASS result.

For example:

AUTH-002 expects the system to reject invalid credentials.

Therefore:

Invalid password
      ↓
API rejects authentication
      ↓
Expected behavior
      ↓
PASS


The test result represents whether the application behaved as expected, not whether the login itself succeeded.

12. AUTH-005 Is Different

AUTH-005 should validate frontend behavior.

The expected flow is:

Email empty
     ↓
Angular validation
     ↓
"Email is required"
     ↓
NO HTTP REQUEST


This means AUTH-005 is primarily a frontend/form validation test.

The other authentication tests involve backend authentication behavior.

Conceptually:

AUTH-001 ─┐
AUTH-002  │
AUTH-003  ├── Authentication / Backend
AUTH-004 ─┘
          

AUTH-005 ─── Frontend validation

13. Interactive Test Experience

The QA playground should eventually allow a user to select a test case and interact with it.

Example:

Authentication / Login

AUTH-001
Email válido + contraseña válida

Email
[ usuario@test.com ]

Password
[ PasswordValido ]

[ Run Test ]

Result
--------------------------------
✓ Login successful
✓ User authenticated
✓ access_token received

Status: PASS


For API-oriented tests, the playground should eventually be capable of showing relevant information such as:

Request
HTTP method
Endpoint
Headers
Body

Response
HTTP status
Response body

Assertions
✓ status code
✓ authentication result
✓ token
✓ user information

Final result
PASS


The exact implementation should be determined after inspecting the actual API contracts in base-store.

Do NOT invent endpoints, response structures, token formats, or status codes that have not been verified.

14. Real Testing vs Simulation

The playground should ultimately execute tests against the real systems where appropriate.

Do NOT simply fake:

PASS


when the purpose is to demonstrate real QA execution.

The goal is:

qa-engineering-playground
          ↓
real HTTP request / real application interaction
          ↓
frakx-services-store / base-store
          ↓
real response
          ↓
assertions
          ↓
PASS / FAIL


However, architecture must respect CORS, authentication, security, and the actual API design.

If direct browser execution is technically inappropriate, explain the limitation and design an appropriate test execution layer rather than hiding it.

15. Test Case UI

A test case should eventually expose at least:

Test ID
Title
Requirement
Scope
Preconditions
Test data
Steps
Expected result
Execute button
Actual result
Assertions
PASS / FAIL
Evidence
Application Under Test
GitHub reference

Potential conceptual layout:

┌─────────────────────────────────────────────┐
│ AUTH-001                                    │
│ Email válido + contraseña válida             │
├─────────────────────────────────────────────┤
│ Requirement                                 │
│ Scope                                       │
│                                             │
│ Preconditions                               │
│                                             │
│ Test Data                                   │
│                                             │
│ Test Steps                                  │
│                                             │
│ Expected Result                             │
│                                             │
│ [ Run Test ]                                │
├─────────────────────────────────────────────┤
│ Execution                                   │
│                                             │
│ Request                                     │
│ Response                                    │
│ Assertions                                  │
│                                             │
│ ✓ PASS                                      │
├─────────────────────────────────────────────┤
│ Application Under Test                      │
│ frakx-services-store                        │
│                                             │
│ [ GitHub ]                                  │
└─────────────────────────────────────────────┘


This is conceptual, not a requirement to copy the exact design.

16. Development Strategy

Do not implement the entire QA platform at once.

Build incrementally.

Recommended sequence:

Phase 1

Inspect the current repository and preserve existing content.

Phase 2

Choose and establish the frontend architecture for qa-engineering-playground.

Phase 3

Create the basic playground shell:

Sidebar/navigation.
Concepts.
Labs.
Project references.
Main content area.
Phase 4

Integrate existing Markdown learning material.

Phase 5

Create:

Authentication
└── Login

Phase 6

Implement the five test cases:

AUTH-001
AUTH-002
AUTH-003
AUTH-004
AUTH-005

Phase 7

Make AUTH-001 executable.

Phase 8

Add negative test execution.

Phase 9

Add assertions and PASS/FAIL reporting.

Phase 10

Add GitHub references and evidence.

Phase 11

Expand to other QA concepts and real projects.

17. Do Not Make These Mistakes
Do not assume the QA project is already Angular.

Currently it is primarily Markdown/documentation.

Inspect the repository before generating architecture.

Do not delete existing Markdown.

The existing learning material is valuable and should become part of the playground.

Do not merge the three projects.

They are independent.

Do not make GitHub the only interaction.

GitHub is a reference. The playground must also provide interactive testing.

Do not fake real API responses.

Inspect base-store before implementing API assertions.

Do not invent endpoints.

Verify the actual backend implementation.

Do not assume authentication implementation.

Inspect the real login flow before deciding how AUTH-001–AUTH-004 will execute.

Do not blindly create a huge architecture.

Build incrementally.

Do not lose the playground reference.

The UX should be inspired by:

https://fabian-rivera-dev.netlify.app/playground/concepts/overview

The project should feel like an interactive developer/QA playground, not a generic admin dashboard or static documentation site.

18. Current Environment Startup

When testing the real systems, the current workflow is:

Terminal 1 — frontend

Inside:

frakx-services-store


Run:

ng s -o

Terminal 2 — API

Inside:

base-store


Run:

npm run start

Docker

Start:

mongo1

MongoDB Atlas

Connect Atlas to the Docker MongoDB instance.

All three projects are independent.

19. How the Assistant Should Work on This Project

When helping with this project:

Preserve the context above.
Do not assume missing files or architecture.
Inspect the repository before proposing structural changes.
Prefer incremental implementation.
Explain why architectural decisions are being made.
Keep QA concepts and real execution connected.
Keep the three projects independent.
Use the real applications as Systems Under Test.
Verify actual API behavior before writing API tests.
Keep the visual/UX inspiration from the Fabian Rivera playground.
Do not reduce the project to a collection of Markdown files.
Do not reduce it to a generic CRUD/admin interface.
Treat the playground as a learning + experimentation + testing environment.
Preserve existing learning material.
When implementing tests, distinguish between:
test design,
test execution,
assertions,
evidence,
final result.
A test is PASS when the actual behavior matches the expected behavior, even when the expected behavior is rejection/error.
Ask for missing repository information instead of guessing.
Before changing architecture, explain the proposed structure and wait for confirmation when the decision is significant.


20. Immediate Goal

The immediate goal is NOT to build the whole platform.

The immediate goal is:

Build the first interactive QA laboratory for Authentication → Login while establishing the foundation that will later support the rest of the QA certification content.

The first milestone is:

QA Engineering Playground
        ↓
Authentication
        ↓
Login
        ↓
AUTH-001
        ↓
Interactive execution
        ↓
Real application/API
        ↓
Assertions
        ↓
PASS / FAIL


Once AUTH-001 works correctly, expand to AUTH-002 through AUTH-005.

21. Golden Rule

The final product should answer three questions simultaneously:

What am I learning?

QA concepts and testing principles.

What am I testing?

Real applications such as frakx-services-store and base-store.

Can I actually test it?

Yes. The playground must provide interactive test execution and results, not just documentation and GitHub links.

That combination is the core purpose of qa-engineering-playground.

