
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const form = document.getElementById('create-task-form')
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    const description = e.target.elements['new-task-description'].value
    const newTask = new Task(description)
    taskList.addTask(newTask)
  })
});
