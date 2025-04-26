import { create } from "zustand";
export interface Service {
    _id: string;
    name: string;
    description: string;
    cost: number;
    duration: number;
  } 

  interface ServiceType {
    services: Service[];
    setService: (service: Service[]) => void;
    createService: (newService:  Omit<Service, "_id">) => Promise<{ success: boolean; message: string }>;
    fetchService: () => Promise<void>;
    deleteService: (pid: string) => Promise<{ success: boolean; message: string }>;
    updateService: (pid: string, updatedService: Partial<Omit<Service, "_id">>) => Promise<{success: boolean; message: string}>;
  }

  export const useService = create<ServiceType>((set) => ({
    services: [],
    setService: (services) => set({services}),

    createService: async (newService) =>{
        if(!newService.name || !newService.description || !newService.cost || !newService.duration){
          return { success: false, message: "Fill in all fields"};
        }
        const res = await fetch(`http://localhost:3000/api/service/create`, {
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newService),
        });
        const data = await res.json();
        set((state) => ({services: [...state.services, data]}))
        return {success: true, message: "Service created successfully", service: data};
    },

    fetchService: async() =>{
      const res = await fetch(`http://localhost:3000/api/service/getall`);
      const data = await res.json();
      set({services: data.data})
    },

    deleteService: async(pid) =>{
      const res = await fetch(`http://localhost:3000/api/service/delete/${pid}`,{
        method: "DELETE",
      });
      const data = await res.json();
      if(!data.success) return {success: false, message: data.message};

      set((state) =>({
        services: state.services.filter((service) => service._id !== pid),
      }));
      return {success: true, message: data.message};
    },

    updateService: async(pid, updatedService) =>{
      const res =await fetch(`http://localhost:3000/api/service/update/${pid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedService),
      });
      const data = await res.json();
      if(!data.success) return {success: false, message: data.message};

      set((state) => ({
        services: state.services.map((service) => 
          service._id === pid ? data.data : service),
      }));
      return {success: true, message: data.message};
    },
  }));