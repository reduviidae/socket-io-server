const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");

const PORT = process.env.PORT || 5000;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

const getApiAndEmit = "TODO";
