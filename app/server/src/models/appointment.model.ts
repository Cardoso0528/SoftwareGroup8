import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        service:{
            type: String,
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
export const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;

export const getAppointment = () => Appointment.find();
export const createAppointment = (values: Record<string, any>) => new Appointment(values).save().then((user) => user.toObject());
export const deleteAppointmentByID = (id: string) => Appointment.findOneAndDelete({_id: id});
export const updateAppointmentByID = (id: string, values: Record<string, any>) => Appointment.findByIdAndUpdate(id, values);
export const confirmAppointment = (id: string) => {return Appointment.findByIdAndUpdate(id, { confirm: true }, { new: true });};
  
