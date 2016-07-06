$(function(){
    var buttons = $("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function (e) {
            $("p.toggle").css("float", e.target.innerText);
        }
    }
});