import mongoose from "mongoose";


const serviceSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        duration:{
            type: Number,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },

        cost:{
            type: String,
            required: true,
        },

    }
);

const Service = mongoose.model('Service', serviceSchema);

export default Service;