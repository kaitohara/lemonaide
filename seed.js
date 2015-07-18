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
            })]
        })]
    }, {
        firstName: 'Kaito',
        lastName: 'Hara',
        age: 8,
        businessName: 'Lemonade Stand',
        businessSummary: 'I want to make lemonade',
        selfSummary: 'I looove lemonade!',
        region: 'New York',
        products:
    }, {
        firstName: 'Kaito',
        lastName: 'Hara',
        age: 8,
        businessName: 'Lemonade Stand',
        businessSummary: 'I want to make lemonade',
        selfSummary: 'I looove lemonade!',
        region: 'New York',
        products:
    }, {
        firstName: 'Kaito',
        lastName: 'Hara',
        age: 8,
        businessName: 'Lemonade Stand',
        businessSummary: 'I want to make lemonade',
        selfSummary: 'I looove lemonade!',
        region: 'New York',
        products:
    }],

    Sneet: [{
        author: 'gwbush', // not sure what to put here
        postNumber: 1,
        content: 'Woo!!!!',
        likes: 10,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'kaito', // not sure what to put here
        postNumber: 2,
        content: "Yeah. That's some mandatory shit.",
        likes: 548,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'robin', // not sure what to put here
        postNumber: 3,
        content: 'THIS FIRE IS @DILLONFRANCIS',
        likes: 88,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'nimit', // not sure what to put here
        postNumber: 4,
        content: 'fullst@@@@ck',
        likes: 100,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'deadmau5', // not sure what to put here
        postNumber: 5,
        content: 'Phew. Headed home for a whole 2 days of rest, aka cats and diablo. Then right back to the west coast.',
        likes: 25,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'deadmau5', // not sure what to put here
        postNumber: 5,
        content: 'Vegas. So random.',
        likes: 69,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'wired', // not sure what to put here
        postNumber: 6,
        content: 'Google now sells a $15 hard-wired Ethernet adapter for Chromecast ',
        likes: 45,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'lifehacker', // not sure what to put here
        postNumber: 7,
        content: 'Keep your home tidy with the "complete the cycle" cleaning method: ',
        likes: 18,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'cnet', // not sure what to put here
        postNumber: 8,
        content: 'Case Brutale,: This cliff-clinging concept house offers stomach-churning views ',
        likes: 43,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'mashable', // not sure what to put here
        postNumber: 9,
        content: 'KFC just mashed up fried chicken and pizza to create the "Chizza." ',
        likes: 22,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'techcrunch', // not sure what to put here
        postNumber: 10,
        content: 'Convicted Silk Road owner sends his first note from prison',
        likes: 12,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'huffpost', // not sure what to put here
        postNumber: 11,
        content: 'These photos will make you want to put your phone down forever ',
        likes: 92,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'gwbush', // not sure what to put here
        postNumber: 12,
        content: 'Woo!!!!',
        likes: 10,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'kaito', // not sure what to put here
        postNumber: 13,
        content: "Yeah. That's some mandatory shit.",
        likes: 548,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'robin', // not sure what to put here
        postNumber: 14,
        content: 'THIS FIRE IS @DILLONFRANCIS',
        likes: 88,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'nimit', // not sure what to put here
        postNumber: 15,
        content: 'fullst@@@@ck',
        likes: 100,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'deadmau5', // not sure what to put here
        postNumber: 16,
        content: 'Phew. Headed home for a whole 2 days of rest, aka cats and diablo. Then right back to the west coast.',
        likes: 25,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'deadmau5', // not sure what to put here
        postNumber: 17,
        content: 'Vegas. So random.',
        likes: 69,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'wired', // not sure what to put here
        postNumber: 18,
        content: 'Google now sells a $15 hard-wired Ethernet adapter for Chromecast ',
        likes: 45,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'lifehacker', // not sure what to put here
        postNumber: 19,
        content: 'Keep your home tidy with the "complete the cycle" cleaning method: ',
        likes: 18,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'cnet', // not sure what to put here
        postNumber: 20,
        content: 'Case Brutale,: This cliff-clinging concept house offers stomach-churning views ',
        likes: 43,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'mashable', // not sure what to put here
        postNumber: 21,
        content: 'KFC just mashed up fried chicken and pizza to create the "Chizza." ',
        likes: 22,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'techcrunch', // not sure what to put here
        postNumber: 22,
        content: 'Convicted Silk Road owner sends his first note from prison',
        likes: 12,
        date: 'Thu Jul 09 2015'
    }, {
        author: 'huffpost', // not sure what to put here
        postNumber: 23,
        content: 'These photos will make you want to put your phone down forever ',
        likes: 92,
        date: 'Thu Jul 09 2015'
    }]
};

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