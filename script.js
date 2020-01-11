const items = document.querySelectorAll(".for-item");
const toHide = document.querySelectorAll(".to-hide");
const initial = document.getElementById("initial");
const theVideo = document.getElementById("theVideo");
const numOne = document.getElementById("numOne");
const numTwo = document.getElementById("numTwo");

toHide.forEach(function(i) {
  i.style.display = "none";
});

initial.style.display = "block";

items.forEach(function(item) {
  item.addEventListener("mouseover", function() {
    items.forEach(function(thing) {
      thing.classList.remove("current");
      thing.querySelector(".to-hide").style.display = "none";
    });
    this.classList.add("current");
    this.querySelector(".to-hide").style.display = "block";
  });
});

if (window.matchMedia("(min-width: 720px)").matches) {
  numOne.src = "img/video.mp4";
  numTwo.src = "img/video.webm";
  theVideo.load();
  theVideo.play();
} else {
}
