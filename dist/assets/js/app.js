/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/assets.js":
/*!*********************************!*\
  !*** ./src/assets/js/assets.js ***!
  \*********************************/
/*! exports provided: assets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assets\", function() { return assets; });\nconst star = 'assets/images/star.png'\r\nconst tileTop = 'assets/images/tileTop.png'\r\n\r\n\r\n\r\nlet assets = {\r\n    star: {\r\n        src: star\r\n    },\r\n    top: {\r\n        src: tileTop\r\n    },\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/assets.js?");

/***/ }),

/***/ "./src/assets/js/canvas.js":
/*!*********************************!*\
  !*** ./src/assets/js/canvas.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ \"./src/assets/js/point.js\");\n/* harmony import */ var _tileViewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tileViewer */ \"./src/assets/js/tileViewer.js\");\n/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field */ \"./src/assets/js/field.js\");\n\r\n\r\n\r\n\r\nclass Canvas {\r\n    constructor() {\r\n        this.width = null\r\n        this.height = null\r\n        this.ctx = null\r\n        this.canvas = null\r\n        this.canvasPosition = null\r\n        this.field = null\r\n        this.rows = null\r\n        this.cols = null\r\n        this.moving = 10\r\n        this.initialization()\r\n    }\r\n\r\n    initialization() {\r\n        this.getElement()\r\n        this.setPositon()\r\n    }\r\n\r\n    getElement() {\r\n        this.canvas = document.getElementById('game-playground')\r\n        this.ctx = this.canvas.getContext('2d')\r\n        this.setEvent()\r\n    }\r\n\r\n    setEvent() {\r\n        this.canvas.addEventListener('click', e => this.click(e) )\r\n    }\r\n\r\n    click(e) {\r\n        let x = e.clientX - this.canvasPosition.x\r\n        let y = e.clientY - this.canvasPosition.y\r\n        let position = this.getCoords(new _point__WEBPACK_IMPORTED_MODULE_0__[\"Point\"](x, y))\r\n        _field__WEBPACK_IMPORTED_MODULE_2__[\"default\"].click(position)\r\n    }\r\n\r\n    setPositon() {\r\n        let canvasPosition = this.canvas.getBoundingClientRect()\r\n        this.canvasPosition = new _point__WEBPACK_IMPORTED_MODULE_0__[\"Point\"](canvasPosition.left, canvasPosition.top)\r\n    }\r\n\r\n    update(level) {\r\n        this.width = this.canvas.offsetWidth\r\n\r\n        this.cols = level.cols\r\n        this.rows = level.rows\r\n\r\n        _tileViewer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setTileWidth(Math.floor(this.width / this.cols))\r\n\r\n        this.canvas.height = this.height = _tileViewer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height * this.rows\r\n    }\r\n\r\n    drawTeleport(tiles) {\r\n        for (let x = 0; x < tiles.length; x++) {\r\n            let tile = tiles[x]\r\n            let coordsPoint =  this.getCoordsPoint(tile.position)\r\n            _tileViewer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].draw(tile, coordsPoint)\r\n        }\r\n    }\r\n\r\n    draw(mapField, callback) {\r\n        this.field = mapField\r\n        for (let y = 0; y < this.rows; y++) {\r\n            for (let x = 0; x < this.cols; x++) {\r\n                let tile = mapField[y][x]\r\n                if (!tile) return\r\n                let coordsPoint =  this.getCoordsPoint(tile.position)\r\n                _tileViewer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].draw(tile, coordsPoint)\r\n            }\r\n        }\r\n        callback ? callback() : null\r\n    }\r\n\r\n    getCoordsPoint(position) {\r\n        let x1 = position.x * _tileViewer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width\r\n        let x2 = x1 + _tileViewer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width\r\n\r\n        let y1 = position.y * _tileViewer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height\r\n        let y2 = y1 + _tileViewer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height\r\n        \r\n        return {\r\n            x1,\r\n            x2,\r\n            y1,\r\n            y2 \r\n        }\r\n    }\r\n\r\n    getCoords(coords) {\r\n        let x = Math.floor(coords.x / _tileViewer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width)\r\n        let y = Math.floor(coords.y / _tileViewer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height)\r\n        return new _point__WEBPACK_IMPORTED_MODULE_0__[\"Point\"](x, y)\r\n    }\r\n\r\n    delete(field, cells, callback) {\r\n        let deleted = []\r\n        let addDeleted = (index) => {\r\n            deleted.push(index)\r\n\r\n            if (deleted.length == cells.length) callback()\r\n        }\r\n        \r\n        cells.forEach(\r\n            (cell, index) => {\r\n                let tile = field[cell.y][cell.x]\r\n                let coords = this.getCoordsPoint(tile.position)\r\n                _tileViewer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteTile(\r\n                    tile, \r\n                    coords,\r\n                    () => addDeleted(index)\r\n                )\r\n            }\r\n        );\r\n    }\r\n\r\n    move(fieldMap, callback) {\r\n        let moveMap = []\r\n        this.field = fieldMap\r\n        fieldMap.forEach((row, y) => {\r\n            row.forEach((tile, x) => {\r\n                if (!tile || !tile.from) return\r\n                if (tile.from.x !== x || tile.from.y !== y ) {\r\n                    tile.current = this.getCoordsPoint(tile.from)\r\n                    tile.destination = this.getCoordsPoint(tile.position)\r\n                    moveMap.push(tile)\r\n                }\r\n            })\r\n        })\r\n        if (!moveMap.length) {\r\n            callback()\r\n            return\r\n        }\r\n        let start = performance.now()\r\n\r\n        let step = (timestamp) => {\r\n            let next = false\r\n            moveMap.forEach(tile => {\r\n                if (!tile.current) return\r\n                _tileViewer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clear(tile.current)\r\n                tile.current.y1 += this.moving\r\n                tile.current.y2 += this.moving\r\n\r\n                let coords = tile.current\r\n\r\n                if (tile.current.y1 >= tile.destination.y1) {\r\n                    tile.current = null\r\n                    coords = this.getCoordsPoint(tile.position)\r\n                } else {\r\n                    next = true\r\n                }\r\n                _tileViewer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].draw(tile, coords)\r\n\r\n            })\r\n            if (next) {\r\n                window.requestAnimationFrame(step)\r\n            } else {\r\n                callback()\r\n            }\r\n        }\r\n\r\n        window.requestAnimationFrame(step)\r\n    }\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Canvas());\n\n//# sourceURL=webpack:///./src/assets/js/canvas.js?");

