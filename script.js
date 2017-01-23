var timer = 0

window.onload = function(){
    document.getElementById('kinput').onkeydown = kdowntimer
    document.getElementById('kinput').onkeyup = kdowntimer
    document.getElementById('kinput').onkeypress = kdowntimer
}

function kdowntimer(e) {
    var e = e || event
    newtime = +new Date()
    time = newtime - timer

    if (document.forms.keyform[e.type + 'Ignore'].checked) return

    logline = 'ms | Keycode:' + e.keyCode + ' | Character:' + String.fromCharCode(e.keyCode || e.charCode)

    if(timer==0) {
        message = e.type + ' | ' + 0 + logline
    } else {
        message = e.type + ' | ' + time + logline
    }

    var area = document.getElementById('log')
    area.value += message+'\n'
    area.scrollTop = area.scrollHeight

    timer = newtime

}

function logClear(){
    timer = 0
    document.getElementById('log').value='';
    document.getElementById('kinput').value='';
}