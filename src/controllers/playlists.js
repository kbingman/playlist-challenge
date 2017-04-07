import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const getAllPlaylists = async (library) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/playlist/`);
        const playlists = data.map(playlist => {
            return Object.assign({}, playlist, {
                songs: library.filter(s => playlist.songs.indexOf(s.id) > -1)
            });
        });

        return playlists;
    } catch (error) {
        console.log(error);
    }
};

export const createPlaylist = async (playlist) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/playlist/`, playlist);

        return data;
    } catch (error) {
        console.log(error);
    }
};

// export const updatePlaylist = async (playlist) => {
//     try {
//         const { data } = await axios.post(`${BASE_URL}/library/`, playlist);
//
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// };
