<script setup lang="ts">
import { computed, ref } from 'vue'
import '../styles/TestDesignView.css'


const age = ref<number | null>(25)
const evaluated = ref(false)

const boundaryValue = ref<number | null>(18)
const boundaryEvaluated = ref(false)

const usernameValid = ref(true)
const passwordValid = ref(true)
const accountState = ref<'active' | 'locked' | 'inactive'>('active')
const decisionEvaluated = ref(false)

const partition = computed(() => {
  if (age.value === null) {
    return null
  }

  if (age.value < 18) {
    return {
      name: 'Invalid',
      range: '< 18',
      description: 'Below the minimum allowed age.',
      className: 'failed',
    }
  }

  if (age.value <= 65) {
    return {
      name: 'Valid',
      range: '18–65',
      description: 'Within the allowed age range.',
      className: 'passed',
    }
  }

  return {
    name: 'Invalid',
    range: '> 65',
    description: 'Above the maximum allowed age.',
    className: 'failed',
  }
})

const boundaryResult = computed(() => {
  if (boundaryValue.value === null) {
    return null
  }

  if (boundaryValue.value < 18) {
    return {
      name: 'Below Boundary',
      range: '< 18',
      description: 'This value is immediately below the minimum boundary.',
      className: 'failed',
    }
  }

  if (boundaryValue.value === 18) {
    return {
      name: 'Minimum Boundary',
      range: '18',
      description: 'This value is exactly on the minimum valid boundary.',
      className: 'passed',
    }
  }

  if (boundaryValue.value === 19) {
    return {
      name: 'Above Minimum',
      range: '19',
      description: 'This value is immediately above the minimum boundary.',
      className: 'passed',
    }
  }

  if (boundaryValue.value === 65) {
    return {
      name: 'Maximum Boundary',
      range: '65',
      description: 'This value is exactly on the maximum valid boundary.',
      className: 'passed',
    }
  }

  if (boundaryValue.value === 66) {
    return {
      name: 'Above Boundary',
      range: '66',
      description: 'This value is immediately above the maximum boundary.',
      className: 'failed',
    }
  }

  if (boundaryValue.value > 65) {
    return {
      name: 'Outside Range',
      range: '> 65',
      description: 'This value is outside the allowed age range.',
      className: 'failed',
    }
  }

  return {
    name: 'Inside Range',
    range: '20–64',
    description:
      'This value is inside the valid range but not directly adjacent to a boundary.',
    className: 'passed',
  }
})

const decisionRules = [
  {
    id: 1,
    username: true,
    password: true,
    account: 'active',
    result: 'Access granted',
    className: 'passed',
    explanation:
      'All three conditions are satisfied. The credentials are valid and the account is active, so access is granted.',
  },
  {
    id: 2,
    username: true,
    password: true,
    account: 'locked',
    result: 'Access denied',
    className: 'failed',
    explanation:
      'The credentials are valid, but the account is locked. Account state prevents access.',
  },
  {
    id: 3,
    username: true,
    password: false,
    account: 'active',
    result: 'Access denied',
    className: 'failed',
    explanation:
      'The username is valid and the account is active, but the password is invalid. Access is denied.',
  },
  {
    id: 4,
    username: false,
    password: true,
    account: 'active',
    result: 'Access denied',
    className: 'failed',
    explanation:
      'The password is valid and the account is active, but the username is invalid. Access is denied.',
  },
  {
    id: 5,
    username: false,
    password: false,
    account: 'active',
    result: 'Access denied',
    className: 'failed',
    explanation:
      'Neither credential is valid. The account is active, but invalid credentials prevent access.',
  },
  {
    id: 6,
    username: true,
    password: true,
    account: 'inactive',
    result: 'Access denied',
    className: 'failed',
    explanation:
      'The credentials are valid, but the account is inactive. Account state prevents access.',
  },
]

const matchingDecisionRule = computed(() => {
  if (!decisionEvaluated.value) {
    return null
  }

  return (
    decisionRules.find(
      (rule) =>
        rule.username === usernameValid.value &&
        rule.password === passwordValid.value &&
        rule.account === accountState.value,
    ) ?? null
  )
})

function evaluateAge() {
  evaluated.value = true
}

function resetExperiment() {
  age.value = 25
  evaluated.value = false
}

function evaluateBoundary() {
  boundaryEvaluated.value = true
}

