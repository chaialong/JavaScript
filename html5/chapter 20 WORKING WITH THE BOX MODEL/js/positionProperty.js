$(function(){
    var buttons = $("button");
    for(var i = 0; i < buttons.length; i++){
        buttons[i].onclick = function(e){
            $("img").css("position", e.target.innerText);
        }
    }
});