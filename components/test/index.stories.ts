import Test from './index.vue'

export default {
  component: Test,
  title: 'Components/Test'
}

export const TestComponent = () => ({
  components: { Test },
  template: '<Test />'
})
