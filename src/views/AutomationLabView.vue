<script setup lang="ts">
import { ref } from 'vue'

const testName = ref('')
const environment = ref('staging')
const testCreated = ref(false)

const createTest = () => {
  testCreated.value = true
}
</script>

<template>
  <main class="content">
    <span class="eyebrow">LAB · AUTOMATION</span>

    <h2>Test Automation Lab</h2>

    <p class="intro">
      Practice designing an automated test workflow by selecting a test
      scenario and the environment where it should be executed.
    </p>

    <section class="lab-card">
      <div class="lab-card-header">
        <span class="lab-label">AUTOMATION SETUP</span>
        <span class="lab-status">Interactive</span>
      </div>

      <form @submit.prevent="createTest">
        <label>
          Test scenario
          <input
            v-model="testName"
            type="text"
            name="testName"
            placeholder="Enter test scenario"
          />
        </label>

        <label>
          Environment
          <select v-model="environment" name="environment">
            <option value="development">Development</option>
            <option value="staging">Staging</option>
            <option value="production">Production</option>
          </select>
        </label>

        <button type="submit">
          Create test
        </button>
      </form>

      <p v-if="testCreated" class="lab-feedback">
        Automation test created for the {{ environment }} environment.
      </p>
    </section>
  </main>
</template>
