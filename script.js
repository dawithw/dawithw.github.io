document.onload = function () {
  var button = document.getElementById("button");
  button.onclick(function(){
    document.getElementById("content").innerText("Button is clicked!");
  });
};
