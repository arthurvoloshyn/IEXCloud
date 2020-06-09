import { URL } from '../consts';

export const fetchData = async () => {
  try {
    const response = await fetch(URL);
    return await response.json();
  } catch (e) {
    throw new Error(e);
  }
};
