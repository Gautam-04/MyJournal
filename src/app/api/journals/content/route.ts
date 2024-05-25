import { connect } from "@/dbConfig/dbConfig";
import { NextRequest,NextResponse } from "next/server";


connect()

export async function POST(req: NextRequest){
    const reqBody  = await req.json();
    const {title,date,banner,Story} = reqBody
    const {id} = await reqBody.query
}