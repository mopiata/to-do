
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

    $("input#list-item").val("");
  });
});
