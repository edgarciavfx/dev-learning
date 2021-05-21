const form = document.getElementById('form');
const textInput = document.getElementById('input');
const submitBtn = document.getElementById('submit');
const clearBtn = document.getElementById('clear');
const listElm = document.getElementById('list');
const closeBtn = document.querySelectorAll('#close');
const doneBtn = document.querySelectorAll('#done');

// submitBtn.addEventListener('click', () => {
//   addTask(textInput.value);
// });

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!(e.submitter === clearBtn)) {
    if (textInput.value) {
      addTask(textInput.value);
    }
  } else {
    const tasks = document.querySelectorAll('#task');

    tasks.forEach(task => {
      task.remove();

      textInput.value = '';
    });
  }
});


function addTask(text) {
  const newTask = document.createElement('li');
  newTask.classList.add('task')
  newTask.id = 'task';
  newTask.innerText = text;
  
  const closeBtn = document.createElement('button');
  const doneBtn = document.createElement('button');
  closeBtn.id = 'close';
  doneBtn.id = 'done';
  closeBtn.innerText = 'X';
  doneBtn.innerText = 'Done';

  newTask.appendChild(closeBtn);
  newTask.appendChild(doneBtn);
  listElm.appendChild(newTask);

  closeBtn.addEventListener('click', (e) => {
    e.path[1].remove();
  });

  doneBtn.addEventListener('click', (e) => {
    e.path[1].classList.add('done');
    e.target.remove();
  });

  textInput.value = '';

}

function removeTask(e) {
  e.remove();
}



//my sort algo
const myArray = [6, 7, 4, 2, 9 ,10, 5, 3, 1, 0, 8];
console.log('array pre sort -> ' + myArray);

for (let i = 0; i < myArray.length; i++) {
  const pivot = myArray[i];
  for (let j = 0; j < myArray.length; j++) {
    const eval = myArray[j];
    // if (pivot <= eval) {
    //   myArray[j] = pivot;
    // }
  }
}

console.log('sorted array   -> ' + myArray);
