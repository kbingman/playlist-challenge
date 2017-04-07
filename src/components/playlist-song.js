import {
    removeSongFromPlaylist
} from '../controllers/playlists';

const PlaylistSong = ({ song, playlist, editable }) => {
    const { album, artist, id, title } = song;

    // This is hot delete and needs to be changed, but I will get to that if I have time
    let deleteButton;
    if (editable) {
        deleteButton= (
            <button onClick={ () => removeSongFromPlaylist({ song, playlist }) }>
                Delete
            </button>
        );
    }

    return (
        <div className="listing__title">
            <div><strong>{ title } &mdash; { album }</strong></div>
            <div>{ artist }</div>
            { deleteButton }
        </div>
    );
};

export default PlaylistSong;
