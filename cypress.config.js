const { defineConfig } = require("cypress");
const fs = require("fs");

module.exports = defineConfig({
  reporter: "mochawesome", // ✅ For Mochawesome report
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: false,
    json: true
  },
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  video: true,
  screenshotOnRunFailure: true,

  e2e: {
    specPattern: "cypress/e2e/*.{js,tsx}",
    pageLoadTimeout: 60000,

    retries: {
      runMode: 2,
      openMode: 1
    },

    env: {
      URL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
      LOGINURL: "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
      FORGOTPASSURL: "https://naveenautomationlabs.com/opencart/index.php?route=account/forgotten",
      CONTACTUSURL: "https://naveenautomationlabs.com/opencart/index.php?route=information/contact"
    },

    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      // ✅ Log each test start in terminal
      on("test:before:run", (details) => {
        console.log(`🔍 Running: ${details.title}`);
      });

      // ✅ Automatically take a screenshot on test failure
      on("after:screenshot", (details) => {
        console.log(`📸 Screenshot taken: ${details.path}`);
      });

      // ✅ Log after each test run
      on("test:after:run", (test, runnable) => {
        if (test.state === "failed") {
          const screenshotPath = `cypress/screenshots/${Cypress.spec.name}/${runnable.title} (failed).png`;
          console.log(`❌ Failed test: ${test.title}`);
          console.log(`📸 Screenshot (expected): ${screenshotPath}`);
        } else {
          console.log(`✅ Passed: ${test.title}`);
        }
      });

      // ✅ Custom tasks if needed (e.g., write to file/log)
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
        writeFile({ filename, data }) {
          fs.writeFileSync(filename, data);
          return null;
        },
      });

      return config; // Always return the updated config
    },
  },
});
