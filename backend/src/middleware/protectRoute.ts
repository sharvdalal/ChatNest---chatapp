import jwt, { JwtPayload } from 'jsonwebtoken'
import { Request,Response,NextFunction } from 'express';
import prisma from '../db/primsa.js';

interface DecodedToken extends JwtPayload {
    userId: string
}

declare global {
    namespace Express {
        export interface Request {
            user: {
                id: string;
            }
        }
    }
}

const protectRoute: any = async (req: Request, res: Response, next: NextFunction) =>{
    try {
        const token = req.cookies.jwt;

        if(!token) return res.status(401).json({error: "Unauthorized - No Token Provided"});

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;

        if(!decoded) return res.status(401).json({error: "Token not valid"});

        const user = await prisma.user.findUnique({where: {id: decoded.userId}, select: {id: true, username: true, fullName: true, profilePic: true}})

        if(!user) return res.status(404).json({error: "user not found"});

        req.user = user;
        next()
    } catch (error: any) {
        console.log("Error in Protected middleware", error.message);
        res.status(400).json({error: "Internal Server Error"})
        
        
    }

}

export default protectRoute;