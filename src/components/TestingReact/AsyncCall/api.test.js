import  fetchData  from './api';
import axios from 'axios';

jest.mock('axios');

describe('fetchData', () => {
  it('fetches successfully data from an API', async () => {
    const data = { data: { posts: [{ id: 1, title: 'Post 1' }] } };
    axios.get.mockResolvedValue(data);

    await expect(fetchData()).resolves.toEqual(data.data);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';
    axios.get.mockRejectedValue(new Error(errorMessage));

    await expect(fetchData()).rejects.toThrow(errorMessage);
  });
});
