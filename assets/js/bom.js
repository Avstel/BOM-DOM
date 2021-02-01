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

// Define UI Variables  here 
const reloadIcon = document.querySelector('.fa');
reloadIcon.addEventListener('click',reloadPage);
function reloadPage(){
    location.reload();
}


// Display the BOM Information on the innerHTML of the elements
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';
var tasks = document.getElementsByClassName('collection-item');
for (var i = 0; i < tasks.length; i++){
    tasks[i].style.backgroundColor = '#f4f4f4'
}