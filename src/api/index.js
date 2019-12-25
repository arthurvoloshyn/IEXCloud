import { URI } from '../consts';

export const fetchData = async () => {
  try {
    const response = await fetch(URI).then(res => res.json());
    return response;
  } catch (e) {
    throw new Error(e);
  }
};
