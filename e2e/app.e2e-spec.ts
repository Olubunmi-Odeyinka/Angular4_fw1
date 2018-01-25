import { Ng4fwV1Page } from './app.po';

describe('ng4fw-v1 App', () => {
  let page: Ng4fwV1Page;

  beforeEach(() => {
    page = new Ng4fwV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fw works!');
  });
});
