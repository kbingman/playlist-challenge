import {
    handlePlaylistDeletion
} from '../controllers/playlists';

const Playlist = ({ playlist }) => {
    const { id, name, songs } = playlist;

    return (
        <div className="playlist">
            <div className="listing__title">
                <h2>
                    { name }
                    {/* This is hot delete and needs to be changed, but I will get to that if I have time */}
                    <button onClick={ () => handlePlaylistDeletion(id) }>
                        Delete
                    </button>
                </h2>
                <div>
                    { songs.map(song => (
                        <div key={ `${id}-${song.id}` } className="listing__title">
                            { song.title }
                        </div>
                    )) }
                </div>
            </div>
            <style jsx>{`
                .playlist {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
            `}</style>
        </div>
    );
};

export default Playlist;
