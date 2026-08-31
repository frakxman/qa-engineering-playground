import { createRouter, createWebHistory } from 'vue-router'
import PlaygroundHome from '../components/PlaygroundHome.vue'
import IntroductionView from '../views/IntroductionView.vue'
import TestDesignView from '../views/TestDesignView.vue'
import ApiTestingView from '../views/ApiTestingView.vue'
import PostmanView from '../views/PostmanView.vue'
import CypressView from '../views/CypressView.vue'
import PlaywrightView from '../views/PlaywrightView.vue'
import PerformanceView from '../views/PerformanceView.vue'
import AccessibilityView from '../views/AccessibilityView.vue'
import TestReportsView from '../views/TestReportsView.vue'
import CiCdTestingView from '../views/CiCdTestingView.vue'
import AuthenticationLabView from '../views/AuthenticationLabView.vue'
import AutomationLabView from '../views/AutomationLabView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PlaygroundHome,
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: IntroductionView,
    },
    {
      path: '/test-design',
      name: 'test-design',
      component: TestDesignView,
    },
    {
      path: '/api-testing',
      name: 'api-testing',
      component: ApiTestingView,
    },
    {
      path: '/postman',
      name: 'postman',
      component: PostmanView,
    },
    {
      path: '/cypress',
      name: 'cypress',
      component: CypressView,
    },
    {
      path: '/playwright',
      name: 'playwright',
      component: PlaywrightView,
    },
    {
      path: '/performance',
      name: 'performance',
      component: PerformanceView,
    },
    {
      path: '/accessibility',
      name: 'accessibility',
      component: AccessibilityView,
    },
    {
      path: '/test-reports',
      name: 'test-reports',
      component: TestReportsView,
    },
    {
      path: '/ci-cd-testing',
      name: 'ci-cd-testing',
      component: CiCdTestingView,
    },
    {
      path: '/authentication',
      name: 'authentication',
      component: AuthenticationLabView,
    },
    {
      path: '/automation',
      name: 'automation',
      component: AutomationLabView,
    }
  ],
})

export default router
