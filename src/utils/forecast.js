const request=require("request")

forecast=(latitude,longitude,callback)=>{
  const url="http://api.weatherstack.com/current?access_key=7fdde73f7be2e79a29259c718e35e356&query="+latitude+","+longitude+"&units=m"
  request({url:url,json:true},(error,response)=>{
    if(error){
        callback("Unable to connect",undefined)
    }
    else if(response.body.error){
        callback("Unable to find location",undefined)
    }
    else{
        callback(undefined,response.body.current.weather_descriptions[0]+" weather,"+" It is currently "+response.body.current.temperature+" degrees out there")
    }
  })
}
module.exports=forecast
