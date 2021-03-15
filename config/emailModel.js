import mongoose from 'mongoose'

const emailSchema = mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  { timeStamps: true }
)
const emailModel = mongoose.model('emails', emailSchema)
export default emailModel
