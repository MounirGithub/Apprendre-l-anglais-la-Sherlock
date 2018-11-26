							



function addField(form) {
addInput("textrep[]");
var div = document.getElementById('champs');
div.appendChild(document.createElement("br"));
}

 function addInput(){

var div = document.getElementById('champs');
var input = document.createElement("input");
input.name = name;
input.id="input";
div.appendChild(input);
}
///////////////////////////////////////////////////

/*function addquestion(form) {
addtextarea("texteq[]");
addpara("h[]");
addButton("radio[]");

var div = document.getElementById('monchamps');
div.appendChild(document.createElement("br"));


}

 function addtextarea(){

var div = document.getElementById('monchamps');
var textarea = document.createElement("textarea");
textarea.name = name;
div.appendChild(textarea);
}

function addpara(){
var para = document.createElement("p");
var node = document.createTextNode("Answers");
para.appendChild(node);
var element = document.getElementById("monchamps");
element.appendChild(para);
}



 function addbutton(){

var div = document.getElementById('monchamps');
var input = document.createElement("input");

input.type("radio");
input.name = name;
div.appendChild(input);
}*/