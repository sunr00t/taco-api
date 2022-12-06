const app = require('./config/express.js')();
require('dotenv').config();

const port = process.env.PORT || 4000;
const url = process.env.BASE_URL || '0.0.0.0';

/* eslint-disable-next-line */
app.listen(port, url, () => console.log(`Listening at http://${url}:${port}`));
