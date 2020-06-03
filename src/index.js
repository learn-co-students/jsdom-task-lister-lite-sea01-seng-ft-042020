document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");
  const form = document.getElementById("create-task-form");
  const values = ["red", "yellow", "green"];
  const select = document.createElement("select");
  select.name = "priority";
  select.id = "priority";
  for (const val of values) {
    let option = document.createElement("option");
    option.value = val;
    option.text = val;
    select.appendChild(option);
  }
  form.appendChild(select);

  function addToDo() {
    form.addEventListener("submit", function (event) {
      let listItem = document.createElement("li");
      let deleteButton = document.createElement("button");
      deleteButton.innerHTML = "x";
      deleteButton.className = "delete-button";

      listItem.innerHTML = inputField.value;
      listItem.id = `${inputField.value}`;

      taskList.appendChild(listItem);
      listItem.appendChild(deleteButton);

      event.preventDefault();

      listItem
        .querySelector(".delete-button")
        .addEventListener("click", function () {
          listItem.remove();
        });
    });
    option.addEventListener("click", function () {
      listItem.style.color = `${option.text}`;
    });
  }

  addToDo();
  createColorDropdown();
});
