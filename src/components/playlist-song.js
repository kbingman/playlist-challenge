import {
    removeSongFromPlaylist
} from '../controllers/playlists';

const PlaylistSong = ({ song, playlist, editable }) => {
    let deleteButton;
    if (editable) {
        deleteButton= (
            <button onClick={ () => removeSongFromPlaylist({ song, playlist }) }>
                Delete
            </button>
        );
    }

    return (
        <div key={ `${playlist.id}-${song.id}` } className="listing__title">
            { song.title }
            { deleteButton }
        </div>
    );
};

export default PlaylistSong;
