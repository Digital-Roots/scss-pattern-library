$(document).ready(function(){
  $("#unbuntu").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('div#type-face').attr('class') == ''){
      $("div#type-face").addClass("unbuntu");
    }else{
      $("div#type-face").removeAttr('class');
      $("div#type-face").addClass("unbuntu");
    }
    $("span.name").append("unbuntu");
    $("code.class").append('class= ubuntu');
  });
  $("#Comfortaa").click(function(){
    $("span.name").empty("span.name");
    $("code.class").empty("code.class");
    if($('div#type-face').attr('class') == ''){
      $("div#type-face").addClass("Comfortaa");
    }else{
      $("div#type-face").removeAttr('class');
      $("div#type-face").addClass("Comfortaa");
    }
    $("span.name").append("Comfortaa");
    $("code.class").append('class= Comfortaa');
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
  // $("#Comfortaa").click(function(){
  //   $("span.name").empty("span.name");
  //   $("code.class").empty("code.class");
  //   if($('div#type-face').attr('class') == ''){
  //     $("div#type-face").addClass("Comfortaa");
  //   }else{
  //     $("div#type-face").removeAttr('class');
  //     $("div#type-face").addClass("Comfortaa");
  //   }
  //   $("span.name").append("Comfortaa");
  //   $("code.class").append('class= Comfortaa');
  // });
});
