const Q = require('q');
const _ = require('lodash');
const db = require('../db/sql');
const sql = require('mssql');
const tools = require('../lib/tools');
const unwind = require('../lib/unwind');
const ErrorResponse = require('../lib/error-response');

var module = function () {
	var dalApps = {
		add: (args) => {
			var deferred = Q.defer();

			var err = new ErrorResponse();
			const transaction = new sql.Transaction(__database);

			transaction.on('commit', result => {
				deferred.resolve(args);
			});

			transaction.on('rollback', aborted => {
				deferred.reject(err);
			});

			args.req.body.private = Number(args.req.body.private)
			args.req.body.google.credentials = JSON.stringify(args.req.body.google.credentials);

			transaction.begin()
				.then(res => {
					return new sql.Request(transaction)
						.input('url', args.req.body.url)
						.input('icon', args.req.body.icon)
						.input('name', args.req.body.name)
						.input('secret', args.req.body.secret)
						.input('userId', args.req.body.header.userId)
						.input('private', args.req.body.private)
						.input('themeColor', args.req.body.theme.color)
						.input('googleDatabase', args.req.body.google.database)
						.input('themeBackground', args.req.body.theme.background)
						.input('googleCredentials', args.req.body.google.credentials)
						.execute('v1_Apps_Add');
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						err.error.errors[0].code = result.recordset[0].code;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(res => {
					return args.req.body.users.reduce((promise, user) => promise.then(() => new sql.Request(transaction)
						.input('role', user.role)
						.input('appId', args.result._id)
						.input('userId', user.userId)
						.execute('v1_Apps_Add_User')
					), Promise.resolve())
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.returnValue == 1 && result.recordset.length > 0) {
						deferred.resolve(args);
					} else {
						err.error.errors[0].code = result.recordset[0].code;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(res => {
					return args.req.body.scopes.reduce((promise, scopeId) => promise.then(() => new sql.Request(transaction)
						.input('appId', args.result._id)
						.input('userId', args.req.body.header.userId)
						.input('scopeId', scopeId)
						.execute('v1_Apps_Add_Scope')
					), Promise.resolve())
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.returnValue == 1 && result.recordset.length > 0) {
						deferred.resolve(args);
					} else {
						err.error.errors[0].code = result.recordset[0].code;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(res => {
					return args.req.body.domains.reduce((promise, url) => promise.then(() => new sql.Request(transaction)
						.input('url', url)
						.input('appId', args.result._id)
						.input('userId', args.req.body.header.userId)
						.execute('v1_Apps_Add_Domain')
					), Promise.resolve())
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.returnValue == 1 && result.recordset.length > 0) {
						deferred.resolve(args);
					} else {
						err.error.errors[0].code = result.recordset[0].code;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(res => {
					transaction.commit();
				})
				.catch(err => {
					transaction.rollback();
				})

			return deferred.promise;
		},

		get: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('appId', args.req.body.appId);
			request.input('userId', args.req.body.header.userId);

			request.execute('v1_Apps_Get')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						result = result.recordset.map(o => unwind(o));
						args.result = {
							bitid: {
								auth: {
									users: _.uniqBy(result.map(o => ({ role: o.role, userId: o.userId })), 'userId')
								}
							},
							scopes: _.uniqBy(result, 'scopeId').map(o => o.scopeId),
							domains: _.uniqBy(result, 'domain').map(o => o.domain),
							_id: result[0]._id,
							url: result[0].url,
							icon: result[0].icon,
							name: result[0].name,
							theme: result[0].theme,
							google: result[0].google,
							secret: result[0].secret,
							private: result[0].private
						};
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = result.recordset[0].code;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		load: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('appId', args.req.body.appId);

			request.execute('v1_Apps_Load')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						result = result.recordset.map(o => unwind(o));
						args.result = {
							_id: result[0]._id,
							url: result[0].url,
							icon: result[0].icon,
							name: result[0].name,
							theme: result[0].theme,
							scopes: _.uniqBy(result, 'scopeId').map(o => o.scopeId),
							domains: _.uniqBy(result, 'domain').map(o => o.domain),
							private: result[0].private
						};
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = result.recordset[0].code;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		list: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('userId', args.req.body.header.userId);

			request.execute('v1_Apps_List')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = _.chain(result.recordset.map(o => unwind(o))).groupBy('_id').map((apps, key) => {
							return {
								bitid: {
									auth: {
										users: _.uniqBy(apps.map(o => ({ role: o.role, userId: o.userId })), 'userId')
									}
								},
								scopes: _.uniqBy(apps, 'scopeId').map(o => o.scopeId),
								domains: _.uniqBy(apps, 'domain').map(o => o.domain),
								_id: apps[0]._id,
								url: apps[0].url,
								icon: apps[0].icon,
								name: apps[0].name,
								theme: apps[0].theme,
								google: apps[0].google,
								secret: apps[0].secret,
								private: apps[0].private
							}
						}).value();
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = result.recordset[0].code;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		share: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('role', args.req.body.role);
			request.input('appId', args.req.body.appId);
			request.input('userId', args.req.body.userId);
			request.input('adminId', args.req.body.header.userId);

			request.execute('v1_Apps_Share')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = result.recordset[0].code;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		update: (args) => {
			var deferred = Q.defer();

			var params = {
				'bitid.auth.users': {
					$elemMatch: {
						'role': {
							$gte: 2
						},
						'email': args.req.body.header.email
					}
				},
				'_id': args.req.body.appId
			};

			var update = {
				$set: {
					'serverDate': new Date()
				}
			};
			if (typeof (args.req.body.google) != 'undefined') {
				if (typeof (args.req.body.google.database) != 'undefined') {
					update.$set['google.database'] = args.req.body.google.database;
				};
				if (typeof (args.req.body.google.credentials) == 'object') {
					update.$set['google.credentials'] = args.req.body.google.credentials;
				};
			};
			if (typeof (args.req.body.url) != 'undefined') {
				update.$set.url = args.req.body.url;
			};
			if (typeof (args.req.body.name) != 'undefined') {
				update.$set.name = args.req.body.name;
			};
			if (typeof (args.req.body.icon) != 'undefined') {
				update.$set.icon = args.req.body.icon;
			};
			if (typeof (args.req.body.theme) != 'undefined') {
				update.$set.theme = args.req.body.theme;
			};
			if (typeof (args.req.body.secret) != 'undefined') {
				update.$set.secret = args.req.body.secret;
			};
			if (typeof (args.req.body.scopes) != 'undefined') {
				update.$set.scopes = args.req.body.scopes;
			};
			if (typeof (args.req.body.domains) != 'undefined') {
				update.$set.domains = args.req.body.domains;
			};
			if (typeof (args.req.body.private) != 'undefined') {
				update.$set.private = args.req.body.private;
			};
			if (typeof (args.req.body.organizationOnly) != 'undefined' && args.req.body.organizationOnly !== null) {
				update.$set['bitid.auth.organizationOnly'] = args.req.body.organizationOnly;
			};

			db.call({
				'params': params,
				'update': update,
				'operation': 'update',
				'collection': 'tblApps'
			})
				.then(result => {
					args.result = result;
					deferred.resolve(args);
				}, error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		delete: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('appId', args.req.body.appId);
			request.input('userId', args.req.body.header.userId);

			request.execute('v1_Apps_Delete')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = result.recordset[0].code;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		validate: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);
			request.input('appId', args.req.body.header.appId);
			request.execute('v1_Apps_Validate')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.app = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 69;
						err.error.errors[0].reason = 'no records found';
						err.error.errors[0].message = 'no records found';
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		allowaccess: (args) => {
			var deferred = Q.defer();

			var params = {
				'email': args.req.body.header.email,
				'validated': 1
			};

			db.call({
				'params': params,
				'operation': 'find',
				'collection': 'tblUsers'
			})
				.then(result => {
					var deferred = Q.defer();

					if (result.length > 0) {
						args.user = result[0];
						var password = tools.encryption.sha512(args.req.body.password, args.user.salt);

						if (password.hash == args.user.hash) {
							if (args.user.validated == 1) {
								var params = {
									'_id': args.req.body.appId
								};

								deferred.resolve({
									'params': params,
									'operation': 'find',
									'collection': 'tblApps'
								});
							} else {
								var err = new ErrorResponse();
								err.error.errors[0].code = 401;
								err.error.errors[0].reason = 'Account verification is required!';
								err.error.errors[0].message = 'Account verification is required!';
								deferred.reject(err);
							};
						} else {
							var err = new ErrorResponse();
							err.error.errors[0].code = 401;
							err.error.errors[0].reason = 'Password is incorrect!';
							err.error.errors[0].message = 'Password is incorrect!';
							deferred.reject(err);
						};
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 69;
						err.error.errors[0].reason = 'Account not yet registered!';
						err.error.errors[0].message = 'Account not yet registered!';
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(db.call, null)
				.then(result => {
					var deferred = Q.defer();

					args.app = result[0];

					var params = {
						'bitid': {
							'auth': {
								'users': [{
									'role': 5,
									'email': args.req.body.header.email
								}]
							}
						},
						'token': {
							'alias': [],
							'bearer': tools.encryption.generateRandomString(64),
							'scopes': args.app.scopes,
							'expiry': args.req.body.expiry,
							'timeZone': args.user.timeZone || 0,
							'tokenAddOn': {},
							'description': args.req.body.description
						},
						'appId': args.req.body.appId,
						'device': args.req.headers['user-agent'],
						'description': args.req.body.description
					};

					deferred.resolve({
						'params': params,
						'operation': 'insert',
						'collection': 'tblTokens'
					});

					return deferred.promise;
				}, null)
				.then(db.call, null)
				.then(result => {
					args.result = result[0];
					deferred.resolve(args);
				}, error => {
					if (error instanceof ErrorResponse) {
						deferred.reject(error);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 401;
						err.error.errors[0].reason = error.message;
						err.error.errors[0].message = error.message;
						deferred.reject(err);
					};
				});

			return deferred.promise;
		},

		unsubscribe: (args) => {
			var deferred = Q.defer();

			var params = {
				'bitid.auth.users': {
					$elemMatch: {
						'role': {
							$gte: 4
						},
						'email': args.req.body.header.email
					}
				},
				'_id': args.req.body.appId
			};

			var update = {
				$set: {
					'serverDate': new Date()
				},
				$pull: {
					'bitid.auth.users': {
						'email': args.req.body.email
					}
				}
			};

			db.call({
				'params': params,
				'update': update,
				'operation': 'update',
				'collection': 'tblApps'
			})
				.then(result => {
					args.result = result;
					deferred.resolve(args);
				}, error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		updatesubscriber: (args) => {
			var deferred = Q.defer();

			var params = {
				'bitid.auth.users': {
					$elemMatch: {
						'role': {
							$gte: 4
						},
						'email': args.req.body.header.email
					}
				},
				'_id': args.req.body.appId
			};

			db.call({
				'params': params,
				'operation': 'find',
				'collection': 'tblApps'
			})
				.then(result => {
					var deferred = Q.defer();

					var params = {
						'bitid.auth.users': {
							$elemMatch: {
								'email': args.req.body.email
							}
						},
						'_id': args.req.body.appId
					};

					var update = {
						$set: {
							'bitid.auth.users.$.role': args.req.body.role
						}
					};

					deferred.resolve({
						'params': params,
						'update': update,
						'operation': 'update',
						'collection': 'tblApps'
					});

					return deferred.promise;
				}, null)
				.then(db.call, null)
				.then(result => {
					args.result = result;
					deferred.resolve(args);
				}, error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		}
	};

	var dalAuth = {
		auth: (args) => {
			var deferred = Q.defer();

			var token = JSON.parse(args.req.headers.authorization);

			var params = {
				'token': token,
				'appId': args.req.body.header.appId,
				'bitid.auth.users.email': args.req.body.header.email
			};

			var filter = {
				'_id': 1
			};

			db.call({
				'params': params,
				'filter': filter,
				'operation': 'find',
				'collection': 'tblTokens'
			})
				.then(result => {
					var deferred = Q.defer();

					var scopes = [];
					token.scopes.map(scope => {
						if (typeof (scope) == 'object' && typeof (scope) !== null) {
							scopes.push(scope.url);
						} else if (typeof (scope) == 'string' && typeof (scope) !== null) {
							scopes.push(scope);
						};
					});

					var params = {
						'url': {
							$in: scopes
						}
					};

					var filter = {
						'url': 1,
						'roles': 1
					};

					deferred.resolve({
						'params': params,
						'filter': filter,
						'operation': 'find',
						'collection': 'tblScopes'
					});

					return deferred.promise;
				}, null)
				.then(db.call, null)
				.then(result => {
					var deferred = Q.defer();

					var scopes = [];
					token.scopes.map(scope => {
						if (typeof (scope) == 'object' && typeof (scope) !== null) {
							scopes.push(scope.url);
						} else if (typeof (scope) == 'string' && typeof (scope) !== null) {
							scopes.push(scope);
						};
					});

					var valid = false;
					var found = false;
					result.map(row => {
						if (row.url == args.req.originalUrl || row.url == args.req.body.reqURI || row.url == '*') {
							found = true;
							scopes.map(scope => {
								if (row.roles.includes(scope.role)) {
									valid = true;
								};
							});
						};
					});

					if (!found) {
						var err = new ErrorResponse();
						err.error.errors[0].code = 401;
						err.error.errors[0].reason = 'Scope not allowed: ' + args.req.reqURI;
						err.error.errors[0].message = 'Scope not allowed: ' + args.req.reqURI;
						deferred.reject(err);
					} else if (!valid) {
						var err = new ErrorResponse();
						err.error.errors[0].code = 401;
						err.error.errors[0].reason = 'Scope role not allowed: ' + args.req.reqURI;
						err.error.errors[0].message = 'Scope role not allowed: ' + args.req.reqURI;
						deferred.reject(err);
					} else {
						deferred.resolve(args);
					};
				}, null)
				.then(result => {
					var deferred = Q.defer();

					var now = new Date();
					var expiry = new Date(token.expiry);

					if (expiry < now) {
						var err = new ErrorResponse();
						err.error.errors[0].code = 401;
						err.error.errors[0].reason = 'Token Expired';
						err.error.errors[0].message = 'Token Expired';
						deferred.reject(err);
					} else {
						deferred.resolve(args);
					};

					return deferred.promise;
				}, null)
				.then(result => {
					var deferred = Q.defer();

					var params = {
						'_id': args.req.body.header.appId
					};

					var filter = {
						'_id': 1
					};

					deferred.resolve({
						'params': params,
						'filter': filter,
						'operation': 'find',
						'collection': 'tblApps'
					});

					return deferred.promise;
				}, null)
				.then(db.call, null)
				.then(result => {
					deferred.resolve([{
						'email': args.req.body.header.email,
						'appId': args.req.body.header.appId
					}]);
				}, err => {
					deferred.reject(err);
				});

			return deferred.promise;
		},

		verify: (args) => {
			var deferred = Q.defer();

			var err = new ErrorResponse();
			const request = new sql.Request(__database);

			request.input('code', args.req.body.code)
			request.input('email', args.req.body.header.email)
			request.input('appId', args.req.body.header.appId)

			request.execute('v1_Auth_Verify')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = result.recordset[0].code;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		validate: (args) => {
			var deferred = Q.defer();

			if (typeof (args.req.headers.authorization) == 'undefined' || args.req.headers.authorization == null) {
				var err = new ErrorResponse();
				err.error.code = 401;
				err.error.errors[0].code = 401;
				err.error.errors[0].reason = 'Token not found in header!';
				err.error.errors[0].message = 'Token not found in header!';
				deferred.reject(err);
				return deferred.promise;
			} else {
				try {
					args.req.headers.authorization = JSON.parse(args.req.headers.authorization);
				} catch (error) {
					var err = new ErrorResponse();
					err.error.code = 401;
					err.error.errors[0].code = 401;
					err.error.errors[0].reason = 'Invalid token object in header!';
					err.error.errors[0].message = 'Invalid token object in header!';
					deferred.reject(err);
					return deferred.promise;
				};
			};

			const request = new sql.Request(__database);
			request.input('appId', args.req.body.header.appId);
			request.input('scope', args.req.body.scope);
			request.input('userId', args.req.body.header.userId);
			request.input('expiry', new Date(args.req.headers.authorization.expiry));
			request.input('bearer', args.req.headers.authorization.bearer);
			request.input('description', args.req.headers.authorization.description);

			request.execute('v1_Auth_Validate')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 401;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		register: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database)

			request.input('code', Math.floor(Math.random() * 900000 + 100000))
			request.input('salt', args.req.body.salt)
			request.input('hash', args.req.body.hash)
			request.input('email', args.req.body.header.email)
			request.input('appId', args.req.body.header.appId)
			request.input('picture', args.req.body.picture || null)
			request.input('language', args.req.body.language || 'english')
			request.input('timezone', args.req.body.timezone || 0)
			request.input('username', args.req.body.username || null)
			request.input('nameLast', args.req.body.name.last || null)
			request.input('validated', 0)
			request.input('nameFirst', args.req.body.name.first || null)
			request.input('numberTel', args.req.body.number.tel || null)
			request.input('nameMiddle', args.req.body.name.middle || null)
			request.input('addressSame', args.req.body.address.same || null)
			request.input('numberMobile', args.req.body.number.mobile || null)
			request.input('identificationType', args.req.body.identification.type || null)
			request.input('identificationNumber', args.req.body.identification.number || null)
			request.input('addressBillingStreet', args.req.body.address.billing.street || null)
			request.input('addressBillingSuburb', args.req.body.address.billing.suburb || null)
			request.input('addressBillingCountry', args.req.body.address.billing.country || null)
			request.input('addressPhysicalStreet', args.req.body.address.physical.street || null)
			request.input('addressPhysicalSuburb', args.req.body.address.physical.suburb || null)
			request.input('addressBillingCityTown', args.req.body.address.billing.cityTown || null)
			request.input('addressPhysicalCountry', args.req.body.address.physical.country || null)
			request.input('addressPhysicalCityTown', args.req.body.address.physical.cityTown || null)
			request.input('addressBillingAdditional', args.req.body.address.billing.additional || null)
			request.input('addressBillingPostalCode', args.req.body.address.billing.postalCode || null)
			request.input('addressBillingCompanyVat', args.req.body.address.billing.company.vat || null)
			request.input('addressBillingCompanyReg', args.req.body.address.billing.company.reg || null)
			request.input('addressPhysicalAdditional', args.req.body.address.physical.additional || null)
			request.input('addressPhysicalPostalCode', args.req.body.address.physical.postalCode || null)
			request.input('addressPhysicalCompanyVat', args.req.body.address.physical.company.vat || null)
			request.input('addressPhysicalCompanyReg', args.req.body.address.physical.company.reg || null)

			request.execute('v1_Auth_Register')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = result.recordset[0].code;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		changeemail: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('email', args.req.body.email);
			request.input('userId', args.req.body.header.userId);

			request.execute('v1_Auth_Change_Email')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = result.recordset[0].code;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		allowaccess: (args) => {
			var deferred = Q.defer();

			if (typeof (args.req.headers.authorization) == 'undefined' || args.req.headers.authorization == null) {
				var err = new ErrorResponse();
				err.error.code = 401;
				err.error.errors[0].code = 401;
				err.error.errors[0].reason = 'Token not found in header!';
				err.error.errors[0].message = 'Token not found in header!';
				deferred.reject(err);
				return deferred.promise;
			} else {
				try {
					args.req.headers.authorization = JSON.parse(args.req.headers.authorization);
				} catch (error) {
					var err = new ErrorResponse();
					err.error.code = 401;
					err.error.errors[0].code = 401;
					err.error.errors[0].reason = 'Invalid token object in header!';
					err.error.errors[0].message = 'Invalid token object in header!';
					deferred.reject(err);
					return deferred.promise;
				};
			};

			if (typeof (args.req.body.expiry) == 'undefined') {
				args.req.body.expiry = new Date(Date.now() + 31 * 24 * 60 * 60 * 1000);
			};

			var err = new ErrorResponse();
			const transaction = new sql.Transaction(__database);

			transaction.on('commit', result => {
				deferred.resolve(args);
			});

			transaction.on('rollback', aborted => {
				deferred.reject(err);
			});

			args.req.body.bearer = tools.encryption.generateRandomString(64);
			args.result = {
				token: {
					scopes: [],
					bearer: args.req.body.bearer,
					expiry: args.req.body.expiry,
					timezone: args.req.body.timezone,
					description: args.req.body.description
				}
			};

			transaction.begin()
				.then(res => {
					return new sql.Request(transaction)
						.input('userId', args.req.body.header.userId)
						.execute('v1_Users_Get');
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.user = unwind(result.recordset[0]);
						if (args.user.validated == 1) {
							deferred.resolve(args);
						} else {
							err.error.errors[0].code = 401;
							err.error.errors[0].reason = 'Account verification is required!';
							err.error.errors[0].message = 'Account verification is required!';
							deferred.reject(err);
						};
					} else {
						err.error.errors[0].code = 503;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(res => {
					return new sql.Request(transaction)
						.input('appId', args.req.body.appId)
						.execute('v1_tblApps_Validate');
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.returnValue == 1 && result.recordset.length > 0) {
						result = result.recordset.map(o => unwind(o));
						args.app = {
							bitid: {
								auth: {
									users: _.uniqBy(result.map(o => ({ role: o.role, userId: o.userId })), 'userId')
								}
							},
							_id: result[0]._id,
							app: result[0].app,
							scopes: _.uniqBy(result, 'scopeId').map(o => o.scopeId),
							domains: _.uniqBy(result, 'domain').map(o => o.domain)
						};
						args.result.token.scopes = args.app.scopes;
						deferred.resolve(args);
					} else {
						err.error.errors[0].code = 503;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(res => {
					return new sql.Request(transaction)
						.input('appId', args.req.body.header.appId)
						.input('userId', args.req.body.header.userId)
						.input('bearer', args.req.headers.authorization.bearer)
						.input('description', args.req.headers.authorization.description)
						.execute('v1_Tokens_Revoke_Self');
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.returnValue == 1 && result.recordset.length > 0) {
						deferred.resolve(args);
					} else {
						err.error.errors[0].code = 503;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(res => {
					return new sql.Request(transaction)
						.input('appId', args.req.body.appId)
						.input('userId', args.req.body.header.userId)
						.input('bearer', tools.encryption.generateRandomString(64))
						.input('device', args.req.headers['user-agent'])
						.input('expiry', args.req.body.expiry)
						.input('timezone', args.user.timezone)
						.input('description', args.req.body.description)
						.execute('v1_tblTokens_Add');
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.tokenId = unwind(result.recordset[0])._id;
						args.result._id = args.tokenId;
						deferred.resolve(args);
					} else {
						err.error.errors[0].code = 503;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(res => {
					return new sql.Request(transaction)
						.input('role', 5)
						.input('userId', args.req.body.header.userId)
						.input('tokenId', args.tokenId)
						.execute('v1_tblTokensUsers_Add');
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.returnValue == 1 && result.recordset.length > 0) {
						deferred.resolve(args);
					} else {
						err.error.errors[0].code = 503;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(res => {
					return args.app.scopes.reduce((promise, scopeId) => promise.then(() => new sql.Request(transaction)
						.input('userId', args.req.body.header.userId)
						.input('scopeId', scopeId)
						.input('tokenId', args.tokenId)
						.execute('v1_tblTokensScopes_Add')
					), Promise.resolve())
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.returnValue == 1 && result.recordset.length > 0) {
						deferred.resolve(args);
					} else {
						err.error.errors[0].code = 503;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(res => {
					transaction.commit();
				})
				.catch(err => {
					transaction.rollback();
				})

			return deferred.promise;
		},

		authenticate: (args) => {
			var deferred = Q.defer();

			var err = new ErrorResponse();
			const transaction = new sql.Transaction(__database);

			if (typeof (args.req.body.expiry) == 'undefined' || args.req.body.expiry == null) {
				args.req.body.expiry = Date.now() + 31 * 24 * 60 * 60 * 1000;
				args.req.body.expiry = new Date(args.req.body.expiry);
			}

			args.req.body.bearer = tools.encryption.generateRandomString(64);
			args.result = {
				token: {
					scopes: [],
					bearer: args.req.body.bearer,
					expiry: args.req.body.expiry,
					timezone: args.req.body.timezone,
					description: args.req.body.description
				}
			};

			transaction.on('commit', result => {
				deferred.resolve(args);
			});

			transaction.on('rollback', aborted => {
				deferred.reject(err);
			});

			transaction.begin()
				.then(res => {
					return new sql.Request(transaction)
						.input('email', args.req.body.header.email)
						.execute('v1_Users_Get_By_Email');
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.recordset.length > 0) {
						args.user = unwind(result.recordset[0]);
						var password = tools.encryption.sha512(args.req.body.password, args.user.salt);

						if (password.hash == args.user.hash) {
							if (args.user.validated == 1) {
								deferred.resolve(args);
							} else {
								err.error.errors[0].code = 401;
								err.error.errors[0].reason = 'Account verification is required!';
								err.error.errors[0].message = 'Account verification is required!';
								deferred.reject(err);
							};
						} else {
							err.error.errors[0].code = 401;
							err.error.errors[0].reason = 'Password is incorrect!';
							err.error.errors[0].message = 'Password is incorrect!';
							deferred.reject(err);
						};
					} else {
						err.error.errors[0].code = 69;
						err.error.errors[0].reason = 'Account not yet registered!';
						err.error.errors[0].message = 'Account not yet registered!';
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(res => {
					return new sql.Request(transaction)
						.input('appId', args.req.body.header.appId)
						.execute('v1_tblApps_Validate');
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.returnValue == 1 && result.recordset.length > 0) {
						result = result.recordset.map(o => unwind(o));
						args.app = {
							bitid: {
								auth: {
									users: _.uniqBy(result.map(o => ({ role: o.role, userId: o.userId })), 'userId')
								}
							},
							_id: result[0]._id,
							app: result[0].app,
							name: result[0].name,
							scopes: _.uniqBy(result, 'scopeId').map(o => o.scopeId),
							domains: _.uniqBy(result, 'domain').map(o => o.domain),
							private: result[0].private
						};
						args.result.token.scopes = args.app.scopes;
						deferred.resolve(args);
					} else {
						err.error.errors[0].code = 503;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (args.app.private) {
						if (result.recordset.length == 0) {
							err.error.errors[0].code = 401;
							err.error.errors[0].reason = 'Application is private!';
							err.error.errors[0].message = 'Application is private!';
							deferred.reject(err);
						} else {
							deferred.resolve(args);
						};
					} else {
						deferred.resolve(args);
					};

					return deferred.promise;
				})
				.then(res => {
					return new sql.Request(transaction)
						.input('appId', args.req.body.header.appId)
						.input('userId', args.user.id)
						.input('bearer', args.req.body.bearer)
						.input('device', args.req.headers['user-agent'])
						.input('expiry', args.req.body.expiry)
						.input('timezone', args.user.timezone)
						.input('description', args.req.body.description || args.app.app.name)
						.execute('v1_tblTokens_Add');
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.tokenId = unwind(result.recordset[0])._id;
						args.result._id = args.tokenId;
						args.result.token.description = args.req.body.description || args.app.app.name;
						deferred.resolve(args);
					} else {
						err.error.errors[0].code = 503;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(res => {
					return new sql.Request(transaction)
						.input('role', 5)
						.input('userId', args.user.id)
						.input('tokenId', args.tokenId)
						.execute('v1_tblTokensUsers_Add');
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.returnValue == 1 && result.recordset.length > 0) {
						deferred.resolve(args);
					} else {
						err.error.errors[0].code = 503;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(res => {
					return args.app.scopes.reduce((promise, scopeId) => promise.then(() => new sql.Request(transaction)
						.input('userId', args.user.id)
						.input('scopeId', scopeId)
						.input('tokenId', args.tokenId)
						.execute('v1_tblTokensScopes_Add')
					), Promise.resolve())
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.returnValue == 1 && result.recordset.length > 0) {
						deferred.resolve(args);
					} else {
						err.error.errors[0].code = 503;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(res => {
					transaction.commit();
				})
				.catch(err => {
					transaction.rollback();
				})

			return deferred.promise;
		},

		resetpassword: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('salt', args.req.body.salt);
			request.input('hash', args.req.body.hash);
			request.input('email', args.req.body.header.email);
			request.input('appId', args.req.body.header.appId);

			request.execute('v1_Auth_Reset_Password')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						args.result.password = args.req.body.password;
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = result.recordset[0].code;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		changepassword: (args) => {
			var deferred = Q.defer();

			var err = new ErrorResponse();
			const transaction = new sql.Transaction(__database);

			transaction.on('commit', result => {
				deferred.resolve(args);
			});

			transaction.on('rollback', aborted => {
				deferred.reject(err);
			});

			transaction.begin()
				.then(res => {
					return new sql.Request(transaction)
						.input('userId', args.req.body.header.userId)
						.execute('v1_Users_Get');
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.user = unwind(result.recordset[0]);
						var password = tools.encryption.sha512(args.req.body.old, args.user.salt);

						if (password.hash == args.user.hash) {
							var password = tools.encryption.saltHashPassword(args.req.body.new);
							args.req.body.salt = password.salt;
							args.req.body.hash = password.hash;
							deferred.resolve(args);
						} else {
							err.error.errors[0].code = 401;
							err.error.errors[0].reason = 'Password is incorrect!';
							err.error.errors[0].message = 'Password is incorrect!';
							deferred.reject(err);
						};
					} else {
						err.error.errors[0].code = 69;
						err.error.errors[0].reason = 'Account not yet registered!';
						err.error.errors[0].message = 'Account not yet registered!';
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(res => {
					return new sql.Request(transaction)
						.input('salt', args.req.body.salt)
						.input('hash', args.req.body.hash)
						.input('userId', args.req.body.header.userId)
						.execute('v1_Auth_Change_Password');
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.returnValue == 1 && result.recordset.length > 0) {
						result = result.recordset.map(o => unwind(o));
						args.app = {
							bitid: {
								auth: {
									users: _.uniqBy(result.map(o => ({ role: o.role, userId: o.userId })), 'userId')
								}
							},
							_id: result[0]._id,
							app: result[0].app,
							name: result[0].name,
							scopes: _.uniqBy(result, 'scopeId').map(o => o.scopeId),
							domains: _.uniqBy(result, 'domain').map(o => o.domain),
							private: result[0].private
						};
						args.result.token.scopes = args.app.scopes;
						deferred.resolve(args);
					} else {
						err.error.errors[0].code = 503;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(res => {
					transaction.commit();
				})
				.catch(err => {
					transaction.rollback();
				})

			return deferred.promise;
		}
	};

	var dalUsers = {
		get: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('userId', args.req.body.header.userId);

			request.execute('v1_Users_Get')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = result.recordset[0].code;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		list: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);
			request.input('appId', __settings.client.appId);
			request.input('userId', args.req.body.header.userId);

			request.execute('v1_Users_List')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = result.recordset.map(o => unwind(o));
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 69;
						err.error.errors[0].reason = 'no records found';
						err.error.errors[0].message = 'no records found';
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		update: (args) => {
			var deferred = Q.defer();

			var params = {
				'email': args.req.body.header.email
			};

			var update = {
				$set: {
					'serverDate': new Date()
				}
			};
			if (typeof (args.req.body.picture) != 'undefined') {
				update.$set.picture = args.req.body.picture;
			};
			if (typeof (args.req.body.language) != 'undefined') {
				update.$set.language = args.req.body.language;
			};
			if (typeof (args.req.body.timezone) != 'undefined') {
				update.$set.timezone = args.req.body.timezone;
			};
			if (typeof (args.req.body.username) != 'undefined') {
				update.$set.username = args.req.body.username;
			};
			if (typeof (args.req.body.name) != 'undefined') {
				if (typeof (args.req.body.name.last) != 'undefined') {
					update.$set['name.last'] = args.req.body.name.last;
				};
				if (typeof (args.req.body.name.first) != 'undefined') {
					update.$set['name.first'] = args.req.body.name.first;
				};
				if (typeof (args.req.body.name.middle) != 'undefined') {
					update.$set['name.middle'] = args.req.body.name.middle;
				};
			};
			if (typeof (args.req.body.number) != 'undefined') {
				if (typeof (args.req.body.number.tel) != 'undefined') {
					update.$set['number.tel'] = args.req.body.number.tel;
				};
				if (typeof (args.req.body.number.mobile) != 'undefined') {
					update.$set['number.mobile'] = args.req.body.number.mobile;
				};
			};
			if (typeof (args.req.body.address) != 'undefined') {
				if (typeof (args.req.body.address.billing) != 'undefined') {
					if (typeof (args.req.body.address.billing.company) != 'undefined') {
						if (typeof (args.req.body.address.billing.company.vat) != 'undefined') {
							update.$set['address.billing.company.vat'] = args.req.body.address.billing.company.vat;
						};
						if (typeof (args.req.body.address.billing.company.reg) != 'undefined') {
							update.$set['address.billing.company.reg'] = args.req.body.address.billing.company.reg;
						};
					};
					if (typeof (args.req.body.address.billing.street) != 'undefined') {
						update.$set['address.billing.street'] = args.req.body.address.billing.street;
					};
					if (typeof (args.req.body.address.billing.suburb) != 'undefined') {
						update.$set['address.billing.suburb'] = args.req.body.address.billing.suburb;
					};
					if (typeof (args.req.body.address.billing.country) != 'undefined') {
						update.$set['address.billing.country'] = args.req.body.address.billing.country;
					};
					if (typeof (args.req.body.address.billing.cityTown) != 'undefined') {
						update.$set['address.billing.cityTown'] = args.req.body.address.billing.cityTown;
					};
					if (typeof (args.req.body.address.billing.additional) != 'undefined') {
						update.$set['address.billing.additional'] = args.req.body.address.billing.additional;
					};
					if (typeof (args.req.body.address.billing.postalCode) != 'undefined') {
						update.$set['address.billing.postalCode'] = args.req.body.address.billing.postalCode;
					};
				};
				if (typeof (args.req.body.address.physical) != 'undefined') {
					if (typeof (args.req.body.address.physical.company) != 'undefined') {
						if (typeof (args.req.body.address.physical.company.vat) != 'undefined') {
							update.$set['address.physical.company.vat'] = args.req.body.address.physical.company.vat;
						};
						if (typeof (args.req.body.address.physical.company.reg) != 'undefined') {
							update.$set['address.physical.company.reg'] = args.req.body.address.physical.company.reg;
						};
					};
					if (typeof (args.req.body.address.physical.street) != 'undefined') {
						update.$set['address.physical.street'] = args.req.body.address.physical.street;
					};
					if (typeof (args.req.body.address.physical.suburb) != 'undefined') {
						update.$set['address.physical.suburb'] = args.req.body.address.physical.suburb;
					};
					if (typeof (args.req.body.address.physical.country) != 'undefined') {
						update.$set['address.physical.country'] = args.req.body.address.physical.country;
					};
					if (typeof (args.req.body.address.physical.cityTown) != 'undefined') {
						update.$set['address.physical.cityTown'] = args.req.body.address.physical.cityTown;
					};
					if (typeof (args.req.body.address.physical.additional) != 'undefined') {
						update.$set['address.physical.additional'] = args.req.body.address.physical.additional;
					};
					if (typeof (args.req.body.address.physical.postalCode) != 'undefined') {
						update.$set['address.physical.postalCode'] = args.req.body.address.physical.postalCode;
					};
				};
				if (typeof (args.req.body.address.same) != 'undefined') {
					update.$set['address.same'] = args.req.body.address.same;
				};
			};
			if (typeof (args.req.body.identification) != 'undefined') {
				if (typeof (args.req.body.identification.type) != 'undefined') {
					update.$set['identification.type'] = args.req.body.identification.type;
				};
				if (typeof (args.req.body.identification.number) != 'undefined') {
					update.$set['identification.number'] = args.req.body.identification.number;
				};
			};

			db.call({
				'params': params,
				'update': update,
				'operation': 'update',
				'collection': 'tblUsers'
			})
				.then(result => {
					args.result = result;
					deferred.resolve(args);
				}, error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		delete: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('userId', args.req.body.header.userId);

			request.execute('v1_Users_Delete')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = result.recordset[0].code;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		}
	};

	var dalScopes = {
		add: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('url', args.req.body.url);
			request.input('appId', args.req.body.appId);
			request.input('userId', args.req.body.header.userId);
			request.input('description', args.req.body.description);

			request.execute('v1_Scopes_Add')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 70;
						err.error.errors[0].reason = 'no records inserted';
						err.error.errors[0].message = 'no records inserted';
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		get: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('userId', args.req.body.header.userId);
			request.input('scopeId', args.req.body.scopeId);

			request.execute('v1_Scopes_Get')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 70;
						err.error.errors[0].reason = 'no records found';
						err.error.errors[0].message = 'no records found';
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		list: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('userId', args.req.body.header.userId);

			request.execute('v1_Scopes_List')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = result.recordset.map(o => unwind(o));
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 69;
						err.error.errors[0].reason = 'no records found';
						err.error.errors[0].message = 'no records found';
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		load: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.execute('v1_Scopes_Load')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = result.recordset.map(o => unwind(o));
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 69;
						err.error.errors[0].reason = 'no records found';
						err.error.errors[0].message = 'no records found';
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		update: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('url', args.req.body.url);
			request.input('appId', args.req.body.appId);
			request.input('userId', args.req.body.header.userId);
			request.input('scopeId', args.req.body.scopeId);
			request.input('description', args.req.body.description);

			request.execute('v1_Scopes_Update')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 70;
						err.error.errors[0].reason = 'no records updated';
						err.error.errors[0].message = 'no records updated';
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		delete: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('userId', args.req.body.header.userId);
			request.input('scopeId', args.req.body.scopeId);

			request.execute('v1_Scopes_Delete')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 70;
						err.error.errors[0].reason = 'no records updated';
						err.error.errors[0].message = 'no records updated';
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		}
	};

	var dalTokens = {
		get: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('userId', args.req.body.header.userId);
			request.input('tokenId', args.req.body.tokenId);

			request.execute('v1_Tokens_Get')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						result = result.recordset.map(o => unwind(o));

						args.result = {
							bitid: {
								auth: {
									users: _.uniqBy(result.map(o => ({ role: o.role, userId: o.userId })), 'userId')
								}
							},
							_id: result[0]._id,
							app: result[0].app,
							scopes: _.uniqBy(result, 'scopeId').map(o => o.scopeId),
							device: result[0].device,
							expiry: result[0].expiry,
							description: result[0].description,
						};
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 69;
						err.error.errors[0].reason = 'no records found';
						err.error.errors[0].message = 'no records found';
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		list: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('userId', args.req.body.header.userId);

			request.execute('v1_Tokens_List')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						result = _.mapValues(_.groupBy(result.recordset.map(o => unwind(o)), '_id'), o => o.map(i => _.omit(i, '_id')));

						args.result = [];
						Object.keys(result).map(tokenId => {
							var tmp = {
								bitid: {
									auth: {
										users: _.uniqBy(result[tokenId].map(o => ({ role: o.role, userId: o.userId })), 'userId')
									}
								},
								_id: tokenId,
								app: result[tokenId][0].app,
								scopes: _.uniqBy(result[tokenId], 'scopeId').map(o => o.scopeId),
								device: result[tokenId][0].device,
								expiry: result[tokenId][0].expiry,
								description: result[tokenId][0].description,
							};
							args.result.push(tmp);
						})

						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 69;
						err.error.errors[0].reason = 'no records found';
						err.error.errors[0].message = 'no records found';
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		share: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('role', args.req.body.role);
			request.input('userId', args.req.body.userId);
			request.input('adminId', args.req.body.header.userId);
			request.input('tokenId', args.req.body.tokenId);

			request.execute('v1_Tokens_Share')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 503;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		revoke: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('userId', args.req.body.header.userId);
			request.input('tokenId', args.req.body.tokenId);

			request.execute('v1_Tokens_Revoke')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 503;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		download: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('userId', args.req.body.header.userId);
			request.input('tokenId', args.req.body.tokenId);

			request.execute('v1_Tokens_Download')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						result = result.recordset.map(o => unwind(o));

						args.result = {
							token: {
								scopes: _.uniqBy(result, 'scopeId').map(o => o.scopeId),
								device: result[0].device,
								expiry: result[0].expiry,
								bearer: result[0].bearer,
								timezone: result[0].timezone,
								description: result[0].description,
							}
						};
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 69;
						err.error.errors[0].reason = 'no records found';
						err.error.errors[0].message = 'no records found';
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		retrieve: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('appId', args.req.body.appId);
			request.input('userId', args.req.body.header.userId);
			request.input('tokenId', args.req.body.tokenId);

			request.execute('v1_Tokens_Retrieve')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						result = result.recordset.map(o => unwind(o));

						args.result = {
							token: {
								scopes: _.uniqBy(result, 'scopeId').map(o => o.scopeId),
								device: result[0].device,
								expiry: result[0].expiry,
								bearer: result[0].bearer,
								timezone: result[0].timezone,
								description: result[0].description,
							},
							_id: result[0]._id
						};
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 69;
						err.error.errors[0].reason = 'no records found';
						err.error.errors[0].message = 'no records found';
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		generate: (args) => {
			var deferred = Q.defer();

			var err = new ErrorResponse();
			const transaction = new sql.Transaction(__database);

			transaction.on('commit', result => {
				deferred.resolve(args);
			});

			transaction.on('rollback', aborted => {
				deferred.reject(err);
			});

			args.req.body.bearer = tools.encryption.generateRandomString(64);
			args.result = {
				token: {
					scopes: [],
					bearer: args.req.body.bearer,
					expiry: args.req.body.expiry,
					timezone: args.req.body.timezone,
					description: args.req.body.description
				}
			};

			transaction.begin()
				.then(res => {
					return new sql.Request(transaction)
						.input('userId', args.req.body.header.userId)
						.execute('v1_Users_Get');
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.user = unwind(result.recordset[0]);
						if (args.user.validated == 1) {
							deferred.resolve(args);
						} else {
							err.error.errors[0].code = 401;
							err.error.errors[0].reason = 'Account verification is required!';
							err.error.errors[0].message = 'Account verification is required!';
							deferred.reject(err);
						};
					} else {
						err.error.errors[0].code = 503;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(res => {
					return new sql.Request(transaction)
						.input('appId', args.req.body.appId)
						.execute('v1_tblApps_Validate');
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.returnValue == 1 && result.recordset.length > 0) {
						result = result.recordset.map(o => unwind(o));
						args.app = {
							bitid: {
								auth: {
									users: _.uniqBy(result.map(o => ({ role: o.role, userId: o.userId })), 'userId')
								}
							},
							_id: result[0]._id,
							app: result[0].app,
							scopes: _.uniqBy(result, 'scopeId').map(o => o.scopeId),
							domains: _.uniqBy(result, 'domain').map(o => o.domain)
						};
						args.result.token.scopes = args.app.scopes;
						deferred.resolve(args);
					} else {
						err.error.errors[0].code = 503;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(res => {
					return new sql.Request(transaction)
						.input('appId', args.req.body.appId)
						.input('userId', args.req.body.header.userId)
						.input('bearer', tools.encryption.generateRandomString(64))
						.input('device', args.req.headers['user-agent'])
						.input('expiry', args.req.body.expiry)
						.input('timezone', args.user.timezone)
						.input('description', args.req.body.description)
						.execute('v1_tblTokens_Add');
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.tokenId = unwind(result.recordset[0])._id;
						args.result._id = args.tokenId;
						deferred.resolve(args);
					} else {
						err.error.errors[0].code = 503;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(res => {
					return new sql.Request(transaction)
						.input('role', 5)
						.input('userId', args.req.body.header.userId)
						.input('tokenId', args.tokenId)
						.execute('v1_tblTokensUsers_Add');
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.returnValue == 1 && result.recordset.length > 0) {
						deferred.resolve(args);
					} else {
						err.error.errors[0].code = 503;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(res => {
					return args.app.scopes.reduce((promise, scopeId) => promise.then(() => new sql.Request(transaction)
						.input('userId', args.req.body.header.userId)
						.input('scopeId', scopeId)
						.input('tokenId', args.tokenId)
						.execute('v1_tblTokensScopes_Add')
					), Promise.resolve())
				}, null)
				.then(result => {
					var deferred = Q.defer();

					if (result.returnValue == 1 && result.recordset.length > 0) {
						deferred.resolve(args);
					} else {
						err.error.errors[0].code = 503;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					};

					return deferred.promise;
				}, null)
				.then(res => {
					transaction.commit();
				})
				.catch(err => {
					transaction.rollback();
				})

			return deferred.promise;
		},

		unsubscribe: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('userId', args.req.body.userId);
			request.input('adminId', args.req.body.header.userId);
			request.input('tokenId', args.req.body.tokenId);

			request.execute('v1_Tokens_Unsubscribe')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 503;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		updatesubscriber: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('role', args.req.body.role);
			request.input('userId', args.req.body.userId);
			request.input('adminId', args.req.body.header.userId);
			request.input('tokenId', args.req.body.tokenId);

			request.execute('v1_Tokens_Update_Subscriber')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 503;
						err.error.errors[0].reason = result.recordset[0].message;
						err.error.errors[0].message = result.recordset[0].message;
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		}
	};

	var dalFeatures = {
		add: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('appId', args.req.body.appId);
			request.input('title', args.req.body.title);
			request.input('userId', args.req.body.header.userId);
			request.input('description', args.req.body.description);

			request.execute('v1_Features_Add')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 70;
						err.error.errors[0].reason = 'no records inserted';
						err.error.errors[0].message = 'no records inserted';
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		get: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('userId', args.req.body.header.userId);
			request.input('featureId', args.req.body.featureId);

			request.execute('v1_Features_Get')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 70;
						err.error.errors[0].reason = 'no records found';
						err.error.errors[0].message = 'no records found';
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		list: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('userId', args.req.body.header.userId);

			request.execute('v1_Features_List')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = result.recordset.map(o => unwind(o));
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 69;
						err.error.errors[0].reason = 'no records found';
						err.error.errors[0].message = 'no records found';
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		update: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('title', args.req.body.title);
			request.input('appId', args.req.body.appId);
			request.input('userId', args.req.body.header.userId);
			request.input('featureId', args.req.body.featureId);
			request.input('description', args.req.body.description);

			request.execute('v1_Features_Update')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 70;
						err.error.errors[0].reason = 'no records updated';
						err.error.errors[0].message = 'no records updated';
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		},

		delete: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('userId', args.req.body.header.userId);
			request.input('featureId', args.req.body.featureId);

			request.execute('v1_Features_Delete')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = unwind(result.recordset[0]);
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 70;
						err.error.errors[0].reason = 'no records updated';
						err.error.errors[0].message = 'no records updated';
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		}
	};

	var dalStatistics = {
		usage: (args) => {
			var deferred = Q.defer();

			const request = new sql.Request(__database);

			request.input('userId', args.req.body.header.userId);

			request.execute('v1_Usage_List')
				.then(result => {
					if (result.returnValue == 1 && result.recordset.length > 0) {
						args.result = result.recordset.map(o => unwind(o));
						deferred.resolve(args);
					} else {
						var err = new ErrorResponse();
						err.error.errors[0].code = 69;
						err.error.errors[0].reason = 'no records found!';
						err.error.errors[0].message = 'no records found!';
						deferred.reject(err);
					}
				})
				.catch(error => {
					var err = new ErrorResponse();
					err.error.errors[0].code = error.code;
					err.error.errors[0].reason = error.message;
					err.error.errors[0].message = error.message;
					deferred.reject(err);
				});

			return deferred.promise;
		}
	};

	return {
		'apps': dalApps,
		'auth': dalAuth,
		'users': dalUsers,
		'scopes': dalScopes,
		'tokens': dalTokens,
		'features': dalFeatures,
		'statistics': dalStatistics
	};
};

exports.module = module;