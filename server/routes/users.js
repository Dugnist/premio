import { UserController } from '../controllers';

export default [
    { path: '/users/', method: 'post', controller: UserController.createUser.bind(UserController) },
    { path: '/users/:id', method: 'get', controller: UserController.getUser.bind(UserController) },
    { path: '/users/:id', method: 'put', controller: UserController.updateUser.bind(UserController) },
    { path: '/users/:id', method: 'delete', controller: UserController.deleteUser.bind(UserController) }
];
