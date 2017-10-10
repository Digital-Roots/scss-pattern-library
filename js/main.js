$(document).ready(function(){
  $("#leafy").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('main#type-face').attr('class') == ''){
      $("main#type-face").addClass("leafy");
    }else{
      $("main#type-face").removeAttr('class');
      $("main#type-face").addClass("leafy");
    }
    $("span.name").append("leafy");
    $("code.class").append('class= leafy');
  });
  $("#Brela").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('main#type-face').attr('class') == ''){
      $("main#type-face").addClass("Brela");
    }else{
      $("main#type-face").removeAttr('class');
      $("main#type-face").addClass("Brela");
    }
    $("span.name").append("Brela");
    $("code.class").append('class= Brela');
  });
  $("#BRUX").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('main#type-face').attr('class') == ''){
      $("main#type-face").addClass("BRUX");
    }else{
      $("main#type-face").removeAttr('class');
      $("main#type-face").addClass("BRUX");
    }
    $("span.name").append("BRUX");
    $("code.class").append('class= BRUX');
  });
  $("#Hamurz").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('main#type-face').attr('class') == ''){
      $("main#type-face").addClass("Hamurz");
    }else{
      $("main#type-face").removeAttr('class');
      $("main#type-face").addClass("Hamurz");
    }
    $("span.name").append("Hamurz");
    $("code.class").append('class= Hamurz');
  });
  $("#kust").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('main#type-face').attr('class') == ''){
      $("main#type-face").addClass("kust");
    }else{
      $("main#type-face").removeAttr('class');
      $("main#type-face").addClass("kust");
    }
    $("span.name").append("kust");
    $("code.class").append('class= kust');
  });
  $("#tinny-hands").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('main#type-face').attr('class') == ''){
      $("main#type-face").addClass("tinny-hands");
    }else{
      $("main#type-face").removeAttr('class');
      $("main#type-face").addClass("tinny-hands");
    }
    $("span.name").append("tinny hands");
    $("code.class").append('class= tinny-hands');
  });
  $("#ubuntu").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('main#type-face').attr('class') == ''){
      $("main#type-face").addClass("ubuntu");
    }else{
      $("main#type-face").removeAttr('class');
      $("main#type-face").addClass("ubuntu");
    }
    $("span.name").append("ubuntu");
    $("code.class").append('class= ubuntu');
  });
});
