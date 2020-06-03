document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form")
  const list = document.querySelector("#tasks")
  let task
  let input
  let taskCount = 0
  let cancel

  
  form[1].addEventListener("click", function(event) {
    event.preventDefault();
    task = document.createElement("li")
    input = document.querySelector("#new-task-description")
    if (input.value !== "" ) {
      taskCount++
      task.innerText = input.value
      task.setAttribute("id", `task-${taskCount}`)
      list.appendChild(task)
      input.value = ""
      // cancel = document.createElement('input')
      // cancel.setAttribute('type', 'button');
      // cancel.setAttribute("value", "Cancel");
      // cancel.setAttribute("id", "cancelButton");
      // task.appendChild(cancel);
    }
    
      // cancel.addEventListener('click', function(e) {
      //  task.parentNode.removeChild(task);
      // }, false); 

  });
});
