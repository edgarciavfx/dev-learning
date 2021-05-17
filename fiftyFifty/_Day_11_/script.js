const insert = document.getElementById('insert');

window.addEventListener('keydown', (eve) => {
  insert.innerHTML = `
  <div class="key">
    ${eve.key === ' ' ? 'Space' : eve.key}
    <small>event.key</small>
  </div>

  <div class="key">
    ${eve.keyCode}
    <small>event.keyCode</small>
  </div>

  <div class="key">
  ${eve.code}
    <small>event.code</small>
  </div>
  `
});