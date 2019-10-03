const request= require('request');
const getcode =(address, callback)=>{
    const url ="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address +".json?access_token=pk.eyJ1IjoicHJhbnNodXBhbndhcjE3ODk5IiwiYSI6ImNrMTJra21wbjAwZm0zaG84enJwbGZjNGkifQ.XdgJAYRmV-1YzYa5n-KDzQ&limit=1"
    request({ url, json : true}, (error ,{body})=>{
        if(error){
            callback("Unable to connect to the request", undefined);
        }else if(body.features.length==0){
            callback("Unable to find the location try other",undefined);
        }else{
            callback(undefined,{
                latitude : body.features[0].center[0],
                longitude : body.features[0].center[1],
                place : body.features[0].place_name
            })
        }
    })
}
module.exports=getcode;