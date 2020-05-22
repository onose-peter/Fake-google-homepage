
//LISTEN ENTER KEYDOWN EVENT
document.onkeydown = function(e){
    if(!e){
        e = window.event;
    }
    if((e.keyCode || e.which) == 13){
        do_search();
    }
}

//DO SEARCH EVENT
function do_baidu_search() {
    var search_txt = document.getElementById("search-bar-input").value;
    if (search_txt == "") {
        alert("search text is empty ! ");
        return false;
    }
    var search_url = "https://www.baidu.com/s?wd=" + search_txt;
    window.open(search_url);
}
function do_google_search() {
    var search_txt = document.getElementById("search-bar-input").value;
    if (search_txt == "") {
        alert("search text is empty ! ");
        return false;
    }
    var search_url = "https://www.google.com/search?newwindow=1&q=" + search_txt;
    window.open(search_url);
}
function on_enter_key(){
    if (event.keyCode==13){
        var search_txt = document.getElementById("search-bar-input").value;
        if (search_txt == "") {
            alert("search text is empty ! ");
            return false;
        }
        var search_url = "https://www.google.com/search?newwindow=1&q=" + search_txt;
        window.open(search_url);
    }
}
