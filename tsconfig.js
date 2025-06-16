const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config))

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  video: false,
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents,
    experimentalSessionAndOrigin: true,
    specPattern: "**/*.feature",
    supportFile: "cypress/support/e2e.js",
    // baseUrl: "https://demopremium.emodal.com/",
  },
  pageLoadTimeout: 1500000,
  defaultCommandTimeout: 90000,
  reporter: "junit",
  reporterOptions: {
    mochaFile: "cypress/reports/junit-[hash].xml",
  },
});

