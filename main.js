$(".header-right > a").click(function(){
  $(".hamburger-menu").show();
});
// quando il simbolo del menu riceve un click, la classe hamburger-menu diventa visibile

$(".close").click(function(){
  $(".hamburger-menu").hide();
});
// quando la X riceve un click, la classe hamburger-menu torna ad avere un display none, ripristinando la situazione di partenza
