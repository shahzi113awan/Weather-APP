// const request = require('request')
// const forecast = (latitude,longitude , callback )  => {
// const url='https://api.darksky.net/forecast/94c282cc115db6facdc99645b6f2fd7c/ '+ latitude + ',' + longitude 
// request({url:url,json:true},(error,response)=>{
// if(error)
// console.log('not connected',undefined)
// //else if(response.body.error)
// //console.log('no data found',undefined)
// else{
//     console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
// }
// }
// )
// }
// module.exports= forecast






const request = require('request')
//const https = require('https')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/94c282cc115db6facdc99645b6f2fd7c/' + latitude + ', ' + longitude+'?units=si'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
           callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast