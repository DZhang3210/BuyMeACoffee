'use server';
import {authOptions} from "@/lib/authOptions";
import {ProfileInfo} from "@/models/ProfileInfo";
import mongoose from "mongoose";
import {getServerSession} from "next-auth";
import { redirect } from "next/dist/server/api-utils";

export async function saveProfile(formData){
  console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n')
  console.log(formData)
  
  await mongoose.connect(process.env.MONGODB_URI);

  const session = await getServerSession(authOptions);
  if (!session) throw 'you need to be logged in';
  const email = session.user?.email;

  const {
    username, displayName, bio, avatarURL, coverURL
  } = Object.fromEntries(formData);

  const profileInfoDoc = await ProfileInfo.findOne({email});
  if (profileInfoDoc) {
    profileInfoDoc.set({username, displayName, bio, avatarURL, coverURL});
    await profileInfoDoc.save();
  } else {
    await ProfileInfo.create({username, displayName, bio, email, avatarURL, coverURL});
  }

  return true;
}

export async function getProfile({email}){
  if(email){
      try{
          await mongoose.connect(process.env.MONGODB_URI)
          const result = JSON.stringify(await ProfileInfo.findOne({email: email})) 
          const {username, displayName, bio, avatarURL, coverURL} = result.data
          return {username, displayName, bio, avatarURL, coverURL}
      } catch(err){
          redirect('/profile/edit?email='+email)
      }
  }else{
    redirect('/profile/edit?email='+email)
  }
}