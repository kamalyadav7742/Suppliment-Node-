var mongoose=require('./config.js')

var mongoose=require("mongoose")

const listSchema=new mongoose.Schema({
    
    email:{
        type:String,
        required:true

    },

    password:{
    type:String,
    required:true
   }
})

const Playlist=new mongoose.model("login",listSchema);

module.exports=Playlist;