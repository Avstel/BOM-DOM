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




// Define UI Variables  here 

const taskInput = document.querySelector('#task');
const form = document.querySelector('#task-form');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

//Add Event Listener [for the form, clearBtn & filter search input]
form.addEventListener('submit', addNewTask);
clearBtn.addEventListener('click', clearAllTasks);
filter.addEventListener('keyup', filterTasks)

//Addition, Clearing and Filter tasks function definition
function addNewTask(e){
    
    if(taskInput.value === '')
    {
    alert('Enter New Task ...');

    return;
    }
    // Adding and Removing HTML Elements
    const li = document.createElemen('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = <i class = "fa fa-remove"></i>
    li.appendChild(link);
    taskList.appendChild(li);


    e.preventDefault(); 
}

function clearAllTasks(){
    alert("Clear tasks ...");
    taskList.innerHTML = '';
}

function filterTasks(e){
    Console.log("Task Filter ...");
}

// Display the BOM Information on the innerHTML of the elements