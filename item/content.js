var siteWrapper = document.getElementById("site-wrapper");
var header = document.getElementById("header");
var newContent = document.createElement('div');
newContent.setAttribute("id", "newContent");
siteWrapper.appendChild(newContent);

var content = document.getElementById("content");
var adserverRight = document.getElementById("adserver-right");

newContent.appendChild(content.cloneNode(true))
newContent.appendChild(adserverRight.cloneNode(true))

/*
var siteWrapper = document.getElementById("site-wrapper");

newContent = document.getElementById('newContent');

var oldContent = document.getElementById('content');

newContent.appendChild(oldContent);
*/
