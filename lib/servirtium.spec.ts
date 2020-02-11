import { Servirtium } from './servirtium';

describe('servirtium', () => {
  let servirtium: Servirtium;
  beforeEach(() => {
    servirtium = new Servirtium();
  });
  it('exists', () => {
    expect(servirtium).toBeDefined();
  });
});
