$(document).ready(function(){
  $("#leafy").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('div#type-face').attr('class') == ''){
      $("div#type-face").addClass("leafy");
    }else{
      $("div#type-face").removeAttr('class');
      $("div#type-face").addClass("leafy");
    }
    $("span.name").append("leafy");
    $("code.class").append('class= leafy');
  });
  $("#Brela").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('div#type-face').attr('class') == ''){
      $("div#type-face").addClass("Brela");
    }else{
      $("div#type-face").removeAttr('class');
      $("div#type-face").addClass("Brela");
    }
    $("span.name").append("Brela");
    $("code.class").append('class= Brela');
  });
  $("#BRUX").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('div#type-face').attr('class') == ''){
      $("div#type-face").addClass("BRUX");
    }else{
      $("div#type-face").removeAttr('class');
      $("div#type-face").addClass("BRUX");
    }
    $("span.name").append("BRUX");
    $("code.class").append('class= BRUX');
  });
  $("#Hamurz").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('div#type-face').attr('class') == ''){
      $("div#type-face").addClass("Hamurz");
    }else{
      $("div#type-face").removeAttr('class');
      $("div#type-face").addClass("Hamurz");
    }
    $("span.name").append("Hamurz");
    $("code.class").append('class= Hamurz');
  });
  $("#kust").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('div#type-face').attr('class') == ''){
      $("div#type-face").addClass("kust");
    }else{
      $("div#type-face").removeAttr('class');
      $("div#type-face").addClass("kust");
    }
    $("span.name").append("kust");
    $("code.class").append('class= kust');
  });
  $("#tinny-hands").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('div#type-face').attr('class') == ''){
      $("div#type-face").addClass("tinny-hands");
    }else{
      $("div#type-face").removeAttr('class');
      $("div#type-face").addClass("tinny-hands");
    }
    $("span.name").append("tinny hands");
    $("code.class").append('class= tinny-hands');
  });
});
