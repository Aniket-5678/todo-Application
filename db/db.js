import mongoose from "mongoose";



const connectionDB = async () => {
    try {
        
        const connectdb = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MONOGODB connected to databse successfully ${connectdb.connection.host}`);



    } catch (error) {
        console.log('MONGODB connection failed');
    }
}

export default connectionDB