import axios from 'axios';

export const fetchMails = async () => {
  try {
    const response = await axios.get('http://localhost:3001/mails');
    return response.data;
  } catch (error) {
    console.error('Error fetching mails:', error);
    return null;
  }
};