/***/ }),

/***/ "./src/assets/js/field.js":
/*!********************************!*\
  !*** ./src/assets/js/field.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ \"./src/assets/js/canvas.js\");\n/* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point.js */ \"./src/assets/js/point.js\");\n/* harmony import */ var _tile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tile.js */ \"./src/assets/js/tile.js\");\n/* harmony import */ var _tileStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tileStatus */ \"./src/assets/js/tileStatus.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game */ \"./src/assets/js/game.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Field {\r\n    constructor() {\r\n        this.mapField = []\r\n        this.active = true\r\n        this.cols = null\r\n        this.rows = null\r\n        this.minTile = null\r\n        this.superTile = null\r\n        this.colors = null\r\n        this.teleportTiles = []\r\n    }\r\n\r\n    start() {\r\n        this.fillCell()\r\n    }\r\n\r\n    fillCell() {\r\n        for(let y = 0; y < this.rows; y++) {\r\n            for(let x = 0; x < this.cols; x++) {\r\n                let point = new _point_js__WEBPACK_IMPORTED_MODULE_1__[\"Point\"](x, y)\r\n                let color = this.getColorTile()\r\n\r\n                let cell = this.mapField[point.y][point.x]\r\n\r\n                if (!cell) {\r\n                    let tile = new _tile_js__WEBPACK_IMPORTED_MODULE_2__[\"Tile\"](color)\r\n                    tile.position = point\r\n                    tile.status = _tileStatus__WEBPACK_IMPORTED_MODULE_3__[\"statuses\"].default\r\n                    this.mapField[point.y][point.x] = tile\r\n                }\r\n            }\r\n        }\r\n        if (this.checkPosition()) {\r\n            _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].draw(this.mapField, () => this.active = true)\r\n        }\r\n            \r\n        else this.mix()\r\n        \r\n    }\r\n\r\n    checkPosition() {\r\n        let counter = 0;\r\n        let availableGroups = false\r\n\r\n        let checkPosition = (position, color) => {\r\n            if (counter >= this.minTile) return true\r\n            if (\r\n                position.x < 0 ||\r\n                position.y < 0 ||\r\n                position.x > this.cols - 1 ||\r\n                position.y > this.rows - 1\r\n            ) return\r\n\r\n            let currentTile = this.mapField[position.y][position.x]\r\n            if (\r\n                !currentTile || \r\n                currentTile.checked || \r\n                currentTile.color !== color \r\n            ) return\r\n\r\n            counter++\r\n            \r\n            currentTile.checked = true\r\n\r\n            checkPosition(new _point_js__WEBPACK_IMPORTED_MODULE_1__[\"Point\"](position.x - 1, position.y), color)\r\n            checkPosition(new _point_js__WEBPACK_IMPORTED_MODULE_1__[\"Point\"](position.x + 1, position.y), color)\r\n            checkPosition(new _point_js__WEBPACK_IMPORTED_MODULE_1__[\"Point\"](position.x, position.y - 1), color)\r\n            checkPosition(new _point_js__WEBPACK_IMPORTED_MODULE_1__[\"Point\"](position.x, position.y + 1), color)\r\n        }\r\n\r\n        stop: for (let y = 0; y < this.rows; y++) {\r\n            for (let x = 0; x < this.cols; x++) {\r\n\r\n                let tile = this.mapField[y][x]\r\n                \r\n                if (tile.status == _tileStatus__WEBPACK_IMPORTED_MODULE_3__[\"statuses\"].super) return true\r\n\r\n                counter = 0;\r\n                checkPosition(tile.position, tile.color)\r\n                if (counter >= this.minTile) {\r\n                    availableGroups = true\r\n                    break stop\r\n                }\r\n            }\r\n        }\r\n\r\n        this.clearChecked()\r\n\r\n        return availableGroups\r\n    }\r\n\r\n    getColorTile() {\r\n        let index = Math.floor(this.colors.length * Math.random())\r\n        return this.colors[index]\r\n    }\r\n\r\n    update(level) {\r\n        this.rows = level.rows\r\n        this.cols = level.cols\r\n        this.minTile = level.min\r\n        this.colors = level.colors\r\n        this.superTile = level.superTile\r\n\r\n        for (let y = 0; y < this.rows; y++) {\r\n            this.mapField[y] = [];\r\n            for (let x = 0; x < this.cols; x++) {\r\n                this.mapField[y].push(null)\r\n            }\r\n        }\r\n        _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].update(level)\r\n    }\r\n\r\n    getRow(position) {\r\n        let row = this.mapField[position.y];\r\n        return row.map((_, ind) => new _point_js__WEBPACK_IMPORTED_MODULE_1__[\"Point\"](ind, position.y))\r\n    }\r\n\r\n    getTileNeighbors(position, action) {\r\n\r\n        let tile = this.mapField[position.y][position.x]\r\n        let color = tile.color\r\n\r\n        let neighborsTiles = []\r\n\r\n        let checkPosition = (position) => {\r\n            if ( \r\n                position.x < 0 ||\r\n                position.y < 0 ||\r\n                position.x > this.cols - 1 ||\r\n                position.y > this.rows - 1\r\n            ) return\r\n\r\n            let currentTile = this.mapField[position.y][position.x]\r\n            \r\n            if (\r\n                !currentTile || \r\n                currentTile.checked || \r\n                currentTile.color !== color \r\n            ) return\r\n\r\n            if (action) currentTile.action = action\r\n\r\n            neighborsTiles.push(position)\r\n            currentTile.checked = true\r\n\r\n            checkPosition(new _point_js__WEBPACK_IMPORTED_MODULE_1__[\"Point\"](position.x - 1, position.y))\r\n            checkPosition(new _point_js__WEBPACK_IMPORTED_MODULE_1__[\"Point\"](position.x + 1, position.y))\r\n            checkPosition(new _point_js__WEBPACK_IMPORTED_MODULE_1__[\"Point\"](position.x, position.y - 1))\r\n            checkPosition(new _point_js__WEBPACK_IMPORTED_MODULE_1__[\"Point\"](position.x, position.y + 1))\r\n        }\r\n        \r\n        checkPosition(position)\r\n\r\n        this.clearChecked()\r\n\r\n        return neighborsTiles\r\n    }\r\n\r\n    clearChecked() {\r\n        for (let y = 0; y < this.rows; y++) {\r\n            for (let x = 0; x < this.cols; x++) {\r\n                let position = new _point_js__WEBPACK_IMPORTED_MODULE_1__[\"Point\"](x, y)\r\n                this.mapField[position.y][position.x].checked = false\r\n            }\r\n        }\r\n    }\r\n\r\n    teleport() {\r\n        let teleportTileOne = this.teleportTiles[0]\r\n        let teleportTileTwo = this.teleportTiles[1]\r\n        let colorOne = teleportTileOne.color\r\n        let colorTwo = teleportTileTwo.color\r\n        this.mapField[teleportTileOne.position.y][teleportTileOne.position.x].color = colorTwo\r\n        this.mapField[teleportTileTwo.position.y][teleportTileTwo.position.x].color = colorOne\r\n        _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].drawTeleport(this.teleportTiles)\r\n        _game__WEBPACK_IMPORTED_MODULE_4__[\"default\"].teleportActive = false\r\n        _game__WEBPACK_IMPORTED_MODULE_4__[\"default\"].teleportBonus--\r\n        _game__WEBPACK_IMPORTED_MODULE_4__[\"default\"].setValues()\r\n        this.teleportTiles = []\r\n        this.active = true\r\n    }\r\n\r\n    click(position) {\r\n        if(_game__WEBPACK_IMPORTED_MODULE_4__[\"default\"].teleportActive) {\r\n            this.teleportTiles.push(this.mapField[position.y][position.x])\r\n            if(this.teleportTiles.length == 2) {\r\n                this.teleport()\r\n            } else return\r\n        }\r\n        if (!this.active) return\r\n        this.active = false\r\n\r\n        let tileTargets = []\r\n        \r\n        let tile = this.mapField[position.y][position.x]\r\n        if (!tile) {\r\n            this.active = true\r\n            return\r\n        }\r\n\r\n        if (tile.status == _tileStatus__WEBPACK_IMPORTED_MODULE_3__[\"statuses\"].super) {\r\n            let row = this.getRow(position)\r\n            tile.action = _tileStatus__WEBPACK_IMPORTED_MODULE_3__[\"actions\"].default;\r\n            this.targetChecked = true\r\n            tileTargets = [...tileTargets, ...row]\r\n        }\r\n\r\n        if (!tileTargets.length) {\r\n            tileTargets = this.getTileNeighbors(position, _tileStatus__WEBPACK_IMPORTED_MODULE_3__[\"actions\"].default)\r\n\r\n            if (tileTargets.length < this.minTile) {\r\n                this.active = true\r\n                return\r\n            };\r\n\r\n            if (tileTargets.length >= this.superTile) {\r\n                tile.status = _tileStatus__WEBPACK_IMPORTED_MODULE_3__[\"statuses\"].super;\r\n                tile.action = _tileStatus__WEBPACK_IMPORTED_MODULE_3__[\"actions\"].super;\r\n            }\r\n        } \r\n\r\n        this.clearChecked()\r\n        tileTargets.forEach(cell => {\r\n            if (cell.x == position.x && cell.y == position.y) return\r\n            let tile = this.mapField[cell.y][cell.x]\r\n            if (tile.status == _tileStatus__WEBPACK_IMPORTED_MODULE_3__[\"statuses\"].super) {\r\n                if (tile.action == _tileStatus__WEBPACK_IMPORTED_MODULE_3__[\"actions\"].super) tile.action = _tileStatus__WEBPACK_IMPORTED_MODULE_3__[\"actions\"].default;\r\n                let row = this.getRow(tile.position)\r\n                tileTargets = [...tileTargets, ...row]\r\n            }\r\n        })\r\n\r\n        _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delete(this.mapField, tileTargets, () => {\r\n            tileTargets.forEach(point => {\r\n                let tile = this.mapField[point.y][point.x]\r\n                if (!tile) return\r\n                if (tile.action !== _tileStatus__WEBPACK_IMPORTED_MODULE_3__[\"actions\"].super) this.mapField[point.y][point.x] = null\r\n            })\r\n            _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].draw(this.mapField)\r\n            this.moveField()\r\n            _game__WEBPACK_IMPORTED_MODULE_4__[\"default\"].delete(tileTargets.length)\r\n        })\r\n    }\r\n\r\n    moveField() {\r\n        let cols = [];\r\n        for (let y = 0; y < this.rows; y++) {\r\n            for (let x = 0; x < this.cols; x++) {\r\n                let point = new _point_js__WEBPACK_IMPORTED_MODULE_1__[\"Point\"](x, y)\r\n                if (!cols[point.x]) cols[point.x] = []\r\n                cols[point.x][point.y] = this.mapField[point.y][point.x]\r\n            }\r\n        }\r\n\r\n        cols = cols.map((col, x) => {\r\n            let nullCount = 0\r\n            col = col.filter(cell => {\r\n                if (!cell) {\r\n                    nullCount++\r\n                    return false;\r\n                }\r\n                cell.from = cell.position\r\n                return cell\r\n            })\r\n            for(let i = 0; i < nullCount; i++) {\r\n                col.unshift(null)\r\n            }\r\n            \r\n            for (let i = 0; i < this.rows; i++) {\r\n                if (!col[i]) {\r\n                    continue\r\n                }\r\n                col[i].position = new _point_js__WEBPACK_IMPORTED_MODULE_1__[\"Point\"](x, i)\r\n            }\r\n\r\n            \r\n            return col\r\n\r\n        })\r\n\r\n        cols.forEach((col, x) => {\r\n            col.forEach((cell, y) => {\r\n                this.mapField[y][x] = cell\r\n            })\r\n        })\r\n\r\n        _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].move(this.mapField, () => this.fillCell())\r\n    }\r\n\r\n\r\n    mixField() {\r\n\r\n        this.mapField.sort(this.randomSort)\r\n\r\n\r\n        for (let y = 0; y < this.rows; y++) {\r\n            let row = this.mapField[y];\r\n            this.mapField[y].sort(this.random)\r\n\r\n            for (let x = 0; x < this.cols; x++) {\r\n                row[x].position = new _point_js__WEBPACK_IMPORTED_MODULE_1__[\"Point\"](x, y)\r\n            }\r\n        }\r\n\r\n        if (this.checkPosition()) {\r\n            _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].draw(this.mapField, () => this.active = true)\r\n        } else this.mixField()\r\n    }\r\n\r\n    random(a, b) {\r\n        return Math.random() - 0.5\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Field());\r\n\n\n//# sourceURL=webpack:///./src/assets/js/field.js?");

