import { ProfileInfo } from "@/models/ProfileInfo";
import mongoose from "mongoose"

export async function GET(req, {params}){
    const { email } = params;
    console.log(email)
    await mongoose.connect(process.env.MONGODB_URI)
    const result = JSON.stringify(await ProfileInfo.findOne({email: email}))
    console.log(result)
    return new Response(result,{
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }}
    )
}