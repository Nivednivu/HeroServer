import express from 'express';
import { createGrievance, deleteGrievance, getAllGrievances} from '../controllers/grievanceController.js';

const Crouter = express.Router();

Crouter.post('/postGrievances', createGrievance);


Crouter.get('/getGrievances', getAllGrievances);


Crouter.delete('/removeGrievances/:pid',deleteGrievance);

export default Crouter; 
            