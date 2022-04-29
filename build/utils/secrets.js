"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
if (fs_1.default.existsSync('.env')) {
    dotenv_1.default.config({ path: '.env' });
}
else {
    // You can delete this after you create your own .env file
    dotenv_1.default.config({ path: '.env.example' });
}
exports.ENVIRONMENT = process.env.NODE_ENV;
exports.SESSION_SECRET = process.env.SESSION_SECRET;
//# sourceMappingURL=secrets.js.map