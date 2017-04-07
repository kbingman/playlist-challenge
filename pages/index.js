import { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Song from '../src/components/song';
import Playlists from '../src/components/playlists';

import { getAllSongs, groupSongsByArtist } from '../src/controllers/songs';
import { getAllPlaylists } from '../src/controllers/playlists';

export default class IndexPage extends Component {

    static async getInitialProps ({ query }) {
        const songs = await getAllSongs();
        const playlists = await getAllPlaylists(songs);
        const playlist = playlists.find(p => p.data.id === parseInt(query.playlist));
        const artists = groupSongsByArtist(songs);

        return {
            artists,
            songs,
            playlists,
            playlist
        };
    }

    render () {
        const { playlists, playlist, artists } = this.props;

        const title = 'Ryan\'s Awesome Library';
        const headline = playlist
            ? <Link href="/"><a>{ title }</a></Link>
            : title;

        return (
            <div className="container">
                <Head>
                    <title>Playlist</title>

                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                    <meta name="viewport" content="width=device-width" />

                    <link rel="stylesheet" href="/static/css/bootstrap.css" />
                </Head>
                <h1>{ headline }</h1>
                <div className="library">
                    <div className="library__listing library__listing--playlists">
                        <Playlists playlists={ playlists } playlist={ playlist } />
                    </div>
                    <div className="library__listing library__listing--songs">
                        { artists.map(artist => (
                            <div key={ artist.name }>
                                <h3>{ artist.name }</h3>
                                { artist.albums.map(album => (
                                    <div key={ album.name } className="album">
                                        <h4>{ album.name }</h4>
                                        { album.songs.map(song => (
                                            <Song key={ song.id } song={ song } playlist={ playlist } />
                                        )) }
                                    </div>
                                )) }
                            </div>
                        )) }
                    </div>
                </div>
                <style jsx>{`
                    .library {
                        display: flex;
                        justify-content: space-between;
                    }
                    .library :global(.library__listing) {
                        width: 42%;
                        padding: 0 4%;
                    }
                `}</style>
            </div>
        );
    }

};
