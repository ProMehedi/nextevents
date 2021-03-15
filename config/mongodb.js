import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://mehedi:Mehedi2020@cluster0.wrrej.mongodb.net/eventsDatabase?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    )

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(error.message)
  }
}

export default mongodb
