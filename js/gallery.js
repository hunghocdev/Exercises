// Global variable to store the original text for #image div
let originalImageText = "Hover over an image below to display here!";

// Function to update the main image and text
function upDate(previewPic) {
  // a. Check if event is triggering
  console.log("Event triggered!");

  // b. Print out some information about the previewPic variable
  console.log("Preview Picture:", previewPic);
  console.log("Alt text:", previewPic.alt);
  console.log("Source (src):", previewPic.src);

  // Get the element with id="image"
  const mainImageDiv = document.getElementById("image");

  // c. Change the text of the element with the id of image
  mainImageDiv.innerText = previewPic.alt;

  // e. Change the background image of the element with the id of image
  mainImageDiv.style.backgroundImage = `url('${previewPic.src}')`;

  // Add a class to make text disappear if using the optional CSS rule
  mainImageDiv.classList.add("has-image");

  // d. Check your work (you've already done this with console.log)
  // f. Check your work. If it isn't working, use console.log to doublecheck the values you are using.
  // (We've added console.log statements above for this)
}

// Function to revert the main image and text
function unDo() {
  // Get the element with id="image"
  const mainImageDiv = document.getElementById("image");

  // a. Update the url for the background image of the div with the id of image back to the original value of background-image: url("").
  mainImageDiv.style.backgroundImage = "url('')";

  // b. Update the text of the div with the id of image back to the original text "Hover over an image below to display here.".
  mainImageDiv.innerText = originalImageText;

  // Remove the class to make text reappear if using the optional CSS rule
  mainImageDiv.classList.remove("has-image");
}

// Optional: Ensure the initial text is correct when page loads
document.addEventListener("DOMContentLoaded", () => {
  const mainImageDiv = document.getElementById("image");
  originalImageText = mainImageDiv.innerText; // Store original text
});
