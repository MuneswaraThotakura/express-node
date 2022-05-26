import mongoose from 'mongoose';

export const mongoDBConnect = async () => {
    const conn = await mongoose.connect(process.env.MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('MongoDB Connected' + conn.connection.host);
}