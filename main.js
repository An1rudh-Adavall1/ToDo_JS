const form  = document.querySelector("#task-form");// Input form
const taskList  = document.querySelector(".collection");// ul
const clearBtn  = document.querySelector(".clear-task");// Delete task Button
const filter  = document.querySelector("#filter");
const taskInput  = document.querySelector("#task");// task input field

loadEventListner();
function loadEventListner(){
form.addEventListener('submit', addTask); 
taskList.addEventListener('click', removeTasks);
clearBtn.addEventListener('click', clearTasks);
filter.addEventListener('keyup', filterTasks);
}

function addTask(e){
    if(taskInput.value  === ""){
        alert("Please add a task ");
    } else{

    const li  = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"> </i>';
    li.appendChild(link);
    taskList.appendChild(li);

    taskInput.value  ="";
    e.preventDefault();
    }
}

function removeTasks(e){
if(e.target.parentElement.classList.contains('delete-item')){   
    if(confirm('Are you Sure ? ')){
        e.target.parentElement.parentElement.remove();
        }
    }
}


function clearTasks(){
//taskList.innerHTML  = "";

while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
}
}

function filterTasks(e) {
const text  = e.target.value.toLowerCase();
document.querySelectorAll('.collection-item').forEach(function(task){
const item  = task.firstChild.textContent;
if(item.toLowerCase().indexOf(text)!=-1){
task.style.display = 'block';
}else {
task.style.display ='none'; 
}

});
}