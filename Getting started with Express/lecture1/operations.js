var add = function (a, b){
    return a + b;
}

 var multiply  = function (a, b){
    return a * b;
}

var subtract = function (a,b){
	return a-b;
}

var divide = function (a,b){
	return a/b;
}

console.log(module.exports)


//following syntax is preffered to use at the end of file bcoz it can be overided again 
module.exports = {
	add,multiply,subtract,divide
}
console.log(module.exports)

module.exports.sayHello = function (){
	console.log("Hello");
}

console.log(module.exports)

function sayGM(){
	console.log("Good Morning");
}


module.exports = { sayGM }
console.log(module.exports)


// module.exports.a = add;

// console.log(module.exports)

module.exports = {
	add,multiply,subtract,divide,sayGM
}