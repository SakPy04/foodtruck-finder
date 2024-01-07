const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');
const jwt = require("jsonwebtoken");
require('dotenv').config()
const uri = process.env.MONGODB_KEY;
mongoose.connect(uri, {
    useNewUrlParser: true,
}).then(() => {
    console.log("Connected to database");
}).catch((e) => console.log(e));

require("./userDetails");

app.listen(5000, () => {
    console.log("Server started");
});


const User = mongoose.model("UserInfo");

// Only define FoodTruck model if it doesn't exist
if (!mongoose.models.FoodTruck) {
  const foodTruckSchema = new mongoose.Schema({
      name: String,
      latitude: Number,
      longitude: Number,
  }, { collection: 'foodtruck-locations' }); // Specify the collection name here
  mongoose.model('FoodTruck', foodTruckSchema);
}

const FoodTruck = mongoose.model('FoodTruck');

app.post("/signup", async(req, res)=> {
   const {first, last, email, password} = req.body
   const encryptedPassword = await bcrypt.hash(password, 10);
   try{
    const oldUser = await User.findOne({email})
    if (oldUser) {

        return res.json({error:"User exists"});
        
    }
    await User.create(
        {
            first,
            last,
            email,
            password: encryptedPassword
        }
    )
    res.send({status: "ok"})

   }catch(error){
    res.send({status: "errorrrrrrr"})
   }

})

app.get('/welcome', async (req, res) => {
  try {
    const foodTrucks = await FoodTruck.find();
    console.log(foodTrucks)
    console.log("Hlelo")
    res.json(foodTrucks);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
  
      if (res.status(201)) {
        return res.json({ status: "ok"});
      } else {
        return res.json({ error: "error" });
      }
    }
    res.json({ status: "error", error: "InvAlid Password" });
  });
