import { config } from 'dotenv';
import { NextFunction, Response, Router } from 'express';
import { TRAINEEE } from '../../libs/constants';
import { IUserRead } from '../../libs/interface';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import validationHandler from '../../libs/routes/validationHandler';
import trainee from './Controller';
import validation from './validation';

const traineeRoute: Router = Router();
console.log('Inside routes.ts');
traineeRoute.get( '/' , authMiddleWare(TRAINEEE, 'read'), trainee.get );
traineeRoute.post( '/' , authMiddleWare(TRAINEEE, 'write')
,  /*, validationHandler(validation.create) */ trainee.create );
traineeRoute.put( '/' , authMiddleWare(TRAINEEE, 'update')
, /*, validationHandler(validation.update) */ trainee.update );
traineeRoute.delete( '/:id' , authMiddleWare(TRAINEEE, 'delete')
/* , validationHandler(validation.delete)*/ , trainee.remove );
export default traineeRoute;
