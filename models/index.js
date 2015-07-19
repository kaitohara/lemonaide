var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/lemonade');


mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

// Product: String,
// Ingredient: [Object] where Object is {name: String, costUnit: Number, units/Product:Number}
// PricetoSellProduct: Number

var ingredientSchema = new mongoose.Schema({
	ingredientName: {
		type: String,
		required: true
	},
	costPerUnit: {
		type: Number,
		required: true
	},
	unitsPerProduct: {
		type: Number,
		required: true
	}
})

var productSchema = new mongoose.Schema({
	productName: {
		type: String,
		required: true
	},
	ingredients: [ingredientSchema],
	price: {
		type: Number,
		required: true
	}
})

var youthSchema = new mongoose.Schema({
	//first name of child
	firstName: {
		type: String,
		required: true
	},
	//last name in child
	lastName: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	//their age (not required)
	age: Number,
	//name of their business (definitely required)
	businessName: {
		type: String,
		required: true
	},
	//what their business does
	businessSummary: {
		type: String,
		required: true
	},
	//an optional blurb about themselves.
	selfSummary: String,
	//an optional mention for the region they live in.
	region: String,
	//what they sell (will relate to product schema)
	products: [productSchema]
})



var Youth = mongoose.model('Youth', youthSchema);
var Product = mongoose.model("Product", productSchema);
var Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = {
		Youth: mongoose.model('Youth', youthSchema),
		Product: mongoose.model('Product', productSchema),
		Ingredient: mongoose.model('Ingredient', ingredientSchema)
	}
	// module.exports.Youth = Youth;
	// module.exports.Product = Product;
	// module.exports.Ingredient = Ingredient;