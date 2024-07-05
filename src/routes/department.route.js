import departmentController from '../controllers/department.controller.js';
import express from 'express';

const departmentRoute = express.Router();

const { departmentAdd, departmentUpdate, departmentGet, departmentDelete } = departmentController;

departmentRoute.post('/api/add-department', departmentAdd);
departmentRoute.put('/api/update-department', departmentUpdate);
departmentRoute.get('/api/get-department', departmentGet);
departmentRoute.delete('/api/delete-department/:departmentId', departmentDelete);

export default departmentRoute;
