/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "fab8637593366b04d718";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"home": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/page/home/home.js","vendors~home~hqqback~hqqfront~player","vendors~home~hqqback~player","vendors~home~player","vendors~home","home~player"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/common/component/ffv-slide-show/ffv-slide-show.less":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??postcss!./src/common/component/ffv-slide-show/ffv-slide-show.less ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".swiper-container {\n  width: 100%;\n  height: 400px;\n}\n.swiper-container .swiper-wrapper {\n  width: 70%;\n}\n.swiper-container .swiper-wrapper .swiper-slide {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.swiper-container .swiper-wrapper .swiper-slide .swiper-item {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center center;\n}\n.swiper-container .swiper-button {\n  height: 100px;\n  width: 50px;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/page/home/big-list/big-list.less":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??postcss!./src/page/home/big-list/big-list.less ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#video-list-box {\n  background-color: rgba(255, 255, 255, 0.5);\n  display: flex;\n  padding: 50px 50px;\n  flex-flow: column nowrap;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/page/home/video-nav/video-nav.less":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??postcss!./src/page/home/video-nav/video-nav.less ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../../static/icon/to-top-blue.png */ "./src/static/icon/to-top-blue.png"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../../../static/icon/to-top-white.png */ "./src/static/icon/to-top-white.png"));

// Module
exports.push([module.i, ".video-nav-box {\n  position: fixed;\n  top: 500px;\n  right: 50px;\n  width: 60px;\n  background-color: #f6f9fa;\n  border-radius: 2px;\n  border: 1px solid #e5e9ef;\n}\n.video-nav-box .nav-li {\n  cursor: pointer;\n  text-align: center;\n  color: black;\n  line-height: 2;\n  font-size: 16px;\n}\n.video-nav-box .nav-li.selected,\n.video-nav-box .nav-li:hover {\n  color: white;\n  background-color: #3fa9f5;\n}\n.video-nav-box .to-top {\n  cursor: pointer;\n  border-top: 1px solid #e5e9ef;\n  width: 60px;\n  height: 60px;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-position: center center;\n  background-size: 40px;\n  background-repeat: no-repeat;\n}\n.video-nav-box .to-top:hover {\n  background-color: #3fa9f5;\n  background-image: url(" + ___CSS_LOADER_URL___1___ + ");\n}\n", ""]);



/***/ }),

/***/ "./src/common/component/ffv-slide-show/ffv-slide-show.hbs":
/*!****************************************************************!*\
  !*** ./src/common/component/ffv-slide-show/ffv-slide-show.hbs ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "    <a class=\"swiper-slide\" href=\""
    + alias2(alias1((depth0 != null ? depth0.href : depth0), depth0))
    + "\" target=\"_blank\">\r\n      <div class=\"swiper-item\" style=\"background-image:url("
    + alias2(alias1((depth0 != null ? depth0.backgroundImg : depth0), depth0))
    + ")\"></div>\r\n    </a>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"swiper-container\">\r\n  <div class=\"swiper-wrapper\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":7,"column":13}}})) != null ? stack1 : "")
    + "  </div>\r\n  <!-- Add Pagination -->\r\n  <div class=\"swiper-pagination\"></div>\r\n  <!-- Add Arrows -->\r\n  <div class=\"swiper-button-next swiper-button\"></div>\r\n  <div class=\"swiper-button-prev swiper-button\"></div>\r\n</div>";
},"useData":true});

/***/ }),

/***/ "./src/common/component/ffv-slide-show/ffv-slide-show.js":
/*!***************************************************************!*\
  !*** ./src/common/component/ffv-slide-show/ffv-slide-show.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlideShow; });
/* harmony import */ var _ffv_slide_show_hbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ffv-slide-show.hbs */ "./src/common/component/ffv-slide-show/ffv-slide-show.hbs");
/* harmony import */ var _ffv_slide_show_hbs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ffv_slide_show_hbs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ffv_slide_show_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ffv-slide-show.less */ "./src/common/component/ffv-slide-show/ffv-slide-show.less");
/* harmony import */ var _ffv_slide_show_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ffv_slide_show_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/dist/css/swiper.min.css */ "./node_modules/swiper/dist/css/swiper.min.css");
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var SlideShow =
/*#__PURE__*/
function () {
  function SlideShow(props) {
    _classCallCheck(this, SlideShow);

    Object.assign(this, {
      $container: null,
      data: this.swiperData
    }, props);

    this._render();

    this._bind();
  }

  _createClass(SlideShow, [{
    key: "_render",
    value: function _render() {
      console.log("nannanann", this.$container.length);
      var swiperDom = _ffv_slide_show_hbs__WEBPACK_IMPORTED_MODULE_0___default()({
        data: this.data
      });
      this.$container.append($(swiperDom));
      var swiper = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"](".swiper-container", {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });
    }
  }, {
    key: "_bind",
    value: function _bind() {
      $(".swiper-button").on("click", function (ev) {
        event.stopPropagation();
      });
    }
  }]);

  return SlideShow;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/common/component/ffv-slide-show/ffv-slide-show.less":
/*!*****************************************************************!*\
  !*** ./src/common/component/ffv-slide-show/ffv-slide-show.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js??postcss!./ffv-slide-show.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/common/component/ffv-slide-show/ffv-slide-show.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js??postcss!./ffv-slide-show.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/common/component/ffv-slide-show/ffv-slide-show.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js??postcss!./ffv-slide-show.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/common/component/ffv-slide-show/ffv-slide-show.less");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/page/home/big-list/big-list.js":
/*!********************************************!*\
  !*** ./src/page/home/big-list/big-list.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BigList; });
/* harmony import */ var _common_component_ffv_video_list_big_ffv_video_list_big__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/component/ffv-video-list-big/ffv-video-list-big */ "./src/common/component/ffv-video-list-big/ffv-video-list-big.js");
/* harmony import */ var _big_list_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./big-list.less */ "./src/page/home/big-list/big-list.less");
/* harmony import */ var _big_list_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_big_list_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _video_nav_video_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../video-nav/video-nav */ "./src/page/home/video-nav/video-nav.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var BigList =
/*#__PURE__*/
function () {
  function BigList(props) {
    _classCallCheck(this, BigList);

    Object.assign(this, {}, props);
    this.videoTypeObj = {
      movie: "影视",
      anime: "动漫",
      music: "音乐",
      entertainment: "娱乐",
      study: "学习",
      science: "科技",
      life: "生活",
      other: "其他"
    };

    this._render();
  }

  _createClass(BigList, [{
    key: "_render",
    value: function _render() {
      var self = this;
      var index = 0;
      window.typeCount = 0;

      for (var key in this.videoTypeObj) {
        index++;
        new _common_component_ffv_video_list_big_ffv_video_list_big__WEBPACK_IMPORTED_MODULE_0__["default"]({
          $container: $("#video-list-box"),
          videoType: key,
          order: index,
          done: function done() {
            window.typeCount++;

            if (window.typeCount >= 8) {
              new _video_nav_video_nav__WEBPACK_IMPORTED_MODULE_2__["default"]({
                videoTypeObj: self.videoTypeObj
              });
            }
          }
        });
      }
    }
  }]);

  return BigList;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/page/home/big-list/big-list.less":
/*!**********************************************!*\
  !*** ./src/page/home/big-list/big-list.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js??postcss!./big-list.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/page/home/big-list/big-list.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js??postcss!./big-list.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/page/home/big-list/big-list.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js??postcss!./big-list.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/page/home/big-list/big-list.less");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/page/home/home.js":
/*!*******************************!*\
  !*** ./src/page/home/home.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_component_fe_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/fe-config */ "./src/common/component/fe-config.js");
/* harmony import */ var _common_component_ffv_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component/ffv-header/header */ "./src/common/component/ffv-header/header.js");
/* harmony import */ var _common_component_ffv_alert_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/component/ffv-alert/alert */ "./src/common/component/ffv-alert/alert.js");
/* harmony import */ var _big_list_big_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./big-list/big-list */ "./src/page/home/big-list/big-list.js");
/* harmony import */ var _common_component_ffv_slide_show_ffv_slide_show__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/component/ffv-slide-show/ffv-slide-show */ "./src/common/component/ffv-slide-show/ffv-slide-show.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 入口文件d
// require("expose-loader?$!jquery");







