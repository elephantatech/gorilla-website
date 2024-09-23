import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY!,
});

export const searchPhotos = async (query: string, page: number = 1, perPage: number = 10) => {
  try {
    const response = await unsplash.search.getPhotos({
      query,
      page,
      perPage,
    });

    if (response.errors) {
      console.error('Error occurred:', response.errors);
      return null;
    }

    return response.response?.results || [];
  } catch (error) {
    console.error('Error fetching photos:', error);
    return null;
  }
};
