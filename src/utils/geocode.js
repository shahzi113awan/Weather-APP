///................call Back................//
const request = require('request')
//const https = require('https')
const geocode = (address,callback)=>{

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+
    '.json?access_token=pk.eyJ1Ijoic2hhaHppMTEzYXdhbiIsImEiOiJjano1cDRrdTQwMmxuM21ybmdqOGl3NjlvIn0.tav2vEkuZyAfEO80xgYarQ'
    request({url:url,json:true},(error,response)=>{
      if(error)
      callback('unable to connect',  undefined)
      else if(response.body.features.length === 0){
      callback('no location', undefined)
      }
      else{
        callback(undefined,{
          latitude : response.body.features[0].center[1],
          longitude : response.body.features[0].center[0],
          location : response.body.features[0].place_name
        } )
       }
        
    })
  
  }
//   geocode('faislabad',(error,data)=>{
//   console.log('error',error)
//   console.log('data',data)
//   })
  module.exports =geocode