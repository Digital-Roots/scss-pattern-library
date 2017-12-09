// typeography
$(document).ready(function(){
  $("#leafy").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('section#type-face').attr('class') == ''){
      $("section#type-face").addClass("leafy");
    }else{
      $("section#type-face").removeAttr('class');
      $("section#type-face").addClass("leafy");
    }
    $("span.name").append("leafy");
    $("code.class").append('class= leafy');
  });
  $("#Brela").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('section#type-face').attr('class') == ''){
      $("section#type-face").addClass("Brela");
    }else{
      $("section#type-face").removeAttr('class');
      $("section#type-face").addClass("Brela");
    }
    $("span.name").append("Brela");
    $("code.class").append('class= Brela');
  });
  $("#BRUX").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('section#type-face').attr('class') == ''){
      $("section#type-face").addClass("BRUX");
    }else{
      $("section#type-face").removeAttr('class');
      $("section#type-face").addClass("BRUX");
    }
    $("span.name").append("BRUX");
    $("code.class").append('class= BRUX');
  });
  $("#Hamurz").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('section#type-face').attr('class') == ''){
      $("section#type-face").addClass("Hamurz");
    }else{
      $("section#type-face").removeAttr('class');
      $("section#type-face").addClass("Hamurz");
    }
    $("span.name").append("Hamurz");
    $("code.class").append('class= Hamurz');
  });
  $("#kust").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('section#type-face').attr('class') == ''){
      $("section#type-face").addClass("kust");
    }else{
      $("section#type-face").removeAttr('class');
      $("section#type-face").addClass("kust");
    }
    $("span.name").append("kust");
    $("code.class").append('class= kust');
  });
  $("#tinny-hands").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('section#type-face').attr('class') == ''){
      $("section#type-face").addClass("tinny-hands");
    }else{
      $("section#type-face").removeAttr('class');
      $("section#type-face").addClass("tinny-hands");
    }
    $("span.name").append("tinny hands");
    $("code.class").append('class= tinny-hands');
  });
  $("#ubuntu").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('section#type-face').attr('class') == ''){
      $("section#type-face").addClass("ubuntu");
    }else{
      $("section#type-face").removeAttr('class');
      $("section#type-face").addClass("ubuntu");
    }
    $("span.name").append("ubuntu");
    $("code.class").append('class= ubuntu');
  });
    //color palet
  $('select#color-selector').on('change', function() {
    $("#colors").removeAttr('class');
    $('#colors').addClass(this.value + "-bg");
  });
});
