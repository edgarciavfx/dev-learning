// to do... 
// - Add drag to rearange
// - manage text preview

const main = document.getElementById('main');
const noteTextArea = document.getElementById('note-write-area');
const addNoteButton = document.getElementById('add-note');
const modal = document.getElementById('noteModal');
const modalNoteContent = document.getElementById('modal-content-note');
const modalCloseButton = document.getElementById("close-modal");

buttonListener();

addNoteButton.onclick = function(event) {
  event.preventDefault();
  createNote(noteTextArea.value);
  noteTextArea.value = '';
}


modalCloseButton.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function createNote(string) {
  const newNote = document.createElement('div');
  newNote.innerHTML = `
    <div class="note-container">
      <h5 id="note">${string}</h5>
      <button id="note-detail" class="note-detail">View Detail</button>
    </div>
  `
  main.appendChild(newNote);

  buttonListener();
}

function buttonListener() {
  const viewDetailButtons = document.querySelectorAll(".note-detail");

  viewDetailButtons.forEach(button => {
    button.onclick = function() {
      const noteOnModal = button.parentNode.querySelector("#note").innerText;
      modalNoteContent.innerText = noteOnModal;
      modal.style.display = "block";
    }
  });
}