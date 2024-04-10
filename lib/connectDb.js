import mongoose from 'mongoose'

const connectDb = async ()=>{
    try {
        const conn = await  mongoose.connect(process.env.MONGODB_URL)
        console.log('connected')
    } catch (err) {
        console.log(err.message)
    }
}
export default connectDb