
//business logic
function ListItem(item) {
  this.listedItem = item;
}

//user interface logic
$(document).ready(function(){
  $("form.to-do-form").submit(function(event){
    event.preventDefault();

    var inputtedItem = $("input#list-item").val();

    var newItem=new ListItem(inputtedItem);

    $("ul#to-do-list").append("<li><span class='item'>" + newItem.listedItem+"</span></li>");
    $("#to-do-list").show();
    $("input#list-item").val("");

    
   

   

  });
  $('ul#to-do-list').on('click', 'li', function () {
    $("ul#done").append($(this));
  });
  $('ul#done').on('click', 'li', function () {
    $(this).remove();
  });
 

  
});
