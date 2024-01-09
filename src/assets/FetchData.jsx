import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/captions';
const rapidApiKey = import.meta.env.REACT_APP_RAPID_API_KEY;
const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': rapidApiKey,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const FetchData = async (url) => {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    const data = response.data;
    return data

}
