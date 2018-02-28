import { browser, by, element } from 'protractor';

export class PdFreeAngularcliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('user-profile-root h1')).getText();
  }
}
