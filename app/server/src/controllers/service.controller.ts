import { Request, Response } from 'express';
import { fetchAllServices, fetchServiceById, deleteServiceById } from '../services/services';
import { createNewService, updateExistingService } from '../services/services';

export const getAllServices = async (req: Request, res: Response) => {
    try {
        const services = await fetchAllServices();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching services', error });
    }
};

export const getServiceById = async (req: Request, res: Response) => {
    try {
        const service = await fetchServiceById(req.params.id);
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json(service);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching service', error });
    }
};

export const createService = async (req: Request, res: Response) => {
    try {
        const savedService = await createNewService(req.body);
        res.status(201).json(savedService);
    } catch (error) {
        res.status(500).json({ message: 'Error creating service', error });
    }
};

export const updateService = async (req: Request, res: Response) => {
    try {
        const updatedService = await updateExistingService(req.params.id, req.body);
        if (!updatedService) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json(updatedService);
    } catch (error) {
        res.status(500).json({ message: 'Error updating service', error });
    }
};

export const deleteService = async (req: Request, res: Response) => {
    try {
        const deletedService = await deleteServiceById(req.params.id);
        if (!deletedService) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting service', error });
    }
};