var Home =
/*#__PURE__*/
function () {
  function Home() {
    _classCallCheck(this, Home);

    this.$headerContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#header-box");
    this.$appContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#app-box");
    this.$footerContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#footer-box");
    this.$swiperContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#rotation-box");
    this.swiperData = [{
      href: "http://www.baidu.com",
      backgroundImg: "https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1348776.jpg?max_age=2592000"
    }, {
      href: "",
      backgroundImg: "https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1348778.jpg?max_age=2592000" //叮咛，罗大佑

    }, {
      href: "",
      backgroundImg: "https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1348060.jpg?max_age=2592000" // Feedback

    }, {
      href: "",
      backgroundImg: "http://p1.music.126.net/vgq5QsWdkqGWJCVzyWZ0sw==/109951164122932289.jpg" // 水果姐新单

    }, {
      href: "",
      backgroundImg: "http://p1.music.126.net/lBgqi8iSwqEvojdzn9djgA==/109951164122936281.jpg" // 情深深雨蒙蒙

    }]; // 环境变量配置

    new _common_component_fe_config__WEBPACK_IMPORTED_MODULE_1__["default"]({
      env: "pro"
    });
    console.log("render home page!!!");

    this._render();
  }

  _createClass(Home, [{
    key: "_render",
    value: function _render() {
      /**
       * 渲染Header
       */
      var header = new _common_component_ffv_header_header__WEBPACK_IMPORTED_MODULE_2__["default"]({
        $container: this.$headerContainer
      });
      new _common_component_ffv_slide_show_ffv_slide_show__WEBPACK_IMPORTED_MODULE_5__["default"]({
        $container: this.$swiperContainer,
        data: this.swiperData
      });
      /**
       * 渲染视频列表
       */

      new _big_list_big_list__WEBPACK_IMPORTED_MODULE_4__["default"](); // new Alert();
    }
  }]);

  return Home;
}();


new Home();

/***/ }),

/***/ "./src/page/home/video-nav/video-hbs.hbs":
/*!***********************************************!*\
  !*** ./src/page/home/video-nav/video-hbs.hbs ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "  <li class=\""
    + alias2(alias1((depth0 != null ? depth0.key : depth0), depth0))
    + "-nav-item nav-li\">"
    + alias2(alias1((depth0 != null ? depth0.value : depth0), depth0))
    + "</li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ol class=\"video-nav-box\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.typeArr : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":4,"column":11}}})) != null ? stack1 : "")
    + "  <li class=\"to-top\"></li>\r\n</ol>";
},"useData":true});

/***/ }),

