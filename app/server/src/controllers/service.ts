import { Request, Response } from 'express';
import { fetchAllServices, fetchServiceById, deleteServiceById } from '../models/service.model';
import { createNewService, updateExistingService } from '../models/service.model';

export const getAllServices = async (req: Request, res: Response) => {
    try {
        const services = await fetchAllServices();
        res.status(200).json(services);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error fetching services', error });
    }
};

export const getServiceById = async (req: Request, res: Response): Promise<void> => {
    try {
        const service = await fetchServiceById(req.params.id);
        if (!service) {
            res.status(404).json({ message: 'Service not found' });
            return; 
        }
        res.status(200).json(service);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching service', error });
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
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error creating service', error });
    }
};

export const updateService = async (req: Request, res: Response): Promise<void> =>{
    try {
        const updatedService = await updateExistingService(req.params.id, req.body);
        if (!updatedService) {
            res.status(404).json({ message: 'Service not found' });
            return;
        }
        res.status(200).json(updatedService);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error updating service', error });
    }
};

export const deleteService = async (req: Request, res: Response): Promise<void> =>{
    try {
        const deletedService = await deleteServiceById(req.params.id);
        if (!deletedService) {
            res.status(404).json({ message: 'Service not found' });
            return;
        }
        res.json(deletedService)
        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting service', error });
    }
};