import axios from 'axios';
import Router from 'next/router';

const BASE_URL = 'http://localhost:5000';

export const getAllPlaylists = async (library) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/playlist/`);
        const playlists = data.map(playlist => {
            return Object.assign({}, playlist, {
                songs: library.filter(s => (playlist.songs || []).indexOf(s.id) > -1)
            });
        });

        return playlists.reverse();
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

export const handlePlaylistCreation = async (e) => {
    e.preventDefault();
    const field = e.target.querySelector('input');
    const name = field.value;
    await createPlaylist({ name });
    Router.push('/');
    field.value = '';
};

export const handlePlaylistDeletion = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/playlist/${id}/`);
        Router.push('/');
    } catch (error) {
        console.log('Handle the errors!');
        console.log(error);
    }
};
