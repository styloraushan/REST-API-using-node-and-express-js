const express = require("express");
const fs = require('fs');
const app = express();
const port = 8080;
const users = require("./MOCK_DATA.json");

// Middleware to parse URL-encoded bodies

app.use(express.urlencoded({ extended: false }));

// Route to get all users as JSON

app.get("/api/users", (req, res) => {
    return res.json(users);
});

// Route to get users as an HTML list

app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.last_name}</li>`).join('')}
    </ul>`;
    res.send(html);
});

// Routes to handle user operations by ID

app.route("/api/users/:id")

    // Get user by ID

    .get((req, res) => {
        const id = parseInt(req.params.id); 
        const user = users.find(user => user.id === id); 
        if (user) {
            return res.json(user); 
        } else {
            return res.status(404).json({ message: "User not found" }); 
        }
    })

    // Update user by ID

    .put((req, res) => {
        const id = parseInt(req.params.id); // Get the ID from the request parameters
        const updatedData = req.body; // Get the new data from the request body

        // Find the index of the user in the array

        const userIndex = users.findIndex(user => user.id === id);

        if (userIndex !== -1) {
            // Update the user's information

            users[userIndex] = { ...users[userIndex], ...updatedData };

            // Save the updated users array to the file

            fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
                if (err) {
                    return res.status(500).json({ status: "error", message: "Failed to update user data" });
                }
                return res.json({ status: "success", user: users[userIndex] });
            });
        } else {
            return res.status(404).json({ status: "error", message: "User not found" });
        }
    })
    // Delete user by ID

    .delete((req, res) => {
        const id = parseInt(req.params.id); // Get the ID from the request parameters

        // Find the index of the user in the array

        const userIndex = users.findIndex(user => user.id === id);

        if (userIndex !== -1) {
            // Remove the user from the array

            const deletedUser = users.splice(userIndex, 1)[0]; // Splice returns an array, so we take the first element

            // Save the updated users array to the file

            fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
                if (err) {
                    return res.status(500).json({ status: "error", message: "Failed to delete user" });
                }
                return res.json({ status: "success", user: deletedUser });
            });
        } else {
            return res.status(404).json({ status: "error", message: "User not found" });
        }
    });

// Route to add a new user

app.post("/api/users", (req, res) => {
    const body = req.body;
    const newUser = { ...body, id: users.length + 1 }; 

    users.push(newUser); 

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ status: "error", message: "Failed to save user data" });
        }
        // Send a response with the new user data

        return res.status(201).json({ status: "success", user: newUser }); 
    });
});

// Start the server and listen on the specified port

app.listen(port, () => {
    console.log("server connected at port no:8080");
});
