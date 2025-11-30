const mainImage = document.getElementById("mainImage");
const thumbnails = document.getElementById("thumbnails");

// Event delegation for thumbnails
thumbnails.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") {
    const newSrc = event.target.getAttribute("data-full");
    mainImage.src = newSrc;
  }
});
