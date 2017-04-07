import {
    handlePlaylistCreation
} from '../controllers/playlists';

const PlaylistForm = () => {
    return (
        <form onSubmit={ e => handlePlaylistCreation(e) }
              action="#"
              className="playlist-form">
            <div className="playlist-form__field">
                <label>Name</label>
                <input type="text" />
            </div>
            <div className="playlist-form__field">
                <button>New Playlist</button>
            </div>
        </form>
    );
};

export default PlaylistForm;
