var express = require('express');
var app = express();
var path = require('path');

app.use('/static', express.static(path.join(__dirname, '..', 'front', 'src')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'front', 'index.html'));
});

app.get('/api/planets', function(req, res) {
    res.sendFile(path.join(__dirname, 'data.json'))
});

app.listen(3000, function() {
    console.log('Server started on port 3000. Please open http://localhost:3000/ in your browser.');
});