import { ProjectFinalPage } from './app.po';

describe('project-final App', () => {
  let page: ProjectFinalPage;

  beforeEach(() => {
    page = new ProjectFinalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
