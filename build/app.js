"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var app = (0, express_1.default)();
app
    .use(express_1.default.json())
    .get('/health', function (req, res) { return res.send('OK'); });
exports.default = app;
