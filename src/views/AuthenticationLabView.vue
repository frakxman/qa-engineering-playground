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

        <button type="submit">
          Sign in
        </button>
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
            <li>
            <span>01</span>
            <div>
                <strong>Valid credentials</strong>
                <p>
                qa.engineer / password123 should authenticate successfully.
                </p>
            </div>
            </li>

            <li>
            <span>02</span>
            <div>
                <strong>Invalid password</strong>
                <p>
                A valid username with an incorrect password should be rejected.
                </p>
            </div>
            </li>

            <li>
            <span>03</span>
            <div>
                <strong>Invalid username</strong>
                <p>
                An unknown username should be rejected.
                </p>
            </div>
            </li>

            <li>
            <span>04</span>
            <div>
                <strong>Empty credentials</strong>
                <p>
                Submitting the form without credentials should not authenticate.
                </p>
            </div>
            </li>
        </ul>
    </section>
  </main>
</template>
