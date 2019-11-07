require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
  const { user } = socket.handshake.query;

  connectedUsers[user] = socket.id;
});

mongoose.connect(process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  });

app.use((req, res, next) => {
  req.io = io;
  return next();
})


/*
var clients = [];
io.on('connection', function (client) {
  client.on("join", function (name) {
    console.log("Joined: " + name);
    clients.push({ name, id: client.id })
    client.emit("update", clients);
  })

  client.on('disconnect', function () {
    io.emit("update", clients + " has left the server.")
    clients.splice(clients.indexOf(client), 1);
  }); 
});
 */

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(process.env.PORT || 3333);
