import { AngularLessPage } from './app.po';

describe('angular-less App', () => {
  let page: AngularLessPage;

  beforeEach(() => {
    page = new AngularLessPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
