const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema(
    {
        first: String,
        last: String,
        email: { type: String, unique: true }, // Move unique option here
        password: String
    },
    {
        collection: "UserInfo",
    }
);



mongoose.model("UserInfo", UserDetailSchema);
