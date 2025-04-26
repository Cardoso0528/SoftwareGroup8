import express, { Request, Response, NextFunction } from 'express';
import { Service } from "../models/service.model"; 
import { getAppointment, createAppointment, deleteAppointmentByID, updateAppointmentByID , confirmAppointment} from '../models/appointment.model';

export const applyAppointment = async (req: Request, res: Response): Promise<void> => {
    try{
    const {username, service, time, stylist, notes, confirm } = req.body;
    if (!username || !service || !time || !stylist || !notes || !confirm)  {
        res.status(400).json({ message: 'All fields are required' });
        return;
    }

    const existingService = await Service.findOne({ name: service });
    if (!existingService) {
        res.status(404).json({ message: 'Service not found' });
        return;
    }

    const user = await createAppointment({
        username, 
        service, 
        time, 
        stylist, 
        notes, 
        confirm 
    })
    res.status(200).json(user);
    } catch(error) {
        console.log(error);
        res.status(500).json({message: "Internal server error"});
    }
}

export const cancelAppointment = async (req: Request, res: Response): Promise<void> => {
    try{
        const {id} = req.params;
        
        const deleteAppointemnt = await deleteAppointmentByID(id);
        res.json(deleteAppointemnt);
    } catch (error){
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const rescheduleAppointment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { time } = req.body;

        if (!time) {
            res.status(400).json({ message: 'New time is required to reschedule.' });
            return;
        }

        const updatedAppointment = await updateAppointmentByID(id, { time });

        if (!updatedAppointment) {
            res.status(404).json({ message: 'Appointment not found.' });
            return;
        }

        res.status(200).json(updatedAppointment);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const confirmUserAppointment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const confirmedAppointment = await confirmAppointment(id);

        if (!confirmedAppointment) {
            res.status(404).json({ message: 'Appointment not found.' });
            return;
        }

        res.status(200).json(confirmedAppointment);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

export const getUserAppointment = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await getAppointment();

        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}