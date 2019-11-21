function facechange (objName) {
if ( $(objName).css('display') == 'none' ) {
$(objName).animate({height: 'show'}, 500);
} else {
$(objName).animate({height: 'hide'}, 500);
}
};