/***/ }),

/***/ "./src/assets/js/game.js":
/*!*******************************!*\
  !*** ./src/assets/js/game.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levels */ \"./src/assets/js/levels.js\");\n/* harmony import */ var _gameScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameScene */ \"./src/assets/js/gameScene.js\");\n/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field */ \"./src/assets/js/field.js\");\n/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress */ \"./src/assets/js/progress.js\");\n\r\n\r\n\r\n\r\n\r\n class Game {\r\n    constructor() {\r\n        this.score = 5\r\n        this.scores = 0\r\n        this.targetScore = 0\r\n        this.level = 1\r\n        this.teleportBonus = null\r\n        this.mixingBonus = null\r\n        this.steps = null\r\n        this.maxLevel = null\r\n        this.bonuses = null\r\n        this.itemScores = null\r\n        this.itemTarget = null\r\n        this.itemLevel = null\r\n        this.itemSteps = null\r\n        this.mixingItem = null\r\n        this.teleporItem = null\r\n        this.mixingCount = null\r\n        this.teleportCount = null\r\n        this.activeGame = false\r\n        this.teleportActive = false\r\n    }\r\n\r\n    initialization() {\r\n        let level = _levels__WEBPACK_IMPORTED_MODULE_0__[\"levels\"][this.level - 1]\r\n        this.maxLevel = _levels__WEBPACK_IMPORTED_MODULE_0__[\"levels\"].length\r\n        this.targetScore = level.targetScore\r\n        this.steps = level.steps\r\n        this.teleportBonus = level.bonuses.teleport\r\n        this.mixingBonus = level.bonuses.mixing\r\n        this.getElements()\r\n        this.setValues()\r\n        this.setEvent()\r\n        _field__WEBPACK_IMPORTED_MODULE_2__[\"default\"].update(level)\r\n        this.startGame()\r\n    }\r\n\r\n    startGame() {\r\n        this.activeGame = true\r\n        _field__WEBPACK_IMPORTED_MODULE_2__[\"default\"].start()\r\n    }\r\n\r\n    getElements() {\r\n        this.mixingItem = document.getElementById('mixing')\r\n        this.teleportItem = document.getElementById('teleport')\r\n        this.itemScores = document.getElementById('scores')\r\n        this.itemTarget = document.getElementById('target-scores')\r\n        this.itemLevel = document.getElementById('level')\r\n        this.itemSteps = document.getElementById('steps')\r\n        this.teleportCount = document.getElementById('teleport__count')\r\n        this.mixingCount = document.getElementById('mixing__count')\r\n    }\r\n\r\n    setValues() {\r\n        this.itemScores.innerHTML = this.scores\r\n        this.itemTarget.innerHTML = this.targetScore\r\n        this.itemLevel.innerHTML = this.level\r\n        this.itemSteps.innerHTML = this.steps\r\n        this.teleportCount.innerHTML = this.teleportBonus\r\n        this.mixingCount.innerHTML = this.mixingBonus\r\n        _progress__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setValue(this.scores, this.targetScore)\r\n    }\r\n\r\n    setEvent() {\r\n        this.mixingItem.addEventListener('click', (e) => {\r\n            this.mixingBonus -= 1\r\n            this.mixingCount.innerHTML = this.mixingBonus\r\n            _field__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mixField()\r\n        })\r\n        this.teleportItem.addEventListener('click', (e) => {\r\n            _field__WEBPACK_IMPORTED_MODULE_2__[\"default\"].active = false\r\n            this.teleportActive = true\r\n        })\r\n    }\r\n\r\n    delete(count) {\r\n        this.scores += count * this.score\r\n        this.steps--\r\n        _progress__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setValue(this.scores, this.targetScore)\r\n        this.itemScores.innerHTML = this.scores\r\n        this.itemSteps.innerHTML = this.steps\r\n        if (this.steps >= 0 && this.scores >= this.targetScore && this.level == this.maxLevel) {\r\n            this.gameScene('win')\r\n            return\r\n        } else if (this.steps == 0 && this.scores < this.targetScore) {\r\n            this.gameScene('lose')\r\n        } else if (this.steps >= 0 && this.scores >= this.targetScore) {\r\n            this.gameScene('nextLevel')\r\n        }\r\n    }\r\n\r\n    gameScene(status) {\r\n        this.activeGame = false\r\n        _field__WEBPACK_IMPORTED_MODULE_2__[\"default\"].active = false\r\n        _gameScene__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sceneStatus(status, this.nextLevel.bind(this), this.level)\r\n    }\r\n\r\n    nextLevel(lvl) {\r\n        let sameLevel\r\n        lvl == this.level ? sameLevel = true  : sameLevel= false\r\n        let level = _levels__WEBPACK_IMPORTED_MODULE_0__[\"levels\"][lvl - 1]\r\n        this.level = lvl\r\n        this.maxLevel = _levels__WEBPACK_IMPORTED_MODULE_0__[\"levels\"].length\r\n        this.scores = 0\r\n        this.targetScore = level.targetScore\r\n        if (!sameLevel) {\r\n            this.level == 1 ? this.teleportBonus = 2 : ++this.teleportBonus\r\n            this.level == 1 ? this.mixingBonus = 1 : ++this.mixingBonus\r\n        }\r\n        this.steps = level.steps\r\n        this.setValues()\r\n        _field__WEBPACK_IMPORTED_MODULE_2__[\"default\"].update(level)\r\n        this.startGame()\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Game());\n\n//# sourceURL=webpack:///./src/assets/js/game.js?");

