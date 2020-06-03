document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const input = document.getElementById('new-task-description')
  const priority = document.getElementById('priority')
  const form = document.getElementById('create-task-form')
  const ul = document.getElementById('list');
  const deleter = document.getElementById('deleter')
  const slack = document.getElementById('slack')
  const div = document.getElementById('edit-div')
  const select = document.createElement('select')
  const edit = document.createElement('')
  form.addEventListener('submit', function(event){
    event.preventDefault();
    const task = input.value
    input.value = ''
    const li = document.createElement('li')
    li.textContent = task
    if (priority.value === "high"){
      li.style.color = 'red'
    } else if (priority.value === 'medium'){
      li.style.color = 'yellow'
    } else {
      li.style.color = 'green'
    }
    let lis = document.querySelectorAll('li')
    console.log(lis)
    let a = Array.prototype.slice.call(lis)
    if (!a.map(x => x.textContent).includes(li.textContent)){
      ul.appendChild(li)
      select.id = 'selecter'
      select.name = 'Task for Edit'
      let option = document.createElement('option')
      option.value = li.textContent
      option.text = li.textContent
      select.appendChild(option)
      div.appendChild(select)
    }
  })

  deleter.addEventListener('click', function(){
    const task = input.value
    input.value = ''
    const lis = document.querySelectorAll('li')
    console.log(lis)
    for (i=0; i < lis.length; i++){
      if (lis[i].textContent === task){
        lis[i].remove()
      }
    }
  })

  slack.addEventListener('click', function(){
    const lis = document.querySelectorAll('li')
    console.log(lis)
    for (i=0; i < lis.length; i++){
        lis[i].remove()
    }
  })
});
