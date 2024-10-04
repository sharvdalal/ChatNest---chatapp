import express from 'express'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import dotenv from "dotenv"

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

app.use(cookieParser());
app.use(express.json())


app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)


app.listen(PORT, ()=>{
    console.log(`Server hosted on port ${PORT}`);
})