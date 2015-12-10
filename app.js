var color = 'red';
var eyes = ["images.jpg","images.png","img-thing.jpg"];

function createpic () {
    var i;
    i = Math.floor((Math.random() * 3));
    document.getElementById("eyes").src = eyes[i];
};

var color = 'red';
var nose = ["images-2.jpg","nose-hi.png","nose1.png"];

function createpic1 () {
    var i;
    i = Math.floor((Math.random() * 3));
    document.getElementById("nose").src = nose[i];
};

var color = 'red';
var mouth = ["imgres.png","images-1.jpg","images-1.png"];

function createpic2 () {
    var i;
    i = Math.floor((Math.random() * 3));
    document.getElementById("mouth").src = mouth[i];
};

