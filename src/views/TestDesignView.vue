<script setup lang="ts">
import { computed, ref } from 'vue'

const age = ref<number | null>(25)
const evaluated = ref(false)

const boundaryValue = ref<number | null>(18)
const boundaryEvaluated = ref(false)

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
    description: 'This value is inside the valid range but not directly adjacent to a boundary.',
    className: 'passed',
  }
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
        <article class="technique-card technique-card-active">
          <div class="technique-card-top">
            <span>01</span>
            <span class="technique-status">Current</span>
          </div>

          <h3>Equivalence Partitioning</h3>

          <p>
            Divide input data into groups where values are expected to
            behave in the same way.
          </p>
        </article>

        <article class="technique-card technique-card-active">
          <div class="technique-card-top">
            <span>02</span>
            <span class="technique-status">Current</span>
          </div>

          <h3>Boundary Value Analysis</h3>

          <p>
            Focus testing on values at and around the boundaries of
            valid and invalid input ranges.
          </p>
        </article>

        <article class="technique-card">
          <div class="technique-card-top">
            <span>03</span>
            <span class="technique-status">Next</span>
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

    <!-- Engineering Note -->

    <section class="engineering-note">
      <div>
        <span class="section-label">
          ENGINEERING NOTE
        </span>

        <h3>
          Why are boundaries so important?
        </h3>
      </div>

      <p>
        Boundary Value Analysis is effective because defects frequently
        occur at the edges of input ranges. Instead of testing many
        values throughout the range, we focus on the boundary itself
        and the values immediately before and after it. For the
        requirement of 18–65, useful tests include 17, 18, 19, 64,
        65, and 66.
      </p>
    </section>
  </main>
</template>
