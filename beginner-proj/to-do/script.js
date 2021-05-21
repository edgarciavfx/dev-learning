const form = document.getElementById('form');
const textInput = document.getElementById('input');
const submitButton = document.getElementById('submit');
const listElement = document.getElementById('list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (event.submitter === submitButton) {
    addTask(textInput.value);
    return;
  } 

  const tasks = document.querySelectorAll('#task');
  tasks.forEach(task => {
    task.remove();
    textInput.value = '';
  });
});

function addTask(text) {
  if (!text) return;

  const newTask = document.createElement('li');
  const closeButton = document.createElement('button');
  const doneButton = document.createElement('button');

  newTask.classList.add('task')
  newTask.id = 'task';
  newTask.innerText = text;
  
  closeButton.id = 'close';
  doneButton.id = 'done';
  closeButton.innerText = 'X';
  doneButton.innerText = 'Done';

  newTask.appendChild(closeButton);
  newTask.appendChild(doneButton);
  listElement.appendChild(newTask);

  closeButton.addEventListener('click', () => {
    listElement.removeChild(newTask);
  });

  doneButton.addEventListener('click', (event) => {
    newTask.classList.add('done');
    event.target.remove();
  });

  textInput.value = '';
}