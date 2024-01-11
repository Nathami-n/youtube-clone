import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL, 
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key':  import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const FetchData = async (url) => {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    const data = response.data;
    return data

}