/***/ }),

/***/ "./src/assets/js/gameScene.js":
/*!************************************!*\
  !*** ./src/assets/js/gameScene.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sceneActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sceneActions */ \"./src/assets/js/sceneActions.js\");\n\r\nclass gameScene {\r\n    constructor() {\r\n        this.scene = null\r\n        this.replay = null\r\n        this.nextLevel = null\r\n        this.initialization()\r\n    }\r\n\r\n    initialization() {\r\n        this.getElements()\r\n        this.setEvents()\r\n    }\r\n\r\n    getElements() {\r\n        this.scene = document.getElementById('scene')\r\n        this.sceneTitle = document.getElementById('sceneTitle')\r\n        this.replay = document.getElementById('replay')\r\n        this.nextLevel = document.getElementById('nextLevel')\r\n    }\r\n\r\n    setEvents() {\r\n        this.replay.addEventListener('click', () => {\r\n            this.callback(this.lvl)\r\n            this.sceneStatusOut()\r\n        })\r\n        this.nextLevel.addEventListener('click', () => {\r\n            if (this.lvl == 3) {\r\n                this.lvl = 1\r\n                this.callback(this.lvl)\r\n                this.sceneStatusOut()\r\n            } else {\r\n                this.callback(++this.lvl)\r\n                this.sceneStatusOut()\r\n            }\r\n        })\r\n    }\r\n\r\n    sceneStatus(status, callback, lvl) {\r\n        this.callback = callback\r\n        this.lvl = lvl\r\n        if(status == 'lose') {\r\n            this.sceneTitle.innerHTML = _sceneActions__WEBPACK_IMPORTED_MODULE_0__[\"sceneActions\"]['lose'].title\r\n            this.replay.innerHTML = _sceneActions__WEBPACK_IMPORTED_MODULE_0__[\"sceneActions\"]['lose'].replay\r\n            this.nextLevel.style.display = 'none'\r\n        } else if(status == 'nextLevel') {\r\n            this.sceneTitle.innerHTML = _sceneActions__WEBPACK_IMPORTED_MODULE_0__[\"sceneActions\"]['nextLevel'].title\r\n            this.replay.innerHTML = _sceneActions__WEBPACK_IMPORTED_MODULE_0__[\"sceneActions\"]['nextLevel'].replay\r\n            this.nextLevel.style.display = 'block'\r\n            this.nextLevel.innerHTML = _sceneActions__WEBPACK_IMPORTED_MODULE_0__[\"sceneActions\"]['nextLevel'].nextLevel\r\n        } else {\r\n            this.sceneTitle.innerHTML = _sceneActions__WEBPACK_IMPORTED_MODULE_0__[\"sceneActions\"]['win'].title\r\n            this.replay.innerHTML = _sceneActions__WEBPACK_IMPORTED_MODULE_0__[\"sceneActions\"]['win'].replay\r\n            this.nextLevel.style.display = 'block'\r\n            this.nextLevel.innerHTML = _sceneActions__WEBPACK_IMPORTED_MODULE_0__[\"sceneActions\"]['win'].nextLevel\r\n        }\r\n        this.scene.style.display = 'flex'\r\n    }\r\n\r\n    sceneStatusOut() {\r\n        this.scene.style.display = 'none'\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new gameScene());\n\n//# sourceURL=webpack:///./src/assets/js/gameScene.js?");

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/assets/js/game.js\");\n\r\n\r\n_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initialization()\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/index.js?");

