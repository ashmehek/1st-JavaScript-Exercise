// basically we need a function to get trigerred when a button is clicked
// Detecting button press
  var numberOfDrumButtons = document.querySelectorAll(".drum").length;
  for (var i = 0; i <= numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    // makeSound(buttonInnerHTML) = makeSound(key) so when you click say "w" this for loop
    // works or if you press"w" the below switch works as both are configured to take inputs

    buttonAnimation(buttonInnerHTML);

      })

  // Detecting keyboard press
    document.addEventListener("keypress", function(event) {
    makeSound(event.key); // this is a property when a key is pressed.

    buttonAnimation(event.key)
  });

  function makeSound(key) {
    switch (key) {
      case "n":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "m":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "a":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "r":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "i":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "e":
        var kickbass = new Audio("sounds/kick-bass.mp3");
        kickbass.play();
        break;

      default:
        console.log(buttonInnerHTML);

    }
  }

  function buttonAnimation(currentKey) {
      var activeButton = document.querySelector("." + currentKey);

      activeButton.classList.add("pressed");

      setTimeout(function(){
        activeButton.classList.remove("pressed");
      }, 100);

  }
};
