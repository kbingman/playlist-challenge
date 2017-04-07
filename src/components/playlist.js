import Song from './song';

const Playlist = ({ playlist }) => {
    const { id, name, songs } = playlist;

    return (
        <div className="playlist">
            <div className="listing__title">
                <h2>{ name }</h2>
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
