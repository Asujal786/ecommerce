const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const AdminSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    streetName: {
        type: String,
        required:true
    },
    buildingNumber: {
        type: String,
        required:true
    },
    city: {
        type: String,
        required:true
    },
    postCode: {
        type: String,
        required:true
    },
    isAdmin: {
        type: Boolean,
        default: true
    }
   
});


UserSchema.pre("save", async function (next) {
    const user = this;

    // Only hash the password if it has been modified (or is new)
    if (!user.isModified("password")) {
        return next();
    }

    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});



const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
