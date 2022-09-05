document.addEventListener("DOMContentLoaded", () => {

  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target.newTaskDescription.value)
    //original id was 'new-task-description'. error with hyphen. works when i removed hyphens. why!?
    form.reset()
  })
})

function buildToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = ' X '
  p.textContent = todo
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)

}

function handleDelete(e){
  e.target.parentNode.remove()

}

