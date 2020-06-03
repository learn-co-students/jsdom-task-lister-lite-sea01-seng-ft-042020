const element1 = document.getElementById("new-task-description");

document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let newTask = document.getElementById("create-task-form")
    let task = document.getElementById("tasks")
    let list = document.getElementById("list")
    newTask.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log(event);
        let li = document.createElement("li")
        li.innerText = document.getElementById("new-task-description").value
        task.appendChild(li) //this makes list item
        list.removeChild(li)
    })
});