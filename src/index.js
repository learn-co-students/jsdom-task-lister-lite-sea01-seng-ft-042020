document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form")
  let list = document.querySelector("#tasks")

  form[1].addEventListener("click", function(event) {
    event.preventDefault();
    let task = document.createElement("li")
    let input = document.querySelector("#new-task-description")
    if (input.value !== "" ) {
      task.innerText = input.value
      list.appendChild(task)
      input.value = ""
    }
  });
  let cancel = document.createElement("button")
  cancel.setAttribute("id", "delete")
});
