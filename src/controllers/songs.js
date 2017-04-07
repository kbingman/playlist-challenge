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

export const groupSongsByArtist = (songs) => {
    return songs.reduce((memo, song) => {
        let artist = memo.find(a => a.name === song.artist);
        if (!artist) {
            artist = { name: song.artist, albums: [] };
            memo.push(artist);
        }
        let album = artist.albums.find(a => a.name === song.album);
        if (!album) {
            album = { name: song.album, songs: [] };
            artist.albums.push(album);
        }
        album.songs.push(song);

        return memo;
    }, []);
};
