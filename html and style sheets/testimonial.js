// this is to save the images
function savedItem(url) {
  let savedImageArray =
    JSON.parse(localStorage.getItem("savedImageArray")) || [];
  console.log(url);
  savedImageArray.push(url);
  localStorage.setItem("savedImageArray", JSON.stringify(savedImageArray));
  console.log(savedImageArray);
  console.log(localStorage.getItem("savedImageArray"));
  alert(`you have ${savedImageArray.length} saved images`);
}
// this is to save the likes
function savedLikes(url) {
  let savedLikesArray =
    JSON.parse(localStorage.getItem("savedLikesArray")) || [];
  console.log(url);
  savedLikesArray.push(url);
  localStorage.setItem("savedLikesArray", JSON.stringify(savedLikesArray));
  console.log(savedLikesArray);
  console.log(localStorage.getItem("savedLikesArray"));
  alert(`you have ${savedLikesArray.length} likes`);
}
