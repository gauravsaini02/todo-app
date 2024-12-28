let tasks = [];

function addTask(){
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }
    // add task to the tasks array
    tasks.push(taskText);
    console.log("Task added:", taskText);

    // clear the input field
    taskInput.value = "";

    // display the tasks
    displayTasks();

}

// function to display tasks

function displayTasks(){
    // get reference to the task container
    const taskContainer = document.getElementById("task-container");

    // clear the task container
    taskContainer.innerHTML = "";

    // loop through each task in the array
    tasks.forEach((task, index) => {
        // create a new task item
        const taskItem = document.createElement("div");
        taskItem.className = "task-item";

        // set innerHTML of the task item

        taskItem.innerHTML = `
            <span class="task-text">${task}</span>
            <button onclick="deleteTask(${index})">Delete</button>
        `;

        // add click handler to the span element
        const taskSpan = taskItem.querySelector(".task-text");
        taskSpan.addEventListener("click", () => {
            taskSpan.classList.toggle("completed");
        });

        // add the task item to the task container
        taskContainer.appendChild(taskItem);
    });

}

// function to delete a task
function deleteTask(index){
    // remove the task from the tasks array
    tasks.splice(index, 1);
    // display the tasks
    displayTasks();
}

document.getElementById("task-input").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        addTask();
    }
});