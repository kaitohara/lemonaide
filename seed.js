// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js 

var async = require('async'),
    mongoose = require('mongoose'),
    models = require('./models');

var data = {
    Youth: [{
        firstName: 'Kaito',
        lastName: 'Hara',
        age: 8,
        businessName: 'Lemonade Stand',
        businessSummary: 'I want to make lemonade',
        selfSummary: 'I looove lemonade!',
        region: 'New York',
        products: [new Product({
            productName: 'Lemonade',
            ingredients: [new Ingredient({
                ingredientName: 'lemon',
                costPerUnit: 5,
                unitsPerProduct: 1
            })],
            price: 7
        })]
    }, {
        firstName: 'Greg',
        lastName: 'Myers',
        age: 9,
        businessName: 'Swimsuits',
        businessSummary: 'I want to make cool swimsuits',
        selfSummary: 'I looove swimsuits!',
        region: 'Boston',
        products: [new Product({
            productName: 'Swimsuit',
            ingredients: [new Ingredient({
                ingredientName: 'latex',
                costPerUnit: 20,
                unitsPerProduct: 1
            })],
            price: 30
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