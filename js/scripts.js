$(document).ready(function() {

  $("form").submit(function(event) {
  var favoriteAnimalInput = $("input:radio[name=animals]:checked").val();
  console.log(favoriteAnimalInput);
  if ("bugs" === favoriteAnimalInput) {
    $('#bugsinfo').show();
  }
  else if ("snakes" === favoriteAnimalInput) {
    $('#snakesinfo').show();
  }
  else  {
    $('#turtlesinfo').show();
  }


  //if (answer3.checked) {
  //  $('.bugsinfo').show();

  event.preventDefault();
  });

$("body").click(function() {
  $('#bugsinfo').hide();
  $('#snakesinfo').hide();
  $('#turtlesinfo').hide();
});




});
