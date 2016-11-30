import { sh } from '../config/utils';

const SERVER = process.argv.includes('--server');
const CLIENT = process.argv.includes('--client');
const PM2 = process.argv.includes('--start');

function run() {

	try {

		if (CLIENT) {

			console.log('client');

		}

		if (SERVER) {

			process.env.NODE_ENV = "development";

			require('../server/entry');

		}

		if(PM2) {

			sh('pm2 start package.json');

		}

	} catch(err) {

		console.log(err)

	}

}

run();
