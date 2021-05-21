const form = document.getElementById('form');
const nameInput = document.getElementById('name-input');
const dateInput = document.getElementById('date');
const amountInput = document.getElementById('amount');
const addButton = document.getElementById('add');
const table = document.getElementById('table');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  addExpense();
});

function addExpense() {
  const expense = document.createElement('tr');
  const closeArea = document.createElement('td');
  const closeButton = document.createElement('button');
  const expenseHTML = `
    <td>${nameInput.value}</td>
    <td>${dateInput.value ? dateFormat(dateInput.value) : getDate()}</td>
    <td>$ ${amountInput.value}</td>
    <td id="type-area" class="type-area">
      <label for="good"><input id="good" type="radio" name="${nameInput.value}" value="good"></label>
      <label for="bad"><input id="bad" type="radio" name="${nameInput.value}" value="bad"></label>
      <label for="ugly"><input id="ugly" type="radio" name="${nameInput.value}" value="ugly"></label>
    </td>
  `;

  expense.innerHTML = expenseHTML;

  closeButton.classList.add('close');
  closeButton.innerText = 'X';

  closeArea.appendChild(closeButton);
  expense.appendChild(closeArea);
  table.appendChild(expense);

  closeButton.addEventListener('click', () => {
    table.removeChild(expense);
  });

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