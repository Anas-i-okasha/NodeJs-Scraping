const express = require('express');
const app = express();
const mainRouter = require('./router/main-route');
app.use(mainRouter);



const port = 8000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});