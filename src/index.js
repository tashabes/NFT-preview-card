//Update follow button

function UpdateFollowStatus(event) {
  if (followStatus == `<i class="fa-solid fa-eye"></i> follow`) {
    followButton.innerHTML = `<i class="fa-solid fa-check"></i> following`;
    followButton.style.backgroundColor = "black";
    followButton.style.color = "white";
  } else {
    followButton.innerHTML = `<i class="fa-solid fa-eye"></i> follow`;
    followButton.style.backgroundColor = "#f3f3f3";
    followButton.style.color = "#555555";
  }
}

let followButton = document.querySelector("#follow-button");
let followStatus = followButton.innerHTML;
followButton.addEventListener("click", UpdateFollowStatus);
