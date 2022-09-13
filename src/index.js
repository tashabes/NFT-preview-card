let buttons = document.getElementsByClassName("btn");
for (btn of buttons) {
  btn.addEventListener("click", (event) => {
    if (event.target.classList.contains("follow")) {
      event.target.classList.remove("follow");
      event.target.innerHTML = `<i class="fa-solid fa-check"></i> following`;
      event.target.style.backgroundColor = "black";
      event.target.style.color = "white";
    } else {
      event.target.classList.add("follow");
      event.target.style.backgroundColor = "#f3f3f3";
      event.target.style.color = "#555555";
      event.target.innerHTML = `<i class="fa-solid fa-eye"></i> follow`;
    }
  });
}
