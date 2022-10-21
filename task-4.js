//input values save to local storage
function saveToLocalStorage(event) {
  event.preventDefault();
  const Uname = event.target.username.value;
  const Uemail = event.target.emailId.value;

  let UserDetail = {
    Uname,
    Uemail,
  };
  localStorage.setItem(UserDetail.Uemail, JSON.stringify(UserDetail));

  showAtDOM(UserDetail); // object UserDetail values passed to function detailsAtDom
}

// prevent input values to be removed on REFRESHING page
window.addEventListener("DOMContentLoaded", () => {
  const localStorageObj = localStorage;
  const localStoragekeys = Object.keys(localStorageObj);

  for (var i = 0; i < localStoragekeys.length; i++) {
    const key = localStoragekeys[i];
    const userDetailsString = localStorageObj[key];
    const userDetailsObj = JSON.parse(userDetailsString);
    showAtDOM(userDetailsObj);
  }
});

// getting values from local storage and SHOW AT DOM 
function showAtDOM(User) {
  const parentNode = document.getElementById("list");
  const childHTML = `<li id='${User.Uemail}'> ${User.Uname} - ${User.Uemail} 
     <button onclick=editUser('${User.Uemail}','${User.Uname}') style='background-color:green; font-weight:bold; border-color:yellow;
                              font-size:15px; font-style:italic;'>Edit</button> 
    <button onclick=deleteUser('${User.Uemail}') style='background-color:red; font-weight:bold; font-weight:bold; border-color:yellow;
                              font-size:15px; font-style:italic'>Delete</button> 
                        </li>`;
  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

//remove data from local storage
function deleteUser(emailId){
  localStorage.removeItem(emailId);
  removeUserFromScreen(emailId);
}

//remove data from UI/data shown at dom
function removeUserFromScreen(emailId){
  const parentNode = document.getElementById("list");
  const childNodeToBeDeleted = document.getElementById(emailId);

  parentNode.removeChild(childNodeToBeDeleted);
}

function editUser(emailId,username){
  document.getElementById('name').value = username;
  document.getElementById('email').value = emailId;

  deleteUser(emailId);
}