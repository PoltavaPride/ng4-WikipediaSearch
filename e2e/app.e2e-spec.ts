import { SimpleWikiSearchPage } from './app.po';

describe('simple-wiki-search App', () => {
  let page: SimpleWikiSearchPage;

  beforeEach(() => {
    page = new SimpleWikiSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
