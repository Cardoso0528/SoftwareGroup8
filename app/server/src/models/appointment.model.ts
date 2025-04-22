import mongoose from "mongoose";
import Service from './service.model'

const appointmentSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        service:{
            type: mongoose.Schema.Types.ObjectId, ref: Service,
            required: true,
        },
        time:{
            type: String,
            required: true,
        },
        stylist:{
            type: String,
            required: true,
        },
        notes:{
            type: String,
            required: true,
        },
        confirm:{
            type: Boolean,
            required: true,
        }

    }
);
const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;