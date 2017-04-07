import {
    removeSongFromPlaylist
} from '../controllers/playlists';

const PlaylistSong = ({ song, playlist, editable }) => {

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
            { song.title }
            { deleteButton }
        </div>
    );
};

export default PlaylistSong;
