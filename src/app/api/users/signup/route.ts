import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


connect();

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json()
        const{username,email,password,onelineInfo} = reqBody;

        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exists"},{status: 400})
        }

        const salt = await bcryptjs.genSalt(10);
        const hashpassword = await bcryptjs.hash(password,salt);

        const newUser = new User({
            username,
            email,
            password: hashpassword,
            onelineInfo
        })

        const savedUser = await newUser.save();

        console.log(`${reqBody} Element shared in the backend`);
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser,
            status: 200,
        })
    } catch (error: any) {
        console.log(`There was error signing up`);
        return NextResponse.json({error: error.message},{status: 500})
    }
}