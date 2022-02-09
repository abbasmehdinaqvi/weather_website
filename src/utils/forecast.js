const request = require('request')

const forecast = (latitude, longitude, callback) => {


    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=d087c52a2cf535239af6cbd8a5faabba&units=metric'


    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {

            callback(undefined, 'Temperature :' + body.main.temp + ' degree Celcius. Weather Description : ' + body.weather[0].description + ' And Humidity : ' + body.main.humidity)
        }
    })
}

module.exports = forecast