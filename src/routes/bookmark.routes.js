const express = require("express");
const router = express.Router();
const BookMarkController = require('../controllers/bookmark.controller');

// Create routes for Bookmark here
router.post('/add', BookMarkController.addBookMark);

//create route for getBookMarkByUserId

//create route for deleteBookMarkById

module.exports = router;