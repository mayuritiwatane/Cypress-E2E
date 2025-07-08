const { defineConfig } = require("cypress");

module.exports = defineConfig({
      projectId: "ku86wa" ,

  reporter: "mochawesome", // ✅ For Mochawesome report
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: false,
    json: true,
  },
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  video: true,
  screenshotOnRunFailure: true,

  e2e: {
    specPattern: "cypress/e2e/**/*.{js,tsx}", // added ** for recursive match
    pageLoadTimeout: 60000,

    retries: {
      runMode: 2,
      openMode: 1,
    },

    env: {
      RegisterURL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
      LOGINURL: "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
      FORGOTPASSURL: "https://naveenautomationlabs.com/opencart/index.php?route=account/forgotten",
      CONTACTUSURL: "https://naveenautomationlabs.com/opencart/index.php?route=information/contact",
      SERCHFUNCTIONALITYURL: "https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=17",
      RegisterFormURL : "https://demo.automationtesting.in/Register.html"
    },

    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
      return config;
    },
  },
});
