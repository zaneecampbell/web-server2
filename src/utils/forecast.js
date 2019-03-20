const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/77bb2bfa7a3d8d204021a7de87ff8f1e/${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to forecast services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const temp = body.currently.temperature
            const rainChance = body.currently.precipProbability
            const summary = body.daily.data[0].summary
            callback(undefined, `${summary} It is current ${temp} degrees out. There is a ${rainChance}% chance of rain.`)
        }
    })   
}

module.exports = forecast;