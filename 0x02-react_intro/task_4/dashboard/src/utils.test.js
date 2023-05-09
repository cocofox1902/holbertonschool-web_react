import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

it('getFullYear', () => {
  expect(getFullYear()).toBe(new Date().getFullYear());
});

it('getFooterCopy true', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

it('getFooterCopy false', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

it('getLatestNotification', () => {
  expect(getLatestNotification()).toBe(
    '<strong>Urgent requirement</strong> - complete by EOD'
  );
});
