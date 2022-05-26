import express from 'express';
import dotenv from 'dotenv';
import { mongoDBConnect } from './src/mongodb.js';
import { router } from './src/routes/message.js';
import bodyParser from 'body-parser'

//const io = socketIo(http)

//Load environment variables
dotenv.config({ path: './env/environment.env' })
const app = express();
const PORT = process.env.PORT || 3000

//connect the mongoDB database
mongoDBConnect()

//parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('./'));
app.use(router)

//server
const server = app.listen(PORT,
    console.log(`server is running on NODE_ENV =${process.env.NODE_ENV} PORT : ${process.env.PORT}`)
)

//unhandler rejections
process.on('unhandledRejection', (reason, p) => {
    console.log('logName=unhandledRejection, process=' + p + ', reason=' + reason)
    server.close();
})