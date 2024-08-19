import mongoose from "mongoose";



const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://rocks:rocks@cluster0.nvc9u.mongodb.net/todo-app?retryWrites=true&w=majority&appName=Cluster0`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED!!!", error);
        process.exit(1);
    }
}

export { connectDB }
