import { addSongToPlaylist } from '../controllers/playlists';

const Song = ({ song, playlist }) => {
    const { album, artist, id, title } = song;

    let button;
    if (playlist) {
        button = <button onClick={ () => addSongToPlaylist({ song, playlist }) }>Add</button>;
    }

    return (
        <li className="listing">
            {/* <div className="listing__artist">{ artist }</div>
            <div className="listing__album">{ album }</div> */}
            <div className="listing__title">
                { button }
                { title }
            </div>
            <style jsx>{`
                .listing {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
            `}</style>
        </li>
    );
};

export default Song;