/***/ }),

/***/ "./src/assets/js/levels.js":
/*!*********************************!*\
  !*** ./src/assets/js/levels.js ***!
  \*********************************/
/*! exports provided: levels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"levels\", function() { return levels; });\nlet levels = [\r\n    {\r\n        rows: 10,\r\n        cols: 10,\r\n        steps: 8,\r\n        targetScore: 150,\r\n        min: 2,\r\n        superTile: 4,\r\n        colors: [0, 25, 68, 155, 200],\r\n        bonuses: {\r\n            teleport: 2,\r\n            mixing: 1\r\n        }\r\n    },\r\n    {\r\n        rows: 10,\r\n        cols: 10,\r\n        steps: 10,\r\n        targetScore: 250,\r\n        min: 3,\r\n        superTile: 5,\r\n        colors: [0, 25, 68, 120, 155, 200]\r\n    },\r\n    {\r\n        rows: 10,\r\n        cols: 10,\r\n        steps: 12,\r\n        targetScore: 375,\r\n        min: 3,\r\n        superTile: 6,\r\n        colors: [0, 155, 68, 25, 200, 120, 180]\r\n    }\r\n]\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/levels.js?");

/***/ }),

/***/ "./src/assets/js/point.js":
/*!********************************!*\
  !*** ./src/assets/js/point.js ***!
  \********************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Point\", function() { return Point; });\nclass Point {\r\n    constructor(x,y) {\r\n        this.x = x\r\n        this.y = y\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/point.js?");

/***/ }),

