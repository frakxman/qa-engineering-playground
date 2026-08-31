<script setup lang="ts">
const roadmapItems = [
  { number: '01', title: 'Introduction', slug: 'introduction' },
  { number: '02', title: 'Test Design', slug: 'test-design' },
  { number: '03', title: 'API Testing', slug: 'api-testing' },
  { number: '04', title: 'Postman', slug: 'postman' },
  { number: '05', title: 'Cypress', slug: 'cypress' },
  { number: '06', title: 'Playwright', slug: 'playwright' },
  { number: '07', title: 'Performance', slug: 'performance' },
  { number: '08', title: 'Accessibility', slug: 'accessibility' },
  { number: '09', title: 'Test Reports', slug: 'test-reports' },
  { number: '10', title: 'CI/CD Testing', slug: 'ci-cd-testing' },
]

const labItems = [
  { title: 'Authentication', slug: 'authentication' },
  { title: 'Automation', slug: 'automation' },
]

</script>

<template>
  <aside class="sidebar">
    <span class="sidebar-title">Learning Roadmap</span>

    <nav>
      <RouterLink
        v-for="item in roadmapItems"
        :key="item.slug"
        :to="`/${item.slug}`"
      >
        {{ item.number }} {{ item.title }}
      </RouterLink>
    </nav>

    <span class="sidebar-title labs-title">Labs</span>

    <nav>
      <RouterLink
        v-for="item in labItems"
        :key="item.slug"
        :to="`/${item.slug}`"
      >
        {{ item.title }}
      </RouterLink>
    </nav>
  </aside>
</template>
