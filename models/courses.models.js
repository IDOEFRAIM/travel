import mongoose from "mongoose"

const coursesSchema = mongoose.Schema({
    title:String,
    imageSrc:String
})

const courses = mongoose.model('courses',coursesSchema)

export default courses