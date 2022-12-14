//tech knowledge  
// (schema) -> set of features and rules a certain entity should 
// follow
// * how to create a db ->  link share
// connect to my app // mongoose 
const mongoose = require('mongoose'); //npm i mongoose
// db server link -> mongodb atlas ka link
let secrets =require("../secrets");

    
// db  server connect -> mongodbAtlas connect 
mongoose
    // .connect(secrets.DB_LINK)
    .connect(dblink)
    .then(function () {
        console.log("connected");
    })
    .catch(function (err) {
        console.log("error", err);
        res.end(err.message);
    })
// how to create a schema-> only entries written will be added to your db no one else 
let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is not send"],
    },
    password: {
        type: String,
        required: [true, "password is missing"]
    },
    confirmPassword: {
        type: String,
        required: [true, "confirmPassword is missing "],
        // custom validator
        validate: {
            validator: function () {
                // this referes to the current entry 
                return this.password == this.confirmPassword;
            },
            //    error message
            message: "password miss match"
        },
    },
    email: {
        type: String,
        required: [true, "email is missing"],
        unique: true
    },
    phonenumber: {
        type: String,
        minLength: [10, "less then 10 numbers"],
        maxLength: [10, "more then 10 numbers"]
    },
    pic: {
        type: String,
        default: "dp.png",

    },
    otp: {
        type: String
    },
    otpExpiry: {
        type: Date
    },
    address: {
        type: String,
    }
})
// product Knowledge
// user data -> store
// name,
// email,
// phonenumber,
// pic,
// password,
// address
// ?? -> ??
// model is similar to your collection 
const FooduserModel = mongoose.model
    // name of the collection, the set of rules this collection should follow
    ('FooduserModel', userSchema);
module.exports = FooduserModel;






// const mongoose = require('mongoose');
// let dblink = "mongodb+srv://Abhimanyu:dBvxNz0r2y3UEHGH@cluster0.5kikn.mongodb.net/?retryWrites=true&w=majority"; 
// mongoose
// .connect(dblink)
// .then(function(){
//     console.log("connected");
// }).catch(function(err){
//     console.log("error",err);
// })

// //How to Create Schema -> Only entries written will be added to your db no one else 
// let userSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required :true
//     },
//     email:{
//         type : String,
//         required  :true
//     },
//     password:{
//         type : String,
//         required : true
//     },
//     confirmPassword:{
//         type: String,
//         required : true
//     },
//     pic:{
//         type : String,
//         default: "DB.jpg"
//     },
//     address:{
//    type: String
//     },
//     phonenumber : {
//         type: String,
//     minLength:10,
//     maxLength :10
//     }
// })

// const UserModel = mongoose.model('FoodUserModel',userSchema);
// module.exports = UserModel;
