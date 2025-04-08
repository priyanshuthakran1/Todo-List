const mongoose = require("mongoose");

const conn = async() => {
    try {
        await mongoose.connect("mongodb+srv://priyanshuthakran1235:12345678900987654321@cluster1.veik2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1").then(() => {
            console.log("Connected");
        });
    } catch (error) {
        console.error("Not Connected", error);
    }
};

conn();