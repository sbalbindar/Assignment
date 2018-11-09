const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
var reporter = require('cucumber-html-reporter');

var options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber.json',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
  //ignoreBadJsonFile: true,
  name: 'nightwatch end2end tests',
  brandTitle: 'nightwatch end2end tests',
  storeScreenShots: true,
  metadata: {
//    "App Version": "0.0.1",
//    "Test Environment": "AAT",
//    "Browser": "Chrome XXX",
//    "Platform": "Mac OS X",
  }
};
reporter.generate(options);