const Playlist = ({ playlist }) => {
    const { id, name } = playlist;
    const songIds = playlist.songs;

    return (
        <div className="playlist">
            {/* <div className="listing__artist">{ artist }</div>
            <div className="listing__album">{ album }</div> */}
            <div className="listing__title">
                { name }
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
