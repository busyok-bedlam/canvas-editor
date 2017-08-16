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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var w = canvas.width;
var h = canvas.height;
var width = 5;
var aaa = document.getElementById("ooo");
//BUTTONS
var clear = document.getElementById('clear');
clear.addEventListener("click", function () {
	ctx.fillRect(0, 0, w, h);
}, false);
var colour = "#000000";
ctx.fillStyle = "#ffffff";
var value = void 0;

canvas.addEventListener("mousedown", function (event) {
	colour = document.getElementById('color').value;
	value = document.getElementById('size').value;

	console.log(typeof value === "undefined" ? "undefined" : _typeof(value));
	console.log(colour);
	//ctx.fillStyle = colour;
	ctx.lineWidth = value;
	ctx.beginPath();
	ctx.strokeStyle = colour;
	ctx.moveTo(event.offsetX, event.offsetY);
	var flag = 1;
	canvas.addEventListener("mousemove", function (event) {
		if (flag == 1) {
			ctx.lineTo(event.offsetX, event.offsetY);
			ctx.stroke();
			canvas.addEventListener("mouseup", function (event) {
				flag = 0;
			}, false);
		}
	}, false);
}, false);
ctx.fillRect(0, 0, w, h);

var test = document.getElementById('test');
test.addEventListener("change", function () {
	colour = document.getElementById('color').value;alert(colour);
}, false);

/***/ })
/******/ ]);