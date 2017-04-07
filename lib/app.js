const path = require('path');
const express = require('express');

const Songs = require('./songs');

const STATIC_DIR = path.join(__dirname, '..', 'static');

module.exports = function createApp (options) {
    const library = new Songs(path.join(__dirname, '..', 'data'));
    const app = express();

    app.use(express.logger());
    app.use(express.bodyParser());
    app.use(express.static(STATIC_DIR));

    app.get('/library/', function (req, res) {
        const data = library.getLibrary();

        res.json(data);
    });

    app.get('/library/:id/', function (req, res) {
        const id = parseInt(req.params.id, 10);
        const data = library.getSong(id);

        res.json(data);
    });

    app.get('/playlist/', function (req, res) {
        library.getPlaylists(function (err, playlists) {
            res.json(playlists);
        });
    });

    app.post('/playlist/', function (req, res) {
        var data = req.body;

        console.dir(data);
        console.dir(req.headers);

        var name = data.name;
        var songs = data.songs;

        library.savePlaylist(null, name, songs, function (err, id) {
            res.json({
                id: id
            });
        });
    });

    app.get('/playlist/:id/', function (req, res) {
        const id = parseInt(req.params.id, 10);
        const data = library.getPlaylist(id);

        res.json(data);
    });

    app.post('/playlist/:id/', function (req, res) {
        const id = parseInt(req.params.id, 10);
        const data = req.body;

        const name = data.name;
        const songs = data.songs;

        library.savePlaylist(id, name, songs, function (err, id) {
            res.json({
                id: id
            });
        });
    });

    app.delete('/playlist/:id/', function (req, res) {
        const id = parseInt(req.params.id, 10);
        const data = library.deletePlaylist(id);

        res.json({});
    });

    return app;
};
