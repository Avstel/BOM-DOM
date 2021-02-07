/*  
Here is the exercise on working on the remaining bom method 
Location , Navigator , screen , Window 
Follow the Instruction on the comments 
1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 
Adding Extra is Possible if you want to explore more ...
Good Luck !!! 
*/
/* test test var newDiv = document.createElement('div')
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'Hello world');
newDiv.appendChild(newDivText);
console.log(newDiv);
*/
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';
var tasks = document.getElementsByClassName('collection-item');
for (var i = 0; i < tasks.length; i++){
    tasks[i].style.backgroundColor = '#f4f4f4'
}

// Define UI Variables  here 
const reloadIcon = document.querySelector('.fa');
//Screen Information/
var height = document.getElementById("main-header")
var width = document.getElementsByName('Width');
//var PixelDepth = document.getElementById();

// Adding a dropdown section



///////////////////Functions/////////////////////
reloadIcon.addEventListener('click',reloadPage);
function reloadPage(){
    location.reload();
}


// Display the BOM Information on the innerHTML of the elements
//Location Information

//height = screen.height(height);
document.getElementById("hr").innerHTML = "Page host name is " + window.location.href;
document.getElementById("pr").innerHTML = "Protocol used is " + window.location.protocol;
document.getElementById("ho").innerHTML = "host is"  + window.location.pathname;
document.getElementById("po").innerHTML = "port "  + window.location.port;
document.getElementById("hn").innerHTML = "Host-name is " + window.location.hostname;

//Browser Information

//height = screen.height(height);
document.getElementById("app").innerHTML = "Appname is: " + navigator.appName;
document.getElementById("apv").innerHTML = "App Version is: " + navigator.appVersion;
document.getElementById("pf").innerHTML = "platform is " +  + navigator.platform;
document.getElementById("la").innerHTML = "Language is "+  + navigator.language;
document.getElementById("ce").innerHTML = "Cookie Enabled is" +  + navigator.cookieEnabled;;

//Screen Information

//height = screen.height(height);
document.getElementById("he").innerHTML = "height is "  + window.innerHeight + " pixels";
document.getElementById("we").innerHTML = "width is "  + window.innerWidth + " pixels";
document.getElementById("pi").innerHTML = "pixel Density";

//Browsing History Information

//height = screen.height(height);
document.getElementById("len").innerHTML = "length " + window.length;
document.getElementById("stat").innerHTML = "The State is: " + window.ValidityState;
