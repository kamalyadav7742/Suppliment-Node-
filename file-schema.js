var mongoose=require('./config.js')

var mongoose=require("mongoose")

const listSchema3=new mongoose.Schema({
    
    file:{
        type:String,
        required:true

    },

   name:{
        type:String,
        required:true

    }, 

    product:{
        type:String,
        required:true

    }, 

    price:{
    type:String,
    required:true
   },

   gram:{
    type:String,
    required:true
   }


})

const Playlist4=new mongoose.model("file",listSchema3);

module.exports=Playlist4;