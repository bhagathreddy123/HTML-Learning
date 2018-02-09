var secretNumber = 7;
var guessNumber = Number(prompt('enter a Number?'));

if (guessNumber > secretNumber )
{
	alert("your entered number is too high");
}

else if (guessNumber < secretNumber)
{
	alert("your entered number is too low");

}

else 
{
	alert("your entered number is Correct" +guessNumber);
}