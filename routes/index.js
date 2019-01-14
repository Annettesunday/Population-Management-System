import { Router } from 'express';
import location from '../controllers/location';
import * as validation from '../middlewares/validation';

const Route = Router();


Route.post('/location', validation.validateName, validation.validateMale, validation.validateFemale, validation.validateParentLocation, location.add);

Route.get('/locations', location.get);

Route.delete('/location/:name', location.delete);

Route.put('/location/:name', validation.validateName, validation.validateMale,
  validation.validateFemale, validation.validateParentLocation, location.update);

export default Route;

