'use server';
import {authOptions} from "@/lib/authOptions";
import {ProfileInfo} from "@/models/ProfileInfo";
import mongoose from "mongoose";
import {getServerSession} from "next-auth";

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