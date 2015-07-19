// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js 

var async = require('async'),
    mongoose = require('mongoose'),
    models = require('./models');

var data = {
    Youth: [{
        firstName: 'Kaito',
        lastName: 'Hara',
        password: 'password',
        age: 8,
        businessName: 'Lemonade Stand',
        businessSummary: 'I want to make lemonade',
        selfSummary: 'I looove lemonade!',
        region: 'New York',
        products: [new models.Product({
            productName: 'Lemonade',
            ingredients: [new models.Ingredient({
                ingredientName: 'lemon',
                costPerUnit: 5,
                unitsPerProduct: 1
            })],
            price: 7
        })]
    }, {
        firstName: 'Robin',
        lastName: 'Kim',
        password: 'password',
        age: 9,
        businessName: 'Selling Water',
        businessSummary: 'I want to make water',
        selfSummary: 'I looove water!',
        region: 'California',
        products: [new models.Product({
            productName: 'Water',
            ingredients: [new models.Ingredient({
                ingredientName: 'water',
                costPerUnit: 5,
                unitsPerProduct: 1
            })],
            price: 7
        })]
    }]
}

mongoose.connection.on('open', function() {
    mongoose.connection.db.dropDatabase(function() {

        console.log("Dropped old data, now inserting data");
        async.each(Object.keys(data),
            function(modelName, outerDone) {
                async.each(data[modelName],
                    function(d, innerDone) {
                        models[modelName].create(d, innerDone);
                    },
                    outerDone
                );
            },
            function(err) {
                console.log("Finished inserting data");
                console.log("Control-C to quit");
            }
        );
    });
});