
const mongoose=require('mongoose');
const { callbackPromise } = require('nodemailer/lib/shared');

mongoose.set("strictQuery", true)

var reg=mongoose.connect("mongodb+srv://kamalyadav:kamal7742kn@cluster0.bv0sckq.mongodb.net/dobber?retryWrites=true&w=majority",

{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(()=> console.log("connect Sucessfully.."))
.catch((err)=> console.log(err));
module.exports=reg;

//Schema
//a mongoose schema defines the structure of the schema
//default values, validatior etc....


const listeee= new mongoose.Schema({
   name:{
        type:String,
        require:true
    },

   email:{

        type:String,
        require:true

    },

    contact:{

        type:Number,
        require:true

    },

    // active:Boolean,

    date:{
        type:Date,
        default:Date.now
    },

    Age:{
        type:Number,

    }
})

//A mongoose modal is a wrapper on the mongoose schema
//mongoose model provides an interface to the database for creating,quering,upadating,deleting records,etc

// collection creation

//imp when we pass const varible its call class
//so it should be start with caps

const Playlist= new mongoose.model("Playlist",listeee);
//Playlist perameterr is a name of collection name and its only define singular form


const creatDocument =async ()=>{

    try{
        const productline1 = new Playlist({
            name:'jhone',
            email:'kamalmehta7742@gmail.com',
            Age:26
            
        })

        const productline2= new Playlist({
            name:'kamal',
            email:'kamalmehta7742@gmail.com',
            Age:14

        })

        const productline3= new Playlist({
            name:'rahul',
            email:'kamalmehta7742@gmail.com',
            Age:8

        })

        const productline4= new Playlist({
            name:'rahul',
            email:'kamalmehta7742@gmail.com',
            Age:45

        })

        const result= await Playlist.insertMany([productline1, productline2,productline3,productline4]);
        console.log(result);

    }catch (err){
        console.log(err);
    }
}

// creatDocument();

const getdocument=async()=>{

    // const result=await Playlist.find({name:/^j/});


    // const result=await Playlist.find({name :"kamal"});
    
    // const result=await Playlist.deleteMany({name:"jhone"});

    // const result=await Playlist.find({$or:[{name:"k"},{Age:{$lt:9}}]})

    // const result=await Playlist.find({or:})


    //update o[erator]
    
    // const result=await Playlist.update({name:"kamalyadav"},{$rename:{name:"namet"}});

    // const result=await Playlist.update({$currentDate:{name:"kamalyadav"}},);

    
    // const result=await Playlist.update({$inc:{Age:100}},);

    // const result=await Playlist.find({Age: {$gt: 15, $lt: 25}});


    // const result=await Playlist.find({"Age":{$lt:15},name:"rahul"})


    // const result=await Playlist.find({"Age": {$lt: 10}})

    // const result=await Playlist.find({"field":"value"})


    // const result=await Playlist.find({"age":{$lt:10},name:"kamalyadav"})


    // const result=await Playlist.find({Age: {$gt:8, $lt:47}});

    //  const result=await Playlist.create({name:"ankit",Age:7,email:"golu7765@gmail.com"});


    //Aggration in Mongodb

    //  const result=await Playlist.aggregate([ { $limit: 3 } ])



    // This is the same projection that is used with the find() method.

//     const result=await Playlist.aggregate([
//   {
//     $project: {
//       "name": 1,
//       "Age":1
//     }
//   },
//   {
//     $limit: 5
//   }
// ])          

 
// const result =await Playlist.aggregate([ 
//     { 
//       $sort: { "Age": 1 } 
//     },
//     {
//       $project: {
//         // "name": 1,
//         "Age":1
      
        
//       }
//     },
//     {
//       $limit: 10
//     }
//   ])   



// const result= await Playlist.aggregate([ 
//     { $match : { namett: "kamalyadav" } },
//     { $limit: 4 },

//     { $project: {
//       "name": 1,
//       "Age":1,
//       "namett":1
//     }}
//   ])


// const result= await Playlist.aggregate(
//     [ { $group : { _id : "$name",Age:{$sum:'$Age'} } 

// }])



// const result= await Playlist.aggregate(
//     [ { $group : { _id :{Age:'$Age',name:'$name'} } 

// }])

// const result= await Playlist.aggregate([
//     {
//       $match: { "namett": "kamalyadav" }
//     },
//     {
//       $count: "total"
//     }
//   ])

//  const result=await Playlist.aggregate([
//   {
//     $group: {
//       _id: "$_id",
//       properties: {
//         $push: {
//           namett: "$namett",
//          Age:"$Age",
         
//         },
//       },
//     },
//   },
//   { $out: "info" },
// ])


const result=await Playlist.aggregate([
    {
      $search: {
        Age: "default",
        namett: {
          namett: "kamalyadav",
          Age: "722"
        },
      },
    },
    {
      $project: {
        namett: 1,
        Age: 1,
      }
    }
  ])        





   console.log(result);
 }

getdocument();