/***/ "./src/assets/js/progress.js":
/*!***********************************!*\
  !*** ./src/assets/js/progress.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Progress {\r\n    constructor() {\r\n        this.progressBar = null\r\n        this.initialaztion()\r\n    }\r\n\r\n    initialaztion() {\r\n        this.progressBar = document.getElementById('progress')\r\n    }\r\n\r\n    setValue(scores, target) {\r\n        let width = `${Math.min(scores / target, 1) * 100}%`\r\n        this.progressBar.style.width = width\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Progress());\n\n//# sourceURL=webpack:///./src/assets/js/progress.js?");

/***/ }),

/***/ "./src/assets/js/sceneActions.js":
/*!***************************************!*\
  !*** ./src/assets/js/sceneActions.js ***!
  \***************************************/
/*! exports provided: sceneActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sceneActions\", function() { return sceneActions; });\nconst sceneActions = {\r\n    'lose': {\r\n        title: 'you lose',\r\n        replay: 'replay'\r\n    },\r\n    'nextLevel': {\r\n        title: 'you have passed the level!',\r\n        replay: 'replay',\r\n        nextLevel: 'next level'\r\n    },\r\n    'win': {\r\n        title: 'you have passed the game!',\r\n        replay: 'replay',\r\n        nextLevel: 'start again'\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/sceneActions.js?");

/***/ }),

/***/ "./src/assets/js/tile.js":
/*!*******************************!*\
  !*** ./src/assets/js/tile.js ***!
  \*******************************/
/*! exports provided: Tile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tile\", function() { return Tile; });\nclass Tile {\r\n    constructor(color) {\r\n      this.position = null\r\n      this.color = color\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/tile.js?");

/***/ }),

/***/ "./src/assets/js/tileStatus.js":
/*!*************************************!*\
  !*** ./src/assets/js/tileStatus.js ***!
  \*************************************/
/*! exports provided: statuses, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"statuses\", function() { return statuses; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return actions; });\nlet statuses = {\r\n    \"default\": 1,\r\n    \"super\": 2\r\n  }\r\n  \r\n  let actions = {\r\n    'default': 1,\r\n    'super': 2\r\n  }\r\n  \r\n  \n\n//# sourceURL=webpack:///./src/assets/js/tileStatus.js?");

/***/ }),

