
function validatePhone(input) {
  if (input.value.length !== 10) {
    alert("Phone number must be 10 digits");
  }
}
function showEventFee(sel) {
  alert("Selected Event: " + sel.value);
}
function submitForm() {
  document.getElementById("confirmOutput").innerText =
    "Registration Successful!";
}
function countChars(txt) {
  document.getElementById("charCount").innerText =
    txt.value.length;
}

function videoReady() {
  alert("Video ready to play");
}

function findLocation() {
  navigator.geolocation.getCurrentPosition(function(pos) {
    document.getElementById("locationOutput").innerText =
      "Lat: " + pos.coords.latitude +
      " Lng: " + pos.coords.longitude;
  });
}
function enlargeImage(img) {
  img.style.width = "300px";
}
function submitFeedback() {
  alert("Feedback submitted!");
}
function clearPrefs() {
  alert("Preferences cleared!");
}