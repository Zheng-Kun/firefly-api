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
/******/ 		"player": 0
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
/******/ 	deferredModules.push(["./src/page/player/player.js","vendors~home~hqqback~hqqfront~player","vendors~home~hqqback~player","vendors~home~player","vendors~player","home~player"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/common/component/ffv-comment/comment.less":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??postcss!./src/common/component/ffv-comment/comment.less ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../../static/icon/comment-white.png */ "./src/static/icon/comment-white.png"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../../../static/icon/comment2.png */ "./src/static/icon/comment2.png"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../../../static/avatar/avatar-g-1.jpg */ "./src/static/avatar/avatar-g-1.jpg"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../../../static/page-bg/empty-bg.png */ "./src/static/page-bg/empty-bg.png"));

// Module
exports.push([module.i, "#comment-box {\n  margin-bottom: 20px;\n}\n#comment-box .comment-input-box {\n  font-size: 0;\n  width: 100%;\n  height: 46px;\n  box-shadow: 0 0 8px #e5e9ef;\n  border-radius: 4px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  overflow: hidden;\n}\n#comment-box .comment-input-box .comment-icon {\n  display: inline-block;\n  height: 46px;\n  width: 46px;\n  background-color: #3fa9f5;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 36px 36px;\n  vertical-align: top;\n}\n#comment-box .comment-input-box .comment-input {\n  padding-left: 16px;\n  display: inline-block;\n  box-sizing: border-box;\n  font-size: 12px;\n  line-height: 46px;\n  width: calc(100% - 46px - 60px);\n  background-color: rgba(255, 255, 255, 0.5);\n  color: black;\n  margin: 0;\n  border: none;\n  outline: none;\n}\n#comment-box .comment-input-box .comment-commit-btn {\n  display: inline-block;\n  width: 60px;\n  height: 100%;\n  line-height: 46px;\n  background-color: #3fa9f5;\n  text-align: center;\n  cursor: pointer;\n  color: white;\n  font-size: 12px;\n}\n#comment-box .comment-input-box .comment-commit-btn:hover {\n  background-color: #00a1d6;\n}\n#comment-box .comment-show-box {\n  margin-top: 20px;\n}\n#comment-box .comment-show-box .comment-title {\n  font-size: 24px;\n  font-weight: 400;\n  margin-bottom: 15px;\n  border-bottom: 1px solid #3fa9f5;\n}\n#comment-box .comment-show-box .comment-title .comment-show-icon {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  background-size: 100% 100%;\n  margin-right: 12px;\n  vertical-align: bottom;\n  background-image: url(" + ___CSS_LOADER_URL___1___ + ");\n}\n#comment-box .comment-show-box .comment-title .title-text {\n  vertical-align: text-bottom;\n}\n#comment-box .comment-show-box .comment-title .comment-counts {\n  vertical-align: text-bottom;\n  color: #ee1455;\n}\n#comment-box .comment-show-box .comment-list .comment-item {\n  margin-top: 10px;\n  position: relative;\n  border-radius: 8px;\n  background-color: rgba(255, 255, 255, 0.5);\n  padding: 15px 30px;\n}\n#comment-box .comment-show-box .comment-list .comment-item p {\n  margin-left: 78px;\n}\n#comment-box .comment-show-box .comment-list .comment-item .comment-avatar {\n  position: absolute;\n  top: 16px;\n  left: 30px;\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  margin-right: 30px;\n  background-image: url(" + ___CSS_LOADER_URL___2___ + ");\n  background-size: 100%;\n}\n#comment-box .comment-show-box .comment-list .comment-item .comment-author {\n  color: #fb7299;\n  font-size: 14px;\n  font-weight: 700;\n}\n#comment-box .comment-show-box .comment-list .comment-item .comment-time {\n  font-size: 12px;\n  color: #99a2aa;\n}\n#comment-box .comment-show-box .comment-list .comment-item .comment-content {\n  font-size: 12px;\n  color: #222;\n}\n#comment-box .comment-show-box .comment-list .empty-content {\n  height: 300px;\n  width: 100%;\n  background-image: url(" + ___CSS_LOADER_URL___3___ + ");\n  background-size: cover;\n}\n#comment-box .comment-show-box .comment-list .empty-content p {\n  margin-top: 50px;\n  text-align: center;\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.4);\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/page/player/player.less":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??postcss!./src/page/player/player.less ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".type-video-list {\n  margin-top: 20px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/page/player/video-player/video-palyer.less":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??postcss!./src/page/player/video-player/video-palyer.less ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../../static/icon/hot.png */ "./src/static/icon/hot.png"));

// Module
exports.push([module.i, ".video-title {\n  line-height: 50px;\n  margin-top: 20px;\n}\n.video-title .title-text {\n  font-size: 18px;\n}\n.video-title .video-count {\n  float: right;\n  font-size: 16px;\n}\n.video-title .video-count i {\n  display: inline-block;\n  height: 30px;\n  width: 30px;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-size: 100% 100%;\n}\n", ""]);



/***/ }),

/***/ "./src/common/component/ffv-comment/comment-item.hbs":
/*!***********************************************************!*\
  !*** ./src/common/component/ffv-comment/comment-item.hbs ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <p>\r\n    <span class=\"comment-avatar\"></span>\r\n    <span class=\"comment-author\">"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":4,"column":33},"end":{"line":4,"column":43}}}) : helper)))
    + "</span>\r\n    <span class=\"comment-time\">"
    + alias4(((helper = (helper = helpers.createTime || (depth0 != null ? depth0.createTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"createTime","hash":{},"data":data,"loc":{"start":{"line":5,"column":31},"end":{"line":5,"column":45}}}) : helper)))
    + "</span>\r\n  </p>\r\n  <p class=\"comment-content\">"
    + alias4(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":7,"column":29},"end":{"line":7,"column":40}}}) : helper)))
    + "</p>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/common/component/ffv-comment/comment.hbs":
/*!******************************************************!*\
  !*** ./src/common/component/ffv-comment/comment.hbs ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <li class=\"comment-item\">\r\n        <p>\r\n          <span class=\"comment-avatar\"></span>\r\n          <span class=\"comment-author\">"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":18,"column":39},"end":{"line":18,"column":49}}}) : helper)))
    + "</span>\r\n          <span class=\"comment-time\">"
    + alias4(((helper = (helper = helpers.createTime || (depth0 != null ? depth0.createTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"createTime","hash":{},"data":data,"loc":{"start":{"line":19,"column":37},"end":{"line":19,"column":51}}}) : helper)))
    + "</span>\r\n        </p>\r\n        <p class=\"comment-content\">"
    + alias4(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":21,"column":35},"end":{"line":21,"column":46}}}) : helper)))
    + "</p>\r\n      </li>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "      <li class=\"empty-content\">\r\n        <p>还没人呢，快去抢个沙发吧</p>\r\n      </li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div id=\"comment-box\">\r\n  <div class=\"comment-input-box\">\r\n    <span class=\"comment-icon\"></span>\r\n    <input type=\"text\" class=\"comment-input\" placeholder=\"发个评论和大家一起讨论吧\">\r\n    <span class=\"comment-commit-btn\">发送</span>\r\n  </div>\r\n  <div class=\"comment-show-box\">\r\n    <h3 class=\"comment-title\">\r\n      <i class=\"comment-show-icon\"></i>\r\n      <span class=\"title-text\">评论</span>\r\n      <span class=\"comment-counts\">"
    + container.escapeExpression(((helper = (helper = helpers.commentCounts || (depth0 != null ? depth0.commentCounts : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"commentCounts","hash":{},"data":data,"loc":{"start":{"line":11,"column":35},"end":{"line":11,"column":52}}}) : helper)))
    + "</span>\r\n    </h3>\r\n    <ol class=\"comment-list\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":27,"column":15}}})) != null ? stack1 : "")
    + "    </ol>\r\n  </div>\r\n\r\n</div>";
},"useData":true});

/***/ }),

/***/ "./src/common/component/ffv-comment/comment.js":
/*!*****************************************************!*\
  !*** ./src/common/component/ffv-comment/comment.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Comment; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ffv_alert_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ffv-alert/alert */ "./src/common/component/ffv-alert/alert.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _comment_hbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment.hbs */ "./src/common/component/ffv-comment/comment.hbs");
/* harmony import */ var _comment_hbs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_comment_hbs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _comment_item_hbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comment-item.hbs */ "./src/common/component/ffv-comment/comment-item.hbs");
/* harmony import */ var _comment_item_hbs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_comment_item_hbs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _comment_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment.less */ "./src/common/component/ffv-comment/comment.less");
/* harmony import */ var _comment_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_comment_less__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Comment =
/*#__PURE__*/
function () {
  function Comment(props) {
    _classCallCheck(this, Comment);

    Object.assign(this, {
      $container: null
    }, props); // this.author = Cookie.get("un");

    this.vid = this._getSearchObj().vid;

    this._render();
  }

  _createClass(Comment, [{
    key: "_render",
    value: function _render() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(window.config.host + '/api/comment/getComment', {
        vid: this.vid
      }).then(function (resp) {
        _this.data = resp.data.data;
        var commentCounts = _this.data.length;
        console.log("comment", _this.data);

        for (var i = 0; i < _this.data.length; i++) {
          _this.data[i]["createTime"] = _this._parseDate(_this.data[i]["createTime"]).fullDateTime;
        }

        var elComment = _comment_hbs__WEBPACK_IMPORTED_MODULE_3___default()({
          data: _this.data.reverse(),
          commentCounts: commentCounts
        });
        _this.$container[0].innerHTML = elComment;

        _this._bind();
      });
    }
  }, {
    key: "_bind",
    value: function _bind() {
      var _this2 = this;

      document.querySelector("#comment-box .comment-commit-btn").addEventListener("click", function (ev) {
        var content = document.querySelector("#comment-box .comment-input").value;
        _this2.author = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get("un");

        if (!_this2.author) {
          new _ffv_alert_alert__WEBPACK_IMPORTED_MODULE_1__["default"]({
            message: "游客无法评论喔，请先登陆",
            type: "error"
          });
          return;
        }

        if (!content) {
          new _ffv_alert_alert__WEBPACK_IMPORTED_MODULE_1__["default"]({
            message: "评论内容为空",
            type: "error"
          });
          return;
        }

        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(window.config.host + '/api/comment/setComment', {
          vid: _this2.vid,
          author: _this2.author,
          content: content
        }).then(function (resp) {
          if (resp.data.code == 200) {
            new _ffv_alert_alert__WEBPACK_IMPORTED_MODULE_1__["default"]({
              message: "评论成功",
              type: "success"
            });
          }

          var commentItem = _comment_item_hbs__WEBPACK_IMPORTED_MODULE_4___default()(_objectSpread({}, resp.data.data));
          var elLi = document.createElement("li");
          elLi.classList.add("comment-item");
          elLi.innerHTML = commentItem; // let dom = new DOMParser(commentItem, "text/html");

          document.querySelector("#comment-box .comment-list").insertBefore(elLi, document.querySelector("#comment-box .comment-list").children[0]);
          document.querySelector("#comment-box .comment-input").value = "";

          if (document.querySelector("#comment-box .empty-content")) {
            document.querySelector("#comment-box .empty-content").style.display = "none";
          }

          var commentCounts = Number(document.querySelector("#comment-box .comment-counts").innerText) + 1;
          document.querySelector("#comment-box .comment-counts").innerText = commentCounts;
        });
      });
    }
  }, {
    key: "_getSearchObj",
    value: function _getSearchObj() {
      var searchStr = location.search.substr(1);
      var obj = {};
      var searchArr = searchStr.split("&");

      for (var i = 0; i < searchArr.length; i++) {
        var key = searchArr[i].split("=")[0];
        var value = searchArr[i].split("=")[1];
        obj[key] = value;
      }

      return obj;
    }
  }, {
    key: "_parseDate",
    value: function _parseDate(str) {
      var dateObj = {};
      dateObj.year = str.substr(0, 4);
      dateObj.month = str.substr(5, 2);
      dateObj.day = str.substr(8, 2);
      dateObj.hour = (Number(str.substr(11, 8).split(":")[0]) + 8) % 24;
      dateObj.minute = str.substr(11, 8).split(":")[1];
      dateObj.second = str.substr(11, 8).split(":")[2];
      dateObj.fullDate = "".concat(dateObj.year, "\u5E74").concat(dateObj.month, "\u6708").concat(dateObj.day, "\u65E5");
      dateObj.fullTime = "".concat(dateObj.hour, ":").concat(dateObj.minute, ":").concat(dateObj.second);
      dateObj.fullDateTime = dateObj.fullDate + " " + dateObj.fullTime;
      return dateObj;
    } // webhook test

  }]);

  return Comment;
}();



