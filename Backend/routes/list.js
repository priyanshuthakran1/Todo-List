const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

// Create Task
router.post("/addtask", async (req, res) => {
    try {
        const { title, body, email } = req.body;

        // Find the user by email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            // Create a new task for the user
            const list = new List({ title, body, user: existingUser });
            await list.save();

            // Initialize the user's list if it's undefined
            if (!existingUser.list) {
                existingUser.list = [];
            }

            // Add task to the user's list
            existingUser.list.push(list);
            await existingUser.save();

            // Convert list to plain object and remove the user field to avoid circular structure
            const responseList = list.toObject();
            delete responseList.user;

            return res.status(200).json({ list: responseList });
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: error.message || "Server error" });
    }
});




// Update Task
router.put("/updatetask/:id", async (req, res) => {
    try {
        const { title, body, email } = req.body;

        // Find the user by email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            // Update the task with new data
            const list = await List.findByIdAndUpdate(req.params.id, { title, body }, { new: true });
            
            if (list) {
                return res.status(200).json({ message: "Task Updated" });
            } else {
                return res.status(404).json({ message: "Task not found" });
            }
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});

// Delete Task
router.delete("/deletetask/:id", async (req, res) => {
    try {
        const { email } = req.body;

        // Find the user by email and remove the task from their list
        const existingUser = await User.findOneAndUpdate(
            { email },
            { $pull: { list: req.params.id } }
        );
        
        if (existingUser) {
            // Delete the task by ID
            await List.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: "Task Deleted" });
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});

// Get Tasks
router.get("/gettasks", async (req, res) => {
    try {
        const { email } = req.query; // Use query parameter for email

        // Find the user by email
        const existingUser = await User.findOne({ email }).populate('list'); // Populate the list with tasks
        
        if (existingUser) {
            return res.status(200).json({ tasks: existingUser.list });
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});


module.exports = router;
