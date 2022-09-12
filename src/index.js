//Update follow button

function UpdateFollowStatus(event) {
  let followStatus = followButton.innerHTML;
  if (followStatus == "follow") {
    followButton.innerHTML = "following";
  } else {
    followButton.innerHTML = "follow";
  }
}

let followButton = document.querySelector("#follow-button");
let followStatus = followButton.innerHTML;
followButton.addEventListener("click", UpdateFollowStatus);
