var Book = require('../models/books');

exports.index = function(req, res, next) {
	let locals = {
		title: 'List of Books'
	};

	Book.find()
	.then(function(books){
		locals.books = books;
		res.render('books/index', locals)
	})
	.catch(function(err){
		next(err)
	});
};

exports.new = function(req, res){
	let locals = {
		title: 'New Book'
	};
	res.render('books/new', locals)
};

exports.create = function(req, res, next) {
	Book.create({
		title:req.body.title,
		cover:req.body.cover,
		price:req.body.price
	})
	.then(function(){
		res.redirect('/books')
	})
	.catch(function(err){
		next(err)
	})
};
