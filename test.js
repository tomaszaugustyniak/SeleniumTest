var webdriver = require("selenium-webdriver");
var capabilities = webdriver.Capabilities.chrome();
// var myUsername=""

async function nodeJsSample() {
    try {
        var driver = new webdriver.Builder()
            .forBrowser('chrome')
            .withCapabilities(capabilities)
            .build();

            // var username = await driver.wait(webdriver.until.elementLocated(webdriver.By.id("login_field")), 10000);

        test_url = 'https://github.com/login';
        await driver.get(test_url);
        var username = await driver.findElement(webdriver.By.id('login_field')); // function finding the login field element by id
        var password = await driver.findElement(webdriver.By.id('password')); // function finding the password field by id
        var submitButton = await driver.findElement(webdriver.By.xpath('//input[@type="submit"]')); // function finding the submit button by xpath

        username.sendKeys('');  // a place where u put your username
        password.sendKeys('');  // a place where u put your password
        submitButton.click();

        var loginCheck = await driver.findElement(webdriver.By.xpath("//span[@class='css-truncate css-truncate-target ml-1' and contains(text(),'tomaszaugustyniak')]"));


        }
    catch (err) {
        console.error('An error occured:\n', err.stack, '\n');
    } finally {
        driver.quit();
    }
};
 
nodeJsSample();