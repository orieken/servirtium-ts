import { Servirtium } from './servirtium';

describe('Climate Api', () => {
  describe('Climate Api', () => {
    let servirtium: Servirtium;
    beforeEach(() => {
      servirtium = new Servirtium();
    });
    it('exists', () => {
      expect(servirtium).toBeDefined();
    });
  });
});
