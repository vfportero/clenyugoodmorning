var days = ["Domingo","Lunes","Martes","Miércoles", "Jueves","Viernes","Sábado"]
var day = new Date().getDay();
var text = document.getElementById("day").innerHTML = days[new Date().getDay()];

if (day == 5){
	document.getElementById("fridaylunch").style.display = "block";
	document.getElementById("fridaySandwich").src = "http://loremflickr.com/320/240/Sandwich";
}