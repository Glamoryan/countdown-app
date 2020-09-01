const eForm = document.querySelector("#event-form");

eventListeners();

function eventListeners() {
  eForm.addEventListener("submit", checkContents);
}

function checkContents() {
  var eName = document.querySelector("#event-name");
  var eDate = document.querySelector("#event-date");

  if (eName.value == "") {
    alert("Event name cannot be empty");
  } else if (eDate.value == "") {
    alert("Event date cannot be empty");
  } else {
    
  }
}
