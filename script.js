window.addEventListener('DOMContentLoaded', (event) => {
  const squares = document.querySelectorAll('.square');

  squares.forEach(square => {
    square.addEventListener('dragstart', dragStart);
    square.addEventListener('dragend', dragEnd);
  });
});

function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  event.target.style.opacity = '0.5';
}

function dragEnd(event) {
  event.target.style.opacity = '1';
}

document.addEventListener('dragover', (event) => {
  event.preventDefault();
});

document.addEventListener('drop', (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  const square = document.getElementById(data);
  square.style.left = event.clientX + 'px';
  square.style.top = event.clientY + 'px';
});

window.addEventListener('DOMContentLoaded', (event) => {
  const squares = document.querySelectorAll('.square');
  const dropTargets = document.querySelectorAll('.drop-target');

  squares.forEach(square => {
    square.addEventListener('dragstart', dragStart);
    square.addEventListener('dragend', dragEnd);
  });

  dropTargets.forEach(target => {
    target.addEventListener('dragenter', dragEnter);
    target.addEventListener('dragleave', dragLeave);
    target.addEventListener('dragover', dragOver);
    target.addEventListener('drop', drop);
  });
});

function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  event.target.style.opacity = '0.5';
}

function dragEnd(event) {
  event.target.style.opacity = '1';
}

function dragEnter(event) {
  event.preventDefault();
  event.target.classList.add('drag-over');
}

function dragLeave(event) {
  event.preventDefault();
  event.target.classList.remove('drag-over');
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  const square = document.getElementById(data);
  const dropTarget = event.target;
  
  if (dropTarget.classList.contains('drop-target')) {
    dropTarget.appendChild(square);
    dropTarget.classList.remove('drag-over');
  }
}

