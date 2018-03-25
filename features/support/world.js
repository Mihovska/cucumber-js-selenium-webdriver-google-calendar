'use strict';

const webdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var {Builder, By, until} = require('selenium-webdriver');
var fs = require('fs');
var platform = process.env.PLATFORM || "CHROME";

const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', {args: ['--headless']});

var buildDriver = function() {
  return new webdriver.Builder()
  .forBrowser("chrome")
  .withCapabilities(chromeCapabilities)
  .build();
};

defineSupportCode(function({setDefaultTimeout}) {
    setDefaultTimeout(60 * 1000);
});

var World = function World() {

  var screenshotPath = "screenshots";

  this.driver = buildDriver();

  if(!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }

};

defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(World);
});
