import Link from 'next/link';
import PlaylistSong from './playlist-song';
import {
    handlePlaylistDeletion
} from '../controllers/playlists';

const Playlist = ({ playlist, editable, deletable }) => {
    const { id, name, songs } = playlist;
    let deleteButton;
    if (deletable) {
        deleteButton = (
            <button onClick={ () => handlePlaylistDeletion(id) }>
                Delete
            </button>
        );
    }

    return (
        <div className="playlist">
            <div className="listing__title">
                <h2>
                    <Link href={ `/?playlist=${id}` }><a>{ name }</a></Link>
                    {/* This is hot delete and needs to be changed, but I will get to that if I have time */}
                    { deleteButton }
                </h2>
                <div>
                    { songs.map(song => (
                        <PlaylistSong key={ `${id}-${song.id}` }
                                      song={ song }
                                      playlist={ playlist }
                                      editable={ editable } />
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
