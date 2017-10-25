
var docEl = window.document.documentElement;
var width = docEl.getBoundingClientRect().width;
if (width < 719) {
    var rate = width / 719;
    document.getElementById('viewport').setAttribute('content', 'width=device-width,minimum-scale=' + rate + ',maximum-scale=' + rate + ',initial-scale=' + rate + ',user-scalable=no');
}
