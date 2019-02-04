import { NextFunction, Request, Response, Router } from 'express';
import { TRAINEEE } from '../../libs/constants';
import { IUserRead } from '../../libs/interface';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import validationHandler from '../../libs/routes/validationHandler';
import user from './Controller';
import validation from './validation';

const userRoute: Router = Router();
console.log('Inside routes.ts');
userRoute.get( '/' , authMiddleWare(TRAINEEE, 'read'), /* validationHandler(validation.get),*/ user.get );
userRoute.post( '/' , authMiddleWare(TRAINEEE, 'write'), /*, validationHandler(validation.create) */ user.create );
userRoute.put( '/' , authMiddleWare(TRAINEEE, 'read') , /*, validationHandler(validation.update) */ user.update );
userRoute.delete( '/:id' , authMiddleWare(TRAINEEE, 'delete')
/* , validationHandler(validation.delete)*/ , user.remove );
export default userRoute;
