'use server';
import {authOptions} from "@/lib/authOptions";
import {ProfileInfoModel} from "@/models/ProfileInfo";
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
    username, displayName, bio
  } = Object.fromEntries(formData);

  const profileInfoDoc = await ProfileInfoModel.findOne({email});
  if (profileInfoDoc) {
    profileInfoDoc.set({username, displayName, bio});
    await profileInfoDoc.save();
  } else {
    await ProfileInfoModel.create({username, displayName, bio, email});
  }

  return true;
}