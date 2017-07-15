import { InOutputAngPage } from './app.po';

describe('in-output-ang App', () => {
  let page: InOutputAngPage;

  beforeEach(() => {
    page = new InOutputAngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
