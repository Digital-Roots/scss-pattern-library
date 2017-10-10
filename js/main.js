$(document).ready(function(){
  $("#unbuntu").click(function(){
    $("span.name").empty("span.name");
    $("span.class").empty("code.class");
    if($('div#type-face').attr('class') == ''){
      $("div#type-face").addClass("unbuntu");
      console.log('it added');
    }else{
      $("div#type-face").toggleClass("unbuntu");
      console.log('it toggled');
    }
    $("span.name").append("unbuntu");
    $("code.class").append('class= ubuntu');
  });
});
