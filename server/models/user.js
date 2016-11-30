import { mongo } from '../drivers';

class UserModel extends Map {
	
	constructor() {

	    super();

        this.setAll({
            'id': null,
            'firstName': null,
            'lastName': null,
            'parserToken': null,
            'token': null
        });

		this.db = new mongo('user');

	}

	setAll(data) {

        for (let i in data) {
            this.set(i, data[i]);
        }

    }

    getAll() {

        let result = {};

        this.forEach( (_value, _key) => {
            result[_key] = _value;
        });

        return result;

    }

    merge(data) {

        let result = Object.assign(this.getAll(), data);

        this.setAll(result);

        return result;

    }

	createInDB(payload) {

		return new Promise((resolve, reject) => {

			this.db.create(this.merge(payload))
				.then((res)=> {
					resolve(res);
				})
				.catch((error)=> {
					reject(error);
				});

		});

	}

	getFromDB(id) {

		return new Promise((resolve, reject) => {

			this.db.read({ id })
				.then((res)=> {
					resolve(res);
				})
				.catch((error)=> {
					reject(error);
				});

		});

	}

	updateInDB(data) {

		return new Promise((resolve, reject) => {

			this.db.update({ id: payload.id, data })
				.then((res)=> {
					resolve(res);
				})
				.catch((error)=> {
					reject(error);
				});

		});

	}

	deleteFromDB(id) {

		return new Promise((resolve, reject) => {

			this.db.delete(id)
				.then((res)=> {
					resolve(res);
				})
				.catch((error)=> {
					reject(error);
				});

		});

	}

}

export default UserModel;
