
$(".mobile_menu_icon").click(function(){
  let sidebar = $(".sideber");
  let maunBody = $(".main_section");
  if (sidebar.hasClass("translate-100") && maunBody.hasClass("padding_remove")){
    $(".sideber").removeClass("translate-100");
    $(".main_section").removeClass("padding_remove");
  }
  else{
    $(".sideber").addClass("translate-100");
    $(".main_section").addClass("padding_remove");
  }

});