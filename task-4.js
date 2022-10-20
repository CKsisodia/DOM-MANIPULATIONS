// var btn = document.querySelector(".btn");
// btn.addEventListener("click", (e) => {
//   document.querySelector("#my-form").style.background = "#90EE90";
// });

// var btn = document.querySelector(".btn");
// btn.addEventListener("mouseover", (e) => {
//   e.preventDefault();
//   document.querySelector("#my-form").style.background = "pink";
// });

// var btn = document.querySelector(".btn");
// btn.addEventListener("mouseout", (e) => {
//   e.preventDefault();
//   document.querySelector("#my-form").style.background = "orange";
// });

function saveToLocalStorage(event) {
  event.preventDefault();
  const Uname = event.target.username.value;
  const Uemail = event.target.emailId.value;

  let UserDetail = {
    Uname,
    Uemail,
  };
  localStorage.setItem(UserDetail.Uemail,JSON.stringify(UserDetail));
}