const express = require('express');
const app = express();
app.use(express.json());
const port = 4000;

require('./routes/user.js')(app);

module.exports = app.listen(port, () => console.log(`Listening on port ${port}...`));
