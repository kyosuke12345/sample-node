/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LibLogService = void 0;
const common_1 = __webpack_require__(2);
const winston_1 = __webpack_require__(3);
let LibLogService = class LibLogService {
    constructor() {
        const logger = winston_1.createLogger({
            format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
            transports: [
                new winston_1.transports.Console({
                    level: 'debug',
                    format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.simple()),
                }),
                new winston_1.transports.File({
                    filename: 'log/info.log',
                    level: 'info',
                }),
            ],
        });
        this.logger = logger;
    }
    log(message, context) {
        this.logger.log({
            level: 'info',
            message: `${message}, ${context}`,
        });
    }
    error(message, trace, context) {
        this.logger.error({
            level: 'error',
            message: `${message}`,
            trace: trace,
            context: context,
        });
    }
    warn(message, context) {
        this.logger.warn({
            level: 'warn',
            message: `${message}, ${context}`,
        });
    }
    debug(message, context) {
        this.logger.debug({
            level: 'debug',
            message: `${message}, ${context}`,
        });
    }
    verbose(message, context) {
        this.logger.verbose({
            level: 'verbose',
            message: `${message}, ${context}`,
        });
    }
};
LibLogService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], LibLogService);
exports.LibLogService = LibLogService;


/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/common");;

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("winston");;

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-fastify");;

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/core");;

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");;

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const libs_1 = __webpack_require__(8);
const db_service_1 = __webpack_require__(11);
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(12);
const typeorm_1 = __webpack_require__(22);
const lib_log_module_1 = __webpack_require__(23);
const app_controller_1 = __webpack_require__(24);
const schedule_1 = __webpack_require__(35);
const auth_module_1 = __webpack_require__(36);
const users_module_1 = __webpack_require__(37);
const stock_module_1 = __webpack_require__(42);
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            config_1.ConfigModule.forRoot({
                envFilePath: `env/${process.env.NODE_ENV}.env`,
                isGlobal: true,
            }),
            {
                module: libs_1.LibsModule,
                global: true,
            },
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useClass: db_service_1.DbService,
            }),
            lib_log_module_1.LibLogModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            stock_module_1.StockModule,
        ],
        controllers: [app_controller_1.AppController],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(10), exports);


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LibsModule = void 0;
const common_1 = __webpack_require__(2);
const libs_service_1 = __webpack_require__(10);
const db_service_1 = __webpack_require__(11);
let LibsModule = class LibsModule {
};
LibsModule = __decorate([
    common_1.Module({
        providers: [libs_service_1.LibsService, db_service_1.DbService],
        exports: [libs_service_1.LibsService, db_service_1.DbService],
    })
], LibsModule);
exports.LibsModule = LibsModule;


/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LibsService = void 0;
const common_1 = __webpack_require__(2);
let LibsService = class LibsService {
};
LibsService = __decorate([
    common_1.Injectable()
], LibsService);
exports.LibsService = LibsService;


/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DbService = void 0;
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(12);
const stock_entity_1 = __webpack_require__(13);
const user_entity_1 = __webpack_require__(19);
let DbService = class DbService {
    constructor(configService) {
        this.configService = configService;
    }
    createTypeOrmOptions() {
        return {
            type: 'postgres',
            host: this.configService.get('DATABASE_HOST', 'localhost'),
            port: Number(this.configService.get('DATABASE_PORT', 5432)),
            username: this.configService.get('DATABASE_USERNAME', 'postgres'),
            password: this.configService.get('DATABASE_PASSWORD', 'postgres'),
            database: this.configService.get('DATABASE_NAME', 'postgres'),
            entities: [user_entity_1.User, stock_entity_1.Stock],
            synchronize: false,
        };
    }
};
DbService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], DbService);
exports.DbService = DbService;


/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("@nestjs/config");;

