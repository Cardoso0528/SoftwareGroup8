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
            type: Number,
            required: true,
        },

    }
);

export const Service = mongoose.model('Service', serviceSchema);

export default Service;

export const fetchAllServices = () => Service.find();
export const fetchServiceById = (id: string) => Service.findById(id);
export const createNewService = (values: Record<string, any>) => new Service(values).save().then((user) => user.toObject());
export const deleteServiceById = (id: string) => Service.findOneAndDelete({_id: id});
export const updateExistingService = (id: string, values: Record<string, any>) => Service.findByIdAndUpdate(id, values);

