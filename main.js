// Tween
// TweenMax.from(".logo", 1, {opacity: 0, scale:0, ease:Bounce.easeOut});
// TweenMax.staggerFrom(".box", 1, {opacity:0, y:200, rotation:360, scale:2, delay: 0.5}, 0.2);
// TweenMax.from(".title", 3, {opacity: 0, scale:0, ease:Bounce.easeOut, onComplete:complete});

// TweenMax.from(".img1", 1, {opacity: 0, scale:0, yoyoEase:Power2.easeOut});
// TweenLite.from(".img2", 2.5, { ease: Elastic.easeOut.config(1, 0.3), y: -500 });
// TweenLite.from(".img3", 2.5, { ease: SlowMo.ease.config(0.7, 0.7, false), y: 500 });
// TweenLite.from(".img4", 2.5, { ease: Circ.easeOut, y: 500 });

// function complete() {
// 	alert("All done ;)");
// }


var content = document.getElementById("buttons");
var buttons =  document.getElementById("btnPlay");

buttons.onclick = function(){
TweenMax.from(".logos", 1, {opacity:0, scale:5, ease:Bounce.easeOut});
TweenMax.to(".logos", 0.5, {opacity:0, delay:10, onComplete:complete});


};


var content = document.getElementById("buttons");
var buttons =  document.getElementById("Elastic");

buttons.onclick = function(){
TweenMax.from(".logos", 1, {opacity:0, scale:5, ease:Elastic.easeOut});
TweenMax.to(".logos", 0.5, {opacity:0, delay:10, onComplete:complete});


};

var content = document.getElementById("buttons");
var buttons =  document.getElementById("Rough");

buttons.onclick = function(){
TweenMax.from(".logos",3, {opacity:0, scale:5, ease: RoughEase.easeOut});
TweenMax.to(".logos", 0.5, {opacity:0, delay:10, onComplete:complete});


};

var content = document.getElementById("buttons");
var buttons =  document.getElementById("back");

buttons.onclick = function(){
TweenMax.from(".logos",1, {opacity:5, scale:10, ease: Back.easeOut});
TweenMax.to(".logos", 0.5, {opacity:5, delay:2, scale: 20, onComplete:complete});


};
