var taqvim=function(format) {
    var vaqt=new Date(format);
    var kun=String(vaqt.getDay()).padStart(2,0);
    var oy=String(vaqt.getMonth()+1).padStart(2,0);
    var yil=vaqt.getFullYear();
    return kun+'.'+oy+'.'+(yil+52);
}
