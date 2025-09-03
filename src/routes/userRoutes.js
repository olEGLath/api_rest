import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', userController.store);
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
index -> listar todos os usuários -> GET
store/create -> criar um novo usuário -> POST
delete -> deletar um usuário -> DELETE
show -> mostrar um usuário -> GET
update -> atualizar um usuário -> PATCH ou PUT
*/