/***/ "./src/page/home/video-nav/video-nav.js":
/*!**********************************************!*\
  !*** ./src/page/home/video-nav/video-nav.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoNav; });
/* harmony import */ var _video_hbs_hbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-hbs.hbs */ "./src/page/home/video-nav/video-hbs.hbs");
/* harmony import */ var _video_hbs_hbs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_video_hbs_hbs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _video_nav_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-nav.less */ "./src/page/home/video-nav/video-nav.less");
/* harmony import */ var _video_nav_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_video_nav_less__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var VideoNav =
/*#__PURE__*/
function () {
  function VideoNav(props) {
    _classCallCheck(this, VideoNav);

    Object.assign(this, {
      videoTypeObj: null
    }, props);

    this._render();

    this._bind();
  }

  _createClass(VideoNav, [{
    key: "_render",
    value: function _render() {
      var self = this;
      this.typeArr = [];

      for (var haha in this.videoTypeObj) {
        this.typeArr.push({
          key: haha,
          value: this.videoTypeObj[haha]
        });
      }

      $("body").append($(_video_hbs_hbs__WEBPACK_IMPORTED_MODULE_0___default()({
        typeArr: self.typeArr
      })));

      this._changeCurrentType();
    }
  }, {
    key: "_bind",
    value: function _bind() {
      var _this = this;

      document.querySelector("#body-box").addEventListener("scroll", function (ev) {
        console.log("scroll");

        _this._changeCurrentType();
      });
      $(".to-top").on("click", function (ev) {
        _this._gotoTop();
      });
      $(".nav-li").on("click", function (ev) {
        var currentType = ev.target.classList[0].split("-")[0];

        _this._gotoType(currentType);

        $(".video-nav-box .nav-li").removeClass("selected");
        $(".video-nav-box .".concat(currentType, "-nav-item")).addClass("selected");
      });
    }
  }, {
    key: "_changeCurrentType",
    value: function _changeCurrentType() {
      var currentTypeObj = this._findCurrentType(this._getTypeBoxPos());

      $(".video-nav-box .nav-li").removeClass("selected");
      console.log("currentTypeObj", currentTypeObj);
      $(".video-nav-box .".concat(currentTypeObj.type, "-nav-item")).addClass("selected");
    }
  }, {
    key: "_findCurrentType",
    value: function _findCurrentType(typeBoxPos) {
      var lowestIndex = 0;
      var lowestTop = Infinity;

      for (var i = 0; i < typeBoxPos.length; i++) {
        if (typeBoxPos[i].top > 42 && typeBoxPos[i].top < lowestTop) {
          lowestTop = typeBoxPos[i].top;
          lowestIndex = i;
        }
      }

      console.log("top", typeBoxPos[lowestIndex]);
      return typeBoxPos[lowestIndex];
    }
  }, {
    key: "_getTypeBoxPos",
    value: function _getTypeBoxPos() {
      this.typeBoxPos = [];

      for (var key in this.videoTypeObj) {
        this.typeBoxPos.push({
          top: $(".type-box.".concat(key))[0].getBoundingClientRect().top,
          type: key,
          value: this.videoTypeObj[key],
          scrollTopBodyBox: $("#body-box")[0].scrollTop,
          typeOffsetTop: $(".type-box.".concat(key))[0].offsetTop
        });
      }

      console.log(this.typeBoxPos[0]);
      return this.typeBoxPos;
    }
  }, {
    key: "_gotoType",
    value: function _gotoType(type) {
      // let currentTop = $(`.type-box.${type}`)[0].getBoundingClientRect().top,
      // scrollTopBodyBox = $(`#body-box`)[0].scrollTop;
      var typeOffsetTop = $(".type-box.".concat(type))[0].offsetTop,
          setScrollTop = typeOffsetTop - 43;
      $("#body-box").animate({
        scrollTop: setScrollTop
      }, 400);
    }
  }, {
    key: "_gotoTop",
    value: function _gotoTop() {
      $("#body-box").animate({
        scrollTop: 0
      }, 400);
    }
  }]);

  return VideoNav;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/page/home/video-nav/video-nav.less":
/*!************************************************!*\
  !*** ./src/page/home/video-nav/video-nav.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js??postcss!./video-nav.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/page/home/video-nav/video-nav.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js??postcss!./video-nav.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/page/home/video-nav/video-nav.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js??postcss!./video-nav.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/page/home/video-nav/video-nav.less");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/static/icon/to-top-blue.png":
/*!*****************************************!*\
  !*** ./src/static/icon/to-top-blue.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/static/icon/to-top-white.png":
/*!******************************************!*\
  !*** ./src/static/icon/to-top-white.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21wb25lbnQvZmZ2LXNsaWRlLXNob3cvZmZ2LXNsaWRlLXNob3cubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9ob21lL2JpZy1saXN0L2JpZy1saXN0Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2UvaG9tZS92aWRlby1uYXYvdmlkZW8tbmF2Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21wb25lbnQvZmZ2LXNsaWRlLXNob3cvZmZ2LXNsaWRlLXNob3cuaGJzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L2Zmdi1zbGlkZS1zaG93L2Zmdi1zbGlkZS1zaG93LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L2Zmdi1zbGlkZS1zaG93L2Zmdi1zbGlkZS1zaG93Lmxlc3M/NzdmZCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9ob21lL2JpZy1saXN0L2JpZy1saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlL2hvbWUvYmlnLWxpc3QvYmlnLWxpc3QubGVzcz8xNWUyIiwid2VicGFjazovLy8uL3NyYy9wYWdlL2hvbWUvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9ob21lL3ZpZGVvLW5hdi92aWRlby1oYnMuaGJzIiwid2VicGFjazovLy8uL3NyYy9wYWdlL2hvbWUvdmlkZW8tbmF2L3ZpZGVvLW5hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9ob21lL3ZpZGVvLW5hdi92aWRlby1uYXYubGVzcz85YjUyIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaWNvbi90by10b3AtYmx1ZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pY29uL3RvLXRvcC13aGl0ZS5wbmciXSwibmFtZXMiOlsiU2xpZGVTaG93IiwicHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCIkY29udGFpbmVyIiwiZGF0YSIsInN3aXBlckRhdGEiLCJfcmVuZGVyIiwiX2JpbmQiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwic3dpcGVyRG9tIiwidGVtcGxhdGUiLCJhcHBlbmQiLCIkIiwic3dpcGVyIiwiU3dpcGVyIiwiZWZmZWN0IiwiZ3JhYkN1cnNvciIsImNlbnRlcmVkU2xpZGVzIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImxvb3AiLCJjb3ZlcmZsb3dFZmZlY3QiLCJyb3RhdGUiLCJzdHJldGNoIiwiZGVwdGgiLCJtb2RpZmllciIsInNsaWRlU2hhZG93cyIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJvbiIsImV2IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJCaWdMaXN0IiwidmlkZW9UeXBlT2JqIiwibW92aWUiLCJhbmltZSIsIm11c2ljIiwiZW50ZXJ0YWlubWVudCIsInN0dWR5Iiwic2NpZW5jZSIsImxpZmUiLCJvdGhlciIsInNlbGYiLCJpbmRleCIsIndpbmRvdyIsInR5cGVDb3VudCIsImtleSIsIlZpZGVvTGlzdEJpZyIsInZpZGVvVHlwZSIsIm9yZGVyIiwiZG9uZSIsIlZpZGVvTmF2IiwiSG9tZSIsIiRoZWFkZXJDb250YWluZXIiLCIkYXBwQ29udGFpbmVyIiwiJGZvb3RlckNvbnRhaW5lciIsIiRzd2lwZXJDb250YWluZXIiLCJocmVmIiwiYmFja2dyb3VuZEltZyIsIkNvbmZpZyIsImVudiIsImhlYWRlciIsIkhlYWRlciIsInR5cGVBcnIiLCJoYWhhIiwicHVzaCIsInZhbHVlIiwiX2NoYW5nZUN1cnJlbnRUeXBlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9nb3RvVG9wIiwiY3VycmVudFR5cGUiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJzcGxpdCIsIl9nb3RvVHlwZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJjdXJyZW50VHlwZU9iaiIsIl9maW5kQ3VycmVudFR5cGUiLCJfZ2V0VHlwZUJveFBvcyIsInR5cGUiLCJ0eXBlQm94UG9zIiwibG93ZXN0SW5kZXgiLCJsb3dlc3RUb3AiLCJJbmZpbml0eSIsImkiLCJ0b3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzY3JvbGxUb3BCb2R5Qm94Iiwic2Nyb2xsVG9wIiwidHlwZU9mZnNldFRvcCIsIm9mZnNldFRvcCIsInNldFNjcm9sbFRvcCIsImFuaW1hdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsR0FBRzs7UUFFSDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3QjtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxxQkFBcUIsZ0JBQWdCO1FBQ3JDO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EscUJBQXFCLGdCQUFnQjtRQUNyQztRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBLGtCQUFrQiw4QkFBOEI7UUFDaEQ7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esb0JBQW9CLDJCQUEyQjtRQUMvQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxtQkFBbUIsY0FBYztRQUNqQztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLEtBQUs7UUFDckI7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsWUFBWTtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBLGNBQWMsNEJBQTRCO1FBQzFDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTs7UUFFSjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTtRQUNBLGVBQWUsNEJBQTRCO1FBQzNDO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0EsZUFBZSw0QkFBNEI7UUFDM0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7Ozs7OztBQzVDQSxpQ0FBaUMsd2dJOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNG9IIiwiZmlsZSI6ImhvbWVfZmFiODYzNzU5MzM2NmIwNGQ3MTguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cbiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZVwiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xuIFx0XHRpZiAobnVsbCkgc2NyaXB0LmNyb3NzT3JpZ2luID0gbnVsbDtcbiBcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QocmVxdWVzdFRpbWVvdXQpIHtcbiBcdFx0cmVxdWVzdFRpbWVvdXQgPSByZXF1ZXN0VGltZW91dCB8fCAxMDAwMDtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcbiBcdFx0XHR9XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XG4gXHRcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dDtcbiBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XG4gXHRcdFx0XHRcdHJlamVjdChcbiBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4gXHRcdFx0XHRcdCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcbiBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiBmYWlsZWQuXCIpKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbiBcdFx0XHRcdFx0XHRyZWplY3QoZSk7XG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdHJlc29sdmUodXBkYXRlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcImZhYjg2Mzc1OTMzNjZiMDRkNzE4XCI7XG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdCk7XG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbiBcdFx0fTtcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuIFx0XHRcdFx0fSxcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH07XG4gXHRcdGZvciAodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJlXCIgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwidFwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0XHRpZiAobW9kZSAmIDEpIHZhbHVlID0gZm4odmFsdWUpO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQodmFsdWUsIG1vZGUgJiB+MSk7XG4gXHRcdH07XG4gXHRcdHJldHVybiBmbjtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIGhvdCA9IHtcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXG4gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbiBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGlmICghbCkgcmV0dXJuIGhvdFN0YXR1cztcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcbiBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cbiBcdFx0fTtcbiBcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuIFx0XHRyZXR1cm4gaG90O1xuIFx0fVxuXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcblxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XG4gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuIFx0fVxuXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdERlZmVycmVkO1xuXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcbiBcdFx0dmFyIGlzTnVtYmVyID0gK2lkICsgXCJcIiA9PT0gaWQ7XG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcImlkbGVcIikge1xuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuIFx0XHR9XG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuIFx0XHRcdGlmICghdXBkYXRlKSB7XG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XG5cbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcbiBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcbiBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3RcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0Zm9yKHZhciBjaHVua0lkIGluIGluc3RhbGxlZENodW5rcylcbiBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHR7XG4gXHRcdFx0XHQvKmdsb2JhbHMgY2h1bmtJZCAqL1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24oaWQpIHtcbiBcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxuIFx0XHRcdFx0XHRpZDogaWRcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcbiBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKCFtb2R1bGUgfHwgbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG4gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cblxuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG4gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcbiBcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuIFx0XHRcdH07XG4gXHRcdH1cblxuIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG4gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XG4gXHRcdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG4gXHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cbiBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xuIFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG4gXHRcdFx0KTtcbiBcdFx0fTtcblxuIFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xuIFx0XHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuIFx0XHRcdFx0dmFyIHJlc3VsdDtcbiBcdFx0XHRcdGlmIChob3RVcGRhdGVbaWRdKSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG4gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuIFx0XHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvQXBwbHkpIHtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRcdCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cbiBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiZcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkICYmXG4gXHRcdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG4gXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0fSk7XG5cbiBcdFx0dmFyIGlkeDtcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4gXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcbiBcdFx0XHRcdGNiKGRhdGEpO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xuXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbiBcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xuIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4gXHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG4gXHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcbiBcdFx0dmFyIGVycm9yID0gbnVsbDtcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xuIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG4gXHRcdFx0XHRcdFx0aWYgKGNiKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoY2IpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcbiBcdFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG4gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjI7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbiBcdFx0aWYgKGVycm9yKSB7XG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuIFx0XHR9XG5cbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJob21lXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL3BhZ2UvaG9tZS9ob21lLmpzXCIsXCJ2ZW5kb3JzfmhvbWV+aHFxYmFja35ocXFmcm9udH5wbGF5ZXJcIixcInZlbmRvcnN+aG9tZX5ocXFiYWNrfnBsYXllclwiLFwidmVuZG9yc35ob21lfnBsYXllclwiLFwidmVuZG9yc35ob21lXCIsXCJob21lfnBsYXllclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN3aXBlci1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG4uc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLXdyYXBwZXIge1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuLnN3aXBlci1jb250YWluZXIgLnN3aXBlci13cmFwcGVyIC5zd2lwZXItc2xpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnN3aXBlci1jb250YWluZXIgLnN3aXBlci13cmFwcGVyIC5zd2lwZXItc2xpZGUgLnN3aXBlci1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxufVxcbi5zd2lwZXItY29udGFpbmVyIC5zd2lwZXItYnV0dG9uIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjdmlkZW8tbGlzdC1ib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDUwcHggNTBweDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG59XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xudmFyIHVybEVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uLy4uLy4uL3N0YXRpYy9pY29uL3RvLXRvcC1ibHVlLnBuZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi8uLi8uLi9zdGF0aWMvaWNvbi90by10b3Atd2hpdGUucG5nXCIpKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudmlkZW8tbmF2LWJveCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwMHB4O1xcbiAgcmlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY5ZmE7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlOWVmO1xcbn1cXG4udmlkZW8tbmF2LWJveCAubmF2LWxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4udmlkZW8tbmF2LWJveCAubmF2LWxpLnNlbGVjdGVkLFxcbi52aWRlby1uYXYtYm94IC5uYXYtbGk6aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmYTlmNTtcXG59XFxuLnZpZGVvLW5hdi1ib3ggLnRvLXRvcCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTllZjtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbi52aWRlby1uYXYtYm94IC50by10b3A6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmYTlmNTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyArIFwiKTtcXG59XFxuXCIsIFwiXCJdKTtcblxuIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiICAgIDxhIGNsYXNzPVxcXCJzd2lwZXItc2xpZGVcXFwiIGhyZWY9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5ocmVmIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwic3dpcGVyLWl0ZW1cXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWltYWdlOnVybChcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYmFja2dyb3VuZEltZyA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIilcXFwiPjwvZGl2PlxcclxcbiAgICA8L2E+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbOCxcIj49IDQuMy4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJzd2lwZXItY29udGFpbmVyXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInN3aXBlci13cmFwcGVyXFxcIj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5kYXRhIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6NyxcImNvbHVtblwiOjEzfX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgPC9kaXY+XFxyXFxuICA8IS0tIEFkZCBQYWdpbmF0aW9uIC0tPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwic3dpcGVyLXBhZ2luYXRpb25cXFwiPjwvZGl2PlxcclxcbiAgPCEtLSBBZGQgQXJyb3dzIC0tPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwic3dpcGVyLWJ1dHRvbi1uZXh0IHN3aXBlci1idXR0b25cXFwiPjwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwic3dpcGVyLWJ1dHRvbi1wcmV2IHN3aXBlci1idXR0b25cXFwiPjwvZGl2PlxcclxcbjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2Zmdi1zbGlkZS1zaG93Lmhic1wiXHJcbmltcG9ydCBcIi4vZmZ2LXNsaWRlLXNob3cubGVzc1wiXHJcblxyXG5pbXBvcnQgU3dpcGVyIGZyb20gXCJzd2lwZXJcIlxyXG5pbXBvcnQgXCJzd2lwZXIvZGlzdC9jc3Mvc3dpcGVyLm1pbi5jc3NcIlxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZVNob3d7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xyXG4gICAgICAkY29udGFpbmVyOiBudWxsLFxyXG4gICAgICBkYXRhOiB0aGlzLnN3aXBlckRhdGFcclxuICAgIH0sIHByb3BzKTtcclxuXHJcbiAgICB0aGlzLl9yZW5kZXIoKTtcclxuICAgIHRoaXMuX2JpbmQoKTtcclxuICB9XHJcblxyXG4gIF9yZW5kZXIoKXtcclxuICAgIGNvbnNvbGUubG9nKFwibmFubmFuYW5uXCIsIHRoaXMuJGNvbnRhaW5lci5sZW5ndGgpXHJcbiAgICBcclxuICAgIGxldCBzd2lwZXJEb20gPSB0ZW1wbGF0ZSh7XHJcbiAgICAgIGRhdGE6IHRoaXMuZGF0YVxyXG4gICAgfSlcclxuICAgIHRoaXMuJGNvbnRhaW5lci5hcHBlbmQoJChzd2lwZXJEb20pKTtcclxuXHJcblxyXG4gICAgbGV0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIuc3dpcGVyLWNvbnRhaW5lclwiLCB7XHJcbiAgICAgIGVmZmVjdDogJ2NvdmVyZmxvdycsXHJcbiAgICAgICAgZ3JhYkN1cnNvcjogdHJ1ZSxcclxuICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIGNvdmVyZmxvd0VmZmVjdDoge1xyXG4gICAgICAgICAgcm90YXRlOiA1MCxcclxuICAgICAgICAgIHN0cmV0Y2g6IDAsXHJcbiAgICAgICAgICBkZXB0aDogMTAwLFxyXG4gICAgICAgICAgbW9kaWZpZXI6IDEsXHJcbiAgICAgICAgICBzbGlkZVNoYWRvd3M6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMjUwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIF9iaW5kKCl7XHJcbiAgICAkKFwiLnN3aXBlci1idXR0b25cIikub24oXCJjbGlja1wiLCBldiA9PiB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSlcclxuICB9XHJcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9wb3N0Y3NzIS4vZmZ2LXNsaWRlLXNob3cubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9wb3N0Y3NzIS4vZmZ2LXNsaWRlLXNob3cubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cG9zdGNzcyEuL2Zmdi1zbGlkZS1zaG93Lmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgVmlkZW9MaXN0QmlnIGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29tcG9uZW50L2Zmdi12aWRlby1saXN0LWJpZy9mZnYtdmlkZW8tbGlzdC1iaWdcIjtcclxuaW1wb3J0IFwiLi9iaWctbGlzdC5sZXNzXCI7XHJcblxyXG5pbXBvcnQgVmlkZW9OYXYgZnJvbSBcIi4uL3ZpZGVvLW5hdi92aWRlby1uYXZcIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaWdMaXN0e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywge30sIHByb3BzKTtcclxuICAgIHRoaXMudmlkZW9UeXBlT2JqID0ge1xyXG4gICAgICBtb3ZpZTogXCLlvbHop4ZcIixcclxuICAgICAgYW5pbWU6IFwi5Yqo5ryrXCIsXHJcbiAgICAgIG11c2ljOiBcIumfs+S5kFwiLFxyXG4gICAgICBlbnRlcnRhaW5tZW50OiBcIuWoseS5kFwiLFxyXG4gICAgICBzdHVkeTogXCLlrabkuaBcIixcclxuICAgICAgc2NpZW5jZTogXCLnp5HmioBcIixcclxuICAgICAgbGlmZTogXCLnlJ/mtLtcIixcclxuICAgICAgb3RoZXI6IFwi5YW25LuWXCIsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBfcmVuZGVyKCl7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICB3aW5kb3cudHlwZUNvdW50ID0gMDtcclxuICAgIGZvcihsZXQga2V5IGluIHRoaXMudmlkZW9UeXBlT2JqKXtcclxuICAgICAgaW5kZXgrKztcclxuICAgICAgbmV3IFZpZGVvTGlzdEJpZyh7XHJcbiAgICAgICAgJGNvbnRhaW5lcjogJChcIiN2aWRlby1saXN0LWJveFwiKSxcclxuICAgICAgICB2aWRlb1R5cGU6IGtleSxcclxuICAgICAgICBvcmRlcjogaW5kZXgsXHJcbiAgICAgICAgZG9uZTogKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cudHlwZUNvdW50Kys7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cudHlwZUNvdW50ID49IDgpIHtcclxuICAgICAgICAgICAgICBuZXcgVmlkZW9OYXYoe1xyXG4gICAgICAgICAgICAgICAgdmlkZW9UeXBlT2JqOiBzZWxmLnZpZGVvVHlwZU9ialxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cG9zdGNzcyEuL2JpZy1saXN0Lmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cG9zdGNzcyEuL2JpZy1saXN0Lmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3Bvc3Rjc3MhLi9iaWctbGlzdC5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8g5YWl5Y+j5paH5Lu2ZFxyXG4vLyByZXF1aXJlKFwiZXhwb3NlLWxvYWRlcj8kIWpxdWVyeVwiKTtcclxuXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudC9mZS1jb25maWdcIlxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50L2Zmdi1oZWFkZXIvaGVhZGVyXCJcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50L2Zmdi1hbGVydC9hbGVydFwiXHJcbmltcG9ydCBCaWdMaXN0IGZyb20gXCIuL2JpZy1saXN0L2JpZy1saXN0XCJcclxuaW1wb3J0IFNsaWRlU2hvdyBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudC9mZnYtc2xpZGUtc2hvdy9mZnYtc2xpZGUtc2hvd1wiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWV7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuJGhlYWRlckNvbnRhaW5lciA9ICQoXCIjaGVhZGVyLWJveFwiKTtcclxuICAgIHRoaXMuJGFwcENvbnRhaW5lciA9ICQoXCIjYXBwLWJveFwiKTtcclxuICAgIHRoaXMuJGZvb3RlckNvbnRhaW5lciA9ICQoXCIjZm9vdGVyLWJveFwiKTtcclxuICAgIHRoaXMuJHN3aXBlckNvbnRhaW5lciA9ICQoXCIjcm90YXRpb24tYm94XCIpO1xyXG4gICAgdGhpcy5zd2lwZXJEYXRhID0gW3tcclxuICAgICAgaHJlZjpcImh0dHA6Ly93d3cuYmFpZHUuY29tXCIsXHJcbiAgICAgIGJhY2tncm91bmRJbWc6IFwiaHR0cHM6Ly95Lmd0aW1nLmNuL211c2ljL2NvbW1vbi91cGxvYWQvTVVTSUNfRk9DVVMvMTM0ODc3Ni5qcGc/bWF4X2FnZT0yNTkyMDAwXCJcclxuICAgIH0se1xyXG4gICAgICBocmVmOiBcIlwiLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1nOiBcImh0dHBzOi8veS5ndGltZy5jbi9tdXNpYy9jb21tb24vdXBsb2FkL01VU0lDX0ZPQ1VTLzEzNDg3NzguanBnP21heF9hZ2U9MjU5MjAwMFwiIC8v5Y+u5ZKb77yM572X5aSn5L2RXHJcbiAgICB9LCB7XHJcbiAgICAgIGhyZWY6IFwiXCIsXHJcbiAgICAgIGJhY2tncm91bmRJbWc6IFwiaHR0cHM6Ly95Lmd0aW1nLmNuL211c2ljL2NvbW1vbi91cGxvYWQvTVVTSUNfRk9DVVMvMTM0ODA2MC5qcGc/bWF4X2FnZT0yNTkyMDAwXCIgLy8gRmVlZGJhY2tcclxuICAgIH0sIHtcclxuICAgICAgaHJlZjpcIlwiLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1nOiBcImh0dHA6Ly9wMS5tdXNpYy4xMjYubmV0L3ZncTVRc1dka3FHV0pDVnp5V1owc3c9PS8xMDk5NTExNjQxMjI5MzIyODkuanBnXCIgLy8g5rC05p6c5aeQ5paw5Y2VXHJcbiAgICB9LCB7XHJcbiAgICAgIGhyZWY6XCJcIixcclxuICAgICAgYmFja2dyb3VuZEltZzogXCJodHRwOi8vcDEubXVzaWMuMTI2Lm5ldC9sQmdxaThpU3dxRXZvamR6bjlkamdBPT0vMTA5OTUxMTY0MTIyOTM2MjgxLmpwZ1wiIC8vIOaDhea3sea3sembqOiSmeiSmVxyXG4gICAgfV1cclxuXHJcbiAgICAvLyDnjq/looPlj5jph4/phY3nva5cclxuICAgIG5ldyBDb25maWcoe1xyXG4gICAgICBlbnY6IFwicHJvXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInJlbmRlciBob21lIHBhZ2UhISFcIilcclxuICAgIHRoaXMuX3JlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgX3JlbmRlcigpe1xyXG4gICAgLyoqXHJcbiAgICAgKiDmuLLmn5NIZWFkZXJcclxuICAgICAqL1xyXG4gICAgbGV0IGhlYWRlciA9IG5ldyBIZWFkZXIoe1xyXG4gICAgICAkY29udGFpbmVyOiB0aGlzLiRoZWFkZXJDb250YWluZXIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBuZXcgU2xpZGVTaG93KHtcclxuICAgICAgJGNvbnRhaW5lcjogdGhpcy4kc3dpcGVyQ29udGFpbmVyLFxyXG4gICAgICBkYXRhOiB0aGlzLnN3aXBlckRhdGEsXHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riy5p+T6KeG6aKR5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIG5ldyBCaWdMaXN0KCk7XHJcblxyXG4gICAgLy8gbmV3IEFsZXJ0KCk7XHJcblxyXG4gICAgXHJcbiAgfVxyXG59XHJcblxyXG5uZXcgSG9tZSgpOyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgPGxpIGNsYXNzPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAua2V5IDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiLW5hdi1pdGVtIG5hdi1saVxcXCI+XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnZhbHVlIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiPC9saT5cXHJcXG5cIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxvbCBjbGFzcz1cXFwidmlkZW8tbmF2LWJveFxcXCI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudHlwZUFyciA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjJ9LFwiZW5kXCI6e1wibGluZVwiOjQsXCJjb2x1bW5cIjoxMX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgIDxsaSBjbGFzcz1cXFwidG8tdG9wXFxcIj48L2xpPlxcclxcbjwvb2w+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vdmlkZW8taGJzLmhic1wiO1xyXG5pbXBvcnQgXCIuL3ZpZGVvLW5hdi5sZXNzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvTmF2e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xyXG4gICAgICB2aWRlb1R5cGVPYmo6IG51bGxcclxuICAgIH0sIHByb3BzKVxyXG5cclxuICAgIHRoaXMuX3JlbmRlcigpO1xyXG4gICAgdGhpcy5fYmluZCgpO1xyXG5cclxuICB9XHJcblxyXG4gIF9yZW5kZXIoKXtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHRoaXMudHlwZUFyciA9IFtdO1xyXG4gICAgZm9yKGxldCBoYWhhIGluIHRoaXMudmlkZW9UeXBlT2JqKXtcclxuICAgICAgdGhpcy50eXBlQXJyLnB1c2goe1xyXG4gICAgICAgIGtleTogaGFoYSxcclxuICAgICAgICB2YWx1ZTogdGhpcy52aWRlb1R5cGVPYmpbaGFoYV1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJChcImJvZHlcIikuYXBwZW5kKCQodGVtcGxhdGUoe1xyXG4gICAgICB0eXBlQXJyOiBzZWxmLnR5cGVBcnJcclxuICAgIH0pKSlcclxuXHJcbiAgICB0aGlzLl9jaGFuZ2VDdXJyZW50VHlwZSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIF9iaW5kKCl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvZHktYm94XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZXYgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInNjcm9sbFwiKTtcclxuICAgICAgdGhpcy5fY2hhbmdlQ3VycmVudFR5cGUoKTtcclxuICAgIH0pXHJcblxyXG4gICAgJChcIi50by10b3BcIikub24oXCJjbGlja1wiLCBldiA9PiB7XHJcbiAgICAgIHRoaXMuX2dvdG9Ub3AoKTtcclxuICAgIH0pXHJcblxyXG4gICAgJChcIi5uYXYtbGlcIikub24oXCJjbGlja1wiLCBldiA9PiB7XHJcblxyXG4gICAgICBsZXQgY3VycmVudFR5cGUgPSBldi50YXJnZXQuY2xhc3NMaXN0WzBdLnNwbGl0KFwiLVwiKVswXTtcclxuICAgICAgdGhpcy5fZ290b1R5cGUoY3VycmVudFR5cGUpO1xyXG4gICAgICAkKFwiLnZpZGVvLW5hdi1ib3ggLm5hdi1saVwiKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgICAkKGAudmlkZW8tbmF2LWJveCAuJHtjdXJyZW50VHlwZX0tbmF2LWl0ZW1gKS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIF9jaGFuZ2VDdXJyZW50VHlwZSgpe1xyXG4gICAgbGV0IGN1cnJlbnRUeXBlT2JqID0gdGhpcy5fZmluZEN1cnJlbnRUeXBlKHRoaXMuX2dldFR5cGVCb3hQb3MoKSk7XHJcbiAgICAkKFwiLnZpZGVvLW5hdi1ib3ggLm5hdi1saVwiKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJjdXJyZW50VHlwZU9ialwiLCBjdXJyZW50VHlwZU9iailcclxuICAgICQoYC52aWRlby1uYXYtYm94IC4ke2N1cnJlbnRUeXBlT2JqLnR5cGV9LW5hdi1pdGVtYCkuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuICB9XHJcblxyXG4gIF9maW5kQ3VycmVudFR5cGUodHlwZUJveFBvcykge1xyXG4gICAgbGV0IGxvd2VzdEluZGV4ID0gMDtcclxuICAgIGxldCBsb3dlc3RUb3AgPSBJbmZpbml0eVxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHR5cGVCb3hQb3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgaWYgKHR5cGVCb3hQb3NbaV0udG9wID4gNDIgJiYgdHlwZUJveFBvc1tpXS50b3AgPCBsb3dlc3RUb3Ape1xyXG4gICAgICAgICBsb3dlc3RUb3AgPSB0eXBlQm94UG9zW2ldLnRvcDtcclxuICAgICAgICAgbG93ZXN0SW5kZXggPSBpO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJ0b3BcIix0eXBlQm94UG9zW2xvd2VzdEluZGV4XSk7XHJcbiAgICByZXR1cm4gdHlwZUJveFBvc1tsb3dlc3RJbmRleF07XHJcbiAgfVxyXG5cclxuICBfZ2V0VHlwZUJveFBvcygpe1xyXG4gICAgdGhpcy50eXBlQm94UG9zID0gW107XHJcbiAgICBmb3IobGV0IGtleSBpbiB0aGlzLnZpZGVvVHlwZU9iail7XHJcbiAgICAgIHRoaXMudHlwZUJveFBvcy5wdXNoKHtcclxuICAgICAgICB0b3A6ICQoYC50eXBlLWJveC4ke2tleX1gKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsXHJcbiAgICAgICAgdHlwZToga2V5LFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnZpZGVvVHlwZU9ialtrZXldLFxyXG4gICAgICAgIHNjcm9sbFRvcEJvZHlCb3g6ICQoYCNib2R5LWJveGApWzBdLnNjcm9sbFRvcCxcclxuICAgICAgICB0eXBlT2Zmc2V0VG9wOiAkKGAudHlwZS1ib3guJHtrZXl9YClbMF0ub2Zmc2V0VG9wXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnR5cGVCb3hQb3NbMF0pO1xyXG4gICAgcmV0dXJuIHRoaXMudHlwZUJveFBvcztcclxuICB9XHJcblxyXG4gIF9nb3RvVHlwZSh0eXBlKXtcclxuICAgIC8vIGxldCBjdXJyZW50VG9wID0gJChgLnR5cGUtYm94LiR7dHlwZX1gKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsXHJcbiAgICAgIC8vIHNjcm9sbFRvcEJvZHlCb3ggPSAkKGAjYm9keS1ib3hgKVswXS5zY3JvbGxUb3A7XHJcbiAgICBsZXQgIHR5cGVPZmZzZXRUb3AgPSAkKGAudHlwZS1ib3guJHt0eXBlfWApWzBdLm9mZnNldFRvcCxcclxuICAgICAgc2V0U2Nyb2xsVG9wID0gdHlwZU9mZnNldFRvcCAtIDQzO1xyXG4gICAgJChgI2JvZHktYm94YCkuYW5pbWF0ZSh7XHJcbiAgICAgIHNjcm9sbFRvcDogc2V0U2Nyb2xsVG9wXHJcbiAgICB9LCA0MDApXHJcblxyXG4gIH1cclxuXHJcbiAgX2dvdG9Ub3AoKXtcclxuICAgICQoXCIjYm9keS1ib3hcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOjB9LDQwMCk7XHJcbiAgfVxyXG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cG9zdGNzcyEuL3ZpZGVvLW5hdi5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3Bvc3Rjc3MhLi92aWRlby1uYXYubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cG9zdGNzcyEuL3ZpZGVvLW5hdi5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTWdBQUFESUNBWUFBQUN0V0s2ZUFBQUx4VWxFUVZSNFh1MmRYNGljVnhYQXo1bGR6ZTdNWXRFVVJLd3ZncWdJUlZwcGlXbDJ0MVZxcklrbEtqdXJoWUtJZ3NYYVlsVDY0cHN2aFVoalZSU3NGaEhxYkxTbG1GcXRXcHZkN1IrclJpajJRYVNnUGtXazJtcG5KMm5NenBGcHMzVU5PN3ZmdmQrZmU3L3YvZ0o5NmpuM25Qczc5OWN6dThtbUt2eUNBQVRHRWxEWVFBQUM0d2tnQ0s4REF0c1FRQkNlQndRUWhEY0FBVDhDYkJBL2JtUWxRZ0JCRWhrMDEvUWpnQ0IrM01oS2hBQ0NKREpvcnVsSEFFSDh1SkdWQ0FFRVNXVFFYTk9QQUlMNGNTTXJFUUlJa3NpZ3VhWWZBUVR4NDBaV0lnUVFKSkZCYzAwL0Fnaml4NDJzUkFnZ1NDS0Q1cHArQkJERWp4dFppUkJBa0VRR3pUWDlDQ0NJSHpleUVpR0FJSWtNbW12NkVVQVFQMjVrSlVJQVFSSVpOTmYwSTRBZ2Z0eklTb1FBZ2lReWFLN3BSd0JCL0xpUmxRZ0JCRWxrMEZ6VGp3Q0MrSEVqS3hFQ0NKTElvTG1tSHdFRThlTkdWaUlFRUNTUlFYTk5Qd0lJNHNlTnJFUUlJRWdpZythYWZnUVF4SThiV1lrUVFKQkVCczAxL1FnZ2lCODNzaEloZ0NDSkRKcHIraEZBRUQ5dVpDVkNBRUVTR1RUWDlDT0FJSDdjeUVxRUFJSWtNbWl1NlVjQVFmeTRrWlVJQVFSSlpOQmMwNDhBZ3ZoeEl5c1JBZ2lTeUtDNXBoOEJCUEhqUmxZaUJCQWtrVUZ6VFQ4Q0NPTEhqYXhFQ0NCSUlvUG1tbjRFRU1TUEcxbUpFRUNRUkFiTk5mMElJSWdmTjdJU0lZQWdBUWQ5K1hGcnQvdG45bWpMZG92WmEwVkcvNHgrNlhPaStwd045UitEbWFrblRoN1VRY0Eya3k2TklCV1BmLzV1bTFydm5EN1FNdXVheUFkVVpIcTdGa3prdElyOFpLaTZkR3BtK3ZnejErbUxGYmVjZERrRXFXajg4OGRzWmpnYzNDSmloMVgxL0tad0syNWkvMVNSSTZxZHI1MVkwTDViTnRFK0JCREVoNXBqem15dmY1dXFmRjVFZHp1bWJoMXU5cXlwM0w3U25UbFN5SGtjTXBZQWdwVDRPT2J2c1l1SEU0T2ZxY2psSlpYNXRhNjNENTc0bUQ1YjB2bkpINHNnSlQyQmZiMjF5MVRsQVJWNVEwa2xYanJXUkU0Tmgzcm8wWSsybnl5elRxcG5JMGdKazkvWFc3dStwWEovQ1VlUFA5SjBZWG14L2NOS2F5WlFERUVLSHZMYzB0cEJFYmxQUkNZTFBucW40OWFIb3QzVmJ2dmVuUUw1OTlrSklFaDJWanRHQnBSam96Y2syWEZLYmdFSTRzWnJiSFFFY2lCSlFiUGNmQXlDRkFBMUlqbVFwSUI1SWtpQkVDT1VBMGtLbkM4YkpBZk1pT1Y0UlJJUk9iVGM3UnpQY2Mya1V4SEVjL3cxa0dQalp1ZEU1RU5JNGpkb0JQSGdWaU01a01SanZud05rZ05hRGVWQWtoenpab000d051MzFIOWZTL1NCQUw4SjZORGx0cUY4M0hJa2lTQVpnWTNrVU5FZnE4aXJNNmJFR29Za0RwTkJrQXl3R2lRSEg3Y3l6SnV2UVJ3Z05WQU9KSEdZUHh0a0cxZ05sZ05KTWtxQ0lHTkFKU0FIa21TUUJFRzJnSlNRSEVpeWd5UUljZ0dnQk9WQWttMGtRWkJOY0JLV0EwbkdTSUlnNThFZ3h5c3Y1TnhRN01CcWQrYWhEQi9SR3grQ0lDSXkxMXQ3djZnOEdHVGFvNy9DUi9Tb2lQMzJQNjNPN3lZbkJydmtuRjNhRXIxaTlIZG9pZWhGSWZwYU56bjQ2R0puOUtjR2t2NlZ2Q0FoNVRDVDc2eTEyb2RQTHVpL3RucUZWOXhudTZmT3JuMVZWVzhJOFVxUlJDUnBRVUorckJxS2ZIcTEyL2xXbG9jLzJ4dmNvbXBIczhRV0dXTWlaMDNzZ3lsLzNFcFdrTHJJc2ZIZ2thUkk5Yk9mbGFRZ2RaTURTYkkvNktJamt4T2tybklnU2RGUFA5dDVTUWxTZHptUUpOdWpMaklxR1VHYUlnZVNGUG44ZHo0ckNVR2FKZ2VTN1B5d2k0cG92Q0JObFFOSmlsSmcrM01hTGNqYzB1bXJUWWFqL3o5SDVUOG02L0w3SEhsSHpiZUE4eEljbjk5WVFVWnlpQTBmRkpXcDh2QnRmWEtWY3JCSnlwMXVJd1ZKVFk0WUpGRnA3Vi91VGo5UzduT3QvdlRHQ1pLcUhLRWxFWk16b3Ezcm1pWkpvd1JKWFE0a0tYN0RORVlRNVBqL3h4SHFDL2VtYlpKR0NJSWNXLytYRTBueWI1VGFDNEljMno4Q0pNa25TYTBGUVk1c3cwZVNiSnkyaXFxdElNamhOblFrY2VPMUVWMUxRWkREYjloSTRzNnRkb0lnaC91UU4yY2dpUnUvV2dtQ0hHN0RIUmVOSk5rNTFrWVE1TWcrMUN5UlNKS0ZVazMrVmhQa3lEWk0xeWdrMlpsWTlCc0VPWFllWXA2SWtKSU1WZCs3Mm0wL2xxZi9zbk9qRmdRNXloNy95K2VIa3NSRUJpWjZiY3lTUkNzSWNsUWp4MFlWSk5tYWQ1U0NJRWUxY2lESmVON1JDWUljWWVSQWtocHNrSDFMZzcwdHMxK204bU95WVZVWVg1MlBXLzlqRTgwR0djbWhZajlYa1hiVkR5ZkV6NUJYZlVmWGVranlNckVvQkVFTzErZGJUVHlTUkNBSWNsVHoySDJycEM1SjBBMkNITDdQdHRxOGxDVUpKZ2h5VlB2STgxWkxWWklnZ2lCSDN1Y2FKajlGU1NvWEJEbkNQTzZpcWdhVlJQWHExWVgyYjRxNlM1WnpLaFVFT2JLTUpQNllVSktJU0grbytwNHFKYWxNRU9TSS8rRzdkSmlLSkpVSWdod3VUNjgrc1NsSVVyb2d5RkdmQisvVGFkTWxLVlVRNVBCNWN2WExhYklrcFFtQ0hQVjc2SGs2YnFva3BRaUNISG1lV24xem15aEo0WUlnUjMwZmVCR2ROMDJTUWdWQmppS2VXUDNQYUpJa2hRbUNIUFYvMkVYZW9DbVNGQ0lJY2hUNXRKcHpWaE1reVMwSWNqVG5RWmR4azdwTGtrdVFxMzR3dUhKQzdXRlI2WlFCZDdzemg2WTNyeTYydjE1MVhlcTVFNWhkR2h4V3NTUHVtZmt5VE93Rk01MWZYZXo4M3Zja2IwSG03eDFjTWp3M2ZFcEZYK2RiM0RlUG55SDNKUmN1TDlRbU1iRy8yNlMrYy9YRG5WTSt0L2NXWkxhM2RsSlZMdk1wbWlmSFJENnowdTE4STg4WjVJWWhNTmNiZkU3VXZsSjFkUk41WXFYYmViZFBYUzlCNW5wck40bEs1WStVemVFejRyaHlRbTBTVWJ0eGVXSG0rNjQwUEFYcC8wMVVYKzlhTEU4OG15TVB2Ymh5QTIyU1o1YTduYmU0a25BV1pPN1lZSStZUGU1YUtFODhteU1QdlRoelEyd1NuWmg4KzRtUDdQcWpDeEYzUVpiNlh4VFIyMTJLNUlsbGMrU2hGM2R1Z0UzeXFlVnU1OXN1Vkp3Rm1lMzFqNnJxTFM1RmZHUFpITDdrNnBOWDVTWXhrUyt0ZER0ZmRxSGpJY2phOTFUbFJwY2lQckZzRGg5cTljeXBhcE9ZMkpHVjdzd1hYQ2k1QzdMVXYwTkZiM1VwNGhyTDVuQWxWdi80S2phSmlkMjIwcDF4K3ZMQVdaQjl2Y0d0TGJVN3lob0ptNk1zc3ZHZlcvWW1NZFhGbFlYMmtnc0paMEgyL3VqRmQweXVuM3ZhcFVqV1dEWkhWbExOalN0cms1aUlyVSsxTDNyc2VuM0JoWjZ6SUtQRFozdjlQNm1xOC9lVXQydU16ZUV5dG1iSGxyTko3QmZMM1psclhjbDVDVExYNjM5Y1ZML3JXbXhjUEp1aktKTE5PYWY0VGRLNlpyazcvWWdySVM5QnptK1JwMVQxVXRlQ0Y4YXpPZklTYkc1K1VadkVSQjVhNlhiMis1RHlGbVQrSHJ0NDJGcDdQTTlITFRhSHo4alN5c205U2N5ZTduYzZWNTQ4cUFNZmN0NkNqSXFOSkxIVzRLZWk4aTdINHV1bWVvUHJkeFFjYXhEZUVBS2pqL1FtZXBlcXRGeXVaQ1pQdG5hMTk1ODRwTSs3NUcyT3pTWElTNUxjYlZQV0h0d3BJcC9NMUlUSlg2elYrc1RLd3ZTdk1zVVRCQUVSdWVwWWYvK0U2ZWlQaVZ5U0NZakpONWNYT3pkbGl0MG1LTGNnRzJmdlBYYm1yUk8yL2xrMXUwWlUzN2E1cHBuOVcxUlh6ZVQrMWNYT1hYbWJKajlkQW5POXdjMG1ka0JGOWw3NGs2d205Z2NSZVZoMDRzNlZoZWsvRjBHcE1FRTJOelBhS3V1ZHMyK2VHSzYvWnYxVjlsZmZuK1lxNG9LYzBWd0NlNDROM3JocktHK1N5WW5uWGYrVWJsWXFwUWlTdFRoeEVJaWRBSUxFUGlINkMwb0FRWUxpcDNqc0JCQWs5Z25SWDFBQ0NCSVVQOFZqSjRBZ3NVK0kvb0lTUUpDZytDa2VPd0VFaVgxQzlCZVVBSUlFeFUveDJBa2dTT3dUb3IrZ0JCQWtLSDZLeDA0QVFXS2ZFUDBGSllBZ1FmRlRQSFlDQ0JMN2hPZ3ZLQUVFQ1lxZjRyRVRRSkRZSjBSL1FRa2dTRkQ4RkkrZEFJTEVQaUg2QzBvQVFZTGlwM2pzQkJBazlnblJYMUFDQ0JJVVA4VmpKNEFnc1UrSS9vSVNRSkNnK0NrZU93RUVpWDFDOUJlVUFJSUV4VS94MkFrZ1NPd1RvcitnQkJBa0tINkt4MDRBUVdLZkVQMEZKWUFnUWZGVFBIWUNDQkw3aE9ndktBRUVDWXFmNHJFVFFKRFlKMFIvUVFrZ1NGRDhGSStkQUlMRVBpSDZDMG9BUVlMaXAzanNCQkFrOWduUlgxQUNDQklVUDhWako0QWdzVStJL29JU1FKQ2crQ2tlT3dFRWlYMUM5QmVVQUlJRXhVL3gyQWtnU093VG9yK2dCQkFrS0g2S3gwNEFRV0tmRVAwRkpZQWdRZkZUUEhZQ0NCTDdoT2d2S0FFRUNZcWY0ckVUUUpEWUowUi9RUWtnU0ZEOEZJK2RBSUxFUGlINkMwb0FRWUxpcDNqc0JCQWs5Z25SWDFBQy93V0IveUlVdVlQR0ZRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNZ0FBQURJQ0FZQUFBQ3RXSzZlQUFBS3FrbEVRVlI0WHUyZFM2aHNWeEdHL3hMUkdNV2dCa1RVaVNBcVFwQW9odWpFUklsWHZWRjBvRUlnSUtLZ0dDTkdKUk5uVGdKWGpGRlI4QUhpS0lnU2pLLzR5a0EweGhlSURrUUVkUlFSSDFGRGZHQllzcmw5NHZGeSt2UmV0UisxOXFwdnd4M2RWYnRxZmJXK1U5MTl1dnVZdUNBQWdiMEVERFlRZ01CK0FnakM2WURBS1FRUWhPTUJBUVRoREVEQVI0QUo0dU5HVkJJQ0NKS2swV3pUUndCQmZOeUlTa0lBUVpJMG1tMzZDQ0NJanh0UlNRZ2dTSkpHczAwZkFRVHhjU01xQ1FFRVNkSm90dWtqZ0NBK2JrUWxJWUFnU1JyTk5uMEVFTVRIamFna0JCQWtTYVBacG84QWd2aTRFWldFQUlJa2FUVGI5QkZBRUI4M29wSVFRSkFraldhYlBnSUk0dU5HVkJJQ0NKS2swV3pUUndCQmZOeUlTa0lBUVpJMG1tMzZDQ0NJanh0UlNRZ2dTSkpHczAwZkFRVHhjU01xQ1FFRVNkSm90dWtqZ0NBK2JrUWxJWUFnU1JyTk5uMEVFTVRIamFna0JCQWtTYVBacG84QWd2aTRFWldFQUlJa2FUVGI5QkZBRUI4M29wSVFRSkFraldhYlBnSUk0dU5HVkJJQ0NKS2swV3pUUndCQmZOeUlTa0lBUVpJMG1tMzZDQ0NJanh0UlNRZ2dTSkpHczAwZkFRVHhjU01xQ1FFRVNkSm90dWtqZ0NBK2JrUWxJWUFnU1JyTk5uMEVFTVRIamFna0JCQWtTYVBacG84QWd2aTRFWldFQUlJa2FUVGI5QkZBRUI4M29wSVFRSkRBUnBkU0xwWjBwYVFuU1hyQzd0OVEwVjkyLy80azZSNHplekN3ek5TcEVXVGw5cGRTTHBKMFZ0SWJKTDFLMG1NT2xQQVBTVitSZEx1a084M3NYeXVYbkRvZGdxelUvbExLNHlUZEtPbW1ZNU9pTnZ1ZkpaMlQ5QkV6ZTZBMm1QWDFCQkNrbmxsMVJDbmxaa252MlQyVXFvNC9JZUNQa200eHMwRVdyZ1VKSU1pQ2NFc3BsMHI2dXFUbkw1VG1CNUt1TmJOQkdLNEZDQ0RJQWxDSFc1WlNMcGYwWlVsUFdTakYwVzN2ay9SYU03dDM0VHdwYjQ4Z0M3UzlsUElhU1hjc2NPdlRidmw2TS92OHlqbTdUNGNnTTdlNGxIS3RwQzlLZXVUTXR6NTB1NGVHVjhiTTdBdUhGdkwvNHdrZ3lIaFdCMWNHeW5GVUc1SWM3RkxkQWdTcDQ3VjNkUU55SU1sTXZUeCtHd1NaQVdwRGNpREpEUDFFa0JraE5pZ0hrc3pZWHliSUJKZ055M0Zja3VFbDREc25iRE4xS0lJNDI3OEJPWTUyOWg5SnIwTVNYNk1SeE1GdFEzSWdpYU8vUEFlWkFHMkRjaURKaEg0elFTcmdsVkpldm52N3lOcS9CS3lvOHRTbFBOeXFKSWtnSTRIdDVQaVNwRWVOREdsMUdaSlVkQVpCUnNEcVNBNGVibzNvTjg5QktpQjFLQWVTVlBTZkNYSUtySTdsUUpLUmtpRElIbEFKNUVDU0VaSWd5QW1RRXNtQkpBY2tRWkFMQUNXVUEwbE9rUVJCanNGSkxBZVM3SkVFUVhaZ2tPUGhFekw4bnVTc21kMDE0aUY2OTBzUTVQd1hMTHhDMGxlRHVqMThJOG10a240azZjZVNIaTNwTWtrdjNIMkgxaVZCZFEzZmxqSjg2VVRxSzcwZ3dYSjhlcERBelA1NjBpa3NwUXhmU2ZwaFNkY0ZuZEwwa3FRV0pQaGgxZHZNN0JOakRuNHBaZmhHeG1IS3JIMzlXOUtyTXovY1NpdklWdVE0TWdKSjF2N1pjRDVmU2tHMkpnZVN4TWlSVXBDdHlvRWtNWktrbWlCYmx3TkoxcGNralNDOXlJRWs2MHFTUXBEZTVFQ1M5U1RwWHBCZTVVQ1NkU1RwV3BCU3lsVzd2ODhSOFRIWjBiL25tTnBxWGdLZVNuQi9mTGVDN09RWTNqNHkvRTNBdGEvVjVHQ1NMTnZhTGdYSkprY2prcHd4czd1WFBhN3IzNzA3UWJMSzBZQWsvNVQweXQ0azZVcVE3SElneWZ3VHBodEJrT1AvRDBmZ0UvZXVKa2tYZ2lESHlUODVrV1Q2Uk5tOElNaHgraUZBa21tU2JGb1E1QmpYZkNRWngrbWtWWnNWQkRucW1vNGtkYnlPVm05U0VPVHdOUnRKNnJsdFRoRGtxRy95OFFna3FlTzNLVUdRbzY2NSsxWWp5WGlPbXhFRU9jWTNkY3hLSkJsRGFTT2ZTVWVPY2Myc1hZVWtoNGsxUDBHUTQzQVRwNndJbHVSbFp2YTlLZlV2SGR1MElNaXhkUHZQM3o5UWtnY2xYZE95Sk0wS2doenJ5SEdVQlVsTzV0MmtJTWl4cmh4SXNwOTNjNElnUjR3Y1NMS0JDVkpLZWJHa2IyWDVtR3lzQ3Z1ejgzRHJmMnlhbVNBN09iNGg2ZUtBZzdQNlo4Z0Q5bGlWRWtuTzQycENFT1NvT3J1ckxVYVNCZ1JCanRYT3V5dFJka2xDSndoeXVNN3M2a0daSlFrVEJEbFdQK2VURW1hVkpFUVE1SmgwVnNPQ00wcXl1aURJRVhhK1owa2NMTWxWWnZiRFdUWXk4aWFyQ29JY0k3dlMrTEpBU1I2UTlOSTFKVmxORU9Sby9OUlhscGRGa2xVRVFZN0swN2VSNVJra1dWd1E1TmpJYVhlVzJic2tpd3FDSE01VHQ3R3duaVZaVEJEazJOZ3BuMWh1cjVJc0lnaHlURHh0R3czdlVaTFpCVUdPalo3dW1jcnVUWkpaQlVHT21VN1p4bS9Ua3lTekNZSWNHei9WTTVmZml5U3pDSUljTTUrdVRtN1hneVNUQlVHT1RrN3pRdHZZdWlTVEJDbWxYQ0hwMjVJZXV4RGYwMjU3ZzVsOU5DQXZLU3NKbEZKdWtuU3VNbXlPNVgrWDlCSXorNm4zWm01QlNpbFBrL1F6U1UvMEpwOFF4MmZJSjhDTENBMmNKSCtROUR3enU4K3o3eW1DL0VUUzVaNmtFMlBlWVdZZm0zZ1B3Z01JbEZMZUxlbURBYW52TWJNWGVmSzZCQ21sdkYxU3hDRmxjbmk2M0ZCTTRDUzUzc3crVjR2Q0s4anZKVDI1TnRuRTlVeU9pUUJiQ1ErYUpMODJzMmZXTXFnV3BKUnlwYVR2MXlhYXVKN0pNUkZnYStGQmsrUTVadmJMR2hZZVFkNG42WmFhSkJQWE1qa21BbXcxUEdDU3ZOWE1QbG5Ed3lQSXJaSnVyRWt5WVMyVFl3SzhMWVN1UEVuZWIyWWZxT0hpRWVTemtxNnZTZUpjeStSd2d0dGEySXFUNUp5WnZiZUdqMGVRRDBsNlYwMFN4MW9taHdQYWxrTldtaVEzbTFuVjB3T1BJSU1jZ3lSTFhVeU9wY2cyZnQ4Vkpza2J6ZXoyR2d3ZVFaNHI2UmMxU1NyV01qa3FZUFc0ZE1GSlVpUmRZbWJEMjA5R1g5V0NESGN1cGZ4S1V2VnJ5Z2VxWW5LTWJsdmZDeGVhSk44MHMydHF5WGtGZVpPa3o5UW1PMlU5azJOR21EM2Nhb0ZKY3JXWjNWM0x4aVhJYm9vTWIxUzhyRGJoQ2V1WkhETkE3UEVXTTA2U3U4enNqSWZSRkVFdTNmMUdmY3BETFNhSHAydUpZbWFZSk1QejVTdk1iUGlUMDlXWFc1RGRGQmtrK1pxa0YxUm1ma2pTZGJXdktGVG1ZSGtuQkVvcHcwUDZUMGw2Uk9XVzdwVjB4c3p1cjR4N2VQa2tRWGFTWENUcE5rbHZHVm5FYnlXOTJjeStNM0k5eXlBd3ZEQTBQRVFhM2lZeWZBNXB6UFZ4TXh2ZWRUN3BtaXpJVWZaU3lyTWt2VlBTMVpLZWZVRlZmNVAwWFVsM21ObndrNEFMQWk0Q3BaUWJKSjJWTlB4RjVBcy95ZnJ6M1NkY2J6T3ozN2dTWEJBMG15REg3MXRLR2FiS015UTlYdEx2dkovbW1tT0QzS05mQXFXVXAwcDZ1cVQ3YTkrbE81YktJb0tNVGM0NkNMUk9BRUZhN3hEMWhSSkFrRkQ4SkcrZEFJSzAzaUhxQ3lXQUlLSDRTZDQ2QVFScHZVUFVGMG9BUVVMeGs3eDFBZ2pTZW9lb0w1UUFnb1RpSjNuckJCQ2s5UTVSWHlnQkJBbkZUL0xXQ1NCSTZ4Mml2bEFDQ0JLS24rU3RFMENRMWp0RWZhRUVFQ1FVUDhsYko0QWdyWGVJK2tJSklFZ29mcEszVGdCQld1OFE5WVVTUUpCUS9DUnZuUUNDdE40aDZnc2xnQ0NoK0VuZU9nRUVhYjFEMUJkS0FFRkM4Wk84ZFFJSTBucUhxQytVQUlLRTRpZDU2d1FRcFBVT1VWOG9BUVFKeFUveTFna2dTT3Nkb3I1UUFnZ1NpcC9rclJOQWtOWTdSSDJoQkJBa0ZEL0pXeWVBSUsxM2lQcENDU0JJS0g2U3QwNEFRVnJ2RVBXRkVrQ1FVUHdrYjUwQWdyVGVJZW9MSllBZ29maEozam9CQkdtOVE5UVhTZ0JCUXZHVHZIVUNDTko2aDZndmxBQ0NoT0luZWVzRUVLVDFEbEZmS0FFRUNjVlA4dFlKSUVqckhhSytVQUlJRW9xZjVLMFRRSkRXTzBSOW9RUVFKQlEveVZzbmdDQ3RkNGo2UWdrZ1NDaCtrcmRPQUVGYTd4RDFoUkpBa0ZEOEpHK2RBSUswM2lIcUN5WHdYd3EzbC9hTmNhUFdBQUFBQUVsRlRrU3VRbUNDXCIiXSwic291cmNlUm9vdCI6IiJ9