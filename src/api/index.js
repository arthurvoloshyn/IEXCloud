import { BASE_PATH, ENDPOINT_PATH, QUERY_PARAM, API_KEY } from '../consts';

export const fetchData = async () => {
  try {
    const response = await fetch(`${BASE_PATH}${ENDPOINT_PATH}?${QUERY_PARAM}${API_KEY}`)
      .then(res => res.json());
    return response;
  } catch (e) {
    console.log(e);
  }
};
