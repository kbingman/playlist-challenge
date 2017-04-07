import { Component } from 'react';
import Head from 'next/head';

import Song from '../src/components/song';
import Playlist from '../src/components/playlist';
import PlaylistForm from '../src/components/playlist-form';

import { getAllSongs } from '../src/controllers/songs';
import { getAllPlaylists } from '../src/controllers/playlists';

export default class IndexPage extends Component {

    static async getInitialProps () {
        const songs = await getAllSongs();
        const playlists = await getAllPlaylists(songs);

        return {
            songs,
            playlists
        };
    }

    componetDidMount () {
        console.log('mounted');
    }

    render () {
        const { songs, playlists } = this.props;

        return (
            <div className="container">
                <Head>
                    <title>Playlist</title>

                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                    <meta name="viewport" content="width=device-width" />

                    <link rel="stylesheet" href="/static/css/bootstrap.css" />
                </Head>
                <h1>Ryan's Awesome Library</h1>
                <div className="library">
                    <div className="library__listing library__listing--playlists">
                        <PlaylistForm />
                        <div className="playlists__wrapper">
                            { playlists.map(playlist => (
                                <Playlist key={ playlist.id } playlist={ playlist } songs={ songs }/>
                            )) }
                        </div>
                    </div>
                    <div className="library__listing library__listing--songs">
                        { songs.map(song => (
                            <Song key={ song.id } song={ song } />
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
