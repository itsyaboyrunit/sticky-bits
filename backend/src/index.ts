import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";


const port = env.PORT;


    app.listen(port,async () => {
        console.log(`Connecting...`);
       await mongoose.connect(env.MONGO_CONNECTION_STRING);
       console.log('Connected to database');
    });

    export default app;