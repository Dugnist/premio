import UserModel from '../models/user';

class UserController {

	constructor() {

		this.user = new UserModel();

	}

	createUser(req, res) {

		this.user.createInDB(req.body)
			.then((result) => {
				res.send(result);
			})
			.catch((error) => {
				res.send(error);
			});

	}

	getUser(req, res, next) {

		this.user.getFromDB(req.params.id)
			.then((result) => {
				res.send(result);
			})
			.catch((error) => {
				res.send(error);
			});
		// res.send({id: 1, parserToken: 'a53d260e-83af-4aa8-8b93-f244b573cca7'});

	}

	updateUser(req, res) {

		// this.user.updateInDB(req.params.id, req.body)
		// 	.then((result) => {
		// 		res.send(result);
		// 	})
		// 	.catch((error) => {
		// 		res.send(error);
		// 	});

	}

	deleteUser(req, res) {

		// this.user.deleteFromDB(req.params.id)
		// 	.then((result) => {
		// 		res.send(result);
		// 	})
		// 	.catch((error) => {
		// 		res.send(error);
		// 	});

	}

}

export default new UserController;
