import { DonationModel } from "@/models/Donation"
import mongoose from "mongoose"

export async function createDonation(formData){
    const {amount, name, message, crypto} = Object.fromEntries(formData)
    await mongoose.connect(process.env.MONGODB_URI)
    await DonationModel.create({
        amount, name, message, crypto
    })
    return ''
}