import { User } from '../models/schemas';
import uuid from 'uuid';

class DriverDB {

	constructor(name) {

		this.recognizeGist(name);
		this.type = name;

	}

	/*
	* Распознаём тип объекта
	* к которому обращаемся в бд
	 */

	recognizeGist(gist) {

		switch (gist) {

			case 'user':

				this.gist = User;

				break;

			// case 'bet':
            //
			// 	this.gist = Bet;
            //
			// 	break;

		}

	}

	create(data) {

		return new Promise((resolve, reject) =>  {

			(!data.id) ? data.id = uuid() : null;

			this.read(data.id).then(() => {

				reject({ status: 409, type: this.type });

			}).catch(() => {

				this.gist.create(data, (err, result) => {

					(!err) ? resolve(result) : reject(err);

				});

			});

		});

	}

	readHandler(data) {

		let readedData = null;

		if (typeof(data) === 'object') {

			return readedData = { ...data };

		} else {

			readedData = { id: data };

		}

		return readedData;

	}

	read(data) {

		return new Promise((resolve, reject) => {

			const filteredData = this.readHandler(data);

			this.gist.findOne(filteredData, (err, result) => {

				if (result) {

					resolve(result);

				} else {

					reject({ status: 404, type: this.type });

				}

			});

		});

	}

	update(id, data) {

		return new Promise((resolve, reject) =>  {

			this.read(id).then(() => {

				this.gist.findOneAndUpdate({ id }, data, { new: true }, (err, result) => {
					
					(!err) ? resolve(result) : reject(err);

				});

			}).catch(() => {

				reject({ status: 404, type: this.type });

			});

		});

	}

	delete(id) {

		return new Promise((resolve, reject) =>  {

			this.read(id).then(() => {

				this.gist.remove({ id }, (err) => {

					(!err) ? resolve({ deleted: true }) : reject({ status: 400, type: 'writeToMongo' });

				});

			}).catch(() => {

				reject({ status: 404, type: this.type });

			});

		});

	}

}

export default DriverDB;
