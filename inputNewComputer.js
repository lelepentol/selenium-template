const { Builder, By, Key, until, Select } = require('selenium-webdriver');
const assert = require("assert");

async function exampleTest() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.manage().setTimeouts({ implicit: 2000 });
    await driver.get('http://computer-database.gatling.io/computers');
    await driver.findElement(By.id('add')).click();
    await driver.findElement(By.id('company')).sendKeys('Lenovo Group', Key.RETURN);
    await driver.findElement(By.id('name')).sendKeys('Test Computer Name 1');
    await driver.findElement(By.id('introduced')).sendKeys('2023-01-01');
    await driver.findElement(By.id('discontinued')).sendKeys('2024-01-01', Key.RETURN);

    let result = await driver.findElement(By.className('alert-message')).isDisplayed();
    assert(result, true);
    
  } finally {
    await driver.quit();
  }
}

exampleTest();