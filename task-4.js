var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.color = 'green';
for(var i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}

var itemlist = document.querySelector('#items');

console.log(itemlist.parentNode);
itemlist.parentElement.style.backgroundColor = 'green';

console.log(itemlist.children);
itemlist.children[1].style.backgroundColor='red';

console.log(itemlist.firstChild);

console.log(itemlist.firstElementChild);
itemlist.firstElementChild.style.backgroundColor='yellow';

console.log(itemlist.lastChild);

console.log(itemlist.lastElementChild);
itemlist.lastElementChild.style.backgroundColor='orange';

console.log(itemlist.nextSibling);

console.log(itemlist.nextElementSibling);

console.log(itemlist.previousSibling);

console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.fontWeight='bold';


var newDiv = document.createElement("div");
newDiv.className = "hello";
newDiv.id = "hello1";
newDiv.setAttribute("title", "hello Div");
var newDivText = document.createTextNode("Hello world");
newDiv.appendChild(newDivText);

console.log(newDiv);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

container.insertBefore(newDiv, h1);



var h2 = document.getElementById("items");
h2.innerHTML = 'Hello World' + h2.innerHTML;

