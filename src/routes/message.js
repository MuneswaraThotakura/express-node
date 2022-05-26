import express from 'express';
import { Chat } from '../models/messageSchema.js'
// import { Server } from "socket.io";
// import { createServer } from "http";
// const httpServer = createServer();
// const io = new Server(httpServer);

// io.on('connection', () =>{
//     console.log('a user is connected')
// })

export const router = express.Router()

router.get('/messages', (req, res) => {
    Chat.find({}, (err, messages) => {
        res.send(messages);
    })
})

router.get('/messages/:user', (req, res) => {
    var user = req.params.user
    Chat.find({ name: user }, (err, messages) => {
        res.send(messages);
    })
})

router.post('/messages', async (req, res) => {
    try {
        var message = new Chat(req.body);
        await message.save()
        console.log('saved');
        //io.emit('message', req.body);
        res.sendStatus(200);
    }
    catch (error) {
        res.sendStatus(500);
        return console.log('error', error);
    }
    finally {
        console.log('Message Posted')
    }

})

router.get('/', function(req, res) { 
    res.render('index.html');
});