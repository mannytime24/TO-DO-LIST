let taskInput = document.querySelector("#task-input");
let addTask = document.querySelector("#add-task");
let taskList = document.querySelector(".task-list");
let removechecked= document.querySelector("#remove-checked");
addTask.addEventListener('click', () => {
    let taskItem = document.createElement("p");
    taskItem.setAttribute("class", "task-item");
 


    let removeTask = document.createElement("button");
    removeTask.setAttribute("class", "remove-task");

    let checkedTask = document.createElement("input");
    checkedTask.setAttribute("type", "checkbox");
    checkedTask.setAttribute("class", "checkbox");

    if (taskInput.value.trim() !== "") {
        let inputValue = taskInput.value.trim();

        // Create a span for the task text
        let taskText = document.createElement("span");
        taskText.textContent = inputValue;

        removeTask.innerHTML = '<i class="fa-solid fa-xmark"></i>';

        taskItem.appendChild(checkedTask);
        taskItem.appendChild(taskText);
        taskItem.appendChild(removeTask);
        taskList.prepend(taskItem);

        taskInput.value = "";

      
        checkedTask.addEventListener("change", () => {
            if (checkedTask.checked) {
                taskItem.style.textDecoration = "line-through";
                
                removeTask.disabled = false;
               
            } else {
                taskItem.style.textDecoration = "none";
              
                removeTask.disabled = true;
            }
        });

   
        removeTask.disabled = true;
        removechecked.addEventListener('click', () => {
        let checkedTasks = document.querySelectorAll(".checkbox:checked");
        checkedTasks.forEach(checkbox => {
        let taskItem = checkbox.parentElement;
        taskList.removeChild(taskItem);
        });
    });

        removeTask.addEventListener("click", () => {
            if (checkedTask.checked) {
                taskList.removeChild(taskItem);
            }
        });
    }
});
