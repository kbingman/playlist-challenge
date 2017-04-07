const song = ({ song }) => {
    const { album, artist, id, title } = song;

    return (
        <li className="listing">
            {/* <div className="listing__artist">{ artist }</div>
            <div className="listing__album">{ album }</div> */}
            <div className="listing__title">{ title }</div>
            <button onClick={ () => console.log(id) }>Add</button>
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

export default song;
