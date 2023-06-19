import fetchMock from 'fetch-mock';
import { fetchData } from './api';

describe('fetchData', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should fetch data from the API and return it as JSON', async () => {
    const expectedData = { id: 1, name: 'John Doe' };
    fetchMock.getOnce('http://example.com/data', {
      body: expectedData,
      headers: { 'content-type': 'application/json' },
    });

    const data = await fetchData('http://example.com/data');
    expect(data).toEqual(expectedData);
  });

  it('should throw an error if the API returns an error status code', async () => {
    fetchMock.getOnce('http://example.com/data', {
      status: 404,
      body: { message: 'Not found' },
      headers: { 'content-type': 'application/json' },
    });

    await expect(fetchData('http://example.com/data')).rejects.toThrow(
      'Not found'
    );
  });

  it('should throw an error if the API returns invalid JSON', async () => {
    fetchMock.getOnce('http://example.com/data', {
      body: 'invalid json',
      headers: { 'content-type': 'application/json' },
    });

    await expect(fetchData('http://example.com/data')).rejects.toThrow(
      'Unexpected token'
    );
  });
});
