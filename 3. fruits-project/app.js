const mongoose = require('mongoose');

//Connect to the DB
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useUnifiedTopology: true, useNewUrlParser: true });

// Create Schema
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is not Given!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const peach = new Fruit({

    rating: 10,
    review: "Banana Fruit"
})

//peach.save()

// Update the Data in a collection

/*
Fruit.updateOne({ _id: "60a002c017be822fbc2a3b02" }, { name: "Peach" }, function(err) {
    if (err)
        console.log(err);
    else
        console.log("Data Updated Successfully")
}) */

// delete the data from the collection
/*
Fruit.deleteOne({ _id: "60a002c017be822fbc2a3b02" }, function(err) {
    if (err)
        console.log(err);
    else
        console.log("Data Deleted Successfully")
})
*/

/*
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Nyc Fruit"
})

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 9,
    review: "Pretty Looking"
})
const orange = new Fruit({
    name: "Orange",
    rating: 8,
    review: "Great Taste "
})
*/

//fruit.save()

//Insert many items in DB

/*
Fruit.insertMany([kiwi, orange], function(err) {
    if (err) {
        console.log("There is an Error");
    } else {
        console.log("Fruits added Succesfully");
    }

})
 */

// Find fruits collection items
Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        // console.log(fruit); -> Get whole fruits collection

        // close the connection of DB
        mongoose.connection.close();

        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        })
    }
})

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
})

const Person = mongoose.model("Person", personSchema);

// Creating relationship between fruit and person
/*
const pineapple = new Fruit({
    name: "Pineapple",
    rating: 9,
    review: "Best Fruit, I Love this"
})
pineapple.save()

const person = new Person({
    name: "Mukul",
    age: 21,
    favouriteFruit: pineapple

})

person.save() // save data in DBs

*/
/* 
const mango = new Fruit({
    name: "Mango",
    rating: 9,
    review: "Best Fruit, I Love this"
})
mango.save()

// Create a Relationship While Updating Data
Person.updateOne({ name: "Rajan" }, { favouriteFruit: mango }, function(err) {
    if (err)
        console.log(err);
    else
        console.log("Data Updated Successfully!")
})

*/

// Delete Many items in a collection

/*
Fruit.deleteMany({ name: "Mango" }, function(err) {
    if (err)
        console.log(err);
    else
        console.log("All the documents are Successfully deleted");
});

*/