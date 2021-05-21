const form = document.getElementById('form');
const nameInput = document.getElementById('name-input');
const dateInput = document.getElementById('date');
const amountInput = document.getElementById('amount');
const addBtn = document.getElementById('add');
const table = document.getElementById('table');
const closeBtn = document.querySelectorAll('.close');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  addExpense();
});

closeBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.path[3].remove();
    // console.log(e);
  });
});

function addExpense() {
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
  let date = new Date()

  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  if(month < 10){
    return `${day}-0${month}-${year}`;
  }else{
    return `${day}-${month}-${year}`;
  }
}

function dateFormat(dateString) {
  dateArray = dateString.split('-');

  const year = dateArray[0];
  const day = dateArray[2];
  dateArray[0] = day;
  dateArray[2] = year;

  return  dateArray.join('-');
}
