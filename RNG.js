var names = ["whole bunch of names", "Leon", "Jane", "Zer0", "X"]

var rand = names[Math.floor(Math.random() * names.length)];

$(document).ready(function(){
  $("#RNG").click(function() {
    $("#randomName").text("Hello World!");
  });
});
