import { browser, element, by } from 'protractor';

export class Ng4fwV1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fw-root h1')).getText();
  }
}
