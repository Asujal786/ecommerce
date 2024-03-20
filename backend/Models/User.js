const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
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
        type: String
       
    },
    buildingNumber: {
        type: String
        
    },
    city: {
        type: String,
        required:true
    },
    postCode: {
        type: String
        
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    cart: {
        type: Object,
        default: {
            total: 0,
            count: 0
        }
    },
    orders: {
        type: mongoose.Schema.Types.ObjectId
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



const User = mongoose.model("User", UserSchema);

module.exports = User;
