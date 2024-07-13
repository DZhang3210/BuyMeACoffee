import { ProfileInfo } from "@/models/ProfileInfo";
import mongoose from "mongoose"

export async function GET(req, {params}){
    const { email } = params;
    await mongoose.connect(process.env.MONGODB_URI)
    const result = JSON.stringify(await ProfileInfo.findOne({email: email}))
    if(!result) 
      return new Response("couldn't not find email",{
        status: 404,
        headers:{
          'Content-Type': 'application/json',
        }
      })
    console.log(result)
    return new Response(result,{
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }}
    )
}