var filter = document.getElementById('filter');

//filter event
filter.addEventListener('keyup',filterItems);

  var addItem = document.getElementById('item-2').value;

 li.appendChild(document.createTextNode(newItem));

//filter items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    //get ALL li'S
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent;
        const item2 = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || item2.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });