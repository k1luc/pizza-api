"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// --MULTER--
const multer_1 = __importDefault(require("multer"));
const multer_2 = __importDefault(require("./config/multer"));
// --USER--
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
// --CATEGORY--
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
// --PRODUCT--
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const ListByCategoryController_1 = require("./controllers/product/ListByCategoryController");
// --ORDER--
const CreateOrderController_1 = require("./controllers/order/CreateOrderController");
const RemoverOrderController_1 = require("./controllers/order/RemoverOrderController");
const AddItemController_1 = require("./controllers/order/AddItemController");
const RemoveItemController_1 = require("./controllers/order/RemoveItemController");
const SendOrderController_1 = require("./controllers/order/SendOrderController");
const ListOrderController_1 = require("./controllers/order/ListOrderController");
const DetailOrderController_1 = require("./controllers/order/DetailOrderController");
// --MIDDLEWARE--
const isAuth_1 = require("./middlewares/isAuth");
const FinishOrderController_1 = require("./controllers/order/FinishOrderController");
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
//-- ROTAS USER --
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/me', isAuth_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
//-- ROTAS CATEGORY --
router.post('/category', isAuth_1.isAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
router.get('/category', isAuth_1.isAuthenticated, new ListCategoryController_1.ListCategoryController().handle);
//-- ROTAS PRODUCT --
router.post('/product', isAuth_1.isAuthenticated, new CreateProductController_1.CreateProductController().handle);
router.get('/category/product', isAuth_1.isAuthenticated, new ListByCategoryController_1.ListByCategoryController().handle);
//-- ROTAS ORDER --
router.post('/order', isAuth_1.isAuthenticated, new CreateOrderController_1.CreateOrderController().handle);
router.delete('/order', isAuth_1.isAuthenticated, new RemoverOrderController_1.RemoverOrderController().handle);
router.post('/order/add', isAuth_1.isAuthenticated, new AddItemController_1.AddItemController().handle);
router.delete('/order/remove', isAuth_1.isAuthenticated, new RemoveItemController_1.RemoveItemController().handle);
router.put('/order/send', isAuth_1.isAuthenticated, new SendOrderController_1.SendOrderController().handle);
router.get('/orders', isAuth_1.isAuthenticated, new ListOrderController_1.ListOrderController().handle);
router.get('/order/detail', isAuth_1.isAuthenticated, new DetailOrderController_1.DetailOrderController().handle);
router.put('/order/finish', isAuth_1.isAuthenticated, new FinishOrderController_1.FinishOrderController().handle);
