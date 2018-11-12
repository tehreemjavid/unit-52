const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const morgan = require('morgan');
app.use(morgan("dev"));

const port = process.env.PORT || 3000;

const snackRoute = require("./src/routes/snack_route");

app.use('/snack', snackRoute);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})

module.export = app;