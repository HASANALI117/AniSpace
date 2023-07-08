const express = require("express");
const router = express.Router();

const ensureLoggedin = require("../config/Auth/ensureLoggedin");

//<--import controllers-->>
const getItemsCtrl = require("../controllers/list/getItems");
const getListsCtrl = require("../controllers/list/getLists");
const removeItemCtrl = require("../controllers/list/removeItem");
const addItemCtrl = require("../controllers/list/addItem");
const removeCtrl = require("../controllers/list/remove");
const createCtrl = require("../controllers/list/create");

//<--make api routes-->>
router.get("/list/:listId/items", ensureLoggedin, getItemsCtrl.getItems);
router.get("/user/lists", ensureLoggedin, getListsCtrl.getLists);
router.post(
  "/list/:listId/removeItem",
  ensureLoggedin,
  removeItemCtrl.removeItem
);
router.post("/list/:listId/addItem", ensureLoggedin, addItemCtrl.addItem);
router.post("/list/remove", ensureLoggedin, removeCtrl.remove);
router.post("/list/new", ensureLoggedin, createCtrl.create);

module.exports = router;
