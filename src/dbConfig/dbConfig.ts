import mongoose, { mongo } from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log(`Mongo db connected at port ${connection.host}`)
        })

        connection.on('error', (err)=>{
            console.log('Mongodb connection error' + err);
            process.exit()
        })
    } catch (error) {
        console.log("Something just went wrong!")
        console.log(error)
    }
}