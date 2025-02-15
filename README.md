# MERN Stack Real-Time Chat Application

This project is a real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, Socket.IO for real-time communication, and Cloudinary for image storage and management.

## Features

- Real-time messaging using Socket.IO  
- User authentication and authorization  
- Image upload and storage with Cloudinary  
- One-on-one and group chat functionality  
- User profile management  
- Message history and persistence  

## Technologies Used

- **MongoDB**: Database for storing user information and chat messages  
- **Express.js**: Web application framework for the backend  
- **React.js**: Frontend library for building the user interface  
- **Node.js**: JavaScript runtime for the server  
- **Socket.IO**: Real-time bidirectional event-based communication  
- **Cloudinary**: Cloud-based image management  
- **JSON Web Tokens (JWT)**: For secure authentication  
- **Bcrypt**: For password hashing  

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PURVIK-31/mernchat-app/
   cd mern-chat-app
   ```

2. Install dependencies for both fe and be:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up environment variables:  
   Create a `.env` file in the **backend** directory and add the following:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. Start the backend and frontend:
   ```bash
   # In the server directory
   npm start

   # In the client directory
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to use the application.

## Usage

1. Register a new account or log in with existing credentials.  
2. Set up your profile and upload a profile picture using Cloudinary integration.  
3. Start chatting with other users in real-time.  
4. Share images and files through the chat interface.  

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
