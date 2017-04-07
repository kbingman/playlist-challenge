import axios from 'axios';
import Router from 'next/router';

const BASE_URL = 'http://localhost:5000';

export const getAllPlaylists = async (library) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/playlist/`);
        const playlists = data.map(playlist => {
            return {
                data: playlist,
                songs: library.filter(s => (playlist.songs || []).indexOf(s.id) > -1)
            };
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
    const playlist = await createPlaylist({ name });

    Router.push(`/?playlist=${playlist.id}`);
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

export const addSongToPlaylist = async ({ song, playlist }) => {
    playlist.songs = playlist.songs || [];
    if (playlist.songs.indexOf(song.id) < 0) {
        playlist.songs.push(song.id);
    }

    try {
        const { data } = await axios.post(`${BASE_URL}/playlist/${playlist.id}/`, playlist);
        Router.push(`/?playlist=${playlist.id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const removeSongFromPlaylist = async ({ song, playlist }) => {
    const index = playlist.songs.indexOf(song.id);
    if (index > -1) {
        playlist.songs.splice(index, 1);
    }

    try {
        const { data } = await axios.post(`${BASE_URL}/playlist/${playlist.id}/`, playlist);
        Router.push(`/?playlist=${playlist.id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};
