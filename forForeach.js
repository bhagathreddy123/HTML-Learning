var todos = ['swert'];

var input = prompt("what would you like to do?");

while(input !== "quit") {
	if(input === "list") {
		console.log("*************************************");
		todos.forEach(function(todo, i){
			console.log(i + ": " + todo);
		});
			console.log("*************************************");
	} else if(input === "new") {
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
		console.log("new todo");
	} else if( input === "delete"){
		var index = prompt("Enter index of todo to delete");
		todos.splice(index,1);
		console.log("todo deleted");
	}
	input = prompt("What would you like to do?");
}
console.log("Ok, You Quit the app")