/***/ "./src/assets/js/tileViewer.js":
/*!*************************************!*\
  !*** ./src/assets/js/tileViewer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ \"./src/assets/js/assets.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ \"./src/assets/js/canvas.js\");\n/* harmony import */ var _tileStatus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tileStatus.js */ \"./src/assets/js/tileStatus.js\");\n\r\n\r\n\r\n\r\nclass TileViewer {\r\n    constructor() {\r\n        this.width = 0\r\n        this.height = 0\r\n        this.assetsReady = false\r\n        this.assets = []\r\n        this.t = false\r\n        this.initialization()\r\n    }\r\n\r\n    initialization() {\r\n        for (let asset in _assets__WEBPACK_IMPORTED_MODULE_0__[\"assets\"]) {\r\n            let img = new Image()\r\n            let setting = _assets__WEBPACK_IMPORTED_MODULE_0__[\"assets\"][asset]\r\n            img.src = setting.src\r\n            img.onload = () => {\r\n                this.assets[asset] = {\r\n                    src: img\r\n                }\r\n                this.assetsReady = true\r\n            }\r\n        }\r\n    }\r\n\r\n    setTileWidth(width) {\r\n        let sizes = this.getTileSizes(width)\r\n        this.width = sizes.width\r\n        this.height = sizes.height\r\n        this.radius = sizes.radius\r\n    }\r\n\r\n    getTileSizes(width) {\r\n        return {\r\n            width: width,\r\n            height: width * 1.15,\r\n            radius: width * 0.23\r\n        }\r\n    }\r\n\r\n    draw(tile, coords, size) {\r\n        if (!tile) return\r\n        size = size || size === 0 ? size : this.width\r\n        if (this.t) {\r\n            this.drawTile(tile, coords, size)\r\n        } else {\r\n            setTimeout(() => this.drawTile(tile, coords, size), 50)\r\n        }\r\n    }\r\n\r\n    drawTile(tile, coords, size) {\r\n        this.t = true\r\n        let ctx = _canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ctx\r\n        size = size || this.width\r\n        let difference = this.width - size\r\n        let newSizes = difference ? this.getTileSizes(size) : null\r\n\r\n        let x = coords.x1 + difference / 2\r\n        let y = coords.y2 - size - difference / 2\r\n        let width = size\r\n        let height = width\r\n        let radius = difference ? newSizes.radius : this.radius\r\n        let colors = this.getTileColors(x, y, tile.color)\r\n\r\n        let TileTop = () => {\r\n            let top = this.assets.top\r\n            let topWidth = width * 0.95\r\n            let topHeight = 0.2 * topWidth\r\n            let topX = x + (width - topWidth) / 2\r\n            let topY = y + radius / 4 - topHeight\r\n            ctx.beginPath()\r\n            ctx.drawImage(top.src, topX, topY, topWidth, topHeight)\r\n            ctx.globalCompositeOperation = 'source-atop'\r\n            ctx.fillStyle = colors.dark\r\n            ctx.fillRect(topX, topY, topWidth, topHeight)\r\n            ctx.globalCompositeOperation = 'source-over'\r\n        }\r\n\r\n        let TileFront = () => {\r\n            ctx.fillStyle = colors.background\r\n            ctx.beginPath()\r\n            ctx.moveTo(x + radius, y)\r\n            ctx.lineTo(x + width - radius, y)\r\n            ctx.quadraticCurveTo(x + width, y, x + width, y + radius)\r\n            ctx.lineTo(x + width, y + height - radius)\r\n            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)\r\n            ctx.lineTo(x + radius, y + height)\r\n            ctx.quadraticCurveTo(x, y + height, x, y + height - radius)\r\n            ctx.lineTo(x, y + radius)\r\n            ctx.quadraticCurveTo(x, y, x + radius, y)\r\n            ctx.closePath()\r\n            ctx.fill()\r\n            \r\n        };\r\n\r\n        let TileStar = () => {\r\n            let star = this.assets.star\r\n            let starWidth = width * 0.58\r\n            let starHeight = starWidth * 1\r\n            let starX = x + (width - starWidth) / 2\r\n            let starY = y + (height - starHeight) / 2\r\n            ctx.globalCompositeOperation = \"destination-out\"\r\n            ctx.drawImage(star.src, starX, starY, starWidth, starHeight)\r\n            ctx.globalCompositeOperation = \"destination-over\"\r\n            ctx.fillStyle = tile.status == _tileStatus_js__WEBPACK_IMPORTED_MODULE_2__[\"statuses\"].super ? colors.bright : colors.star\r\n            ctx.fillRect(starX - 2, starY - 2, starWidth + 4, starHeight + 4)\r\n            ctx.globalCompositeOperation = 'source-over'\r\n        };\r\n\r\n        TileTop()\r\n        TileFront()\r\n        TileStar()\r\n    }\r\n\r\n    getTileColors(x, y, color) {\r\n        this.ctx = _canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ctx\r\n        let darkColor = `hsl(${color}, 100%, 40%)`\r\n\r\n        let x1 = x\r\n        let x2 = x\r\n        let y1 = y\r\n        let y2 = y + this.width\r\n\r\n        let background = this.ctx.createLinearGradient(x1, y1, x2, y2)\r\n        background.addColorStop(0, `hsl(${color}, 100%, 80%)`)\r\n        background.addColorStop(0.5, `hsl(${color}, 90%, 60%)`)\r\n        background.addColorStop(0.8, `hsl(${color}, 70%, 30%)`)\r\n        background.addColorStop(1, `hsl(${color}, 30%, 30%)`)\r\n\r\n        let star = this.ctx.createRadialGradient(\r\n            x1 + this.width * 0.5, y2 - this.width * 0.25, this.width * 0.5,\r\n            x1 + this.width * 0.5, y2, this.width * 0.25\r\n            )\r\n        star.addColorStop(0, `hsl(${color + 9}, 40%, 40%)`)\r\n        star.addColorStop(1, `hsl(${color - 9}, 100%, 50%)`)\r\n\r\n        let bright = `hsl(${color + 180}, 100%, 70%)`\r\n\r\n        return {\r\n            background: background, \r\n            star: star,\r\n            dark: darkColor,\r\n            bright: bright\r\n        };\r\n    }\r\n\r\n        deleteTile(tile, coords, callback) {\r\n            let start = performance.now()\r\n            let stop = 600\r\n    \r\n            let step = timestamp => {\r\n                let progress = timestamp - start\r\n                this.clear(coords)\r\n                let size = this.getDeleteSize(tile.action, progress)\r\n                this.draw(tile, coords, size)\r\n    \r\n                if (progress < stop) {\r\n                    window.requestAnimationFrame(step)\r\n                } else {\r\n                    callback()\r\n                }\r\n            }\r\n    \r\n            window.requestAnimationFrame(step)\r\n        }\r\n    \r\n        getDeleteSize(action, time) {\r\n            if (time < 0) time = 0\r\n            let size\r\n            if (action == _tileStatus_js__WEBPACK_IMPORTED_MODULE_2__[\"actions\"].super) { \r\n                size = this.width\r\n            } else {\r\n                if (time >= 600) size = 0\r\n                else {\r\n                    let difference = this.width / 600\r\n                    size = this.width - difference * time\r\n                }    \r\n            }\r\n    \r\n            return size\r\n        }\r\n\r\n        clear(coords) {\r\n            if (!coords) return\r\n            _canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ctx.clearRect(\r\n                coords.x1, coords.y1, \r\n                coords.x2 - coords.x1, \r\n                coords.y2 - coords.y1\r\n            )\r\n        }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new TileViewer());\n\n//# sourceURL=webpack:///./src/assets/js/tileViewer.js?");

