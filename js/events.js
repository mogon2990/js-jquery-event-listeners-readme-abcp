//define functions here

$(document).ready(function(){

getIt()
frameIt()
pressIt()
submitIt()
// call functions here

});

function getIt() {
  $("p").on("click", function() {
    alert("Hey!")
  })
}

function frameIt() {
  $("img").on("load", function() {
    return $("img").addClass("tasty")
  })
}

function pressIt() {
  $("#typing").on("keydown", function(e) {
    if (e.which === 71) {
      alert("You have pressed G.")
    }
  })
}

function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.")
  })
}
