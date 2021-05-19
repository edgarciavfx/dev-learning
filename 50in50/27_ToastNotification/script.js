const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const notifications = [
'Reading time',
'workout',
'study',
'eat',
'relax'
];

button.addEventListener('click', () => createNotification());

function createNotification() {
  const notification = document.createElement('div');
  notification.classList.add('toast');
  notification.innerText = randomSelect(notifications);
  
  toasts.appendChild(notification);

  setTimeout(() => {
    discardNotification(notification);
  },3000);
}

function randomSelect (array) {
  return array[Math.floor(Math.random() * array.length)];
}

function discardNotification(notification) {
  notification.remove();
}