/***/ }),

/***/ "./src/common/component/ffv-comment/comment.less":
/*!*******************************************************!*\
  !*** ./src/common/component/ffv-comment/comment.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js??postcss!./comment.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/common/component/ffv-comment/comment.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js??postcss!./comment.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/common/component/ffv-comment/comment.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js??postcss!./comment.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/common/component/ffv-comment/comment.less");

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

/***/ "./src/page/player/player.js":
/*!***********************************!*\
  !*** ./src/page/player/player.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_component_fe_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/fe-config */ "./src/common/component/fe-config.js");
/* harmony import */ var _common_component_ffv_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component/ffv-header/header */ "./src/common/component/ffv-header/header.js");
/* harmony import */ var _common_component_ffv_alert_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/component/ffv-alert/alert */ "./src/common/component/ffv-alert/alert.js");
/* harmony import */ var _video_player_video_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video-player/video-player */ "./src/page/player/video-player/video-player.js");
/* harmony import */ var _common_component_ffv_comment_comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/component/ffv-comment/comment */ "./src/common/component/ffv-comment/comment.js");
/* harmony import */ var _player_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player.less */ "./src/page/player/player.less");
/* harmony import */ var _player_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_player_less__WEBPACK_IMPORTED_MODULE_6__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var Player =
/*#__PURE__*/
function () {
  function Player() {
    _classCallCheck(this, Player);

    this.$headerContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#header-box");
    this.$appContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#app-box");
    this.$footerContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#footer-box");
    this.vid = this._getSearchObj().vid;
    this.videoType = this._getSearchObj().videoType; // 环境变量配置

    new _common_component_fe_config__WEBPACK_IMPORTED_MODULE_1__["default"]({
      env: "pro" // env: 'dev'

    });
    console.log("render player page!!!");

    this._render();
  }

  _createClass(Player, [{
    key: "_render",
    value: function _render() {
      /**
       * 渲染Header
       */
      var header = new _common_component_ffv_header_header__WEBPACK_IMPORTED_MODULE_2__["default"]({
        $container: this.$headerContainer
      });
      /**
       * 渲染播放器
       */

      var player = new _video_player_video_player__WEBPACK_IMPORTED_MODULE_4__["default"]({
        vid: this.vid,
        $container: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#video-player-box")
      });
      var comment = new _common_component_ffv_comment_comment__WEBPACK_IMPORTED_MODULE_5__["default"]({
        $container: jquery__WEBPACK_IMPORTED_MODULE_0___default()("#comment-big-box")
      }); // new Alert();
    }
  }, {
    key: "_getSearchObj",
    value: function _getSearchObj() {
      var searchStr = location.search.substr(1);
      var obj = {};
      var searchArr = searchStr.split("&");

      for (var i = 0; i < searchArr.length; i++) {
        var key = searchArr[i].split("=")[0];
        var value = searchArr[i].split("=")[1];
        obj[key] = value;
      }

      return obj;
    }
  }]);

  return Player;
}();


new Player();

/***/ }),

/***/ "./src/page/player/player.less":
/*!*************************************!*\
  !*** ./src/page/player/player.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../node_modules/postcss-loader/src!../../../node_modules/less-loader/dist/cjs.js??postcss!./player.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/page/player/player.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../node_modules/postcss-loader/src!../../../node_modules/less-loader/dist/cjs.js??postcss!./player.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/page/player/player.less", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../node_modules/postcss-loader/src!../../../node_modules/less-loader/dist/cjs.js??postcss!./player.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/page/player/player.less");

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

/***/ "./src/page/player/video-player/video-palyer.less":
/*!********************************************************!*\
  !*** ./src/page/player/video-player/video-palyer.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js??postcss!./video-palyer.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/page/player/video-player/video-palyer.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js??postcss!./video-palyer.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/page/player/video-player/video-palyer.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../../node_modules/postcss-loader/src!../../../../node_modules/less-loader/dist/cjs.js??postcss!./video-palyer.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./src/page/player/video-player/video-palyer.less");

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

/***/ "./src/page/player/video-player/video-play.hbs":
/*!*****************************************************!*\
  !*** ./src/page/player/video-player/video-play.hbs ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h2 class=\"video-title\">\r\n  <span class=\"title-text\">"
    + alias4(((helper = (helper = helpers.videoName || (depth0 != null ? depth0.videoName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"videoName","hash":{},"data":data,"loc":{"start":{"line":2,"column":27},"end":{"line":2,"column":40}}}) : helper)))
    + "</span>\r\n  <span class=\"video-count\"><i class=\"title-hot-icon\"></i>"
    + alias4(((helper = (helper = helpers.viewCounts || (depth0 != null ? depth0.viewCounts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"viewCounts","hash":{},"data":data,"loc":{"start":{"line":3,"column":58},"end":{"line":3,"column":72}}}) : helper)))
    + "</span>\r\n</h2>\r\n\r\n<video id=\"ff-video-el\" class=\"video-js vjs-default-skin\" preload=\"auto\" controls width=\"1160\" height=\"600\" poster=\"\" data-setup=\"{}\">\r\n  <source src="
    + alias4(((helper = (helper = helpers.videoUrl || (depth0 != null ? depth0.videoUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"videoUrl","hash":{},"data":data,"loc":{"start":{"line":7,"column":14},"end":{"line":7,"column":26}}}) : helper)))
    + " type=\"rtmp/flv\">\r\n  <p class=\"vjs-no-js\">播放视频需要启用 JavaScript，推荐使用支持HTML5的浏览器访问。\r\n    To view this video please enable JavaScript, and consider upgrading to a web browser that\r\n    <a href=\"http://videojs.com/html5-video-support/\" target=\"_blank\">supports HTML5 video</a>\r\n  </p>\r\n</video>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/page/player/video-player/video-player.js":
/*!******************************************************!*\
  !*** ./src/page/player/video-player/video-player.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoPlayer; });
/* harmony import */ var _video_palyer_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-palyer.less */ "./src/page/player/video-player/video-palyer.less");
/* harmony import */ var _video_palyer_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_video_palyer_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _video_play_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-play.hbs */ "./src/page/player/video-player/video-play.hbs");
/* harmony import */ var _video_play_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_video_play_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_component_ffv_video_list_big_ffv_video_list_big__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/component/ffv-video-list-big/ffv-video-list-big */ "./src/common/component/ffv-video-list-big/ffv-video-list-big.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! video.js */ "./node_modules/video.js/es5/video.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! video.js/dist/video-js.css */ "./node_modules/video.js/dist/video-js.css");
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var video_js_dist_video_js_swf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! video.js/dist/video-js.swf */ "./node_modules/video.js/dist/video-js.swf");
/* harmony import */ var video_js_dist_video_js_swf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(video_js_dist_video_js_swf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var file_loader_videojs_vtt_js_dist_vtt_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-loader!videojs-vtt.js/dist/vtt.min.js */ "./node_modules/file-loader/dist/cjs.js!./node_modules/videojs-vtt.js/dist/vtt.min.js");
/* harmony import */ var file_loader_videojs_vtt_js_dist_vtt_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_loader_videojs_vtt_js_dist_vtt_min_js__WEBPACK_IMPORTED_MODULE_7__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








video_js__WEBPACK_IMPORTED_MODULE_4___default.a.options.flash.swf = video_js_dist_video_js_swf__WEBPACK_IMPORTED_MODULE_6___default.a;

video_js__WEBPACK_IMPORTED_MODULE_4___default.a.options['vtt.js'] = file_loader_videojs_vtt_js_dist_vtt_min_js__WEBPACK_IMPORTED_MODULE_7___default.a;

var VideoPlayer =
/*#__PURE__*/
function () {
  function VideoPlayer(props) {
    _classCallCheck(this, VideoPlayer);

    Object.assign(this, {
      vid: null,
      $container: null
    }, props);

    this._render();
  }

  _createClass(VideoPlayer, [{
    key: "_render",
    value: function _render() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(window.config.host + "/api/video/getVideo", {
        _id: this.vid
      }).then(function (resp) {
        console.log(_objectSpread({}, resp.data.data));
        var videoDom = _video_play_hbs__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread({}, resp.data.data));
        _this.$container[0].innerHTML = videoDom;
        video_js__WEBPACK_IMPORTED_MODULE_4___default()("ff-video-el", {}, function () {});
        new _common_component_ffv_video_list_big_ffv_video_list_big__WEBPACK_IMPORTED_MODULE_2__["default"]({
          $container: $("#type-video-list"),
          videoType: resp.data.data.videoType,
          order: 0
        });
      });
    }
  }]);

  return VideoPlayer;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/static/avatar/avatar-g-1.jpg":
/*!******************************************!*\
  !*** ./src/static/avatar/avatar-g-1.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/avatar-g-1_93d42b804d4035501cd9d46fb7bf8741.jpg";

/***/ }),

