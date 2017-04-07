import Playlist from './playlist';
import PlaylistForm from './playlist-form';

const Playlists = ({ playlists, playlist }) => {

    if (playlist) {
        return (
            <Playlist playlist={ playlist } editable={ true } />
        );
    }

    return (
        <div className="playlists__wrapper">
            <PlaylistForm />
            { playlists.map(p => (
                <Playlist key={ p.id } playlist={ p }  />
            )) }
        </div>
    );

};

export default Playlists;
