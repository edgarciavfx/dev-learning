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


// //my sort algo
// const myArray = [6, 7, 4, 2, 9 ,10, 5, 3, 1, 0, 8];
// console.log('array pre sort -> ' + myArray);

// for (let i = 0; i < myArray.length; i++) {
//   const pivot = myArray[i];
//   for (let j = 0; j < myArray.length; j++) {
//     const eval = myArray[j];
//     // if (pivot <= eval) {
//     //   myArray[j] = pivot;
//     // }
//   }
// }

// console.log('sorted array   -> ' + myArray);