/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Stock = void 0;
const common_1 = __webpack_require__(14);
const typeguard_1 = __webpack_require__(15);
const date_fns_1 = __webpack_require__(17);
const typeorm_1 = __webpack_require__(18);
let Stock = class Stock {
    afterLoad() {
        if (typeguard_1.isString(this.day)) {
            this.day = date_fns_1.parse(this.day, common_1.TYPEORM_DATE_FORMAT, new Date());
        }
    }
};
__decorate([
    typeorm_1.PrimaryColumn({ type: 'date' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Stock.prototype, "day", void 0);
__decorate([
    typeorm_1.Column({ type: 'double precision', comment: '終値' }),
    __metadata("design:type", Number)
], Stock.prototype, "owarine", void 0);
__decorate([
    typeorm_1.Column({ type: 'double precision', comment: '始値' }),
    __metadata("design:type", Number)
], Stock.prototype, "hajimene", void 0);
__decorate([
    typeorm_1.Column({ type: 'double precision', comment: '高値' }),
    __metadata("design:type", Number)
], Stock.prototype, "takane", void 0);
__decorate([
    typeorm_1.Column({ type: 'double precision', comment: '安値' }),
    __metadata("design:type", Number)
], Stock.prototype, "yasune", void 0);
__decorate([
    typeorm_1.AfterLoad(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Stock.prototype, "afterLoad", null);
Stock = __decorate([
    typeorm_1.Entity('stock')
], Stock);
exports.Stock = Stock;


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isLocal = exports.TYPEORM_DATE_FORMAT = void 0;
exports.TYPEORM_DATE_FORMAT = 'yyyy-MM-dd';
function isLocal() {
    var _a;
    const env = (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : 'local';
    if (env === 'local') {
        return true;
    }
    else {
        return false;
    }
}
exports.isLocal = isLocal;


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isArray = exports.isDate = exports.isObject = exports.isBoolean = exports.isString = exports.isNumber = exports.isUndefined = exports.isNull = exports.isNullOrUndefined = void 0;
const class_validator_1 = __webpack_require__(16);
function isNullOrUndefined(object) {
    return object === null || object === undefined;
}
exports.isNullOrUndefined = isNullOrUndefined;
function isNull(object) {
    return object === null;
}
exports.isNull = isNull;
function isUndefined(object) {
    return object === undefined;
}
exports.isUndefined = isUndefined;
function isNumber(object) {
    return class_validator_1.isNumber(object);
}
exports.isNumber = isNumber;
function isString(object) {
    return class_validator_1.isString(object);
}
exports.isString = isString;
function isBoolean(object) {
    return typeof object === 'boolean';
}
exports.isBoolean = isBoolean;
function isObject(object) {
    return class_validator_1.isObject(object);
}
exports.isObject = isObject;
function isDate(object) {
    return class_validator_1.isDate(object);
}
exports.isDate = isDate;
function isArray(object, isFunc) {
    return Array.isArray(object) && object.every((element) => isFunc(element));
}
exports.isArray = isArray;


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("class-validator");;

/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("date-fns");;

/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("typeorm");;

/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUserInstance = exports.User = exports.MAX_LENGTH = void 0;
const typeorm_1 = __webpack_require__(18);
const table_abstract_1 = __webpack_require__(20);
const bcrypt_1 = __webpack_require__(21);
const swagger_1 = __webpack_require__(6);
exports.MAX_LENGTH = {
    EMAIL: 80,
    PASSWORD: 60,
};
let User = class User extends table_abstract_1.CommonColumn {
};
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Index({ unique: true }),
    typeorm_1.Column({ type: 'varchar', length: exports.MAX_LENGTH.EMAIL }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ type: 'varchar', length: exports.MAX_LENGTH.PASSWORD }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
User = __decorate([
    typeorm_1.Entity('user_info')
], User);
exports.User = User;
function getUserInstance(body) {
    const user = new User();
    user.email = body.email;
    user.password = bcrypt_1.hashSync(body.password, 10);
    return user;
}
exports.getUserInstance = getUserInstance;


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COMMON_COLUMN_KEY_LIST = exports.CommonColumn = void 0;
const typeorm_1 = __webpack_require__(18);
class CommonColumn {
}
__decorate([
    typeorm_1.CreateDateColumn({
        name: 'create_dt',
        type: 'timestamp with time zone',
        select: false,
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CommonColumn.prototype, "createDT", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        name: 'update_dt',
        type: 'timestamp with time zone',
        select: false,
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CommonColumn.prototype, "updateDT", void 0);
__decorate([
    typeorm_1.DeleteDateColumn({ name: 'del_dt', select: false }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], CommonColumn.prototype, "delDT", void 0);
exports.CommonColumn = CommonColumn;
exports.COMMON_COLUMN_KEY_LIST = Object.keys(CommonColumn).map((key) => key);


/***/ }),
/* 21 */
/***/ ((module) => {

module.exports = require("bcrypt");;

/***/ }),
/* 22 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");;

/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LibLogModule = void 0;
const common_1 = __webpack_require__(2);
const lib_log_service_1 = __webpack_require__(1);
let LibLogModule = class LibLogModule {
};
LibLogModule = __decorate([
    common_1.Module({
        providers: [lib_log_service_1.LibLogService],
        exports: [lib_log_service_1.LibLogService],
    })
], LibLogModule);
exports.LibLogModule = LibLogModule;


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(6);
const auth_service_1 = __webpack_require__(25);
const auth_dto_1 = __webpack_require__(29);
const auth_response_1 = __webpack_require__(28);
const jwt_auth_guard_1 = __webpack_require__(30);
const local_auth_guard_1 = __webpack_require__(32);
const users_dto_1 = __webpack_require__(33);
const users_response_1 = __webpack_require__(34);
let AppController = class AppController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(req, _) {
        return this.authService.login(req.user);
    }
    async regitst(body) {
        return this.authService.regist(body);
    }
    async loginInfo(req) {
        return req.user;
    }
};
__decorate([
    swagger_1.ApiOperation({ description: 'ログイン処理' }),
    swagger_1.ApiUnauthorizedResponse(),
    swagger_1.ApiResponse({
        type: auth_response_1.LoginResponse,
    }),
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_1.Post('auth/login'),
    __param(0, common_1.Request()),
    __param(1, common_1.Body(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof auth_dto_1.LoginDto !== "undefined" && auth_dto_1.LoginDto) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AppController.prototype, "login", null);
__decorate([
    swagger_1.ApiProperty({ description: '新規会員登録処理' }),
    common_1.Post('regist'),
    __param(0, common_1.Body(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof users_dto_1.CreateUserDto !== "undefined" && users_dto_1.CreateUserDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "regitst", null);
__decorate([
    swagger_1.ApiOperation({ description: 'ログインユーザの情報取得' }),
    swagger_1.ApiResponse({
        type: users_response_1.UserResponse,
    }),
    swagger_1.ApiUnauthorizedResponse(),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get('login-info'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "loginInfo", null);
AppController = __decorate([
    swagger_1.ApiTags('ログイン、新規登録関連'),
    common_1.Controller(),
    __metadata("design:paramtypes", [typeof (_d = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _d : Object])
], AppController);
exports.AppController = AppController;


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const typeguard_1 = __webpack_require__(15);
const users_service_1 = __webpack_require__(26);
const common_1 = __webpack_require__(2);
const jwt_1 = __webpack_require__(27);
const bcrypt_1 = __webpack_require__(21);
const auth_response_1 = __webpack_require__(28);
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validateUser(email, password) {
        const user = await this.userService.findUser(email);
        if (!typeguard_1.isUndefined(user) && bcrypt_1.compareSync(password, user.password)) {
            return new auth_response_1.AuthResponse(user);
        }
        else {
            return null;
        }
    }
    async login(user) {
        const payload = { userId: user.email };
        return new auth_response_1.LoginResponse(this.jwtService.sign(payload));
    }
    async regist(body) {
        return this.userService.regist(body);
    }
    async getUser(email) {
        const user = await this.userService.findUser(email);
        if (typeguard_1.isUndefined(user)) {
            throw new common_1.UnauthorizedException();
        }
        return new auth_response_1.UserReponse(user);
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const user_entity_1 = __webpack_require__(19);
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(22);
const typeorm_2 = __webpack_require__(18);
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findUser(email) {
        return this.userRepository.findOne({ where: { email: email } });
    }
    async regist(body) {
        await this.userRepository.save(user_entity_1.getUserInstance(body));
        return {};
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),
/* 27 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");;

/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserReponse = exports.LoginResponse = exports.AuthResponse = void 0;
const table_abstract_1 = __webpack_require__(20);
const user_entity_1 = __webpack_require__(19);
const swagger_1 = __webpack_require__(6);
class AuthResponse extends swagger_1.PartialType(swagger_1.OmitType(user_entity_1.User, ['password', 'id', ...table_abstract_1.COMMON_COLUMN_KEY_LIST])) {
    constructor(user) {
        super();
        this.email = user.email;
    }
}
exports.AuthResponse = AuthResponse;
class LoginResponse {
    constructor(access_token) {
        this.access_token = access_token;
    }
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], LoginResponse.prototype, "access_token", void 0);
exports.LoginResponse = LoginResponse;
class UserReponse extends swagger_1.PartialType(swagger_1.OmitType(user_entity_1.User, ['password', ...table_abstract_1.COMMON_COLUMN_KEY_LIST])) {
    constructor(user) {
        super();
        this.id = user.id;
        this.email = user.email;
    }
}
exports.UserReponse = UserReponse;


/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginDto = void 0;
const class_validator_1 = __webpack_require__(16);
const swagger_1 = __webpack_require__(6);
class LoginDto {
}
__decorate([
    swagger_1.ApiProperty({ type: String }),
    class_validator_1.IsEmail(),
    __metadata("design:type", Object)
], LoginDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], LoginDto.prototype, "password", void 0);
exports.LoginDto = LoginDto;


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(2);
const passport_1 = __webpack_require__(31);
let JwtAuthGuard = class JwtAuthGuard extends passport_1.AuthGuard('jwt') {
};
JwtAuthGuard = __decorate([
    common_1.Injectable()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),
/* 31 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");;

/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = void 0;
const common_1 = __webpack_require__(2);
const passport_1 = __webpack_require__(31);
let LocalAuthGuard = class LocalAuthGuard extends passport_1.AuthGuard('local') {
};
LocalAuthGuard = __decorate([
    common_1.Injectable()
], LocalAuthGuard);
exports.LocalAuthGuard = LocalAuthGuard;


/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const swagger_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(16);
class CreateUserDto {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
exports.CreateUserDto = CreateUserDto;


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserResponse = void 0;
const table_abstract_1 = __webpack_require__(20);
const user_entity_1 = __webpack_require__(19);
const swagger_1 = __webpack_require__(6);
class UserResponse extends swagger_1.PartialType(swagger_1.OmitType(user_entity_1.User, ['password', ...table_abstract_1.COMMON_COLUMN_KEY_LIST])) {
    constructor(user) {
        super();
        this.email = user.email;
        this.id = user.id;
    }
}
exports.UserResponse = UserResponse;


/***/ }),
/* 35 */
/***/ ((module) => {

module.exports = require("@nestjs/schedule");;

/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(2);
const jwt_1 = __webpack_require__(27);
const auth_service_1 = __webpack_require__(25);
const users_module_1 = __webpack_require__(37);
const passport_1 = __webpack_require__(31);
const local_strategy_1 = __webpack_require__(38);
const config_1 = __webpack_require__(12);
const jwt_strategy_1 = __webpack_require__(40);
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            users_module_1.UsersModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                useFactory: async (configService) => {
                    return {
                        secret: configService.get('JWT_SECRET_KEY'),
                        signOptions: {
                            expiresIn: configService.get('EXPIRES_IN'),
                        },
                    };
                },
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),
/* 37 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(2);
const users_service_1 = __webpack_require__(26);
const typeorm_1 = __webpack_require__(22);
const user_entity_1 = __webpack_require__(19);
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        providers: [users_service_1.UsersService],
        exports: [users_service_1.UsersService],
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),
/* 38 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const passport_local_1 = __webpack_require__(39);
const passport_1 = __webpack_require__(31);
const common_1 = __webpack_require__(2);
const auth_service_1 = __webpack_require__(25);
let LocalStrategy = class LocalStrategy extends passport_1.PassportStrategy(passport_local_1.Strategy) {
    constructor(authService) {
        super({ usernameField: 'email' });
        this.authService = authService;
    }
    async validate(email, password) {
        const user = await this.authService.validateUser(email, password);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
LocalStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


/***/ }),
/* 39 */
/***/ ((module) => {

module.exports = require("passport-local");;

/***/ }),
/* 40 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const passport_jwt_1 = __webpack_require__(41);
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(12);
const passport_1 = __webpack_require__(31);
const auth_service_1 = __webpack_require__(25);
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor(configService, authService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET_KEY'),
        });
        this.configService = configService;
        this.authService = authService;
    }
    async validate(payload) {
        return this.authService.getUser(payload.userId);
    }
};
JwtStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _b : Object])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),
/* 41 */
/***/ ((module) => {

module.exports = require("passport-jwt");;

/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StockModule = void 0;
const stock_entity_1 = __webpack_require__(13);
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(22);
const stock_controller_1 = __webpack_require__(43);
const stock_service_1 = __webpack_require__(45);
let StockModule = class StockModule {
};
StockModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([stock_entity_1.Stock])],
        controllers: [stock_controller_1.StockController],
        providers: [stock_service_1.StockService],
    })
], StockModule);
exports.StockModule = StockModule;


/***/ }),
/* 43 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StockController = void 0;
const jwt_auth_guard_1 = __webpack_require__(30);
const common_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(6);
const stock_response_1 = __webpack_require__(44);
const stock_service_1 = __webpack_require__(45);
let StockController = class StockController {
    constructor(stockService) {
        this.stockService = stockService;
    }
    async stockInfo(_) {
        return this.stockService.stockInfo();
    }
};
__decorate([
    swagger_1.ApiOperation({ description: '株価情報を取得' }),
    swagger_1.ApiResponse({
        type: stock_response_1.StockResponse,
    }),
    common_1.Get(),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "stockInfo", null);
StockController = __decorate([
    swagger_1.ApiTags('株価情報取得'),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiUnauthorizedResponse(),
    common_1.Controller('stock'),
    __metadata("design:paramtypes", [typeof (_a = typeof stock_service_1.StockService !== "undefined" && stock_service_1.StockService) === "function" ? _a : Object])
], StockController);
exports.StockController = StockController;


/***/ }),
/* 44 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isStockResponse = exports.StockResponse = exports.isStockItem = exports.StockItem = void 0;
const typeguard_1 = __webpack_require__(15);
const swagger_1 = __webpack_require__(6);
class StockItem {
    constructor(stock) {
        this.day = stock.day;
        this.takane = stock.takane;
        this.yasune = stock.yasune;
        this.owarine = stock.owarine;
        this.hajimene = stock.hajimene;
    }
}
__decorate([
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Object)
], StockItem.prototype, "day", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], StockItem.prototype, "takane", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], StockItem.prototype, "owarine", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], StockItem.prototype, "hajimene", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], StockItem.prototype, "yasune", void 0);
exports.StockItem = StockItem;
function isStockItem(obj) {
    return (typeguard_1.isObject(obj) &&
        typeguard_1.isDate(obj.day) &&
        typeguard_1.isNumber(obj.takane) &&
        typeguard_1.isNumber(obj.yasune) &&
        typeguard_1.isNumber(obj.owarine) &&
        typeguard_1.isNumber(obj.hajimene));
}
exports.isStockItem = isStockItem;
class StockResponse {
    constructor(stockList) {
        this.items = [];
        for (const row of stockList) {
            this.items.push(new StockItem(row));
        }
    }
}
__decorate([
    swagger_1.ApiProperty({ type: StockItem, isArray: true }),
    __metadata("design:type", Array)
], StockResponse.prototype, "items", void 0);
exports.StockResponse = StockResponse;
function isStockResponse(obj) {
    return typeguard_1.isObject(obj) && typeguard_1.isArray(obj.items, isStockItem);
}
exports.isStockResponse = isStockResponse;


/***/ }),
/* 45 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StockService = void 0;
const stock_entity_1 = __webpack_require__(13);
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(22);
const typeorm_2 = __webpack_require__(18);
const stock_response_1 = __webpack_require__(44);
let StockService = class StockService {
    constructor(stockRepository) {
        this.stockRepository = stockRepository;
    }
    async stockInfo() {
        const stockList = await this.stockRepository.find({
            order: { day: 'ASC' },
            take: 60,
        });
        return new stock_response_1.StockResponse(stockList);
    }
};
StockService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(stock_entity_1.Stock)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], StockService);
exports.StockService = StockService;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const lib_log_service_1 = __webpack_require__(1);
const platform_fastify_1 = __webpack_require__(4);
const core_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(6);
const app_module_1 = __webpack_require__(7);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter(), {
        logger: false,
    });
    app.useLogger(app.get(lib_log_service_1.LibLogService));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('portfolio api説明')
        .setVersion('1.0.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    await app.listen(3000, '0.0.0.0');
}
bootstrap();

})();

/******/ })()
;