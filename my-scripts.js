//Create the variable in the database - set count
if(localStorage.getItem("count") == null){
localStorage.setItem("count",0)
}

//Update count and replace loading in HTML
function update(){
	document.getElementById("count").innerHTML = localStorage.getItem("count")	
}

update()

//Program button to add 1 to count
function plusOne(){
	localStorage.setItem("count",Number(localStorage.getItem("count")) + 1)
	update()
}	

//Program reset button
function reset(){
	if (confirm("Are you sure?")) {
		localStorage.setItem("count",0)
		update()
	}
}