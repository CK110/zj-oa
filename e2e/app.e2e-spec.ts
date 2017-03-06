import { ZjOaPage } from './app.po';

describe('zj-oa App', function() {
  let page: ZjOaPage;

  beforeEach(() => {
    page = new ZjOaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
