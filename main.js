// $(".header-right > a").click(function(){
//   $(".hamburger-menu").show();
// });
// quando il simbolo del menu riceve un click, la classe hamburger-menu diventa visibile

// $(".close").click(function(){
//   $(".hamburger-menu").hide();
// });
// quando la X riceve un click, la classe hamburger-menu torna ad avere un display none, ripristinando la situazione di partenza

$(".header-right > a").click(function(){
  $(".hamburger-menu").addClass("active");
});

$(".close").click(function(){
  $(".hamburger-menu.active").removeClass("active");
});

// versione alternativa e più performante di quanto lasciato in commento sopra. In questo modo sfrutto il codice che era già stato scritto, in particolare nella mediia-query, così da lasciare invariato il comportamento in caso di dimensione della pagina al di sopra dei 1000px