/***/ "./src/static/icon/comment-white.png":
/*!*******************************************!*\
  !*** ./src/static/icon/comment-white.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/static/icon/comment2.png":
/*!**************************************!*\
  !*** ./src/static/icon/comment2.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 1:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21wb25lbnQvZmZ2LWNvbW1lbnQvY29tbWVudC5sZXNzIiwid2VicGFjazovLy8uL3NyYy9wYWdlL3BsYXllci9wbGF5ZXIubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9wbGF5ZXIvdmlkZW8tcGxheWVyL3ZpZGVvLXBhbHllci5sZXNzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L2Zmdi1jb21tZW50L2NvbW1lbnQtaXRlbS5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21wb25lbnQvZmZ2LWNvbW1lbnQvY29tbWVudC5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21wb25lbnQvZmZ2LWNvbW1lbnQvY29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbXBvbmVudC9mZnYtY29tbWVudC9jb21tZW50Lmxlc3M/OGM0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9wbGF5ZXIvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlL3BsYXllci9wbGF5ZXIubGVzcz81MjFhIiwid2VicGFjazovLy8uL3NyYy9wYWdlL3BsYXllci92aWRlby1wbGF5ZXIvdmlkZW8tcGFseWVyLmxlc3M/MmY2MiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9wbGF5ZXIvdmlkZW8tcGxheWVyL3ZpZGVvLXBsYXkuaGJzIiwid2VicGFjazovLy8uL3NyYy9wYWdlL3BsYXllci92aWRlby1wbGF5ZXIvdmlkZW8tcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYXZhdGFyL2F2YXRhci1nLTEuanBnIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaWNvbi9jb21tZW50LXdoaXRlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2ljb24vY29tbWVudDIucG5nIiwid2VicGFjazovLy9taW4tZG9jdW1lbnQgKGlnbm9yZWQpIl0sIm5hbWVzIjpbIkNvbW1lbnQiLCJwcm9wcyIsIk9iamVjdCIsImFzc2lnbiIsIiRjb250YWluZXIiLCJ2aWQiLCJfZ2V0U2VhcmNoT2JqIiwiX3JlbmRlciIsImF4aW9zIiwicG9zdCIsIndpbmRvdyIsImNvbmZpZyIsImhvc3QiLCJ0aGVuIiwicmVzcCIsImRhdGEiLCJjb21tZW50Q291bnRzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImkiLCJfcGFyc2VEYXRlIiwiZnVsbERhdGVUaW1lIiwiZWxDb21tZW50IiwidGVtcGxhdGUiLCJyZXZlcnNlIiwiaW5uZXJIVE1MIiwiX2JpbmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJjb250ZW50IiwidmFsdWUiLCJhdXRob3IiLCJDb29raWUiLCJnZXQiLCJBbGVydCIsIm1lc3NhZ2UiLCJ0eXBlIiwiY29kZSIsImNvbW1lbnRJdGVtIiwidGVtcGxhdGVJdGVtIiwiZWxMaSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbnNlcnRCZWZvcmUiLCJjaGlsZHJlbiIsInN0eWxlIiwiZGlzcGxheSIsIk51bWJlciIsImlubmVyVGV4dCIsInNlYXJjaFN0ciIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyIiwib2JqIiwic2VhcmNoQXJyIiwic3BsaXQiLCJrZXkiLCJzdHIiLCJkYXRlT2JqIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsImZ1bGxEYXRlIiwiZnVsbFRpbWUiLCJQbGF5ZXIiLCIkaGVhZGVyQ29udGFpbmVyIiwiJCIsIiRhcHBDb250YWluZXIiLCIkZm9vdGVyQ29udGFpbmVyIiwidmlkZW9UeXBlIiwiQ29uZmlnIiwiZW52IiwiaGVhZGVyIiwiSGVhZGVyIiwicGxheWVyIiwiVmlkZW9QbGF5ZXIiLCJjb21tZW50IiwidmlkZW9qcyIsIm9wdGlvbnMiLCJmbGFzaCIsInN3ZiIsIlNX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WUFBWTtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBLGNBQWMsNEJBQTRCO1FBQzFDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTs7UUFFSjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTtRQUNBLGVBQWUsNEJBQTRCO1FBQzNDO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0EsZUFBZSw0QkFBNEI7UUFDM0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQix1Q0FBdUM7UUFDeEQ7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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ZmlsZSI6InBsYXllcl9mYWI4NjM3NTkzMzY2YjA0ZDcxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0XHRpZiAocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdH0gO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4gXHRcdGlmIChudWxsKSBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBudWxsO1xuIFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdH1cbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiZmFiODYzNzU5MzM2NmIwNGQ3MThcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRmb3IodmFyIGNodW5rSWQgaW4gaW5zdGFsbGVkQ2h1bmtzKVxuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQgJiZcbiBcdFx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcbiBcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmVcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBsYXllclwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9wYWdlL3BsYXllci9wbGF5ZXIuanNcIixcInZlbmRvcnN+aG9tZX5ocXFiYWNrfmhxcWZyb250fnBsYXllclwiLFwidmVuZG9yc35ob21lfmhxcWJhY2t+cGxheWVyXCIsXCJ2ZW5kb3JzfmhvbWV+cGxheWVyXCIsXCJ2ZW5kb3JzfnBsYXllclwiLFwiaG9tZX5wbGF5ZXJcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG52YXIgdXJsRXNjYXBlID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS91cmwtZXNjYXBlLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vLi4vLi4vc3RhdGljL2ljb24vY29tbWVudC13aGl0ZS5wbmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vLi4vLi4vc3RhdGljL2ljb24vY29tbWVudDIucG5nXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzJfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uLy4uLy4uL3N0YXRpYy9hdmF0YXIvYXZhdGFyLWctMS5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fM19fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vLi4vLi4vc3RhdGljL3BhZ2UtYmcvZW1wdHktYmcucG5nXCIpKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjY29tbWVudC1ib3gge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuI2NvbW1lbnQtYm94IC5jb21tZW50LWlucHV0LWJveCB7XFxuICBmb250LXNpemU6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDZweDtcXG4gIGJveC1zaGFkb3c6IDAgMCA4cHggI2U1ZTllZjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbiNjb21tZW50LWJveCAuY29tbWVudC1pbnB1dC1ib3ggLmNvbW1lbnQtaWNvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDQ2cHg7XFxuICB3aWR0aDogNDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmE5ZjU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMzZweCAzNnB4O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuI2NvbW1lbnQtYm94IC5jb21tZW50LWlucHV0LWJveCAuY29tbWVudC1pbnB1dCB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gNDZweCAtIDYwcHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuI2NvbW1lbnQtYm94IC5jb21tZW50LWlucHV0LWJveCAuY29tbWVudC1jb21taXQtYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZhOWY1O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4jY29tbWVudC1ib3ggLmNvbW1lbnQtaW5wdXQtYm94IC5jb21tZW50LWNvbW1pdC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTFkNjtcXG59XFxuI2NvbW1lbnQtYm94IC5jb21tZW50LXNob3ctYm94IHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbiNjb21tZW50LWJveCAuY29tbWVudC1zaG93LWJveCAuY29tbWVudC10aXRsZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjM2ZhOWY1O1xcbn1cXG4jY29tbWVudC1ib3ggLmNvbW1lbnQtc2hvdy1ib3ggLmNvbW1lbnQtdGl0bGUgLmNvbW1lbnQtc2hvdy1pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fICsgXCIpO1xcbn1cXG4jY29tbWVudC1ib3ggLmNvbW1lbnQtc2hvdy1ib3ggLmNvbW1lbnQtdGl0bGUgLnRpdGxlLXRleHQge1xcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcbn1cXG4jY29tbWVudC1ib3ggLmNvbW1lbnQtc2hvdy1ib3ggLmNvbW1lbnQtdGl0bGUgLmNvbW1lbnQtY291bnRzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcXG4gIGNvbG9yOiAjZWUxNDU1O1xcbn1cXG4jY29tbWVudC1ib3ggLmNvbW1lbnQtc2hvdy1ib3ggLmNvbW1lbnQtbGlzdCAuY29tbWVudC1pdGVtIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxufVxcbiNjb21tZW50LWJveCAuY29tbWVudC1zaG93LWJveCAuY29tbWVudC1saXN0IC5jb21tZW50LWl0ZW0gcCB7XFxuICBtYXJnaW4tbGVmdDogNzhweDtcXG59XFxuI2NvbW1lbnQtYm94IC5jb21tZW50LXNob3ctYm94IC5jb21tZW50LWxpc3QgLmNvbW1lbnQtaXRlbSAuY29tbWVudC1hdmF0YXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxNnB4O1xcbiAgbGVmdDogMzBweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0OHB4O1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG4jY29tbWVudC1ib3ggLmNvbW1lbnQtc2hvdy1ib3ggLmNvbW1lbnQtbGlzdCAuY29tbWVudC1pdGVtIC5jb21tZW50LWF1dGhvciB7XFxuICBjb2xvcjogI2ZiNzI5OTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbiNjb21tZW50LWJveCAuY29tbWVudC1zaG93LWJveCAuY29tbWVudC1saXN0IC5jb21tZW50LWl0ZW0gLmNvbW1lbnQtdGltZSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzk5YTJhYTtcXG59XFxuI2NvbW1lbnQtYm94IC5jb21tZW50LXNob3ctYm94IC5jb21tZW50LWxpc3QgLmNvbW1lbnQtaXRlbSAuY29tbWVudC1jb250ZW50IHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjMjIyO1xcbn1cXG4jY29tbWVudC1ib3ggLmNvbW1lbnQtc2hvdy1ib3ggLmNvbW1lbnQtbGlzdCAuZW1wdHktY29udGVudCB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4jY29tbWVudC1ib3ggLmNvbW1lbnQtc2hvdy1ib3ggLmNvbW1lbnQtbGlzdCAuZW1wdHktY29udGVudCBwIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50eXBlLXZpZGVvLWxpc3Qge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xudmFyIHVybEVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uLy4uLy4uL3N0YXRpYy9pY29uL2hvdC5wbmdcIikpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi52aWRlby10aXRsZSB7XFxuICBsaW5lLWhlaWdodDogNTBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi52aWRlby10aXRsZSAudGl0bGUtdGV4dCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcbi52aWRlby10aXRsZSAudmlkZW8tY291bnQge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4udmlkZW8tdGl0bGUgLnZpZGVvLWNvdW50IGkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuXCIsIFwiXCJdKTtcblxuIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbOCxcIj49IDQuMy4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1jb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgPHA+XFxyXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJjb21tZW50LWF2YXRhclxcXCI+PC9zcGFuPlxcclxcbiAgICA8c3BhbiBjbGFzcz1cXFwiY29tbWVudC1hdXRob3JcXFwiPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5hdXRob3IgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmF1dGhvciA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiYXV0aG9yXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjQsXCJjb2x1bW5cIjozM30sXCJlbmRcIjp7XCJsaW5lXCI6NCxcImNvbHVtblwiOjQzfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3NwYW4+XFxyXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJjb21tZW50LXRpbWVcXFwiPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jcmVhdGVUaW1lIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jcmVhdGVUaW1lIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJjcmVhdGVUaW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjUsXCJjb2x1bW5cIjozMX0sXCJlbmRcIjp7XCJsaW5lXCI6NSxcImNvbHVtblwiOjQ1fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3NwYW4+XFxyXFxuICA8L3A+XFxyXFxuICA8cCBjbGFzcz1cXFwiY29tbWVudC1jb250ZW50XFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuY29udGVudCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29udGVudCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiY29udGVudFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo3LFwiY29sdW1uXCI6Mjl9LFwiZW5kXCI6e1wibGluZVwiOjcsXCJjb2x1bW5cIjo0MH19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9wPlxcclxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1jb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgIDxsaSBjbGFzcz1cXFwiY29tbWVudC1pdGVtXFxcIj5cXHJcXG4gICAgICAgIDxwPlxcclxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY29tbWVudC1hdmF0YXJcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNvbW1lbnQtYXV0aG9yXFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuYXV0aG9yIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5hdXRob3IgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImF1dGhvclwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxOCxcImNvbHVtblwiOjM5fSxcImVuZFwiOntcImxpbmVcIjoxOCxcImNvbHVtblwiOjQ5fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3NwYW4+XFxyXFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjb21tZW50LXRpbWVcXFwiPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jcmVhdGVUaW1lIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jcmVhdGVUaW1lIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJjcmVhdGVUaW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjE5LFwiY29sdW1uXCI6Mzd9LFwiZW5kXCI6e1wibGluZVwiOjE5LFwiY29sdW1uXCI6NTF9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvc3Bhbj5cXHJcXG4gICAgICAgIDwvcD5cXHJcXG4gICAgICAgIDxwIGNsYXNzPVxcXCJjb21tZW50LWNvbnRlbnRcXFwiPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb250ZW50IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb250ZW50IDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJjb250ZW50XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIxLFwiY29sdW1uXCI6MzV9LFwiZW5kXCI6e1wibGluZVwiOjIxLFwiY29sdW1uXCI6NDZ9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvcD5cXHJcXG4gICAgICA8L2xpPlxcclxcblwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiAgICAgIDxsaSBjbGFzcz1cXFwiZW1wdHktY29udGVudFxcXCI+XFxyXFxuICAgICAgICA8cD7ov5jmsqHkurrlkaLvvIzlv6vljrvmiqLkuKrmspnlj5HlkKc8L3A+XFxyXFxuICAgICAgPC9saT5cXHJcXG5cIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pO1xuXG4gIHJldHVybiBcIjxkaXYgaWQ9XFxcImNvbW1lbnQtYm94XFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNvbW1lbnQtaW5wdXQtYm94XFxcIj5cXHJcXG4gICAgPHNwYW4gY2xhc3M9XFxcImNvbW1lbnQtaWNvblxcXCI+PC9zcGFuPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImNvbW1lbnQtaW5wdXRcXFwiIHBsYWNlaG9sZGVyPVxcXCLlj5HkuKror4TorrrlkozlpKflrrbkuIDotbforqjorrrlkKdcXFwiPlxcclxcbiAgICA8c3BhbiBjbGFzcz1cXFwiY29tbWVudC1jb21taXQtYnRuXFxcIj7lj5HpgIE8L3NwYW4+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNvbW1lbnQtc2hvdy1ib3hcXFwiPlxcclxcbiAgICA8aDMgY2xhc3M9XFxcImNvbW1lbnQtdGl0bGVcXFwiPlxcclxcbiAgICAgIDxpIGNsYXNzPVxcXCJjb21tZW50LXNob3ctaWNvblxcXCI+PC9pPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0aXRsZS10ZXh0XFxcIj7or4Torro8L3NwYW4+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImNvbW1lbnQtY291bnRzXFxcIj5cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb21tZW50Q291bnRzIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb21tZW50Q291bnRzIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImNvbW1lbnRDb3VudHNcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTEsXCJjb2x1bW5cIjozNX0sXCJlbmRcIjp7XCJsaW5lXCI6MTEsXCJjb2x1bW5cIjo1Mn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9zcGFuPlxcclxcbiAgICA8L2gzPlxcclxcbiAgICA8b2wgY2xhc3M9XFxcImNvbW1lbnQtbGlzdFxcXCI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5kYXRhIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDApLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNCxcImNvbHVtblwiOjZ9LFwiZW5kXCI6e1wibGluZVwiOjI3LFwiY29sdW1uXCI6MTV9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgIDwvb2w+XFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsImltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcIi4uL2Zmdi1hbGVydC9hbGVydFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcblxyXG5cclxuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL2NvbW1lbnQuaGJzXCJcclxuaW1wb3J0IHRlbXBsYXRlSXRlbSBmcm9tIFwiLi9jb21tZW50LWl0ZW0uaGJzXCJcclxuaW1wb3J0IFwiLi9jb21tZW50Lmxlc3NcIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xyXG4gICAgICAkY29udGFpbmVyOiBudWxsLFxyXG4gICAgfSwgcHJvcHMpO1xyXG4gICAgLy8gdGhpcy5hdXRob3IgPSBDb29raWUuZ2V0KFwidW5cIik7XHJcbiAgICB0aGlzLnZpZCA9IHRoaXMuX2dldFNlYXJjaE9iaigpLnZpZDtcclxuICAgIHRoaXMuX3JlbmRlcigpXHJcbiAgfVxyXG5cclxuICBfcmVuZGVyKCl7XHJcbiAgICBheGlvcy5wb3N0KHdpbmRvdy5jb25maWcuaG9zdCArICcvYXBpL2NvbW1lbnQvZ2V0Q29tbWVudCcsIHtcclxuICAgICAgdmlkOiB0aGlzLnZpZFxyXG4gICAgfSkudGhlbihyZXNwID0+IHtcclxuICAgICAgdGhpcy5kYXRhID0gcmVzcC5kYXRhLmRhdGE7XHJcbiAgICAgIGxldCBjb21tZW50Q291bnRzID0gdGhpcy5kYXRhLmxlbmd0aDtcclxuICAgICAgY29uc29sZS5sb2coXCJjb21tZW50XCIsdGhpcy5kYXRhKTtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkgKyspe1xyXG4gICAgICAgIHRoaXMuZGF0YVtpXVtcImNyZWF0ZVRpbWVcIl0gPSB0aGlzLl9wYXJzZURhdGUodGhpcy5kYXRhW2ldW1wiY3JlYXRlVGltZVwiXSkuZnVsbERhdGVUaW1lO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBlbENvbW1lbnQgPSB0ZW1wbGF0ZSh7XHJcbiAgICAgICAgZGF0YTogdGhpcy5kYXRhLnJldmVyc2UoKSxcclxuICAgICAgICBjb21tZW50Q291bnRzOiBjb21tZW50Q291bnRzLFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy4kY29udGFpbmVyWzBdLmlubmVySFRNTCA9IGVsQ29tbWVudDtcclxuICAgICAgdGhpcy5fYmluZCgpO1xyXG4gICAgfSlcclxuXHJcbiAgfVxyXG5cclxuICBfYmluZCgpe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21tZW50LWJveCAuY29tbWVudC1jb21taXQtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldiA9PiB7XHJcbiAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21tZW50LWJveCAuY29tbWVudC1pbnB1dFwiKS52YWx1ZTtcclxuICAgICAgdGhpcy5hdXRob3IgPSBDb29raWUuZ2V0KFwidW5cIik7XHJcbiAgICAgIGlmICghdGhpcy5hdXRob3IpIHtcclxuICAgICAgICBuZXcgQWxlcnQoe1xyXG4gICAgICAgICAgbWVzc2FnZTogXCLmuLjlrqLml6Dms5Xor4TorrrllpTvvIzor7flhYjnmbvpmYZcIixcclxuICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAgIG5ldyBBbGVydCh7XHJcbiAgICAgICAgICBtZXNzYWdlOiBcIuivhOiuuuWGheWuueS4uuepulwiLFxyXG4gICAgICAgICAgdHlwZTogXCJlcnJvclwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGF4aW9zLnBvc3Qod2luZG93LmNvbmZpZy5ob3N0ICsgJy9hcGkvY29tbWVudC9zZXRDb21tZW50Jywge1xyXG4gICAgICAgIHZpZDogdGhpcy52aWQsXHJcbiAgICAgICAgYXV0aG9yOiB0aGlzLmF1dGhvcixcclxuICAgICAgICBjb250ZW50OiBjb250ZW50XHJcbiAgICAgIH0pLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3AuZGF0YS5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgbmV3IEFsZXJ0KHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCLor4TorrrmiJDlip9cIixcclxuICAgICAgICAgICAgdHlwZTogXCJzdWNjZXNzXCJcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY29tbWVudEl0ZW0gPSB0ZW1wbGF0ZUl0ZW0oe1xyXG4gICAgICAgICAgLi4ucmVzcC5kYXRhLmRhdGFcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGVsTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgZWxMaS5jbGFzc0xpc3QuYWRkKFwiY29tbWVudC1pdGVtXCIpO1xyXG4gICAgICAgIGVsTGkuaW5uZXJIVE1MID0gY29tbWVudEl0ZW07XHJcbiAgICAgICAgLy8gbGV0IGRvbSA9IG5ldyBET01QYXJzZXIoY29tbWVudEl0ZW0sIFwidGV4dC9odG1sXCIpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbW1lbnQtYm94IC5jb21tZW50LWxpc3RcIikuaW5zZXJ0QmVmb3JlKGVsTGksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tbWVudC1ib3ggLmNvbW1lbnQtbGlzdFwiKS5jaGlsZHJlblswXSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tbWVudC1ib3ggLmNvbW1lbnQtaW5wdXRcIikudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21tZW50LWJveCAuZW1wdHktY29udGVudFwiKSl7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbW1lbnQtYm94IC5lbXB0eS1jb250ZW50XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjb21tZW50Q291bnRzID0gIE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbW1lbnQtYm94IC5jb21tZW50LWNvdW50c1wiKS5pbm5lclRleHQpICsgMTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbW1lbnQtYm94IC5jb21tZW50LWNvdW50c1wiKS5pbm5lclRleHQgPSBjb21tZW50Q291bnRzO1xyXG5cclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbiAgX2dldFNlYXJjaE9iaigpIHtcclxuICAgIGxldCBzZWFyY2hTdHIgPSBsb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpO1xyXG4gICAgbGV0IG9iaiA9IHt9O1xyXG4gICAgbGV0IHNlYXJjaEFyciA9IHNlYXJjaFN0ci5zcGxpdChcIiZcIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlYXJjaEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQga2V5ID0gc2VhcmNoQXJyW2ldLnNwbGl0KFwiPVwiKVswXTtcclxuICAgICAgbGV0IHZhbHVlID0gc2VhcmNoQXJyW2ldLnNwbGl0KFwiPVwiKVsxXTtcclxuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG5cclxuICBfcGFyc2VEYXRlKHN0cil7XHJcblxyXG4gICAgbGV0IGRhdGVPYmogPSB7fVxyXG4gICAgZGF0ZU9iai55ZWFyID0gc3RyLnN1YnN0cigwLCA0KTtcclxuICAgIGRhdGVPYmoubW9udGggPSBzdHIuc3Vic3RyKDUsIDIpO1xyXG4gICAgZGF0ZU9iai5kYXkgPSBzdHIuc3Vic3RyKDgsIDIpO1xyXG5cclxuICAgIGRhdGVPYmouaG91ciA9IChOdW1iZXIoc3RyLnN1YnN0cigxMSwgOCkuc3BsaXQoXCI6XCIpWzBdKSArIDgpJTI0O1xyXG4gICAgZGF0ZU9iai5taW51dGUgPSBzdHIuc3Vic3RyKDExLCA4KS5zcGxpdChcIjpcIilbMV07XHJcbiAgICBkYXRlT2JqLnNlY29uZCA9IHN0ci5zdWJzdHIoMTEsIDgpLnNwbGl0KFwiOlwiKVsyXTtcclxuXHJcbiAgICBkYXRlT2JqLmZ1bGxEYXRlID0gYCR7ZGF0ZU9iai55ZWFyfeW5tCR7ZGF0ZU9iai5tb250aH3mnIgke2RhdGVPYmouZGF5feaXpWA7XHJcbiAgICBkYXRlT2JqLmZ1bGxUaW1lID0gYCR7ZGF0ZU9iai5ob3VyfToke2RhdGVPYmoubWludXRlfToke2RhdGVPYmouc2Vjb25kfWA7XHJcblxyXG4gICAgZGF0ZU9iai5mdWxsRGF0ZVRpbWUgPSBkYXRlT2JqLmZ1bGxEYXRlICsgXCIgXCIgK2RhdGVPYmouZnVsbFRpbWU7XHJcblxyXG4gICAgcmV0dXJuIGRhdGVPYmo7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIC8vIHdlYmhvb2sgdGVzdFxyXG5cclxufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3Bvc3Rjc3MhLi9jb21tZW50Lmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cG9zdGNzcyEuL2NvbW1lbnQubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cG9zdGNzcyEuL2NvbW1lbnQubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudC9mZS1jb25maWdcIlxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50L2Zmdi1oZWFkZXIvaGVhZGVyXCJcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50L2Zmdi1hbGVydC9hbGVydFwiO1xyXG5pbXBvcnQgVmlkZW9QbGF5ZXIgZnJvbSBcIi4vdmlkZW8tcGxheWVyL3ZpZGVvLXBsYXllclwiXHJcbmltcG9ydCBDb21tZW50IGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50L2Zmdi1jb21tZW50L2NvbW1lbnRcIlxyXG5cclxuaW1wb3J0IFwiLi9wbGF5ZXIubGVzc1wiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllcntcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuJGhlYWRlckNvbnRhaW5lciA9ICQoXCIjaGVhZGVyLWJveFwiKTtcclxuICAgIHRoaXMuJGFwcENvbnRhaW5lciA9ICQoXCIjYXBwLWJveFwiKTtcclxuICAgIHRoaXMuJGZvb3RlckNvbnRhaW5lciA9ICQoXCIjZm9vdGVyLWJveFwiKTtcclxuXHJcbiAgICB0aGlzLnZpZCA9IHRoaXMuX2dldFNlYXJjaE9iaigpLnZpZDtcclxuICAgIHRoaXMudmlkZW9UeXBlID0gdGhpcy5fZ2V0U2VhcmNoT2JqKCkudmlkZW9UeXBlO1xyXG5cclxuICAgIC8vIOeOr+Wig+WPmOmHj+mFjee9rlxyXG4gICAgbmV3IENvbmZpZyh7XHJcbiAgICAgIGVudjogXCJwcm9cIixcclxuICAgICAgLy8gZW52OiAnZGV2J1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJyZW5kZXIgcGxheWVyIHBhZ2UhISFcIilcclxuICAgIHRoaXMuX3JlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgX3JlbmRlcigpIHtcclxuICAgIC8qKlxyXG4gICAgICog5riy5p+TSGVhZGVyXHJcbiAgICAgKi9cclxuICAgIGxldCBoZWFkZXIgPSBuZXcgSGVhZGVyKHtcclxuICAgICAgJGNvbnRhaW5lcjogdGhpcy4kaGVhZGVyQ29udGFpbmVyLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLLmn5Pmkq3mlL7lmahcclxuICAgICAqL1xyXG5cclxuICAgICBsZXQgcGxheWVyID0gbmV3IFZpZGVvUGxheWVyKHtcclxuICAgICAgIHZpZDogdGhpcy52aWQsXHJcbiAgICAgICAkY29udGFpbmVyOiAkKFwiI3ZpZGVvLXBsYXllci1ib3hcIilcclxuICAgICB9KVxyXG5cclxuXHJcbiAgICAgbGV0IGNvbW1lbnQgPSBuZXcgQ29tbWVudCh7XHJcbiAgICAgICAkY29udGFpbmVyOiAkKFwiI2NvbW1lbnQtYmlnLWJveFwiKVxyXG4gICAgIH0pXHJcblxyXG5cclxuICAgIC8vIG5ldyBBbGVydCgpO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBfZ2V0U2VhcmNoT2JqKCl7XHJcbiAgICBsZXQgc2VhcmNoU3RyID0gbG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKTtcclxuICAgIGxldCBvYmogPSB7fTtcclxuICAgIGxldCBzZWFyY2hBcnIgPSBzZWFyY2hTdHIuc3BsaXQoXCImXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWFyY2hBcnIubGVuZ3RoOyBpKyspe1xyXG4gICAgICBsZXQga2V5ID0gc2VhcmNoQXJyW2ldLnNwbGl0KFwiPVwiKVswXTtcclxuICAgICAgbGV0IHZhbHVlID0gc2VhcmNoQXJyW2ldLnNwbGl0KFwiPVwiKVsxXTtcclxuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG5cclxufVxyXG5cclxubmV3IFBsYXllcigpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3Bvc3Rjc3MhLi9wbGF5ZXIubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9wb3N0Y3NzIS4vcGxheWVyLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3Bvc3Rjc3MhLi9wbGF5ZXIubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3Bvc3Rjc3MhLi92aWRlby1wYWx5ZXIubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9wb3N0Y3NzIS4vdmlkZW8tcGFseWVyLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3Bvc3Rjc3MhLi92aWRlby1wYWx5ZXIubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCI8aDIgY2xhc3M9XFxcInZpZGVvLXRpdGxlXFxcIj5cXHJcXG4gIDxzcGFuIGNsYXNzPVxcXCJ0aXRsZS10ZXh0XFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMudmlkZW9OYW1lIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC52aWRlb05hbWUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcInZpZGVvTmFtZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6Mjd9LFwiZW5kXCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjo0MH19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9zcGFuPlxcclxcbiAgPHNwYW4gY2xhc3M9XFxcInZpZGVvLWNvdW50XFxcIj48aSBjbGFzcz1cXFwidGl0bGUtaG90LWljb25cXFwiPjwvaT5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMudmlld0NvdW50cyB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudmlld0NvdW50cyA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidmlld0NvdW50c1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6NTh9LFwiZW5kXCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjo3Mn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9zcGFuPlxcclxcbjwvaDI+XFxyXFxuXFxyXFxuPHZpZGVvIGlkPVxcXCJmZi12aWRlby1lbFxcXCIgY2xhc3M9XFxcInZpZGVvLWpzIHZqcy1kZWZhdWx0LXNraW5cXFwiIHByZWxvYWQ9XFxcImF1dG9cXFwiIGNvbnRyb2xzIHdpZHRoPVxcXCIxMTYwXFxcIiBoZWlnaHQ9XFxcIjYwMFxcXCIgcG9zdGVyPVxcXCJcXFwiIGRhdGEtc2V0dXA9XFxcInt9XFxcIj5cXHJcXG4gIDxzb3VyY2Ugc3JjPVwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy52aWRlb1VybCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudmlkZW9VcmwgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcInZpZGVvVXJsXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjcsXCJjb2x1bW5cIjoxNH0sXCJlbmRcIjp7XCJsaW5lXCI6NyxcImNvbHVtblwiOjI2fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCIgdHlwZT1cXFwicnRtcC9mbHZcXFwiPlxcclxcbiAgPHAgY2xhc3M9XFxcInZqcy1uby1qc1xcXCI+5pKt5pS+6KeG6aKR6ZyA6KaB5ZCv55SoIEphdmFTY3JpcHTvvIzmjqjojZDkvb/nlKjmlK/mjIFIVE1MNeeahOa1j+iniOWZqOiuv+mXruOAglxcclxcbiAgICBUbyB2aWV3IHRoaXMgdmlkZW8gcGxlYXNlIGVuYWJsZSBKYXZhU2NyaXB0LCBhbmQgY29uc2lkZXIgdXBncmFkaW5nIHRvIGEgd2ViIGJyb3dzZXIgdGhhdFxcclxcbiAgICA8YSBocmVmPVxcXCJodHRwOi8vdmlkZW9qcy5jb20vaHRtbDUtdmlkZW8tc3VwcG9ydC9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5zdXBwb3J0cyBIVE1MNSB2aWRlbzwvYT5cXHJcXG4gIDwvcD5cXHJcXG48L3ZpZGVvPlxcclxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwiaW1wb3J0IFwiLi92aWRlby1wYWx5ZXIubGVzc1wiO1xyXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vdmlkZW8tcGxheS5oYnNcIjtcclxuaW1wb3J0IFZpZGVvTGlzdEJpZyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudC9mZnYtdmlkZW8tbGlzdC1iaWcvZmZ2LXZpZGVvLWxpc3QtYmlnXCI7XHJcblxyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgdmlkZW9qcyBmcm9tIFwidmlkZW8uanNcIjtcclxuaW1wb3J0ICd2aWRlby5qcy9kaXN0L3ZpZGVvLWpzLmNzcyc7XHJcbmltcG9ydCBTV0ZfUEFUSCBmcm9tICd2aWRlby5qcy9kaXN0L3ZpZGVvLWpzLnN3Zic7XHJcbnZpZGVvanMub3B0aW9ucy5mbGFzaC5zd2YgPSBTV0ZfUEFUSDtcclxuaW1wb3J0IFZUVEpTX1BBVEggZnJvbSAnZmlsZS1sb2FkZXIhdmlkZW9qcy12dHQuanMvZGlzdC92dHQubWluLmpzJztcclxudmlkZW9qcy5vcHRpb25zWyd2dHQuanMnXSA9IFZUVEpTX1BBVEg7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW9QbGF5ZXJ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xyXG4gICAgICB2aWQ6IG51bGwsIFxyXG4gICAgICAkY29udGFpbmVyOiBudWxsLFxyXG4gICAgfSwgcHJvcHMpXHJcblxyXG4gICAgdGhpcy5fcmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgX3JlbmRlcigpe1xyXG4gICAgYXhpb3MucG9zdCh3aW5kb3cuY29uZmlnLmhvc3QgKyBcIi9hcGkvdmlkZW8vZ2V0VmlkZW9cIiwge1xyXG4gICAgICBfaWQ6dGhpcy52aWQsXHJcbiAgICB9KS50aGVuKHJlc3AgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh7Li4ucmVzcC5kYXRhLmRhdGF9KVxyXG4gICAgICBsZXQgdmlkZW9Eb20gPSB0ZW1wbGF0ZSh7Li4ucmVzcC5kYXRhLmRhdGF9KTtcclxuICAgICAgdGhpcy4kY29udGFpbmVyWzBdLmlubmVySFRNTCA9IHZpZGVvRG9tO1xyXG5cclxuICAgICAgdmlkZW9qcyhcImZmLXZpZGVvLWVsXCIsIHt9LCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIG5ldyBWaWRlb0xpc3RCaWcoe1xyXG4gICAgICAgICRjb250YWluZXI6ICQoXCIjdHlwZS12aWRlby1saXN0XCIpLFxyXG4gICAgICAgIHZpZGVvVHlwZTogcmVzcC5kYXRhLmRhdGEudmlkZW9UeXBlLFxyXG4gICAgICAgIG9yZGVyOiAwXHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvYXZhdGFyLWctMV85M2Q0MmI4MDRkNDAzNTUwMWNkOWQ0NmZiN2JmODc0MS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNZ0FBQURJQ0FZQUFBQ3RXSzZlQUFBVkYwbEVRVlI0WHUxZEM5aXRSVlYrWDBFRGI0Z2lFcG9FR1ppa2lXRVlpSEk5WE9RQkVzaENBUlU2Z1lCNUFVblFQS2Nralp1aWdBamVpVXQ2VElpNGlYQ0lzQ1FMcFFSRGUwSXprcHNwaEJwaXZEMExaOHZ2ejcrLy9jMzN6Y3czZSs4MXozTWV6c05aczlhYWQ4MjcxOHg4Y3lHOE9BS093RmdFNk5nNEFvN0FlQVNjSU40N0hJRUdCSndnM2owY0FTZUk5d0ZIb0JzQ25rRzY0ZWExTWlJZzZYa0E5Z0JnLzEwYndJMEFiZ0J3T2NuL3pXajZFYXFkSUNYUmRsdU5DRWphRnNDSkFMWWFJM2diZ0FOSXJpNEZwUk9rRk5KdVp4STVWZ0w0bzVZd3Zacmt4MXZLOWhKemd2U0N6eXVuUUVEU0dRQU9pOUFsQUFlUlBDZWlUaWRSSjBnbjJMeFNLZ1E2a0dOa3VnaEpuQ0NwSXUxNm9oSG9RWTZGSkZsTzhrUFJ4bHRXR0lRZ2t0WUNzQ1dBcHdONEtvRDFBS3dmL3Y1a0FHdTA5Ti9GMGlOd0I0Q0RTZDZYWHZYREdpV2RCdUR3UkRaZVIvSURpWFQ5akpwaUJKRzBMb0RsQUhZRDhOSWNqWEdkdlJHNEc4QzJKUCsxdDZZR0JZbkpNYkowT0VtYnl5UXQyUWtpYVJNQXh3QTRFSUJsRGk5MUluQ24vWEFWSU1mN0FCeVpDWUlqU1ZwbVNsYXlFVVRTY3dFY0IyQmZIeklsaTFjdVJYZUZ6SEZMTGdPbU44R2NvNDE3UjVBOHZZMWdHNW5rQkpHMFFmalk4Nm8yRHJqTTRBak1FamxHWUNZalNWS0NTSG9kZ0JNQVBHN3dzTHNEYlJDd09jZDJKRzlxSTl4VlJ0S2VBQzdxV3I5anZUZVNmRy9IdWordGxvUWdrb3dRZndIZ1pYMGQ4dnJGRVBodkFGdVR6RHFzR3JWRzB2c0JIRkdzZFQ4eDFEdVQ5Q2FJcE0wQi9CVUFtNHg3bVE0RXZoc201UDlTMGwxSk5ybzR1cVJOczBmeXBLNDJleEZFa21VTXl4dytwT29hZ2ZMMUxIUFlhdFZYeXB0K2FLSnVteEdQS216N0tKSW5kN0habVNDU1hnN2cwMTJNZXAzQkVEQnkySndqYSthd0lUZko3NDlycGFUakFSeGJHSVcza254M3JNMU9CSkcwQllBdkFIaE1yRUdYSHd5QjdKbERrdTJBc01uNE9nQ1drZnhoQTBtbUlwTkVFMFRTTXdCOEtXd1BHU3phYmpnS0FadHpiRS9TRGg1bEs1S01ITFppWmVWdkFPeE84Z2NOSkhrN2dEL081dERTaXQ5RzBqSllxeEpGRUVsckFyZ2V3QXRhYVhlaEdoQzRCOENMYzg0NVFyKzRjSWxWek90YVpKSTNBK2c4aWU0SThBcVNkdjVrWW9rbGlLMHIvOEZFclM1UUN3TDNoc3hoeDFXekZVbVhXTFlZWStCYTIzODNJWlA4SVlCM1pYTndhY1YvU3RKMmVqU1cxZ1NSWkZuam55WXA5SCt2QmdFanh3NGtzOFpNMHFWaEEycFR3OXVReFBiclJVK2llNkk5Y2JnVlE1Qi9BUERDbmc1NTlUSUkyTERLeUpFN2MveDF4TWZodndXdzY0Uk1Zc3UvTm5rdldXeWVkTms0ZzYwSUltay9BSjhzNmJYYjZveUFrY01tNUxhUWtxV0VPWWRsanAwakRiU1prOWdaa2FRN2NpZjRlQ3VBWjVGOGNDbTV0Z1N4ZGZOZmpRVER4Y3NqVURNNVJtalVTQkxMYkZkMElvaWtIUUJjVlQ3VytIYTREOG5XNzIyWjB2NjdKTXNIOEsxV2t4Zm5uSE9FazZDMnJTZzJjeXpHcTgyYzVQVUFUaTBFOUVxU0s3b1N4TGFTL0hZaFIyM04vRE1BN0xhS0s4ZWx2VUsrdUprRkNFaXlqOEwySzd0ZEltRGFaSkpEQUp5ZHlGNlRtak5KTG5tclN1TVFTNUo5RWJYekFvL083S1JsQi91MU9KV2tEUk84VklSQUJuTEVETGRLa09ROUpOOFVuVUVrbFhET1V0dEpUWHQzS3VvcmMrbUtwTThCMkRGVDQ5c010K3pYUGZsNTh3WHRzWnRSbHN4VWt6Skl6dUdWM1pxeE44a2g1amVaWWoxYmFqTm1qc1ZBdFIxdW5RV2cxY0pTUkNUc2ZxMmZKMm0zdVR5aVRDTEk3UUNlRm1Hc3JlaTNBT3hDOHF0dEs3aGNXUVFrMmFYUjlvVjgrMEtXMjN3bnlUR2lXVVhTUG1Nc1djWVNSTkl2QS9oYUJuRHNkdTRYNXR3YmxNSG51Vkk1QURsRytMWVpicjBXd0ljVEJjUjJHMWhmSE52UG13aXlkMWhSU3VUTFQ5WHNRL0l2VXl0MWZXa1FDT1N3TDh0RDNWM1doaVN2QWZDUm5pMjI4eXEyMjhCMmlJd3RUUVRKc1lIc1pKS2xUNVAxeEhGK3FsZEFqcGhNY2dDQVQzU01qcEZqUjVLMk03MnhOQkhFN2pzOWVKS0NpSCszaThrMmJ0cUxFNkhMUlJNakVNaHhPWUNYSkZiZFZWMmJUR0pYUzhYZThHN2sySW1rSGZpYldKb0ljaTZBL1NkcWFDOXdLTWtQdGhkM3lWSUloQy9rdHBxNGRTbWJMZTIwV2QxNkJZRHpXNjV1MmNxcFpZN0dZZFZDMzVvSWtuS0o5eHNrTjI0Smlvc1ZSQ0JrRHZ0Q2JxODcxVmphWkpMZkNTUnA4dDh5eDg0ay96Nm1rVTBFV1FWZ254aGxEYklua254TElsMnVKaEVDZ1J5ZnRST0hpVlRtVXRPR0pKWkpMaGpqUUNkeW1LNVNCSGtKU1Z2bjlsSUpBdUd5UHlOSGJjT3FjUWkxR1c3WnlxdjlzQzk4UGlONldOVjJpSlVxZzl4TDB2WjBlYWtFZ1VBT2V3aHoyZzdBdFNYSnB3RFkvUW0yK2RYT3hyU2VjeXdPVVlrTWNqWEpYUHQ0S3VseTArUEdGSk5qQkhJYmt0aUZodWZaYVVlU0p0KzVsQ0RJdVNUOXB2Zk9JVXBYVWRManc1YjFhUmxXald0OG15dUYxa214TTd3RVFVNGhhVmU3ZUJrUWdSbklISXZSbTVoSlVzQmRnaURIa2l4OXBVc0tiR1pHUjhnY3RtVjlxNWxwMUU4YU1uRjFxMjk3blNCOUVheTh2cVFuaENQVDB6WWhiNHRzMWt4U2dpQ2RMZzF1aTQ3TGpVY2duQWk5ZWc1dXdseE4wdTVPU0Y1S0VNU0hXTW5ETmxsaHlCdzJCSG4rWk9tcGx2Z3hnTDFJMmpWRXlZc1RKRG1rd3l1Y0kzSThFRTZsWmlHSFJkSUpNbngvVHVyQm5KSERia1cweFlkc3hRbVNEZHJ5aXAwYzZURjNncVRIZEJDTmtwNEV3TGFQelBxYzQzNEFlK1RPSEtNZ09rRUc2YzVwalFaeTJIS25QYWc2eThYSVlaZDkySmYwSXNVSlVnVG1mRWFjSFBtdzlVbDZYbXl6YTNkeVpJZllWN0h5UTV6SHdoeVJ3eDRDdFJlcWlnMnJGa2JNaDFoNSttOVdyWE5HRGp0REhuVk1OaVg0VHBDVWFCYlE1ZVFvQVBJQ0UwNlFzbmozc2licEtlRjU1VmxmcmJKanN2Yk8rbUNadzVkNWUzWFY4cFVET1Q0UFlMUHkxb3RhTkhMWU1kbC9MR3AxakRIUElEVkVZWUlQVG83aGd1UUVHUTc3VnBhZEhLMWd5aVpVZ2lCK0hxUmorQ1N0SCtZY3orNm9ZbHFxMmF0aXRscVYrMDMzdFVqYTZ3S3RTd21DK0htUTF1RjRXSENPTW9jOVFXRDNwdDNZQWFiV1ZTUnRBdUR0Sk8xbStOYkZDZElhcW5LQ0lYUFlZYWRabjVDWElvZGRlMnNyWXY5TWNsbE1KSjBnTVdnVmtBM2tzR0RhTDk0c0YzdmEyMWFyY21lT0VUbnNwVFI3T2RrSk1xMjlhczdJOFdLU04rZU1sYVNGNURCVFRwQ2NnT2ZVN2VSSWk2NmtUY08xUUF2ZjJIU0NwSVc1akRZblIxcWNBem5zbytwNml6UTdRZEpDblYvYkhKSGpibnYzc01Dd3lqTEhVdVR3SVZiKzdweldncVFOQWRpekVMTStJVGR5Yk5QMG1td0taQ1U5SjN3M1dwdzVSdW85ZzZRQXVvU09RSTYvQTdCUkNYc0QyaWhKRGp0MnZHNURXNTBnQTNhRTFxYm5pQngzaEkrQVk5OGhidzFhZzJESUhKUEk0VU9zRkdEbjFqRm41UGhOa3JmbXhEU0NIRTZRbklGSW9kdkprUUxGaDNWSStyVncxVkhUc0dxaFVSOWlwUTFCT20xT2puUlltcVpBRHR1Tzg4UUl6VTZRQ0xDS2ljNFJPVzZ6NTZRTERLc3NjOFNTdzRkWXhYcDhoQ0ZKend6Qm5QWFZLaVBIMWlUL0l3S2VhTkdPbWNPWGVhT1JMbEFoa01PV2NwOWV3TnlRSmtxUlk4dndHRkRNc01ybklFUDJqSEcyNTRnYzN3eEx1Ymt6aDVIRDdoNjJoMGk3bGlybklITjNvbERTTDRZdjVNL29Hc2twcVdma3NGMjUvNW5UWDBuUEM5dEgrcEREWFB3c3lWMWlmQzF4SG1RZUNmSkdBS2ZFQkdJS1pmODk3SzNLU282d1luVVlnRE1TWUZRbFFlYnl5SzJrZHdCWWtTQ29OYXF3ekdFVDh2OHE0Wnlrd3dHY2xzQldsVU9zdVNSSStPV3o5K0ZQU2hEWW1sUlk1ckNsM0NMa0NEZzZRV3JxQVNsOWtUUkxKREZ5MlBhUk8xTmlORW5YckdlUW1aK0RTRHFJNU1jYlZyU09BZkR1U1IyaDhuKzNEWWQybnVQMjBuNUs4amxJYWRCVDJaTmtkMVo5RmNBUkpFOXZJRW1xWVVJcTEyUDAzQktXY290bWpwR0RzNTVCWm5vT0l1bE5BRTRPd1R5SzVPanZqK2lBQ1FNZDA3bjd5aG81N0xEVGQvb3E2bG8vSVc0K1NlOGFoSzcxSkYwSllLY0Y5V2VKSklPVHd5ZnBYWHRtQmZVa3JRM2dmd0Nzc2NpZFdTQkpGZVJ3Z2xUUTBidTZJR2t2QUJlT3FiK0M1TXFHT2NraEFNN3VhanR6dlp2Q2hIeXdZZFhDOXZrUUszTzBjNm1YOUVFQXl4djBuMFR5NkNramlaSER0bzk4THhkdXNYcWRJTEdJVlNJdnliWlpUTnFwMjRZa1p3SGpIMVF0Mk56cXlPRkRySUxSVDJsSzBuUHRNdVNXT2llUjVBQUE5aDFsN042NGxuYjZpSDA1M0pWYlRlWVlOY1l6U0ord0RsUlgwbHNBL0ZtRStacEpZdVN3Sndoc3dhRzY0Z1NwTGlTVEhaSjBqVTFrSjB2K2pNUnBKSTlzbUpNTWtVbXFKb2NQc1NKN1dBM2lEY3U3YmR5cmlTVFZrOE1KMHFaTFZTWWphVjhBbityaDFpU1N2QUxBK1pubkpGOE16NTVWT2F4YWlLMFBzWHIwdENHcVN2b0lnS2ludkpidzgyeVNZNWVJSmVVa2laSERIcS81L2hENHhkcDBnc1FpTnJDOEpOdTA5OVFFYmd4Qmtxa2lodyt4RXZTeWtpb2t2UUJBeXRkWTI1RGszQ1cyczNScHR0MndzbXhhTXNlb2daNUJ1b1I2b0RxU2pnUHd6c1RtSjVGa2J3Q3JlcExFeUdGUExVYzlnNXk0blozVU9VRTZ3VFpNSlVuMk9NdldHYXgvZ3VSQkRVdkFmVWd5dGVUd0lWYUducFpMcFNTN3NNeStOT2Y2NHQyR0pMWjZ0bVpFRzZlYUhFNlFpRWdQTFNycGR3R2NsOW1QU1NUWkhjQkZMVWxpSHpOM204WmhsUy96WnU1bE9kUkxPZ2ZBcTNMb1hxUXpCVW1NSEx1US9GRUJmN09hOERsSVZualRLWmRrdzZ0MTBtbHMxSFFCU2N0WVN4WkpUWmxrWnNqaFE2eEN2YTJ2R1VtL0FlRDZ2bm9pNjdjaGlSM1lldlFDdlhZRWVJOVp5QnlqTm5rR2lldzFRNGhMc2xzUzdiYkUwdVVDQUs4aytlQlNoaVhaZWZoTEEwbU1ITHVUL0hGcEozUGFtM1dDek1TOVdKSytBR0NybkIyaFFmZjVKUGR2R0c3dEJ1QlFrbllFZU9hS3BFTUJmQ0JCdzY0Z3VXdU1uaEtYVjAvOXRUK1M3TjF0MjE2U2EzbTNUY3crQTJEZmNabWtqWUpwbFpuMURESUxCRGt3blBnYnVvL05KVW1jSUVOM3V3bjJKZGs4d0hiWDFsQ01KUHVSL0w4YW5DbmhneE9rQk1vOWJCUmUzbTNqNlNVQTlwb1hramhCMm5TSmdXUWtiUVBndW9ITUx6UnJHY01XQ2k0RGNEbUFHMGlxQXIreXUrQUV5UTV4ZHdPU2pnZHdiSGNOdldyYUd4eEdCdnRqcnlQZDAwdmJsRloyZ2xRY09FbGZBdkQ4UWk0K0VON2lNMEpjUnJMdHRVS0YzQnZHakJOa0dOd25XZzNMdTNkTkZPd25ZSy9EUGtRSUFKOGplVjgvZGJOWDJ3bFNhVXdsSFF6Z1E0bmR1eis4Z1B2UVhJTGt6WW4xejV3NkowaWxJWlZrcC9qMlNlQ2VQVjAybWx4ZlRmSUhDWFRPalFvblNJV2hsdlNvOExUQll6dTQ5ME1BdHFOMk5KZjRlZ2NkWGlVZzRBU3BzQ3RJMmc3QTZnalg3RDJOMFZ6aUdwSTJsUEtTQUFFblNBSVFVNnVRZEFLQXNVOFhBTEE3cGE0T1E2ZExTZHJiNFY0eUlPQUV5UUJxWDVXU3ZnSmc4MFY2N0htQTBWemlXcEsyTE9zbE13Sk9rTXdBeDZxWHRDR0Eyd0RjYTB1dlllaGtXY0wrbjVmQ0NNdzZRYWJ1UElpa1RRRnNRUExhd24zQnpTMkJnTCtUN3QzQ0VXaEFZTll6eU5TZkIvSGVPeXdDVHBCaDhYZnJsU1BnQktrOFFPN2VzQWc0UVliRjM2MVhqb0FUcFBJQXVYdkRJdUFFR1JaL3QxNDVBazZReWdQazdnMkxnQk5rV1B6ZGV1VUlPRUVxRDVDN055d0NUcEJoOFhmcmxTUGdCS2s4UU83ZXNBZzRRWWJGMzYxWGpvQVRwUElBdVh2REl1QUVHUlovdDE0NUFrNlF5Z1BrN2cyTGdCTmtXUHpkZXVVSU9FRXFENUM3Tnl3Q1RwQmg4WGZybFNQZ0JLazhRTzdlc0FnNFFZYkYzNjFYam9BVHBQSUF1WHZESXVBRUdSWi90MTQ1QWs2UXlnUGs3ZzJMZ0JOa1dQemRldVVJT0VFcUQ1QzdOeXdDVHBCaDhYZnJsU013NndSWlFYSmw1VEZ3OXlwR1FOSWJBTHduZ1l2MlV2QXVNWG80VGpqaDgyTm5randzeGltWGRRUVdJaURwUkFCSEpVRGxTcExMWXZTVUlNaEZKUGVPY2NwbEhZRkZCUGx6QUs5TWdFcVZCTG1lNUlzU05NNVZ6Q2tDa3V3bHIrMFROTDlLZ3RpRGx1djRhMHdKd2p1SEtzSmpxdDhEOElRRXphK1NJTmF1M3lKNVlZSUd1b281UTBEU3J1SFp1eFF0VDBxUVR3TFlMNFZYQU00aGVXQWlYYTVtamhDUWREYUFReEkxK1FxU1JyaldwV21TL2xFQXIyNnRxVm53UGdEUEpQbmRSUHBjelJ3Z0lPbHhBTDRGWU4xRXpWMUZNdXBIdjRrZ3B3RTRQSkZqcHVaNGttOUxxTTlWelRnQ2t0NEJZRVhDWm42TTVHdGk5RFVSNUowQWpvdFJOa0hXM2hYZmlPUjNFdXAwVlRPS2dLUW5oK3p4MklSTlBJWGttMlAwTlJIRWhsYzJ6RXBaVGlkNVJFcUZybXMyRVpEMFBnQkhKbTdkWVNUUGpOSFpSSkN0QVh3K1JsbEwyZVVrYmVMbHhSRllFZ0ZKcndYdzRRenc3RUJ5ZFl6ZUpvSThDVUN1U2ZXZUpDK09jZFJsNXdNQlNYc0N1Q2hUYTljbmVWZU03ckVFTVNXU2JnTHduQmlGTFdWL1pGc0hTSzVxS2U5aWM0Q0FwUDNEc1A0eEdacjdOWktieGVxZFJKQXpBT1RjYU9nclc3RVJtMEY1U2RZUDN3WGdtSXpOTzR2azc4ZnFuMFNRbHdQNGRLelNTUG5MQWJ5ZTVOY2o2N240RENBZ2FWTUFwd1BZS1hOejl1c3lZcGxFa0o4RGNEZUF4MmQyL29FQWtwMGR1U2V6TFZkZkFRS1M3T09mZlVwWURtRE56QzdaSjRhbmtMdy8xazRqUWNJODVDd0F2eGVydUtPOGJXeThDc0FsQUM0bWVWdEhQVjZ0UWdRay9RSUFtNFMvTE96T1hhdVFtNTJHVitaYkc0SnNBZUNHUWcxWmJNYXkxNzhCdURYOHNVempaWG9Rc015d0NZQ05BZGhReWo3K0RWRzJJUG5sTG9ZbkVpUmtrV3NBdkxTTEFhL2pDQXlNd0ZVa084OXYyaEprOXpEc0diaXRidDRSaUVaZ0dja3JvMnVGQ3EwSUVyTElkUUMyNldySTZ6a0NBeUN3bXVRT2ZlekdFTVErc3RpSHd6WDZHUFM2amtBaEJHeSt1aGxKbTc5MkxxMEpFckxJQ1FDTzdtek5Lem9DNVJCWVNiTDNWdmxZZ2xqMnVCN0FyNWRycDF0eUJLSVJ1QmJBZGlRVlhYTlJoU2lDaEN5eUFZQWJBYXpmMTdqWGR3UXlJR0FuRUcxWk44bTVvMmlDQkpJOE8yeUZIMnBkT3dPdXJuSUdFTGdkd0l0SWZqTlZXem9SSkpERVBpRGFmVVcyTGQ2TEl6QTBBbmNBMkRiMW5yN09CQWtrK1JVQTloSFJoMXREZDQvNXRtL0RLaU5Ic3N3eGdyTVhRUUpKZmluc245cG92bVBrclI4SUFmdjBzRFBKYitldzM1c2dnU1JQQkhBQmdOMXlPT2s2SFlFeENOamRiUWQyMmFYYkZ0RWtCQmtaazJRM1J2d0pnTFhiT3VCeWprQUhCT3hJeEJ0SWZxeEQzYWdxU1FrU3NzbUdBRTRGc0crVUp5N3NDRXhHNE1Gd21jTmJVeTNqVGpLWm5DQUxzc21XQU95aU9Odi9uODNPcEFiNnY4OEVBclp0NUR3N2xrdnlscEl0eXQ1eEpkazNFN3ZON2lBQVR5dlpPTGMxOVFoOEkxemk4RkdTdGxKVnZHUW55TUlXU2JJM0hteHYvbzRBdGlyZVdqYzREUWpZdlZWMnF0U2VTL3ZpMEE0WEpjZ2lzdGh4Uzd0U2FITUF6d3JaWmIxdzZ1eFJRd1BqOXJNaVlITUoyd3B5SndCYm5yVmgwODBrYmNtMnFqSVlRYXBDd1oxeEJNWWc0QVR4cnVFSU5DRGdCUEh1NFFnNFFid1BPQUxkRVBBTTBnMDNyelVuQ0RoQjVpVFEzc3h1Q0RoQnV1SG10ZVlFZ2Y4SFNML3RVQldrM0dzQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1nQUFBRElDQVlBQUFDdFdLNmVBQUFTYmtsRVFWUjRYdTJkZlpBYjlYbkh2OC9xYk45cGxaaGtFbFBvT0pEQWtDYVFFRXltTnRpM09qZk1KQ1dURjR3cnlRNXZKa0RiOE9LVUJraVRkT28yMElUbXhSREl0QVJzbDFmdkNnUE5OQVRhVHNscHo4WTJBMDJLQ1MyVUZBT2xVMTRNbEdqbHMzM1MwNUhCSFlmWXAvMzk5cmQ3UDkwKytsZlAyKy96NkhQU2FYVW5ndHlFZ0JBNEtBRVNOa0pBQ0J5Y2dBZ2lqdzRoTUFrQkVVUWVIa0pBQkpISGdCRFFJeURQSUhyY0pDc25CRVNRbkN4YWpxbEhRQVRSNHlaWk9TRWdndVJrMFhKTVBRSWlpQjQzeWNvSkFSRWtKNHVXWStvUkVFSDB1RWxXVGdpSUlEbFp0QnhUajRBSW9zZE5zbkpDUUFUSnlhTGxtSG9FUkJBOWJwS1ZFd0lpU0U0V0xjZlVJeUNDNkhHVHJKd1FFRUZ5c21nNXBoNEJFVVNQbTJUbGhJQUlrcE5GeXpIMUNJZ2dldHdrS3ljRVJKQ2NMRnFPcVVkQUJOSGpKbGs1SVNDQzVHVFJja3c5QWlLSUhqZkp5Z2tCRVNRbmk1Wmo2aEVRUWZTNFNWWk9DSWdnT1ZtMEhGT1BnQWlpeDAyeWNrSWdjMEVXK2VQSE9FNTdtRHBZeU9DRlJIUk1UbGpMTVRVSU1QQTBnVGN4MDhiMndNREdUVXRuL1Z5ampIWktKb0tNMUp1L3dVem5BemdMd05IYTAwcWlFR0E4QThJdE5FQS9HRDI5K0Y5cEEwbFZrSlBxL000WkhQMHBNZjBCQ0lOcEgwYnE1NHNBQTk5MzJzVlZvOHZwNWJST25wb2dudDlhU2RSWkJkQWhhUTB2ZFlVQU03OE93dGZEYXVuYmFkQXdMc2liTDZmdUFiQWdqWUdscGhBNEVBRUdIbXAzY05xbVplNS9teVJrVkJEUDMvVUIwSjVSQXMweE9hVFVFZ0t4Q0RDLzBNYUF0N0UyK0dTcytCaEJ4Z1FaM3REOHNOTkdDTkRzR0gwbFJBaWtSSUIzRU04WUdhM05lc3hFQXlPQ2pOVEhqKzd3eEZZQ3ZkUEVVRkpEQ0NRaHdPQVhRWVVGWVdYbzZTUjF1cm1KQlRtcHprTXpPNjNIUVRneTZUQ1NMd1RNRWVBbm5uK2JlL3hUcDlLdUpEVVRDMUwybzdVZ3JFZ3loT1FLZ1RRSWROOEdEcXZ1UlVscUp4SmtVVEIrU2dIdGYwb3lnT1FLZ1RRSkVOTkpvN1hpRnQwZWlRUXArOUYyRUk3UWJTNTVRaUJ0QWd4K1BLeVdqdFh0b3kzSWNMMTVqc08wVHJleDVBbUJ6QWdRTFdsVWl0MXJjOG8zYlVIS2Z2TXhFR21icVR5cEpBZ0JUUUlNYkFxcjdpS2RkQzFCaHV1dDMzYVl0K28wbEJ3aE1CVUVtSnozNmJ6dHF5V0k1MGZYRVNIUnV3TlRBVWw2NXBjQUEzOGVWdDFWcWdTMEJDbjcwVk1nSEtYYVRPS0Z3QlFTMk5Lb3VpZXA5bGNXeEZ2Zm1rc09QNnZhU09LRndGUVRhQmFMN2lPZm9wYktIT3FDQk5HcEJOeXIwa1JpaFlBTkJMaUFlZUZTOTZjcXN5Z0xVZzVhbHdCOHJVb1RpUlVDVmhCZ3FqUnF4VHRWWnRFUUpQb0tnS3RVbWtpc0VMQ0RBRjNhcUJaWHE4d2lncWpRa3RpK0pzQ2dxOE5xOGNzcWgxQVd4QXVhVnhEb215cE5KRllJMkVCQTU4T0xJb2dObTVNWk1pRWdnbVNDV1pyMEt3RVJwRjgzSjNOblFrQUV5UVN6Tk9sWEFpSkl2MjVPNXM2RWdBaVNDV1pwMHE4RVJKQiszWnpNblFrQkVTUVR6TktrWHdtSUlQMjZPWms3RXdJaVNDYVlwVW0vRWhCQituVnpNbmNtQkVTUVREQkxrMzRsSUlMMDYrWms3a3dJaUNDWllKWW0vVXBBQk9uWHpjbmNtUkFRUVRMQkxFMzZsWUFJMHErYms3a3pJU0NDWklKWm12UXJBUkdrWHpjbmMyZENRQVRKQkxNMDZWY0NJa2kvYms3bXpvU0FDSklKWm1uU3J3UkVrSDdkbk15ZENRRVJKQlBNMHFSZkNZZ2cvYm81bVRzVEFpSklKcGlsU2I4U0VFSDZkWE15ZHlZRVJKQk1NRXVUZmlVZ2d2VHI1bVR1VEFoa0lralpiMTRHb3IvSzVFUkptakFpZ0o5ajBDdEVPQUxBYnlZcGwzWXVNNzhLNERrUTdTTG05NExvWFduM1RGai9md0JzWi9EYkFjd2wwTnNTMWtzOVBSdEJndWJsQUYyZCttazBHakQ0Y1JCOUYwNGhESmNPL3NkYlM1U0RuWXZCL0xzZ3ZreWp2UEVVQnU0bHBwdDN6aHg2NEtFbHRHUC9CaWZXZVhheDB4b2hjSVdJbGh0dnJsR1F3ZDhqd285Mnc5MjR1VUk3OXk4eHNuN25rUjJuWFNhbWkwRDRxRWI1MUZPeUVjVGVaNUJ2TktwdTk5dXZldDVHL0YzSGRXaFBRS0FQOWd4T0lZQ1pYMmNxWERoV0hib3RUdmxoUC9xTUE3NXBxcDVWbVBsSmgrbHpvOHZjaCtQTTZ3WFIxd2o0ZXB6WUxHTXlFY1MyTDlCaDhDdEE0YlN3T2hTcXdQNWduV2UrcXhPdHkvcW5NNE8zT1ozQ3AwZVhEVzFYbVhmaCt1andBdUZIUkRoQkpjOUE3SVptc1hpMjZyZkRsdXV0azVnN1B5VFF1dzNNWUtSRURnWGgxOW84TUg5amJmQkpYWUtlSDkxQWhBdDA4NVh5bUI5cnV1NTgxUWZidmg0ajYzaVFpNjJmQUZpZzFGYzdtRzlyVkV0bjZxYWY3SThmTlFNVFc2YnFtZSt0YzJjaVNObW0zMEU2anRkWU5qU211OEI5ZWVXZytRQkFpNVBXbVRTZitlWHhEbzdidXJ6MFFwSStpMjduZHpnRHJaOFRjRmlTT3IxeUdkd0lxNldSWG5HOTdoL3hXd3VZZUhPdnVDenV6MFFRVzE1aU1lT0hZYzM5ckFtd0kvWG1SNWhKNmZ1emxmc3lYOTZvbGI2bG5IZUFoTExmdWhqRTN6TlI2MkExT2dVK2ZteHA2VkVUUFR3L3Vvc0lTMHpVU2xJakUwRnNlUVpwRXo2NnNlSStrZ1RZL3JsZUVOMVB3TWROMWZ2Vk92d2F0ZHpEUmxmUXVLbjZaYi81VWxvdlhSajRoN0RxZnNMVXJNTitOTThoR051VjdseVpDR0xETXdnRHo0WlZ0M3R0dzlqTkM2SnpDVmhqck9CK2haaHhTMWh6enpaWjJ3dWlOUVNjYTdMbS85ZGlQcmRSSzYweldidnNSMCtEY0tUSm1xcTFNaEhFaG1lUTd2dnhZYlcwVWhYUVpQSHo3MmdlT2xpZzdzVXY4emVtU3FOV3ZOTmtZYzl2TFNIaXUwelczRmVyUThVNVl4VjZ5V1R0Y2hCMVh4SmViTEttYXExTUJMSGhHUVJNZjl5b0ZiK3JDcWhYZkRsb3ZnclFJYjNpVk85dmQyakJ4bVhGcmFwNWs4VXYzTERyMklIMnhHTW1hM1pyTVdOUFdITm5tcTdyQmRHRkJGeHZ1cTVLdlV3RXNlS2pKc1JuTlNxbFcxWGd4SWt0QjFIM0YvV1B4SWxWaVdrWENrZHRYRHI0bnlvNXZXSlAvSHN1bGxxdHFGZWM2djNNZUM2c3VlOVJ6ZXNWN3dYUnFRVGMyeXN1emZzekVjU0daNUFPMDhWanRhTHhuMGJsb1BudkFMM2Y5Sks0Z0huaFV0Zm91MlREZFg2M3c2MFhqYy9LL0hwWUs4MDJYYmZzdDM0UHhIWFRkVlhxNVVjUTRDL0hxdTVYVmVERWlmWDg1djhTVWZmRGQwWnZESHd5ckxvL05sbDBrZDg4dmtEME01TTE5OVdpT2NVWm80dHB3bVJ0ejIrdEpPSnJUTlpVclpVYlFaanhqMkhOTmZxV3JMZStOWmNjZmxZVmVxeDR4cDgxYXU1ZnhJcU5HVlFPb3ZNQi9DQm11RklZd3ltcmZuU25Wd1BQYjk2ZTljZDYzanBUYmdRQjBKNFlMTDVqMDJmb2w3MFdFL2QrejI5K21ZaStFVGRlSlk0WlB3MXI3anlWbkY2eDVTQzZENEN4YXhXLzJvOVhONnFsUzN2TkVQZitFMi9nR2U0aDBZNnAva2g4bmdRQlFKYzJxc1hWY1pjMGFkd3FkcnpmYW0wbndsd2o5UTVRaEloUEdLMlVqTHdrOHVvNzM0dE81eWtpT0tuTXkvd3k3WFRubXJxd1dmYWJLMEMwTnBWWkZZcm1TeENEU3h6Mm8vTWN3bzBLck5WREdmYzFhdTZwNm9tL25sRU9tcmNDZElhSldnZXZ3VmMwcXFYa2Z4aVh3UStmdUJ6eUpjamU5K3c1Q0d1bFdseEFCNHBiNUk4ZlU2Q0pyV2xjL3poQXZ3c2FWVGVSaU1QMTFsSmlyaE5BU2M3ZE01Y1I4UUNHazc3NzV2blJUVVQ0Zk05K0dRUmtJb2dOVjlMM1o4bmc3NFRWMHBkMCtPNzlLempxaEdtK3RIcnJYTXgwZWxncjNxMHo3M0RRL0xnRHVsOG5WeStIZDB6UXdNSk5sY0VuZFBJOVA3cVNDTWJmYmRTWnBadVRpU0EyWEFmNU5VQ012MjdVM0Mrb2dGdFlIMzkvZ1NkQ0FzMVJ5VXNheTR3T0hEb3pyQlR2VUtsVnJyZE80dzRIUkppaGtwYzhsbmN3elZnY1ZtWnRVNm5sK2RGMVJMaElKU2Z0MlB3SzhnYlpuekdjbGIzZW5weC9HNzk5MXNET1B3SHhKUVFVMDE3S3dlb3o0KzRKRkM1L3NEYjRpOGxtNlA3UjBRQW1yZ0pSSmZXWFZRY2RGdU1BWFRjK01YVGwxalBvOWNubTlZS2RIbkhuT3piK1hYb21nbGp4VVpQSk5zUjRob0VHZ0Uxd0JqWTdNMlkrMTk0ZHpYZEFDNWw1aElpR3AwcUtBL1ZsNWtkQkdBV2NUVTZISGtLaFBkNW1aeUdoNHhGVEdZVGpMWnQzakloR0dkalNtU2h1NWxtN0QzZmFFOE1PODhrQWVYampQOGhZZWN0RUVDdGZZbG01RGhuS05nSWlpRzBia1htc0lpQ0NXTFVPR2NZMkFpS0liUnVSZWF3aUlJSll0UTRaeGpZQ0lvaHRHNUY1ckNJZ2dsaTFEaG5HTmdJaWlHMGJrWG1zSWlDQ1dMVU9HY1kyQWlLSWJSdVJlYXdpSUlKWXRRNFp4allDSW9odEc1RjVyQ0lnZ2xpMURobkdOZ0lpaUcwYmtYbXNJaUNDV0xVT0djWTJBaUtJYlJ1UmVhd2lJSUpZdFE0WnhqWUNJb2h0RzVGNXJDSWdnbGkxRGhuR05nSWlpRzBia1htc0lpQ0NXTFVPR2NZMkFpS0liUnVSZWF3aUlJSll0UTRaeGpZQ0lvaHRHNUY1ckNJZ2dsaTFEaG5HTmdJaWlHMGJrWG1zSWlDQ1dMVU9HY1kyQWlLSWJSdVJlYXdpSUlKWXRRNFp4allDSW9odEc1RjVyQ0tRaVNERGZ1dUxEckdaTDgrMENwOE1NOTBKNkh3Ym1mTDMzR1h5aFpmVGZWTnl2cWtob1BGOTllcUNCTkZuSGVDZXFUbWhkQlVDK2dRNndCK09WZDIvVWFtZ0xNaUl2K3M0cGdtbDc2dFRHVWhpaFVCYUJEb2Q1NVN4WlVQL3JGSmZYWkIxUE1qRjFrNlZKaElyQkd3Z3NHZEc4ZEFIbDlDTEtyTW9DOUl0N3ZuUkZpTE1WMmtrc1VKZ1Nna3dmdEdvdVVlcnpxQW5TTkQ2Sm9HdlVHMG04VUpnQ2duYzJLaTZGNmoyMXhKa1VUMDZzY0I0V0xXWnhBdUJxU0xBNUh3c3JBdzlvTnBmUzVCdWs3TGYzQWFpNDFRYlNyd1F5Sm9BQTArSFZmZDlPbjJUQ0xJQ1JHdDFta3FPRU1pU1FJZnA0ckZhOFhxZG50cUN2UG5MK3ZORU9GeW5zZVFJZ1N3SU1QaWxQZVFlc2JsQ1d1KzhKaEprdU40OHgyRmFsOFZCcFljUTBDR2djM0Z3L3o2SkJIbnpXZVJmaUhDQ3p2Q1NJd1JTSmNEOFdLTlcrbENTSG9rRldiaGgxN0VERXhNUGd6Q1laQkRKRlFKR0NUREdHUVB6d3Rxc2YwdFNON0VnZTU5Rmd1YlpCUHJiSklOSXJoQXdTWUFKNTRVVmQwM1Nta1lFZVVPUzZIb0NMa3c2a09RTGdhUUVtSEY5V0hNdlRscW5tMjlNa0RkL0g3bUxDRXRNRENZMWhJQVdBY2FkalpwYjBjbzlRSkpSUWJyMXkzN3pGaENkYVdwQXFTTUU0aEpneHBxdzVwNFhOejVPbkhGQnVrMkhnK2dxQi9oS25BRWtSZ2dZSWFEeHgxQngrcVlpeU42WFcvVldsYmh6QTBDejR3d2lNVUpBaHdBenZ3bzQ1NFcxNHQwNitiMXlVaE9rMjNqK0hjMURaem00bG9pcXZRYVIrNFdBS2dFR2JtWXFYalpXb1pkVWMrUEdweXJJdmlHOCtxNFBVV2ZpandBc2src2xjVmNqY1FjaDBHVGc5allWVm0rcURENlJOcVZNQk5sM2lBL2Z3dTdzV2VPbk9laDhEc0FuMGo2YzFKOVdCTzVoa0I5V2kvVXNUNVdwSUc4OTJNbisrRkV6bmM1aEUyMGF5UExRay9WeW5NN0hDUGlhTGZOa05RZURHNTFPWVZWVy9lTDBjY0M3SjJiUzh3K2VQdlJNblBnMFlxWlVrRFFPWktLbTUwZGZKY0tWSm1yMVNZMTdHbFZYcmw4ZFlGa2l5RUVld1o0ZlhVZUVpL3JrQWE0OUpnTnJ3NnI3ZWUwQzB6eFJCSmxrd1dVL1dndkNpdW42R0Vqand0cDBZeVdDOU5pb0YwVGZKK0FMMDIzeFlOelVxTG5uVDd0ekdUNlFDQklENkRSOHVhWDFIejVpb0pwMklTSkl6SlVPQjYyckhmRGxNY090RFdQbWE4TmE2WXZXRG1qWllDS0l3a0s4b1BrdEFuMUpJY1dxVUpNZkE3ZnFZQ2tPSTRJb3d1M1hsMXNNL25aWUxWMm1lTnpjaDRzZ0dnK0JmcE9Fd2RlRTFWTDNvejV5VXlRZ2dpZ0MyeGZ1QmMzVkJPcUQxL0s4dmxFdExkYzhadTdUUkpBRUR3SFBiMTVEUkNzVGxFZzFsWUVmaDFYM2s2azJtZWJGUlpDRUN5NzcwVG9RemtsWUpvMzArNXV2RlQvOXlPL1RualNLNTZXbUNHSmcwNTRmMmZXMytJejdHalgzVkFOSHkzMEpFY1RBUTJEa0p6elFlYkgxZHdSTStjc1padHp0SEZxc2ppNm1DUU5IeTMwSkVjVGdROEFMbWdHQmpQMUhEWTNSNUFxNUJyVEpVa1FRdzBETFFmTU9nSllaTHR1N0hMUGZxSld5Nzl0N3NyNk9FRUZNcjI4Vk8rVVB0QUlBUzAyWFBtZzk1dEdHNDU2Q0NyVXo2NW1UUmlKSVNvdk82cG1FZ2MxUnNYaktJNStpVmtwSHlYVlpFU1RGOVh0QnRJYUFjOU5xd2N5UHZyYmJQZm5Sc3loS3EwZmU2NG9nS1Q4Q1Vydml6dmpYM1U3eGR6Wlg2SldVajVEcjhpSklCdXYzZ3VhMUJMckVWQ3NHYjl0RDdvaklZWXJvd2V1SUlPa3ozdHVoN0VjM2dwRDgvOFl5dG85M2VNSFc1YVVYTWhvOTEyMUVrQXpYbi9SM2t1NzM3WFY0WU5IRzJ1Q1RHWTZkNjFZaVNNYnJMd2ZOV3dFNlE3a3Q0eGxpWjJSMDJkQjI1VnhKMENZZ2dtaWowMC8wZ21nREFhZkhyY0RnVnh3YW1EOWFHWHdxYm83RW1TRWdncGpocUZ3bDdqTkpWdzdRakpHd01tdWJjaE5KU0V4QUJFbU1VTCtBNTBjM0UrR3NTU3N3VlJxMTRwMzZYU1F6Q1FFUkpBazlBN25sSURxZndWY1NhTTcrNVJqOHk3M2ZlNUh4UDJzMmNLUnBWVUlFc1dTZFhoQjFyN2kvcHpzT01lM1k3ZUR1elpYaTg1YU1sOXN4UkpEY3JsNE9Ib2VBQ0JLSGtzVGtsb0FJa3R2Vnk4SGpFQkJCNGxDU21Od1NFRUZ5dTNvNWVCd0NJa2djU2hLVFd3SWlTRzVYTHdlUFEwQUVpVU5KWW5KTFFBVEo3ZXJsNEhFSWlDQnhLRWxNYmdtSUlMbGR2Unc4RGdFUkpBNGxpY2t0Z2Y4RHZRZCtJK2tUTUpvQUFBQUFTVVZPUks1Q1lJST1cIiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=