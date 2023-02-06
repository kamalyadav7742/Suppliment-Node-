// const { connection } = require('mongoose');

var mysql=require('mysql');

const express=require("express")

const app=express();

const router= express.Router();

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    // password:'Kamal7742kn@',
    password:'',

    // database:'dobber'
    database:'vsit'

});


// php connection



connection.connect(function(err){

  if(err){
    return console.log('error'+err.message)
  }

  console.log('connected too my save server')


});



    // create Database

    //   con.query("CREATE DATABASE dobber", function (err, result) {
    //     if (err) throw err;
    //     console.log("Database created");

        //create table

// var sql = "CREATE TABLE vsit1 (id INT AUTO_INCREMENT PRIMARY KEY, address VARCHAR(255))";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("Table created");
// });

var sql = "CREATE TABLE vsit1 (id INT AUTO_INCREMENT PRIMARY KEY, address VARCHAR(255))";
connection.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});




//222222222

// var sql = "CREATE TABLE vsit (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("Table created");
// });

// var sql="INSERT INTO `vsit`(`id`, `address`) VALUES ('[name]','[address]'")


//DatA inserted

// var sql = "INSERT INTO vsit1 (address) VALUES ?";
// var values = [
//   [ 'Highway 71'],
//   [ 'Lowstreet 4'],
//   ['Apple st 652'],
//   [ 'Mountain 21']
//   ['Michael', 'Valley 345'],
//   ['Sandy', 'Ocean blvd 2'],
//   ['Betty', 'Green Grass 1'],
//   ['Richard', 'Sky st 331'],
//   ['Susan', 'One way 98'],
//   ['Vicky', 'Yellow Garden 2'],
//   ['Ben', 'Park Lane 38'],
//   ['William', 'Central st 954'],
//   ['Chuck', 'Main Road 989'],
//   ['Viola', 'Sideway 1633']
// ];
// connection.query(sql, [values], function (err, result) {
//   if (err) throw err;
//   console.log("Number of records inserted: " + result.affectedRows);
// });


//33333333333

// var sql = "INSERT INTO vsit (name, address) VALUES ?";
// var values = [
//   ['John', '1'],
//   ['Peter', '2'],
//   ['Amy', '3'],
//   ['Hannah', '4'],
//   ['Michael', '5']
//   ['Sandy', 'Oc1'],
//   ['Betty', 'Green Grass 1'],
//   ['Richard', 'Sky st 331'],
//   ['Susan', 'One way 98'],
//   ['Vicky', 'Yellow Garden 2'],
//   ['Ben', 'Park Lane 38'],
//   ['William', 'Central st 954'],
//   ['Chuck', 'Main Road 989'],
//   ['Viola', 'Sideway 1633']
// ];
// con.query(sql, [values], function (err, result) {
//   if (err) throw err;
//   console.log("Number of records inserted: " + result.affectedRows);
// });



 // get data

//  con.query('select*from vsit',(function(err,result,fields){

//     if(err) throw err;
//     console.log('all result here',result);

// }))

//Select With a Filter

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM vsit WHERE address = 'Park Lane 38'", function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });


//Wildcard Characters

//You can also select the records that starts, includes, or ends with a given letter or phrase.
//Use the '%' wildcard to represent zero, one or multiple characters:

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM vsit WHERE address LIKE 'G%'", function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });


//Delete Record

//You can delete records from an existing table by using the "DELETE FROM" statement:

// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "DELETE FROM vsit WHERE address = 'Highway 71'";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Number of records deleted: " + result.affectedRows);
//     });
//   });


//Delete a Table
//You can delete an existing table by using the "DROP TABLE" statement:

// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "DROP TABLE vsit1";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table deleted");
//     });
//   });


//Drop Only if Exist
//If the the table you want to delete is already deleted, or for any other reason does not exist, you can use the IF EXISTS keyword to avoid getting an error.


// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "DROP TABLE IF EXISTS vsit";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "UPDATE vsit SET address = 'Lowstreet 5' WHERE name = 'John'";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result.affectedRows + " record(s) updated");
//     });
//   });

//limit

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM vsit LIMIT 5 OFFSET 2";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });



//Order
//Use the ORDER BY statement to sort the result in ascending or descending order.

//The ORDER BY keyword sorts the result ascending by default. To sort the result in descending order, use the DESC keyword.


// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM vsit ORDER BY name", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


//decending order


// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM vsit ORDER BY name DESC", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


//Join Two or More Tables

//You can combine rows from two or more tables, based on a related column between them, by using a JOIN statement.
//Consider you have a "users" table and a "products" table:


// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT vsit.name AS user, vsit1.address AS favorite FROM vsit JOIN vsit1 ON vsit.address = vsit1.id";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });



//})