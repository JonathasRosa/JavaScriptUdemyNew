let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.send('Primeira rora com express');
});

app.listen(3000, function () {
    console.log("A aplicação está funcionado na porta 3000.");
});