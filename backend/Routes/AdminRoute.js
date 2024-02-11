const express=require("express");
const router=express.Router();
const Admin = require("../Models/admin");


router.post("/signup", async (req,res)=>{


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
            city: req.body.city,
            isAdmin:req.body.isAdmin
        }

        const userAlreadyExists = await Admin.findOne({ email: userDetails.email });
        if (userAlreadyExists) {
            res.status(401).json({
                message: "User Already Exists"
            })
        }

        const NewUser = await Admin.create(userDetails);
        console.log("The data has been submitted");

        res.status(201).json({
            message: "User created successfully",
            user: NewUser,

        });
    } catch (err) {
        console.log("There has been an error while saving the data " + err);
        res.status(500).json({ error: 'Internal Server Error' });
    }

})





router.post("/login", async(req,res)=>{


  try{
    const email=req.body.email
    const password=req.body.password


    const user= await Admin.findOne(email);

    if(!loginCheck){
        res.status(400).json({
            message:"No User Found"


        })
    }

    const passwordmatch= await bcrypt.compare(password,user.password);

    if(!passwordmatch){
        res.status(400).json({
            message:"Password does not match"
        })
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


module.exports=router;


