function subscribePlan() {
  let petLover = prompt("Do you have a pet? Y / N");
  if (petLover === "y") {
    alert("Awesome!");
  } else {
    alert("Get one now?");
  }
}

let buttonElement = document.querySelector("#subscribe");
buttonElement.addEventListener("click", subscribePlan);
