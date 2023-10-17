import assert from 'assert';
import { Given, Then, When } from "@cucumber/cucumber";
import { ExamplePageObject } from "../../pageObjects/homepage/ExamplePageObject";

let examplePage: ExamplePageObject;
let searchSummaryAtVeryBeginning: string;

Given('the user is on the page',
  async function () {
    examplePage = new ExamplePageObject();
    examplePage.open();
    searchSummaryAtVeryBeginning = await examplePage.getSummaryText();
});

When('the user enters the value {string} in the text-input',
  async function (value: string) {
      await examplePage.setSearchInput(value);
});

When('the user selects value {string} in the drop-down',
  async function (value: string) {
      await examplePage.selectSearchColumnByText(value);
});

When('the user sets case sensitivity switch to {string}',
  async function (isCaseSensitive: string) {
      let booleanValue: boolean = isCaseSensitive.toLowerCase() === 'true';
      await examplePage.setMatchCaseCheckboxField(booleanValue);
});

Then('the user should see the following result summary {string}',
  async function (expectedSummary: string) {
    assert.strictEqual(
      await examplePage.getSummaryText(),
      expectedSummary);
});

Then('the user should see that the search term is {string}',
    async function (expectedTerm: string) {
        let searchTerm: string = await examplePage.getSearchTermText();
        assert.ok(searchTerm.startsWith(expectedTerm),
            "Actual should starts with expected."
            + "\nActual: " + searchTerm
            + "\nExpected: " + expectedTerm);
});

When('the user clears filters',
    async function () {
        await examplePage.clickClearFiltersButton();
});

Then('the user should see that search criteria are cleared',
    async function () {
        assert.strictEqual(await examplePage.getSearchInputText(), "");
});

Then('the user should see that the search result summary is as in the very beginning',
    async function () {
        assert.strictEqual(await examplePage.getSummaryText(),
            searchSummaryAtVeryBeginning);
});

Then('the user should see that the search results are as follows: {string}',
    async function (expectedResults: string) {
        let resultText: string
            = await examplePage.getSearchResultsTableText();
        assert.strictEqual(
            resultText
                .replace(/(\s+)/gm, " ")
                .trim(),
            expectedResults);
});
