import { After, AfterAll, BeforeAll, Status } from '@cucumber/cucumber';
import { Builder, Capabilities, WebDriver } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';
import {setDefaultTimeout} from '@cucumber/cucumber'; setDefaultTimeout(60 * 1000);

export let driver: WebDriver;
const username= 'olvi';
const accessKey= 'gKE9pHTk4TLxizmUYxtHVZFKmcpU9HxRUPziZ9YxUAOiYgbN9N';
const GRID_HOST = 'hub.lambdatest.com/wd/hub';
const gridUrl = 'https://' + username + ':' + accessKey + '@' + GRID_HOST;

const capabilities = {
    build: 'NodeJS build',  // Name of the build
    name: 'Test 1',         // Name of the test
    platform: 'macOS Monterey', // Name of Operating System
    browserName: 'Chrome',  // Name of the browser
    version: '118',        // Version of the browser
    resolution: '10234x768', // Resolution of the screen 
    network: true,          // Enable to capture browser network logs
    visual: true,           // Enable to capture screenshot on every command
    console: true,          // Enable to capture the console log
    video: true
};

// Run Browser in Local
/* BeforeAll(async () => {
    driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(
            new Options()
                //.headless() - to make the chrome invisible
                .windowSize({ width: 640, height: 480 })
        )
        .build();
    return driver.manage().window().maximize();
}); */

// Run Browser in LambdaTest
BeforeAll(async () => {
    driver = await new Builder()
        .usingServer(gridUrl)
        .withCapabilities(capabilities)
        .build();
    return driver.manage().window().maximize();
});

AfterAll(async function (){
    driver.quit();
});
