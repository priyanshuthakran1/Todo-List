const mongoose = require("mongoose");

const conn = async() => {
    try {
        await mongoose.connect("mongodb+srv://awalmanga1234:priyanshuuser1@cluster1.wb6nm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1").then(() => {
            console.log("Connected");
            // priyanshuthakran1235:12345678900987654321
        });
    } catch (error) {
        console.error("Not Connected", error);
    }
};

conn();