function saveToLocalStorage(event) {
  event.preventDefault();
  const Uname = event.target.username.value;
  const Uemail = event.target.emailId.value;

  let UserDetail = {
    Uname,
    Uemail,
  };
  localStorage.setItem(UserDetail.Uemail, JSON.stringify(UserDetail));

  detailsAtDOM(UserDetail);
}

window.addEventListener("DOMContentLoaded", () => {
  const localStorageObj = localStorage;
  const localStoragekeys = Object.keys(localStorageObj);

  for (var i = 0; i < localStoragekeys.length; i++) {
    const key = localStoragekeys[i];
    const userDetailsString = localStorageObj[key];
    const userDetailsObj = JSON.parse(userDetailsString);
    detailsAtDOM(userDetailsObj);
  }
});

function detailsAtDOM(User) {
  const parentNode = document.getElementById("list");
  const childHTML = `<li> ${User.Uname} - ${User.Uemail}  <button>Edit</button> <button>Delete</button> </li>`;
  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}