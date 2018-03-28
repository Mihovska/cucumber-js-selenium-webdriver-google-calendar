'use strict';

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');
var {assert} = require('chai');


defineSupportCode(function({When, Then}) {

  When(/^I fill in e-mail with "([^"]*)"$/, function (userEmail, next) {
    this.driver.get('https://calendar.google.com/calendar');
    this.driver.findElement(By.id('identifierId'))
      .sendKeys(userEmail);
    this.driver.findElement(By.id('identifierId'))
      .sendKeys(Key.ENTER)
        .then(function() {
          next();
        });
  });

  When(/^I fill in Password with "([^"]*)"$/, function (userPass, next) {
    this.driver.wait(until.elementLocated(By.name('password')));
    this.driver.findElement(By.name('password'))
      .sendKeys(userPass);
    this.driver.findElement(By.name('password'))
      .sendKeys(Key.ENTER)
        .then(function() {
          next();
        });
  });


  Then(/^I should be redirected to my profile page$/, function (next) {
    this.driver.wait(until.elementLocated(By.css('a.gb_b.gb_ib.gb_R')));
    var usernameField = this.driver.findElement(By.css('a.gb_b.gb_ib.gb_R'));
    usernameField.getAttribute('aria-label')
      .then(function(element) {
        expect(element).to.include('Test Test');
        next();
      });
  });

  Then(/^I should see error message$/, function (next) {
    this.driver.wait(until.elementLocated(By.css('div.dEOOab.RxsGPe')));
    var errorField = this.driver.findElement(By.css('div.dEOOab.RxsGPe'));
    errorField.getAttribute('aria-live')
      .then(function(element) {
        assert.equal(element, "assertive");
        next();
      });
  });

});
