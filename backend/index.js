const express = require('express');
const app = express();
const User = require('./Models/User');
const port = 5000;
const router = require('./Routes/userRoutes');
const MenProduct=require("./Routes/productRoute");
const WomenRoute=require("./Routes/WomenRoute");
const KidsRoute=require("./Routes/KidsRoute");
const cors = require('cors');
require('./connection');


// App configuration
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(400).send('Everything is working');
});


app.use('/users', router);
app.use("/men/product", MenProduct);
app.use("/women/product", WomenRoute);
app.use("/kid/product", KidsRoute);

