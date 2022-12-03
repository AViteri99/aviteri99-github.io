// s1 outfit
let s1 = document.getElementById("s1")/* get #s1 outfit */
/* the process: */
s1.onclick = function() {
	document.getElementById("o1").style.display = "block"
	document.getElementById("body").style.display = "none";
	document.getElementById("o2").style.display = "none";
	document.getElementById("o3").style.display = "none";
	document.getElementById("o4").style.display = "none";
	document.getElementById("o5").style.display = "none";
	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	/* 3. show #o1 outfit (set display to block)*/
};

let s2 = document.getElementById("s2")/* get #s1 outfit */
/* the process: */
s2.onclick = function() {
	document.getElementById("o2").style.display = "block"
	document.getElementById("body").style.display = "none";
	document.getElementById("o1").style.display = "none";
	document.getElementById("o3").style.display = "none";
	document.getElementById("o4").style.display = "none";
	document.getElementById("o5").style.display = "none";
	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	/* 3. show #o1 outfit (set display to block)*/
};

let s3 = document.getElementById("s3")/* get #s1 outfit */
/* the process: */
s3.onclick = function() {
	document.getElementById("o3").style.display = "block"
	document.getElementById("body").style.display = "none";
	document.getElementById("o1").style.display = "none";
	document.getElementById("o2").style.display = "none";
	document.getElementById("o4").style.display = "none";
	document.getElementById("o5").style.display = "none";
	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	/* 3. show #o1 outfit (set display to block)*/
};
let s4 = document.getElementById("s4")/* get #s1 outfit */
/* the process: */
s4.onclick = function() {
	document.getElementById("o4").style.display = "block"
	document.getElementById("body").style.display = "none";
	document.getElementById("o1").style.display = "none";
	document.getElementById("o3").style.display = "none";
	document.getElementById("o2").style.display = "none";
	document.getElementById("o5").style.display = "none";
	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	/* 3. show #o1 outfit (set display to block)*/
};

let s5 = document.getElementById("s5")/* get #s1 outfit */
/* the process: */
s5.onclick = function() {
	document.getElementById("o5").style.display = "block"
	document.getElementById("body").style.display = "none";
	document.getElementById("o1").style.display = "none";
	document.getElementById("o3").style.display = "none";
	document.getElementById("o4").style.display = "none";
	document.getElementById("o2").style.display = "none";
	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	/* 3. show #o1 outfit (set display to block)*/
};

// strip outfit
let strip = document.getElementById("strip-button")/* get #strip-button */
strip.onclick = function() {
	document.getElementById("body").style.display = "block"
	document.getElementById("o5").style.display = "none";
	document.getElementById("o1").style.display = "none";
	document.getElementById("o3").style.display = "none";
	document.getElementById("o4").style.display = "none";
	document.getElementById("o2").style.display = "none";
	/* call the function you created to hide all the outfits */
	/* show #body */
};