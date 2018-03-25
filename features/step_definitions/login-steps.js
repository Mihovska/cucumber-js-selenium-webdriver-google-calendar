'use strict';

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');

defineSupportCode(function({When, Then, And}) {

  When(/^I fill in e-mail with "([^"]*)"$/, function (userEmail, next) {
    this.driver.get('https://www.google.com/calendar');
    this.driver.findElement(By.name('identifier'))
      .sendKeys(userEmail);
    this.driver.findElement(By.name('identifier'))
      .sendKeys(Key.ENTER)
        .then(function() {
          next();
        });
  });

  And(/^I fill in Password with "([^"]*)"$/, function (userPass, next) {
    this.driver.findElement(By.name('password'))
      .sendKeys(userPass);
    this.driver.findElement(By.name('password'))
      .sendKeys(Key.ENTER)
        .then(function() {
          next();
        });
  });


  Then(/^I should be redirected to my profile page$/, function (next) {
    this.driver.wait(until.elementLocated(By.css('div.g')));
    this.driver.findElements(By.css('div.g'))
      .then(function(elements) {
        expect(elements.length).to.not.equal(0);
        next();
      });
  });

});
