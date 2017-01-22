var timer = 0

window.onload = function(){
    document.getElementById('kinput').onkeydown = kdowntimer
}

function kdowntimer(e) {
    var e = e || event
    newtime = +new Date()
    time = newtime - timer

    logline = 'ms | Keycode:' + e.keyCode + ' | Character:' + String.fromCharCode(e.keyCode || e.charCode)

    if(timer==0) {
        message = 0 + logline
    } else {
        message = time + logline
    }

    var area = document.getElementById('log')
    area.value+=message+'\n';area.scrollTop=area.scrollHeight

    timer = newtime

}

function logClear(){
    timer = 0
    document.getElementById('log').value='';
    document.getElementById('kinput').value='';
}