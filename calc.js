// var age = prompt("enter your age?");
// days = age * 365.25;

// var x = 10;
// var y = "a";

// y === "b" || x >= 10
var age = Number(prompt("what is your age?"));
if(age < 18)
{
	console.log("i am younger");
}
else if(age<25)
{
	console.log("i am elder");
}
else
{
	console.log("i am old");
}

// console.log(age + " years is roughly " + days + " days");


// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));

// If age is negative
if(age < 0) {
 console.log("Come back once you're out of the womb");
}

// If age is 21  
if(age === 21) {
 console.log("Happy 21st Birthday!");
}