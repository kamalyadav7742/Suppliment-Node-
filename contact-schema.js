var mongoose=require('./config.js')

var mongoose=require("mongoose")

const listSchema1=new mongoose.Schema({
    
    email:{
        type:String,
        required:true

    },

    name:{
    type:String,
    required:true
   }
})

const Playlist1=new mongoose.model("contact",listSchema1);

module.exports=Playlist1;