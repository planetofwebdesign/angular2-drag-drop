import { Angular2DndPage } from './app.po';

describe('angular2-dnd App', () => {
  let page: Angular2DndPage;

  beforeEach(() => {
    page = new Angular2DndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
