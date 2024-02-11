const express = require('express');
const User = require("../Models/User");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const WProducts = require("../Models/WomenProducts");
const KProducts = require("../Models/Kids");
const MProducts = require("../Models/Product");

router.post("/signup", async (req, res) => {
    try {
        console.log("Signup page has been visited");

        const userDetails = {
            fName: req.body.fName,
            lName: req.body.lName,
            email: req.body.email,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
            streetName: req.body.streetName,
            buildingNumber: req.body.buildingNumber,
            postCode: req.body.postCode,
            city: req.body.city
        }

        const userAlreadyExists = await User.findOne({ email: userDetails.email });
        if (userAlreadyExists) {
            res.status(401).json({
                message: "User Already Exists"
            })
        }

        const NewUser = await User.create(userDetails);
        console.log("The data has been submitted");

        res.status(201).json({
            message: "User created successfully",
            user: NewUser,

        });
    } catch (err) {
        console.log("There has been an error while saving the data " + err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("Received Password :", password)

        const user = await User.findOne({ email });

        if (!user) {
            console.log("Invalid Credentials. The Account does not exist");
            return res.status(401).json({ message: "Invalid Credentials. The Account does not exist" });
        }

        console.log("User has been found");
        console.log("Stored hashed password:", user.password);
        console.log("Entered plaintext password:", password);


        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            console.log("Invalid Credentials. The password is incorrect");
            return res.status(401).json({ message: "Invalid Credentials. The password is incorrect" });
        }

        const token = jwt.sign({
            id: user._id,
            fName: user.fName
        }, "EcommerceWebsite",)
        console.log("Login successful");
        res.status(200).json({
            message: "Logged In",
            token: token
        });
    } catch (err) {
        console.error("Error during login: ", err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/', async (req, res) => {

    try {
        const users = await User.find({isAdmin:false})
        res.json(users);
    }
    catch {
        (err) => {
            console.log("there has been an error while getting the users data " + err);
        }
    }
})

router.post('/delete/:id', async (req, res) => {

    const id = req.params.id;

    try {
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            res.status(404).json({
                message: "User not found"
            })
        }

        res.status(200).json({
            message: "User Deleted Successfully"
        })




    }
    catch (err) {
        res.status(400).json({ message: "Server Error" })

    }
})

router.get("/admin/data", async (req, res) => {
    try {
        const kidsdata = await KProducts.find();
        const Womendata = await WProducts.find();
        const Mendata = await MProducts.find();

        const AllData = {
            kids: kidsdata,
            women: Womendata,
            men: Mendata
        }

        res.status(200).json(AllData);
    }
    catch (err) {
        res.status(400).json({
            message: "There was an error",
            error: err
        })
    }
});

router.put("/profile/:id", async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);

        const newData = {
            fName: req.body.fName,
            lName: req.body.lName,
            email: req.body.email,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber

        }

        const user = await User.findByIdAndUpdate(id, newData, { new: true });
        res.status(200).json({
            user,
            message: "Updated"
        });


    }
    catch (err) {
        res.status(404).json({ message: "An Error Occur" })
    }
})

module.exports = router;