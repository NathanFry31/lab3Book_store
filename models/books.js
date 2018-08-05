var mongoose = require('mongoose')

var bookSchema = new mongoose.Schema({
	title:{
		type: String,
		required: 'You can not forget the book title. It has to have one!'
	},
	cover:{
		type: String,
		required: 'Is it hardcover or paperback'
	},
	price:{
		type:Number,
		required:'Enter a dollar value in CAD'
	}
})
module.exports = mongoose.model('Book', bookSchema)
