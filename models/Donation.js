import {model, models, Schema} from "mongoose";



const donationSchema = new Schema({
  amount: {type: Number, required: true},
  name: {type: String, required: true},
  email: {type: String, required: true},
  message: {type: String},
  crypto: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return ['btc', 'eth', 'ltc'].includes(v);
      },
    },
  },
  paid: {type: Boolean, default: false},
});

export const DonationModel = models?.Donation || model<Donation>('Donation', donationSchema);