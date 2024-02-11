const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://asujal787:ZruaUNL9NEpwiOOb@cluster0.43aw6ff.mongodb.net/Ecommerce?retryWrites=true&w=majority`).then(() => {
    console.log("Database connected Successfully");
}).catch((err) => {
    console.log("Database Connection Error");
})

