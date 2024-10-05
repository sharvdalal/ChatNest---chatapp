import express from 'express'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import dotenv from "dotenv"
import { app, server } from './socket/socket.js'

dotenv.config();

const PORT = process.env.PORT || 5001;


app.use(cookieParser());
app.use(express.json())


app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)


server.listen(PORT, ()=>{
    console.log(`Server hosted on port ${PORT}`);
})