const next = require('next');

const PORT = process.env.PORT || 5000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = require('./lib/app.js')();

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(PORT, (error) => {
            if (error) {
                throw error;
            }
            console.log(`Running @ http://localhost: ${PORT}. Press ^C to Terminate.`);
        });
    });
