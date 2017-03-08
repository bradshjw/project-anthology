import { ProjectAnthologyPage } from './app.po';

describe('project-anthology App', () => {
  let page: ProjectAnthologyPage;

  beforeEach(() => {
    page = new ProjectAnthologyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
