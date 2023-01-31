/*
var express=require("express")
var bodyparser=require("body-parser")
var mongoose=require("mongoose")
const bodyParser = require("body-parser")

const app=express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))
    
mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});


var db=mongoose.connection;

db.on('error',()=>console.log('error in connecting to database'));
db.once('open',()=>console.log("connected to Database"));

app.post("/sign_up",(req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var phno=req.body.phno;
    var password=req.body.password;

    var data = {
        "name":name,
        "email":email,
        "phno":phno,
        "password":password
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully,Kindly login with your credentials!");
    });

    return res.redirect('martialarts.html')
})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect('temp.html')
}).listen(3000);

console.log("listening on PORT 3000")
*/

/*
var express = require("express")
var bodyparser = require("body-parser")
var mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app=express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))
    
mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});


var db=mongoose.connection;

db.on('error',()=>console.log('Error in connecting to database'));
db.once('open',()=>console.log("Connected to Database"));

app.post("/register",(req,res)=>{
    var name=req.body.name;
    var dob=req.body.dob;
    var gender=req.body.gender;
    var email=req.body.email;
    var classtime=req.body.classtime;
    var psw=req.body.psw;

    var data = {
        "name":name,
        "dob":dob,
        "gender":gender,
        "email":email,
        "classtime":classtime,
        "psw":psw
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }


        
        console.log("Record Inserted Successfully!!");
    });

    return res.redirect('martialarts.html')
})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect('register.html');
}).listen(3000);

console.log("listening on PORT 3000")
*/


/*var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.get("/",(req,res)=>{
    res.send("Hello from server")
}).listen(3000);

console.log("Listening on PORT 3000");*/

/*
var express = require("express")
var bodyparser = require("body-parser")
var mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app=express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))
    
mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});


var db=mongoose.connection;

db.on('error',()=>console.log('Error in connecting to database'));
db.once('open',()=>console.log("Connected to Database"));

app.post("/register",(req,res)=>{
    var name=req.body.name;
    var dob=req.body.dob;
    var gender=req.body.gender;
    var email=req.body.email;
    var classtime=req.body.classtime;
    var psw=req.body.psw;

    var data = {
        "name":name,
        "gender":gender,
        "email":email,
        "psw":psw
    }

    db.collection('login').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }


        
        console.log("Record Inserted Successfully!!");
    });

    return res.redirect('martialarts.html')
})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect('register.html');
}).listen(3000);

console.log("listening on PORT 3000")

*/


var express=require("express")
var bodyparser=require("body-parser")
var mongoose=require("mongoose")
const bodyParser = require("body-parser")

const app=express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))
    
mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
});
 
const notesSchema = {
    name: String,
    email: String,
    psw: String
}

const users = mongoose.model("users",notesSchema);

var db=mongoose.connection;

db.on('error',()=>console.log('error in connecting to database'));
db.once('open',()=>console.log("connected to Database"));

app.post("/register",(req,res)=>{
    var name=req.body.name;
    var dob=req.body.dob;
    var gender=req.body.gender;
    var email=req.body.email;
    var classtime=req.body.classtime;
    var psw=req.body.psw;

    var data = {
        "name":name,
        "dob":dob,
        "gender":gender,
        "email":email,
        "classtime":classtime,
        "psw":psw
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully,Kindly login with your credentials!");
    });

    return res.redirect('martialarts.html')
})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect('register.html')
}).listen(3000); 

app.get("/reg", (req, res)=>{
    res.redirect('login.html')
})

// app.get("/contact", (req, res)=>{
//     res.redirect('contact.html')
// })
// app.post("/contact", (req, res)=>{
//     var name = req.body.name;
//     var email = req.body.email;
//     var phno = req.body.phno;
//     var review = req.body.review;
//     var data1 = {
//         "name" : name,
//         "email": email,
//         "phno" : phno,
//         "review" : review,
//     }

//     db.collection('review').insertOne(data1,(err,collection)=>{
//         if(err){
//             throw err;
//         }
//         console.log("Review collected!");
//     })
//     return res.redirect('contact.html')
// })


app.post("/contact",(req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var ph=req.body.ph;
    var location=req.body.location;
    var timing=req.body.timing;

    var data = {
        "name":name,
        "email":email,
        "ph":ph,
        "location":location,
        "timing":timing
    }

    db.collection('booking').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Booked Successfully");
    });

    return res.redirect('martialarts.html')
})


app.post("/feed",(req,res)=>{
    var name=req.body.name;
    var area=req.body.area;
    var rating=req.body.rating;
    var feedback=req.body.feedback;

    var data = {
        "name":name,
        "area":area,
        "rating":rating,
        "feedback":feedback
    }

    db.collection('feedback').insertOne(data,(err,collection)=>{
        if(err){    
            throw err;
        }
        console.log("Feedback Registered Successfully");
    });

    return res.redirect('martialarts.html')
})



console.log("listening on PORT 3000")

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var us = "";
var p = "";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("users").find({}).toArray(function(err, result) {
    if(err){
        throw err;
    }
    console.log("Kindly login with your credentials!");

    app.post("/sign_up", function(req, res){
        let newNote1 = new users({
            name:req.body.name,
            email: req.body.email,
            psw: req.body.psw   
        });
        //newNote.save();
        console.log("Login user: "+newNote1);
        console.log("Results loop: ")
        var count = 0;
        for (let i =0; i<result.length; i++){
            console.log(result[i])
            
            if (newNote1.name == result[i].name && newNote1.psw == result[i].psw){
                console.log('Login Successful')
                res.redirect('martialarts.html');
            }
            else{
                
                console.log("Invalid");
                count+=1;
            }
            if(count==result.length){
             res.redirect('/');   
            }
        }


    }); 
})

})

