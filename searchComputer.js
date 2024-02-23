const { Builder, By, Key, until } = require('selenium-webdriver');

async function exampleTest() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.manage().setTimeouts({ implicit: 2000 });
    await driver.get('http://computer-database.gatling.io/computers');
    await driver.findElement(By.id('searchbox')).sendKeys('Lenovo', Key.RETURN);
    await driver.findElement(By.css("input[id='searchsubmit']")).click();
    console.log('Test passed!');
  } finally {
    await driver.quit();
  }
}

exampleTest();