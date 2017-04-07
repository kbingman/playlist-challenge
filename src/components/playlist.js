import Link from 'next/link';
import PlaylistSong from './playlist-song';
import {
    handlePlaylistDeletion
} from '../controllers/playlists';

const Playlist = ({ playlist, songs, editable, deletable }) => {
    const { id, name } = playlist;

    const deleteButton = deletable
        ? <button onClick={ () => handlePlaylistDeletion(id) }>Delete</button>
        : null;
    const title = editable
        ? name
        : <Link href={ `/?playlist=${id}` }><a>{ name }</a></Link>;

    return (
        <div className="playlist">
            <div className="listing__title">
                <h2>
                    { title }
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
