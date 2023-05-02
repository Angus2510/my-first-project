//this is to send the images to the saved likes and images page
function sendSavedArray() {
  const savedImageArray =
    JSON.parse(localStorage.getItem("savedImageArray")) || [];
  console.log(savedImageArray);
  for (let i = 0; i < savedImageArray.length; i++) {
    let storedImage = document.createElement("img");
    storedImage.setAttribute("src", savedImageArray[i]);
    const savedImages = document.getElementById("savedImages");
    savedImages.appendChild(storedImage);
    console.log("finished running for loop");
  }
  console.log("finished running sendSavedArray()");
}

document.addEventListener("DOMContentLoaded", () => {
  sendSavedArray();
});

//this is to send the images to the saved likes and images page
function sendLikesArray() {
  const savedLikesArray =
    JSON.parse(localStorage.getItem("savedLikesArray")) || [];
  console.log(savedLikesArray);
  for (let i = 0; i < savedLikesArray.length; i++) {
    let storedLikes = document.createElement("img");
    storedLikes.setAttribute("src", savedLikesArray[i]);
    const savedLikes = document.getElementById("savedLikesTest");
    savedLikesTest.appendChild(storedLikes);
    console.log("finished running for loop");
  }
  console.log("finished running sendSavedArray()");
}

document.addEventListener("DOMContentLoaded", () => {
  sendLikesArray();
});

// Function to save comment to local storage
function saveComment() {
  // Get the comment input value
  let comment = document.getElementById("commentInput").value;

  // Check if comment is empty
  if (comment === "") {
    alert("Please enter a comment!");
    return;
  }

  // Get existing comments from local storage or create an empty array
  let comments = JSON.parse(localStorage.getItem("comments")) || [];

  // Add new comment to comments array
  comments.push(comment);

  // Save updated comments array to local storage
  localStorage.setItem("comments", JSON.stringify(comments));

  // Update comment container div with the saved comment
  let commentContainer = document.getElementById("commentContainer");
  commentContainer.innerHTML += "<p>" + comment + "</p>";

  // Clear comment input value
  document.getElementById("commentInput").value = "";
}

// Load comments from local storage on page load
window.onload = function () {
  let comments = JSON.parse(localStorage.getItem("comments")) || [];
  let commentContainer = document.getElementById("commentContainer");

  // Add existing comments to comment container div
  for (let i = 0; i < comments.length; i++) {
    commentContainer.innerHTML += "<p>" + comments[i] + "</p>";
  }
};
