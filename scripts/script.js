window.onscroll = function () {
  handleScroll();
};

function handleScroll() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("header").class =
      "fixed-navbar animated fadeInDown active";
  } else document.getElementById("header").class = "fixed-navbar";
}

function handlerSubmitForm(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // check for empty enter
  if (!name)
    document.getElementById("nameError").innerText = "Please enter your name";
  if (!lastName)
    document.getElementById("lastNameError").innerText =
      "Please enter your lastName";
  if (!email)
    document.getElementById("emailError").innerText = "Please enter your email";
  if (!subject)
    document.getElementById("subjectError").innerText =
      "Please enter your subject";
  if (!message)
    document.getElementById("messageError").innerText =
      "Please enter your note";
}

document.querySelector(".menu-open-btn").addEventListener("click", openMenu);
document.querySelector(".close-navbar").addEventListener("click", closeMenu);
document.querySelector(".close-navbar-2").addEventListener("click", closeMenu);

function openMenu() {
  document.getElementById("navbar").className = "navbar-collapse navigation-holder active";
}

function closeMenu() {
  document.getElementById("navbar").className = "navbar-collapse navigation-holder";
}
