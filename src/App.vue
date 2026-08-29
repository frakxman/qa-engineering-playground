<script setup lang="ts">
import PlaygroundHeader from './components/PlaygroundHeader.vue'
import PlaygroundSidebar from './components/PlaygroundSidebar.vue'

</script>

<template>
  <div class="playground">
    <PlaygroundHeader />

    <div class="playground-body">
      <aside class="sidebar">
        <span class="sidebar-title">Learning Roadmap</span>

        <nav>
          <a href="#">01 Introduction</a>
          <a href="#">02 Test Design</a>
          <a href="#">03 API Testing</a>
          <a href="#">04 Postman</a>
          <a href="#">05 Cypress</a>
          <a href="#">06 Playwright</a>
          <a href="#">07 Performance</a>
          <a href="#">08 Accessibility</a>
          <a href="#">09 Test Reports</a>
          <a href="#">10 CI/CD Testing</a>
        </nav>

        <span class="sidebar-title labs-title">Labs</span>

        <nav>
          <a href="#">Authentication</a>
          <a href="#">Automation</a>
        </nav>
      </aside>

      <main class="content">
        <span class="eyebrow">WELCOME</span>

        <h2>Learn. Practice. Automate.</h2>

        <p class="intro">
          A hands-on QA Engineering playground where testing concepts,
          practical laboratories and automation come together.
        </p>

        <div class="principles">
          <article>
            <span>01</span>
            <h3>Learn</h3>
            <p>Understand software testing concepts and QA practices.</p>
          </article>

          <article>
            <span>02</span>
            <h3>Practice</h3>
            <p>Apply testing techniques through real-world examples.</p>
          </article>

          <article>
            <span>03</span>
            <h3>Automate</h3>
            <p>Build automated tests using modern engineering tools.</p>
          </article>
        </div>
      </main>
    </div>
  </div>
</template>
