import express from 'express';

import { applyAppointment, cancelAppointment, rescheduleAppointment, confirmUserAppointment , getUserAppointment} from '../controllers/appointment';

const router = express.Router();

router.get('/appointment', getUserAppointment);
router.delete('/appointment/delete/:id', cancelAppointment);
router.post('/appointment/apply', applyAppointment);
router.put('/appointment/resechdule/:id', rescheduleAppointment);
router.put('/appointment/confirm:id', confirmUserAppointment)

export default router;