import { Component } from 'react';
import Head from 'next/head';

import Song from '../src/components/song';

import { getAllSongs } from '../src/songs';

export default class IndexPage extends Component {

    static async getInitialProps () {
        const songs = await getAllSongs();

        return {
            songs
        };
    }

    componetDidMount () {
        console.log('mounted');
    }

    render () {
        const { songs } = this.props;
        console.log(songs.length);

        return (
            <div className="container">
                <Head>
                    <title>Playlist</title>

                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                    <meta name="viewport" content="width=device-width" />

                    <link rel="stylesheet" href="/static/css/bootstrap.css" />
                    <link rel="stylesheet" href="/static/css/main.css" />
                </Head>
                <h1>Ryan's Awesome Library</h1>
                { songs.map(song => <Song key={ song.id } song={ song } />) }
            </div>

        );
    }

};
