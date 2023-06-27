import { normalizedData } from './notifications';

describe('normalizedData', () => {
  it('contains an array of notifications', () => {
    expect(Array.isArray(normalizedData.result)).toBe(true);
    expect(normalizedData.result.length).toBeGreaterThan(0);
  });

  it('contains an object of normalized notifications', () => {
    expect(typeof normalizedData.entities.notifications).toBe('object');
    expect(Object.keys(normalizedData.entities.notifications).length).toBeGreaterThan(0);
  });

  it('contains an object of normalized users', () => {
    expect(typeof normalizedData.entities.users).toBe('object');
    expect(Object.keys(normalizedData.entities.users).length).toBeGreaterThan(0);
  });

  it('contains an object of normalized messages', () => {
    expect(typeof normalizedData.entities.messages).toBe('object');
    expect(Object.keys(normalizedData.entities.messages).length).toBeGreaterThan(0);
  });
});
