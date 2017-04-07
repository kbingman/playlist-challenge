import {
    removeSongFromPlaylist
} from '../controllers/playlists';

const PlaylistSong = ({ song, playlist, editable }) => {
    const { album, artist, title } = song;

    // This is hot delete and needs to be changed, but I will get to that if I have time
    const deleteButton = editable
        ? <button onClick={ () => removeSongFromPlaylist({ song, playlist }) }>Delete</button>
        : null;

    return (
        <div className="listing__title">
            <div><strong>{ title } &mdash; { album }</strong></div>
            <div>{ artist }</div>
            { deleteButton }
        </div>
    );
};

export default PlaylistSong;
