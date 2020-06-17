const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a9c3bf7dacf9335967c4a89e75e3c4c7/' + latitude + ',' + longitude
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            let temperature = (body.currently.temperature - 32) * (5 / 9)
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + temperature.toFixed(2) + '°C outside. There is a ' + body.currently.precipProbability + '% chance of rain.The humidity is ' + body.currently.humidity * 100 + '%.')
        }
    })
}

module.exports = forecast