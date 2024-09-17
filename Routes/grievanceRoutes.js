import express from 'express';
import { createGrievance, deleteGrievance, getAllGrievances, getGrievancesOverview, updateGrievanceStatus} from '../controllers/grievanceController.js';

const Crouter = express.Router();

Crouter.post('/postGrievances', createGrievance);


Crouter.get('/getGrievances', getAllGrievances);


Crouter.put('/grievances/:pid', updateGrievanceStatus);

Crouter.get('/grievances', getGrievancesOverview);


Crouter.delete('/removeGrievances/:pid',deleteGrievance);


export default Crouter;  
               