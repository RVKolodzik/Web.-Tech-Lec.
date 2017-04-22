var tl = new TimelineLite(); 
tl.staggerFrom(".topics", 3, {
  css:{transform:"scale(0)",top:"60%",left:"50%"},ease:Elastic.easeOut
}, 0.3);


var js = document.getElementById("finals");
var sass = document.getElementById("midterms");
var hmtl5 = document.getElementById("prelims");
var topics = document.getElementsByClassName("topics");

js.addEventListener("mouseover",finalsretina,false);
js.addEventListener("touchstart",finalsretina,false);
prelims.addEventListener("mouseover",prelimsretina,false);
prelims.addEventListener("touchstart",prelimsretina,false);
sass.addEventListener("mouseover",midtermsretina,false);
sass.addEventListener("touchstart",midtermsretina,false);

function finalsretina(event) {
	TweenMax.to("#retina", 0.2, {left:"51%",top:"59.5%"});
}

function prelimsretina(event) {
	TweenMax.to("#retina", 0.2, {left:"49%",top:"59.5%"});
}

function midtermsretina(event) {
	TweenMax.to("#retina", 0.2, {left:"50%",top:"59%"});
}


for(var i=0; i< topics.length; i++){
	topics[i].addEventListener("mouseout",retinaout);
}
function retinaout(event) {
		TweenMax.to("#retina", 0.2, {left:"50%",top:"60%"});	
}