var mysql2=require('mysql2');
var con=mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'Kamal7742kn@',
    database:'mydb'
});

con.connect(function(error){
    if(error)throw error;
    console.log("connected");


    // create data base

    // con.query("CREATE DATABASE mydb", function (err, result) {
    //     if (err) throw err;
    //     console.log("Database created");

    // create table

// var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("Table created");
// });

    // data instered

    // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("recorded instered");
    // });


    // get data

    con.query('select*from customers',(function(err,result){

        if(err) throw err;
        console.log('all result here',result);

    }))


       
})
