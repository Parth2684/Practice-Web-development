require('dotenv').config();
const mongoose = require("mongoose");

const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri).then(()=>{
    console.log("Connected Successfully");
}).catch(error =>{
    console.error("Connection Failed", error)
})

const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports ={
    Admin, 
    User,
    Course
}
