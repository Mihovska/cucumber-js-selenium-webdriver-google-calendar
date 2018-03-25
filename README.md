# Automated Testing in JavaScript with Cucumber-JS and Selenium-Webdriver


This is a project using cucumber-js and selenium-webdriver to run browser-based automated tests, in desktop Chrome.


Currently, the project has tests for the Login feature of Google Calendar web application. It runs the tests in Chrome and so you'll need Chrome and the Chromedriver executable on your path. All the JavaScript is linted using jshint before the tests are run (using options specified in the Gruntfile). If any scenarios fail, a screenshot will be taken as a PNG and put in ./screenshots/. After the tests are finished Cucumber shuts down the Webdriver instance.

## Running the tests on the desktop

To get going, you'll need Chrome (or Chromium) installed, and you'll also need the Chromedriver executable available on your path. You can get Chromedriver from [here](http://chromedriver.storage.googleapis.com/index.html) and then, in Linux, you can add the directory to your path like this:

    export PATH=$PATH:~/path/to/directory/containing/chromedriver

Verify it is working by opening a terminal and typing 'chromedriver'. You should see:

    [me@computer ~]$ chromedriver
    Starting ChromeDriver (v2.10) on port 9515
    Only local connections are allowed.

If all seems OK, Ctrl+C to get rid of that, and carry on.

Note that you'll need to install nodeJS from the official website: https://nodejs.org/en/download/package-manager/


    git clone git://github.com/Mihovska/cucumber-js-selenium-webdriver-google-calendar.git
    cd cucumber-js-selenium-webdriver-google-calendar
    npm install
    node_modules/grunt-cli/bin/grunt

Which should first use jshint to lint the step definitions (options are specified in the Gruntfile.js), and then run the tests, producing output that looks something like:

    [me@computer cucumber-js-selenium-webdriver-google-calendar]$ grunt
    Running "jshint:files" (jshint) task
    >> 4 files lint free.

    Running "exec:run_cucumber_tests" (exec) task

    Feature: Login to my Calendar
      In order to use my calendar
       As a registered user
       I want to sign in to my Google Calendar
       So that I can check events and meetings


      Scenario: Login with valid credentials                       # features/login.feature:6
        Given I am on the Google Calendar login page               # features/login.feature:7
         When I fill in "Email" with "apptestautomation7@gmail.com" # features/login.feature:8
        And I press "Next"                                         # features/login.feature:9
        And I fill in "Password" with "Nighthawk_f22"              # features/login.feature:10
        And I press "Next"                                         # features/login.feature:11
        Then I should be redirected to my profile page             # features/login.feature:12


    1 scenario (1 passed)
    6 steps (6 passed)

    Done, without errors.