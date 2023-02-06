var mongoose=require('./config.js')

var mongoose=require("mongoose")

const listSchema2=new mongoose.Schema({
    
    firstname:{
        type:String,
        required:true
    
       },

       lastname:{
        type:String,
        required:true
    
       },

      email:{
        type:String,
        required:true

      },

    password:{
    type:String,
    required:true
   },

  confirmpassword:{
    type:String,
    required:true

   }

 
})

const Playlist2=new mongoose.model("signup",listSchema2);

module.exports=Playlist2;
