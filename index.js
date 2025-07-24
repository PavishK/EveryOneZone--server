import { Server } from 'socket.io';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import Chats from './model/chatModel.js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env', quit:true });

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || '*',
    methods: ["GET", "POST"],
    credentials: true
  }
});

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("\x1b[32mMongoDB connected!\x1b[0m"))
  .catch((err) => console.error("\x1b[31mError connecting to MongoDB:", err.message, "\x1b[0m"));

io.on('connection', (socket) => {

  socket.on('setUsername', (username) => {
    socket.username = username;
    io.emit('user-connected', username);
  });

  socket.on('chatMessage', async ({ username, text, color }) => {
    try {
      const newMessage = new Chats({ username, text, color });
      await newMessage.save();
      io.emit('chatMessage', newMessage); // Or use `socket.broadcast.emit()` to avoid echo
    } catch (error) {
       io.emit('chatMessage', "Error resend message.");
    }
  });

  socket.on('disconnect', () => {
    if (socket.username) {
      io.emit('user-disconnected', socket.username);
    }
  });
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`🚀 Server running at \x1b[36mhttp://localhost:${port}\x1b[0m`);
});
