import Playlist from './playlist';
import PlaylistForm from './playlist-form';

const Playlists = ({ playlists, playlist }) => {
    if (playlist) {
        return (
            <Playlist playlist={ playlist.data }
                      songs={ playlist.songs }
                      editable={ true } />
        );
    }

    return (
        <div className="playlists__wrapper">
            <PlaylistForm />
            { playlists.map(p => (
                <Playlist key={ p.data.id }
                          playlist={ p.data }
                          songs={ p.songs }
                          deletable={ true } />
            )) }
        </div>
    );

};

export default Playlists;
