# User Management API

This is a simple Express.js application that provides a RESTful API for managing user data. The application allows you to perform CRUD (Create, Read, Update, Delete) operations on a list of users.

## Features

- **Get all users**: Retrieve a list of all users in JSON format.
- **Get user by ID**: Retrieve details of a specific user by their ID.
- **Add a new user**: Add a new user to the list.
- **Update user**: Update details of an existing user by their ID.
- **Delete user**: Remove a user from the list by their ID.
- **View users as HTML**: View a list of users in an HTML format.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/styloraushan/REST-API-using-node-and-express-js.git
    ```

2. Navigate to the project directory:

    ```bash
    cd REST-API-using-node-and-express-js
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

### Running the Application

Start the server with:

```bash
npm start
 ```

## API Endpoints
- ** GET /api/users: Get a list of all users in JSON format.
- ** GET /users: Get a list of users in HTML format.
- ** GET /api/users/:id: Get a specific user by ID in JSON format.
- ** POST /api/users: Add a new user. Requires a JSON body with user details.
- ** PUT /api/users/:id: Update an existing user by ID. Requires a JSON body with updated user details.
- ** DELETE /api/users/:id: Delete a user by ID.

## Example Requests
### Get all users:

```bash
(http://localhost:8080/api/users)
 ```

### Get a specific user:

```bash
(http://localhost:8080/api/users/1)
 ```
## License

This project is licensed under the MIT License - see the LICENSE file for details.
