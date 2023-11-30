import mongoose from "mongoose";

const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL as string, {
            autoIndex: true,
        })
            .then(() => console.log('Connected to MongoDB'))
            .catch((err) => console.error('Failed to connect to MongoDB', err));
    } catch (error) {
        console.log("Something went wrong", error);

    }
}

export default connect