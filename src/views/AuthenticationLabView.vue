<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const loginResult = ref<'success' | 'failure' | null>(null)

const submitLogin = () => {
  loginResult.value =
    username.value === 'qa.engineer' &&
    password.value === 'password123'
      ? 'success'
      : 'failure'
}

const resetForm = () => {
  username.value = ''
  password.value = ''
  loginResult.value = null
}

const scenarioResults = [
  {
    id: '01',
    name: 'Valid credentials',
    type: 'Positive',
    input: 'qa.engineer / password123',
    expected: 'Login successful',
  },
  {
    id: '02',
    name: 'Invalid password',
    type: 'Negative',
    input: 'qa.engineer / wrongpassword',
    expected: 'Invalid username or password',
  },
  {
    id: '03',
    name: 'Invalid username',
    type: 'Negative',
    input: 'unknown.user / password123',
    expected: 'Invalid username or password',
  },
  {
    id: '04',
    name: 'Empty credentials',
    type: 'Negative',
    input: 'Empty username / Empty password',
    expected: 'Invalid username or password',
  },
]
</script>

<template>
  <main class="content">
    <span class="eyebrow">LAB · AUTHENTICATION</span>

    <h2>Authentication Testing Lab</h2>

    <p class="intro">
      Practice testing a simple authentication flow and identify the
      scenarios that should be covered by a QA Engineer.
    </p>

    <section class="lab-card">
      <div class="lab-card-header">
        <span class="lab-label">LOGIN FORM</span>
        <span class="lab-status">Interactive</span>
      </div>

      <form @submit.prevent="submitLogin">
        <label>
          Username
          <input
            v-model="username"
            type="text"
            name="username"
            autocomplete="username"
            placeholder="Enter username"
          />
        </label>

        <label>
          Password
          <input
            v-model="password"
            type="password"
            name="password"
            autocomplete="current-password"
            placeholder="Enter password"
          />
        </label>

        <div class="form-actions">
          <button type="submit">
            Sign in
          </button>

          <button
            type="button"
            class="secondary-button"
            @click="resetForm"
          >
            Reset
          </button>
        </div>
      </form>

      <p v-if="loginResult === 'success'" class="lab-feedback">
        Login successful.
      </p>

      <p v-else-if="loginResult === 'failure'" class="lab-feedback">
        Invalid username or password.
      </p>
    </section>

    <section class="test-scenarios">
      <div class="test-scenarios-header">
        <span class="lab-label">TEST SCENARIOS</span>
      </div>

      <ul>
        <li
          v-for="scenario in scenarioResults"
          :key="scenario.id"
        >
          <span>{{ scenario.id }}</span>

          <div>
            <span class="scenario-type">
              {{ scenario.type }}
            </span>

            <strong>{{ scenario.name }}</strong>

            <p>
              Input:
              <code>{{ scenario.input }}</code>
            </p>

            <p>
              Expected:
              <code>{{ scenario.expected }}</code>
            </p>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>
