const express=require("express")

const app=express();

const Login=require("./login-schema.js")

const contact=require("./contact-schema.js")

const signup=require("./signup-schema.js")

const multer =require("multer")

const file=require("./file-schema.js")

const bodyParser=require('body-parser');

const { Schema, default: mongoose } = require("mongoose");
const { Router } = require("express");
const Playlist2 = require("./signup-schema.js");


app.use(express.static('uploads'))
const router= express.Router();



app.set('view engine','ejs');


app.get('/',(req,res)=>{

    res.render('index');

})

app.get('/index',(req,res)=>{

    res.render('index');

})

app.get('/contact',(req,res)=>{

    res.render('contact');

})

app.get('/dashboard',(req,res)=>{

    res.render('admin/dashboard');

})

// app.get('/viewcontact',(req,res)=>{

//     res.render('admin/viewcontact');

// })

app.get('/left',(req,res)=>{

    res.render('admin/left');

})

app.get('/addproduct',(req,res)=>{

    res.render('admin/addproduct');

})

// app.get('/view',(req,res)=>{

//     res.render('admin/view');

// })

// app.get('/signup',(req,res)=>{

//     res.render('admin/signup');

// })

app.get('/Aboutus',(req,res)=>{

    res.render('Aboutus');

})

// login forrm

router.post('/login',(req,res)=>{

    var loginform={
        email:req.body.email,
        password:req.body.password,
    };

    var loginpost= new Login(loginform);
    loginpost.save(function(err){

        if(err){
            console.log("error to save data");
        }
        else{
            console.log("data saved successfully",loginpost);
        }
    });

    res.send("done");


})

// find login data


router.get('/ourlogin', function(req,res){

    Login.find(function(err,data){
 
         if(err){
             console.log(err);
         }
         else{
             res.render('admin/login',{data:data});
             console.log(data);
         }
     });
 });
 


//contact us form

router.post('/contact',(req,res)=>{

    var contactform={
        email:req.body.email,
        name:req.body.name
    };

    var contactpost= new contact(contactform);
    contactpost.save(function(err){

        if(err){
            console.log("error to save data");
        }
        else{   
            console.log("data saved successfully",contactpost);
        }
    });

    res.send("done");


})


// data store contact

router.get('/viewcontact', function(req,res){

    contact.find(function(err,data){
 
         if(err){
             console.log(err);
         }
         else{
             res.render('admin/viewcontact',{data:data});
             console.log(data);
         }
     });
 });



// signup form

router.post('/signup',(req,res)=>{ttt

    var signupform={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,   
        password:req.body.password,
        confirmpassword:req.body.confirmpassword,
    };
 
    var signuppost= new signup(signupform);
    signuppost.save(function(err){

        if(err){
            console.log("error to save data");
        }
        else{
            console.log("data saved successfully",signuppost);
        }
    });

    res.send("done");


})


// data store

router.get('/signup', function(req,res){

   signup.find(function(err,data){

        if(err){
            console.log(err);
        }
        else{
            res.render('admin/signup',{data:data});
            console.log(data);
        }
    });
});





//  file uplode



      // ***code insert it***
      
      const storage =multer.diskStorage({
        destination: function(req,file, cb){
          cb(null,'uploads');
        },
        
        filename: function(req,file, cb){
          cb(null,file.originalname);
        }
      });
      
      const fileFilter= (req,file,cb)=>{
        const allowedFileTypes= ['image/jpeg', 'image/jpg', 'image/png'];
        if(allowedFileTypes.includes(file.mimetype)){
          cb(null,true);
        }else{
          cb(null,false);
        }
      }

      let upload = multer({storage,fileFilter});
      
    


 router.post('/file1',upload.single('file'),(req,res)=>{

    var fileform={
        product:req.body.product,
        name:req.body.name,
        price:req.body.price,
        gram:req.body.gram,
        file:req.file.filename,
    };  

    var filepost= new file(fileform);
    filepost.save(function(err){

        if(err){    
            console.log("error to save data");
        }
        else{
            console.log("data saved successfully",filepost);
        }
    });

    res.send("done");


})

// data get on view contact

router.get('/viewproduct', function(req,res){

    file.find(function(err,data){
 
         if(err){
             console.log(err);
         }
         else{
             res.render('admin/view',{data:data});
             console.log(data);
         }
     });
 });





// addproduct delete api by id

router.get('/delete/:id', function(req, res){

file.findByIdAndRemove(req.params.id, function(err){

    if(err){

        res.redirect('../viewproduct');
    }else{

        res.redirect('../viewproduct');
    }

});

 });

 

//  edit form

router.get('/edit/:id',function(req,res){
console.log(req.params.id);

file.findById(req.params.id, function(err, data){


    if(err){
        console.log(err)
    }else{
        console.log(data);

        res.render('admin/editproduct', {data:data});
    }


});


});


// upadate Api

router.post('/edit/:id',function(req,res){


    var upadatelogin={
        product:req.body.product,
        name:req.body.name,
        price:req.body.price,
        gram:req.body.gram,
        file:req.body.file,
    };


    file.findByIdAndUpdate(req.params.id, upadatelogin, function(err){

        if(err){
            res.redirect('edit/'+req.params.id);

        }else{
            res.redirect('../viewproduct')
        }


    });

});




// 123456789



router.get('/product',function(req,res){

    file.find( function(err, data){

        if(err){
            console.log(err)
        }else{
            res.render('admin/product', {data:data});
            console.log(data);
        }
    
    
    });
    
    
    });
    

 
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));

app.use('/',router);
    app.listen(4200,()=>console.log('listeee on 4000'));




    

      