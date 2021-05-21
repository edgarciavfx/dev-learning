const form = document.getElementById('form');
const nameInput = document.getElementById('name-input');
const dateInput = document.getElementById('date');
const amountInput = document.getElementById('amount');
const addButton = document.getElementById('add');
const table = document.getElementById('table');
const closeBtn = document.querySelectorAll('.close');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  addExpense();
});

closeBtn.forEach(button => {
  button.addEventListener('click', (event) => {
    event.path[3].remove();
  });
});

function addExpense() {
console.log(dateInput.value);

  const expenseHTML = `
    <td>${nameInput.value}</td>
    <td>${dateInput.value ? dateFormat(dateInput.value) : getDate()}</td>
    <td>$ ${amountInput.value}</td>
    <td>
      <label for="good"><input id="good" type="radio" name="${nameInput.value}" value="good"></label>
      <label for="bad"><input id="bad" type="radio" name="${nameInput.value}" value="bad"></label>
      <label for="ugly"><input id="ugly" type="radio" name="${nameInput.value}" value="ugly"></label>
    </td>
    <td><button class="close"><i class="fas fa-window-close"></i></button></td>
  `;

  const expense = document.createElement('tr');
  expense.innerHTML = expenseHTML;

  table.appendChild(expense);

  nameInput.value = '';
  dateInput.value = '';
  amountInput.value = '';
}

function getDate() {
  const date = new Date();

  return date.toLocaleDateString('mx', { year: 'numeric', month: '2-digit', day: '2-digit' })
    .replaceAll('/', '-');
}

function dateFormat(dateString) {
  dateArray = dateString.split('-');
  dateArray.reverse();

  return  dateArray.join('-');
}


//mi milagrito dioy
const myArray = [6, 7, 4, 2, 9 ,10, 5, 3, 1, 0, 8];
console.log('array pre sort -> ' + myArray);

for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < myArray.length; j++) {
    if (myArray[j] >= myArray[j + 1]) {
      const a = myArray[j];
      const b = myArray[j + 1];
      myArray[j] = b;
      myArray[j + 1] = a;
    }
  }
}

console.log('sorted array   -> ' + myArray);