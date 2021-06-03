console.log("hello");

var a = process.argv;  // return an array containing string
console.log(a);
a = a.slice(2) // slice the array and return after removing the first 2 items
console.log(a);
console.log(add(parseInt(a[0]),parseInt(a[1])));

function add(a,b){
	return a*b;
}