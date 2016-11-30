/**
 * Connect routes from config
 */

class Router {

	/**
	 * Set app and init router.
	 * @param {object} app - Express middleware.
	 * @param {Array} config - Routes config.
	 */

	constructor(app, config) {

		this.app = app;

		this.initConfig(config);

	}

	/**
	 * Method for connecting and performing config routes.
	 * @param {Array} config - Routes config.
	 */

	initConfig(config) {

		config.map((route) => {
			
			this.app[route.method](route.path, route.controller);

		});

	}

}

export default Router;
