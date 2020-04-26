function solutionURL() {
  //defines name as the value in the text input
  let name = document.getElementById("text").value;
  //defines newname as the value in name, but replaces spaces with dashes
  let newName = name.replace(" ", "-");
  //defines finished asthe exercism url with newname in the middle.
  let finished =
    "https://exercism.io/tracks/javascript/exercises/" +
    newName +
    "/solutions/";
  //defines noName as the a atg, replaces it iwth finished variable
  let noName = document.querySelector("a");
  noName.textContent = finished;
  //makes output a link
  noName.href = finished;
  //returns the finished variable
  return finished;
}
//when the submit button is clicked, run solutionURL
let submitButton = document
  .getElementById("submit")
  .addEventListener("click", solutionURL);
