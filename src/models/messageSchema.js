import mongoose from 'mongoose';

// Message model Schema
const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: [20, 'Name cannot be more than 20 characters']
    },
    message: {
        type: String,
        required: true,
        trim: true,
        maxlength: [20, 'Message cannot be more than 20 characters']
    },
    image : { 
        data: Buffer, 
        contentType: String 
    }
});

// Creating model objects
export const Chat = mongoose.model('message', messageSchema);