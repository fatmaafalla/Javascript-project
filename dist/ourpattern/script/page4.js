
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var ch = document.getElementById(data);


    ev.target.append(ch);
    ch.style.position = "absolute";
    ch.style.marginTop = "15px";
    ch.style.marginLeft = "20px";
}

function allowdrag(ev) {
    ev.preventDefault();
}

function verifier() {
    var ok = true;
    var ids = ['d1', 'd2','d3', 'd4', 'd5', 'd6','d7','d8'];
    var sts = ['a', 'b','c', 'd', 'e', 'f','g','h'];
    for (var i = 0 ; i < ids.length ; i++) {
        if (document.getElementById(ids[i]).firstChild.id != sts[i])
                 ok = false;
    }
    if (ok == false) {
        window.location.reload();
        sessionStorage.msg = "Restart !!";
    }
    else document.getElementById('msg').innerHTML = "Bravo !!";
}

function onReady() {
    if (sessionStorage.msg != null)  document.getElementById('msg').innerHTML = "Restart !!";
}

document.getElementById('msg').addEventListener("click",function(){
    window.location.reload();
});


