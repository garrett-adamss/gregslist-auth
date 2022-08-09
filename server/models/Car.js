import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CarSchema = new Schema(
  {
    make :{ type: String, required: true, minlength: 2, maxlength: 100 },
    model :{ type: String, required: true, maxlength: 100 },
    year :{ type:  Number, required: true, min: 1910, max :(new Date().getFullYear() + 1) },
    price :{ type: Number, required: true,  min: 0, max: 10000000},
    img :{ type: String, maxlength: 600, default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'},
    description: {type: String, maxlength: 1000},
    enginetype: { type: String, enum: [ 'unknown', '2 stroke', '3cyl', '4 cyl', '5 cyl', 'l6', 'v6', 'v8', 'v10', 'v12', 'w12'], default:'unknown' }
    
    },
  { timestamps: true, toJSON: { virtuals: true } }
)
