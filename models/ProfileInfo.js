const { Schema, models, model } = require("mongoose");


const ProfileInfoSchema = new Schema({
    email: {type:String, unique: true, required:true},
    username: {type:String, unique: true, required: true},
    displayName: {type: String},
    bio: {type:String},
    avatarURL: {type:String},
    coverURL: {type:String}
}, {timestamps: true})

export const ProfileInfo = models?.ProfileInfo || model('ProfileInfo', ProfileInfoSchema)
