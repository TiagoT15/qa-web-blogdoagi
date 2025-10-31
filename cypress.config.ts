import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://blog.agibank.com.br',
    viewportWidth: 1366,
    viewportHeight: 900,
    retries: 1,
    video: true,
    screenshotOnRunFailure: true,
    // reporter: 'mochawesome',
    // reporterOptions: {
    //   reportDir: 'cypress/reports/mochawesome',
    //   overwrite: false,
    //   html: false,
    //   json: true
    // },
    setupNodeEvents(on, config) {
      // Node event listeners
    },
  },
})