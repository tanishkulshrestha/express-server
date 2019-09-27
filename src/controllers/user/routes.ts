import { Router } from 'express';
import { TRAINEEE } from '../../libs/constants';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import validationHandler from '../../libs/routes/validationHandler';
import user from './Controller';
import validation from './validation';

const userRoute: Router = Router();
userRoute.get('/', authMiddleWare(TRAINEEE, 'read'), validationHandler(validation.get), user.get);
userRoute.post('/', authMiddleWare(TRAINEEE, 'write'), validationHandler(validation.create), user.create);
userRoute.put('/', authMiddleWare(TRAINEEE, 'update'), validationHandler(validation.update), user.update);
userRoute.delete('/:id', authMiddleWare(TRAINEEE, 'delete'), validationHandler(validation.delete), user.remove);
userRoute.get('/login', validationHandler(validation.login), user.login);
export default userRoute;
