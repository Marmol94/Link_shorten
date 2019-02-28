const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//routing
const short = require("./routes/short");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/short", short);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
