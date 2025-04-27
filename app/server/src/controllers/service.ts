import { Request, Response } from 'express';
import { fetchAllServices, fetchServiceById, deleteServiceById } from '../models/service.model';
import { createNewService, updateExistingService } from '../models/service.model';

export const getAllServices = async (req: Request, res: Response) => {
    try {
        const services = await fetchAllServices();
        res.status(200).json({ success: true, message: 'Services fetched successfully', data: services });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error fetching services', error });
    }
};

export const getServiceById = async (req: Request, res: Response): Promise<void> => {
    try {
        const service = await fetchServiceById(req.params.id);
        if (!service) {
            res.status(404).json({ success: false, message: 'Service not found' });
            return; 
        }
        res.status(200).json({ success: true, message: 'Service fetched successfully', data: service });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching service', error });
    }
};

export const createService = async (req: Request, res: Response) => {
    try {
        const {name, duration, description, cost,} = req.body;
        if (!name || !duration || !description || !cost) {
            res.status(400).json({ message: 'All fields are required' });
            return;
        }

        const user = await createNewService({
            name,
            duration,
            description,
            cost,
        });
        res.status(200).json({ success: true, message: 'Service created successfully', data: user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error creating service', error });
    }
};

export const updateService = async (req: Request, res: Response): Promise<void> =>{
    try {
        const updatedService = await updateExistingService(req.params.id, req.body);
        if (!updatedService) {
            res.status(404).json({ success: false, message: 'Service not found' });
            return;
        }
        res.status(200).json({ success: true, message: 'Service updated successfully', data: updatedService });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Error updating service', error });
    }
};

export const deleteService = async (req: Request, res: Response): Promise<void> =>{
    try {
        const deletedService = await deleteServiceById(req.params.id);
        if (!deletedService) {
            res.status(404).json({ success: false, message: 'Service not found' });
            return;
        }
        res.status(200).json({ success: true, message: 'Service deleted successfully', data: deletedService });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting service', error });
    }
};