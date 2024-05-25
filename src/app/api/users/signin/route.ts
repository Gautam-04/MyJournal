import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


connect()

export async function POST(req: NextRequest){
    try {
        const reqBody = await req.json();
        const {email,password} = reqBody;
        const user = await User.findOne({email})

        if(!user){
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }

        console.log('user exists')

        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }
        console.log(user);

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn: "1d"})

        const response = NextResponse.json({
            message: "LoggedIn successfully",
            success: true,
        })
        response.cookies.set("token",token,{httpOnly: true,})

        return response;

    } catch (error: any) {
        console.log(`There was error signing up`);
        return NextResponse.json({error: error.message},{status: 500})
    }
}