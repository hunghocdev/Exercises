// function upDate(previewPic) {
//   document.getElementById("image").innerHTML = previewPic.alt;
//   document.getElementById("image").style.backgroundImage =
//     "url(" + previewPic.src + ")";
// }

// function unDo() {
//   document.getElementById("image").style.backgroundImage = "url('')";
//   document.getElementById("image").innerHTML =
//     "Hover over an image below to display here.";
// }
window.addEventListener("DOMContentLoaded", function () {
  const previewImages = document.querySelectorAll(".preview");
  const displayBox = document.getElementById("image");

  previewImages.forEach((img) => {
    // Khi người dùng dùng bàn phím nhấn Tab và focus vào ảnh
    img.addEventListener("focus", function () {
      displayBox.style.backgroundImage = `url('${this.src}')`;
      displayBox.innerHTML = "";
    });
    // Khi người dùng nhấn phím Tab đến ảnh khác hoặc blur ảnh
    img.addEventListener("blur", function () {
      displayBox.style.backgroundImage = "";
      displayBox.innerHTML = "Hover over an image below to display here.";
    });
  });
});
