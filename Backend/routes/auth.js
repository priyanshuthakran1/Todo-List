const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");


router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;

        // Check if email and password are provided
        if (!email || !username || !password) {
            return res.status(400).json({ error: "Email, username, and password are required" });
        }

        // Check if a user with the given email or username already exists
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ error: "User with this email or username already exists" });
        }

        // Hash the password and create a new user
        const hashpassword = await bcrypt.hash(password, 10);
        const user = new User({ email, username, password: hashpassword });

        // Save the new user to the database
        await user.save();
        res.status(200).json({ user: user });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error, please try again later" });
    }
});





//SIGN IN
router.post("/sign-in", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ error: "Enter email and password" });
        }

        // Find the user by email
        const user = await User.findOne({ email: email });

        // If the user is not found
        if (!user) {
            return res.status(400).json({ message: "Please Sign Up First" });
        }

        // Compare the provided password with the stored hashed password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        // If the password is incorrect
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Password is not correct" });
        }

        // Success: return a response indicating successful login and include the username
        return res.status(200).json({ 
            message: "Login successful", 
            username: user.username,
            email: user.email // Assuming the user object has a username field
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something went wrong, please try again later" });
    }
});




// //Delete User
// router.delete("/delete", async (req, res) => {
//     try {
//         const { email } = req.body;

//         // Check if email is provided
//         if (!email) {
//             return res.status(400).json({ error: "Email is required" });
//         }

//         // Find the user by email and delete
//         const deletedUser = await User.findOneAndDelete({ email: email });

//         // If user does not exist
//         if (!deletedUser) {
//             return res.status(404).json({ error: "User not found" });
//         }

//         // Return success response
//         res.status(200).json({ message: "User deleted successfully", user: deletedUser });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: "Server error, please try again later" });
//     }
// });


// Print all the Users

router.get("/users", async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await User.find();

        // If no users found, return a message
        if (users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }

        // Return the list of users
        res.status(200).json({ users: users });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error, please try again later" });
    }
});


module.exports = router;