function resetBoundaryExperiment() {
  boundaryValue.value = 18
  boundaryEvaluated.value = false
}

function evaluateDecisionTable() {
  decisionEvaluated.value = true
}

function resetDecisionTable() {
  usernameValid.value = true
  passwordValid.value = true
  accountState.value = 'active'
  decisionEvaluated.value = false
}
</script>

<template>
  <main class="content test-design-content">
    <span class="eyebrow">02 · TEST DESIGN</span>

    <h2>Test Design Techniques</h2>

    <p class="intro">
      Learn how to transform requirements and risks into effective,
      maintainable, and meaningful test cases.
    </p>

    <!-- Techniques -->

    <section class="test-design-section">
      <div class="section-heading">
        <span class="section-label">TECHNIQUES</span>

        <span class="section-description">
          Foundations for test design
        </span>
      </div>

      <div class="principles technique-grid">
        <article class="technique-card technique-card-complete">
          <div class="technique-card-top">
            <span>01</span>
            <span class="technique-status">Complete</span>
          </div>

          <h3>Equivalence Partitioning</h3>

          <p>
            Divide input data into groups where values are expected to
            behave in the same way.
          </p>
        </article>

        <article class="technique-card technique-card-complete">
          <div class="technique-card-top">
            <span>02</span>
            <span class="technique-status">Complete</span>
          </div>

          <h3>Boundary Value Analysis</h3>

          <p>
            Focus testing on values at and around the boundaries of
            valid and invalid input ranges.
          </p>
        </article>

        <article class="technique-card technique-card-active">
          <div class="technique-card-top">
            <span>03</span>
            <span class="technique-status">Current</span>
          </div>

          <h3>Decision Tables</h3>

          <p>
            Represent combinations of conditions and expected outcomes
            systematically.
          </p>
        </article>
      </div>
    </section>

    <!-- Experiment 01 -->

    <section class="test-design-section practice-section">
      <div class="section-heading">
        <span class="section-label">PRACTICE</span>

        <span class="section-description">
          Experiment 01 · Equivalence Partitioning
        </span>
      </div>

      <div class="experiment">
        <div class="experiment-header">
          <div>
            <span class="lab-label">EXPERIMENT 01</span>

            <h3>Age Validation</h3>
          </div>

          <span class="lab-status">Interactive</span>
        </div>

        <div class="requirement">
          <span class="experiment-label">REQUIREMENT</span>

          <p>
            Users must be between
            <strong>18 and 65 years old.</strong>
          </p>
        </div>

        <div class="partition-section">
          <div class="experiment-heading">
            <span class="experiment-label">
              EQUIVALENCE PARTITIONS
            </span>

            <p>
              Values are grouped according to the expected system
              behavior.
            </p>
          </div>

          <div class="partition-grid">
            <article class="partition-card invalid">
              <span class="partition-number">01</span>

              <span class="partition-state">INVALID</span>

              <strong>&lt; 18</strong>

              <p>Below the minimum.</p>
            </article>

            <article class="partition-card valid">
              <span class="partition-number">02</span>

              <span class="partition-state">VALID</span>

              <strong>18–65</strong>

              <p>Within the allowed range.</p>
            </article>

            <article class="partition-card invalid">
              <span class="partition-number">03</span>

              <span class="partition-state">INVALID</span>

              <strong>&gt; 65</strong>

              <p>Above the maximum.</p>
            </article>
          </div>
        </div>

        <form
          class="experiment-form"
          @submit.prevent="evaluateAge"
        >
          <label>
            <span class="experiment-label">TEST VALUE</span>

            <input
              v-model.number="age"
              type="number"
              min="0"
              max="120"
              placeholder="Enter an age"
            />
          </label>

          <div class="form-actions">
            <button type="submit">
              Evaluate
            </button>

            <button
              type="button"
              class="secondary-button"
              @click="resetExperiment"
            >
              Reset
            </button>
          </div>
        </form>

        <div
          v-if="evaluated && partition"
          class="experiment-result"
          :class="partition.className"
        >
          <div>
            <span class="experiment-label">RESULT</span>

            <p class="result-summary">
              <strong>{{ age }}</strong>
              belongs to the
              <span class="scenario-result">
                {{ partition.name }}
              </span>
              partition.
            </p>
          </div>

          <div class="result-details">
            <span>Partition</span>

            <strong>{{ partition.range }}</strong>

            <p>
              {{ partition.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experiment 02 -->

    <section class="test-design-section practice-section">
      <div class="section-heading">
        <span class="section-label">PRACTICE</span>

        <span class="section-description">
          Experiment 02 · Boundary Value Analysis
        </span>
      </div>

      <div class="experiment">
        <div class="experiment-header">
          <div>
            <span class="lab-label">EXPERIMENT 02</span>

            <h3>Boundary Value Analysis</h3>
          </div>

          <span class="lab-status">Interactive</span>
        </div>

        <div class="requirement">
          <span class="experiment-label">REQUIREMENT</span>

          <p>
            Users must be between
            <strong>18 and 65 years old.</strong>
            Boundary Value Analysis focuses on the values immediately
            around these limits.
          </p>
        </div>

        <div class="partition-section">
          <div class="experiment-heading">
            <span class="experiment-label">
              BOUNDARY VALUES
            </span>

            <p>
              Test the boundary itself, the values immediately outside
              it, and the values immediately inside it.
            </p>
          </div>

          <div class="partition-grid">
            <article class="partition-card invalid">
              <span class="partition-number">01</span>

              <span class="partition-state">BELOW</span>

              <strong>17</strong>

              <p>Immediately below the minimum.</p>
            </article>

            <article class="partition-card valid">
              <span class="partition-number">02</span>

              <span class="partition-state">BOUNDARY</span>

              <strong>18</strong>

              <p>Minimum valid value.</p>
            </article>

            <article class="partition-card valid">
              <span class="partition-number">03</span>

              <span class="partition-state">ABOVE</span>

              <strong>19</strong>

              <p>Immediately above the minimum.</p>
            </article>

            <article class="partition-card valid">
              <span class="partition-number">04</span>

              <span class="partition-state">BOUNDARY</span>

              <strong>65</strong>

              <p>Maximum valid value.</p>
            </article>

            <article class="partition-card invalid">
              <span class="partition-number">05</span>

              <span class="partition-state">ABOVE</span>

              <strong>66</strong>

              <p>Immediately above the maximum.</p>
            </article>
          </div>
        </div>

        <form
          class="experiment-form"
          @submit.prevent="evaluateBoundary"
        >
          <label>
            <span class="experiment-label">
              TEST VALUE
            </span>

            <input
              v-model.number="boundaryValue"
              type="number"
              min="0"
              max="120"
              placeholder="Enter a boundary value"
            />
          </label>

          <div class="form-actions">
            <button type="submit">
              Evaluate
            </button>

            <button
              type="button"
              class="secondary-button"
              @click="resetBoundaryExperiment"
            >
              Reset
            </button>
          </div>
        </form>

        <div
          v-if="boundaryEvaluated && boundaryResult"
          class="experiment-result"
          :class="boundaryResult.className"
        >
          <div>
            <span class="experiment-label">RESULT</span>

            <p class="result-summary">
              <strong>{{ boundaryValue }}</strong>
              is classified as
              <span class="scenario-result">
                {{ boundaryResult.name }}
              </span>.
            </p>
          </div>

          <div class="result-details">
            <span>Boundary Position</span>

            <strong>{{ boundaryResult.range }}</strong>

            <p>
              {{ boundaryResult.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experiment 03 -->

    <section class="test-design-section practice-section">
      <div class="section-heading">
        <span class="section-label">PRACTICE</span>

        <span class="section-description">
          Experiment 03 · Decision Table Testing
        </span>
      </div>

      <div class="experiment decision-table-experiment">
        <div class="experiment-header">
          <div>
            <span class="lab-label">EXPERIMENT 03</span>

            <h3>Login Access Rules</h3>
          </div>

          <span class="lab-status">Interactive</span>
        </div>

        <div class="requirement">
          <span class="experiment-label">REQUIREMENT</span>

          <p>
            A user can access the application when the
            <strong>username is valid</strong>,
            the <strong>password is valid</strong>,
            and the <strong>account is active</strong>.
          </p>
        </div>

        <div class="decision-learning">
          <div class="experiment-heading">
            <span class="experiment-label">
              HOW IT WORKS
            </span>

            <p>
              Decision tables help testers cover combinations of
              conditions and verify that each combination produces the
              correct business outcome.
            </p>
          </div>

          <div class="decision-steps">
            <div class="decision-step">
              <span>01</span>
              <strong>Set conditions</strong>
              <p>Choose the state of each login condition.</p>
            </div>

            <div class="decision-step">
              <span>02</span>
              <strong>Evaluate</strong>
              <p>Find the rule that matches all three conditions.</p>
            </div>

            <div class="decision-step">
              <span>03</span>
              <strong>Verify outcome</strong>
              <p>Compare the expected result with the business rule.</p>
            </div>
          </div>
        </div>

        <div class="decision-controls">
          <div class="experiment-heading">
            <span class="experiment-label">
              TEST CONDITIONS
            </span>

            <p>
              Configure a combination, then evaluate it against the
              decision table.
            </p>
          </div>

          <form
            class="decision-form"
            @submit.prevent="evaluateDecisionTable"
          >
            <label class="decision-control">
              <span class="experiment-label">
                USERNAME
              </span>

              <select v-model="usernameValid">
                <option :value="true">Valid</option>
                <option :value="false">Invalid</option>
              </select>
            </label>

            <label class="decision-control">
              <span class="experiment-label">
                PASSWORD
              </span>

              <select v-model="passwordValid">
                <option :value="true">Valid</option>
                <option :value="false">Invalid</option>
              </select>
            </label>

            <label class="decision-control">
              <span class="experiment-label">
                ACCOUNT
              </span>

              <select v-model="accountState">
                <option value="active">Active</option>
                <option value="locked">Locked</option>
                <option value="inactive">Inactive</option>
              </select>
            </label>

            <div class="form-actions">
              <button type="submit">
                Evaluate
              </button>

              <button
                type="button"
                class="secondary-button"
                @click="resetDecisionTable"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        <div class="decision-table-section">
          <div class="experiment-heading">
            <span class="experiment-label">
              DECISION TABLE
            </span>

            <p>
              Each row represents one combination of conditions and its
              expected system behavior.
            </p>
          </div>

          <div class="decision-table-wrapper">
            <table class="decision-table">
              <thead>
                <tr>
                  <th>Rule</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Account</th>
                  <th>Expected Result</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="rule in decisionRules"
                  :key="rule.id"
                  :class="{
                    'decision-rule-match':
                      matchingDecisionRule?.id === rule.id,
                  }"
                >
                  <td>
                    <span class="rule-number">
                      {{ String(rule.id).padStart(2, '0') }}
                    </span>

                    <span
                      v-if="matchingDecisionRule?.id === rule.id"
                      class="match-badge"
                    >
                      MATCH
                    </span>
                  </td>

                  <td>
                    <span
                      class="condition-value"
                      :class="rule.username ? 'condition-true' : 'condition-false'"
                    >
                      {{ rule.username ? 'Valid' : 'Invalid' }}
                    </span>
                  </td>

                  <td>
                    <span
                      class="condition-value"
                      :class="rule.password ? 'condition-true' : 'condition-false'"
                    >
                      {{ rule.password ? 'Valid' : 'Invalid' }}
                    </span>
                  </td>

                  <td>
                    <span class="condition-value condition-account">
                      {{ rule.account }}
                    </span>
                  </td>

                  <td>
                    <span
                      class="decision-result"
                      :class="rule.className"
                    >
                      {{ rule.result }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          v-if="decisionEvaluated && matchingDecisionRule"
          class="experiment-result decision-result-panel"
          :class="matchingDecisionRule.className"
        >
          <div>
            <span class="experiment-label">MATCHING RULE</span>

            <p class="result-summary">
              Rule
              <strong>
                {{ String(matchingDecisionRule.id).padStart(2, '0') }}
              </strong>
              matches the selected conditions.

              <span class="scenario-result">
                {{ matchingDecisionRule.result }}
              </span>
            </p>
          </div>

          <div class="result-details">
            <span>WHY THIS RULE?</span>

            <strong>
              {{ matchingDecisionRule.result }}
            </strong>

            <p>
              {{ matchingDecisionRule.explanation }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Engineering Note -->

    <section class="engineering-note">
      <div>
        <span class="section-label">
          ENGINEERING NOTE
        </span>

        <h3>
          Why use decision tables?
        </h3>
      </div>

      <p>
        Decision tables are useful when system behavior depends on
        combinations of conditions. Instead of writing isolated tests
        and potentially missing an important combination, testers
        identify the relevant conditions, enumerate meaningful rules,
        and verify the expected outcome for each rule. This is
        especially valuable for authentication, permissions,
        pricing, eligibility, and other rule-driven systems.
      </p>
    </section>
  </main>
</template>
