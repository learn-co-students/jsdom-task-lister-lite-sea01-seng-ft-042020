document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    event.preventDefault()
    x = document.createElement('li')
    x.innerText = event.target.children[1].value
    document.querySelector("#tasks").appendChild(x)
  });
});

