import mongoose from "mongoose";
const grievanceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
  },
  phone: {
    type: String,
    required: true,
    match: [/^[0-9]{10,15}$/, 'Phone number must be between 10 and 15 digits'],
  },
  description: {
    type: String,
    required: true,  
  },
  status: { 
    type: String,
     enum: ['pending', 'resolved'], 
     default: 'pending'
     }
}); 

const completes = mongoose.model('completes', grievanceSchema);

export default completes