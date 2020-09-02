const eForm = document.querySelector("#event-form");

eventListeners();

function eventListeners() {
  eForm.addEventListener("submit", checkContents);
}

function checkContents(e) {
  e.preventDefault();
  var eName = document.querySelector("#event-name");
  var eDate = document.querySelector("#event-date");

  if (eName.value == "") {
    alert("Event name cannot be empty");
  } else if (eDate.value == "") {
    alert("Event date cannot be empty");
  } else {
    startCountdown(eName.value, eDate);
  }
}

function startCountdown(eventName, eventDateElement) {
  document.getElementById("event-head").innerHTML = eventName;
  var time = document.getElementById("event-time");

  var h = time.value.split(":")[0];
  var m = time.value.split(":")[1];

  var millisecond = Math.floor(h * 60 * 60 * 1000); //h to milli
  millisecond += Math.floor(m * 60 * 1000); //m to milli

  var date = eventDateElement.value.split(".");
  var dateHour = new Date(date).getHours();
  var count = new Date(date).getTime() - Math.floor(dateHour * 60 * 60 * 1000); // milisaniye
  count += millisecond;
  var x = setInterval(function () {
    var now = new Date().getTime();
    var d = count - now;

    var days = Math.floor(d / (1000 * 60 * 60 * 24));
    var hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((d % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (d <= 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "D";
      document.getElementById("hours").innerHTML = "O";
      document.getElementById("minutes").innerHTML = "N";
      document.getElementById("seconds").innerHTML = "E";
    }
  }, 1000);
}
