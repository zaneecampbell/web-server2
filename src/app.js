const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
});

app.get('/help', (req, res) => {
    res.send([{
        name: 'Zane'
    }, {
        name: 'Andrew'
    }]);
});

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny all day',
        location: 'Seattle'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
});