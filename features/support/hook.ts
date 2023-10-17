import { After, AfterAll, BeforeAll, Status } from '@cucumber/cucumber';
import { Builder, Capabilities, ChromiumWebDriver, WebDriver } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';

export let driver: WebDriver;

BeforeAll(function () {
    driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(
            new Options()
                //.headless() - to make the chrome invisible
                .windowSize({ width: 640, height: 480 })
        )
        .build();
    return driver.manage().window().maximize();
});

// BeforeAll(function () {
//     driver = new Builder()
//         .usingServer(gridUrl2)
//         .withCapabilities(capabilities)
//         .build();
//     return driver.manage().window().maximize();
// });

// BeforeAll(async () => {
//     driver = await new Builder()
//         .forBrowser('chrome')
//         .setChromeOptions(
//             new Options()
//                 //.headless() - to make the chrome invisible
//                 .windowSize({ width: 640, height: 480 })
//         )
//         .build();
//     return driver.manage().window().maximize();
// });

AfterAll(function (){
    driver.quit();
});

// AfterAll(async function (){
//     driver.quit();
// });

// After(async function (scenario) {
//     if (scenario.result?.status === Status.FAILED) {
//         const attach = this.attach;
//         const png = await driver.takeScreenshot();
//         const decodedImage = Buffer.from(png, "base64");
//         return attach(decodedImage, "image/png");
//     }
// });