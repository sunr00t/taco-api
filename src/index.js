const app = require('./config/express.js')();

const port = process.env.PORT || 4000;
const base_url = process.env.BASE_URL;

/* eslint-disable-next-line */
app.listen(port, () => console.log(`Listening at http://${base_url}:${port}`));
