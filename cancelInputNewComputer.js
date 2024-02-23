const { Builder, By, Key, until, Select } = require('selenium-webdriver');
const assert = require("assert");

async function exampleTest() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.manage().setTimeouts({ implicit: 2000 });
    await driver.get('http://computer-database.gatling.io/computers');
    
    const loc = await driver.findElement(By.xpath('/html/body/section/h1')).getText();
    const numberOfComputer = (loc.split(' '))[0];
    
    await driver.findElement(By.id('add')).click();

    await driver.findElement(By.css("a[class='btn']")).click();

    assert(numberOfComputer, ((await driver.findElement(By.xpath('/html/body/section/h1')).getText()).split(' '))[0])
    
  } finally {
    await driver.quit();
  }
}

exampleTest();