/***/ }),

/***/ 0:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/assets/js/assets.js ./src/assets/js/canvas.js ./src/assets/js/field.js ./src/assets/js/game.js ./src/assets/js/gameScene.js ./src/assets/js/index.js ./src/assets/js/levels.js ./src/assets/js/point.js ./src/assets/js/progress.js ./src/assets/js/sceneActions.js ./src/assets/js/tile.js ./src/assets/js/tileStatus.js ./src/assets/js/tileViewer.js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\ilya\\Desktop\\Новое\\tap-clap-blast\\src\\assets\\js\\assets.js */\"./src/assets/js/assets.js\");\n__webpack_require__(/*! C:\\Users\\ilya\\Desktop\\Новое\\tap-clap-blast\\src\\assets\\js\\canvas.js */\"./src/assets/js/canvas.js\");\n__webpack_require__(/*! C:\\Users\\ilya\\Desktop\\Новое\\tap-clap-blast\\src\\assets\\js\\field.js */\"./src/assets/js/field.js\");\n__webpack_require__(/*! C:\\Users\\ilya\\Desktop\\Новое\\tap-clap-blast\\src\\assets\\js\\game.js */\"./src/assets/js/game.js\");\n__webpack_require__(/*! C:\\Users\\ilya\\Desktop\\Новое\\tap-clap-blast\\src\\assets\\js\\gameScene.js */\"./src/assets/js/gameScene.js\");\n__webpack_require__(/*! C:\\Users\\ilya\\Desktop\\Новое\\tap-clap-blast\\src\\assets\\js\\index.js */\"./src/assets/js/index.js\");\n__webpack_require__(/*! C:\\Users\\ilya\\Desktop\\Новое\\tap-clap-blast\\src\\assets\\js\\levels.js */\"./src/assets/js/levels.js\");\n__webpack_require__(/*! C:\\Users\\ilya\\Desktop\\Новое\\tap-clap-blast\\src\\assets\\js\\point.js */\"./src/assets/js/point.js\");\n__webpack_require__(/*! C:\\Users\\ilya\\Desktop\\Новое\\tap-clap-blast\\src\\assets\\js\\progress.js */\"./src/assets/js/progress.js\");\n__webpack_require__(/*! C:\\Users\\ilya\\Desktop\\Новое\\tap-clap-blast\\src\\assets\\js\\sceneActions.js */\"./src/assets/js/sceneActions.js\");\n__webpack_require__(/*! C:\\Users\\ilya\\Desktop\\Новое\\tap-clap-blast\\src\\assets\\js\\tile.js */\"./src/assets/js/tile.js\");\n__webpack_require__(/*! C:\\Users\\ilya\\Desktop\\Новое\\tap-clap-blast\\src\\assets\\js\\tileStatus.js */\"./src/assets/js/tileStatus.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\ilya\\Desktop\\Новое\\tap-clap-blast\\src\\assets\\js\\tileViewer.js */\"./src/assets/js/tileViewer.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/assets.js_./src/assets/js/canvas.js_./src/assets/js/field.js_./src/assets/js/game.js_./src/assets/js/gameScene.js_./src/assets/js/index.js_./src/assets/js/levels.js_./src/assets/js/point.js_./src/assets/js/progress.js_./src/assets/js/sceneActions.js_./src/assets/js/tile.js_./src/assets/js/tileStatus.js_./src/assets/js/tileViewer.js?");

/***/ })

/******/ });