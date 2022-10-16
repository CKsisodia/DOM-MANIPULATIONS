var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

//form submit event
form.addEventListener("submit", addItem);

//delete event
itemList.addEventListener("click", removeItem);

//add item
function addItem(e) {
  e.preventDefault();

  //get input value
  var newItem = document.getElementById("item").value;

  //create new li element
  var li = document.createElement("li");
  //add class
  li.className = "list-group-item";
  //add textnode with input value
  li.appendChild(document.createTextNode(newItem));

  //create delete button
  var deletebtn = document.createElement("button");
  //add class to delete button
  deletebtn.className = "btn btn-danger btn-sm ml-1 float-right delete";
  //append text node
  deletebtn.appendChild(document.createTextNode("X"));
  //append  button to li
  li.appendChild(deletebtn);


 //create edit button
 var editbtn = document.createElement("button");
 //add class to edit button
 editbtn.className = "btn btn-sm float-right btn-success";
 //append text node
 editbtn.appendChild(document.createTextNode("Edit"));
 //append  button to li
 li.appendChild(editbtn);




  //append li to list
  itemList.appendChild(li);
}

//remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
