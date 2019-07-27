'use strict';
/**
 * Created by David on 18/07/2019.
 */

const express = require('express');

const app = express();

app.use(express.static('test_unit'));

app.get("/debug", function (req, res) {
	res.send('Im static');
});

const port = 8088;
app.listen(port, () => console.log(`static server running on port ${port}!`));
