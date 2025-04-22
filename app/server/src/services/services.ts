import Service from '../models/service.model';

export const fetchAllServices = async () => {
    return await Service.find();
};

export const fetchServiceById = async (id: string) => {
    return await Service.findById(id);
};

export const createNewService = async (serviceData: any) => {
    const newService = new Service(serviceData);
    return await newService.save();
};

export const updateExistingService = async (id: string, serviceData: any) => {
    return await Service.findByIdAndUpdate(id, serviceData, { new: true });
};

export const deleteServiceById = async (id: string) => {
    return await Service.findByIdAndDelete(id);
};