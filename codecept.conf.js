//const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
//setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://novaposhta.ua/',
      show: true,
      browser: 'chromium',
      restart: true,
      keepBrowserState: false,
      keepCookies: false,
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'bugFixRequest',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}