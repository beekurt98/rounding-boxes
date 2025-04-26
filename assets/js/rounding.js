function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function boxRadius(element) {
  $(element).css("border-radius", `${randomNum(10,100)}px ${randomNum(10,100)}px ${randomNum(10,100)}px ${randomNum(10,100)}px`);
}

function boxBorder(element) {
  $(element).css("border-style", "solid");
  $(element).css("border-color", `rgb(${randomNum(150,255)},${randomNum(150,255)},${randomNum(150,255)})`);
  $(element).css("border-width", `${randomNum(1,3)}px ${randomNum(0,5)}px ${randomNum(1,3)}px ${randomNum(0,5)}px`);
  $(element).css("transition", "0.4s");
}
var randomBox = randomNum(0,8);
function both(element) {
  boxBorder(element);
  boxRadius(element);
}

function randomExecution(callback) {
  const min = 1;
  const max = 3;
  var random = Math.floor(Math.random() * (max - min + 1) + min);

  setTimeout(function() {
      callback();
      randomExecution(callback);
  }, random * 1000);
}

function getRandomBox() {
  var boxNum = document.querySelectorAll(".box").length;
  element = `.box:eq(${randomNum(0,boxNum)})`;
  both(element);
}

function allBoxesRandom() {
  var boxLen = document.querySelectorAll(".box").length;
  setTimeout(() => {
      {for (i=0;i<boxLen;i++) {
          element = `.box:eq(${i})`;
          both(element);
          // boxRadius(element)
      }}
  }, 1000);
} 

$(document).ready(function(){
  $(".box").hover(function(){
      both(this);
  }, function(){
      both(this);
  });
});

allBoxesRandom();
randomExecution(getRandomBox);
randomExecution(getRandomBox);