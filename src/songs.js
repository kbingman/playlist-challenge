import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const getAllSongs = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/library/`);

        return data;
    } catch (error) {
        console.log(error);
    }
};
