import express from 'express';
import { getAllServices, getServiceById, createService, updateService, deleteService} from '../controllers/service';

const router = express.Router();

router.get('/service/getall', getAllServices);

router.get('/service/get/:id', getServiceById);

router.post('/service/create', createService);

router.put('/service/update/:id', updateService);

router.delete('/service/delete/:id', deleteService);

export default router;