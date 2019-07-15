import './styles.css';

let grid = document.getElementById('grid');

grid.querySelector('thead').onclick = event => {
  let targetTh = event.target;
  if (event.target.tagName != 'TH') return;

  sortTable(targetTh);
};

let sortTable = th => {
  let tbody = grid.querySelector('tbody');
  let type = th.dataset.type;
  let compare;

  switch (type) {
    case 'number':
      compare = [...tbody.rows].sort((rowA, rowB) => {
        return rowA.cells[th.cellIndex].textContent - rowB.cells[th.cellIndex].textContent;
      });
      break;
    case 'string':
      compare = [...tbody.rows].sort((rowA, rowB) => {
        if (rowA.lastElementChild.textContent < rowB.lastElementChild.textContent) {
          return -1;
        }
        if (rowA.lastElementChild.textContent > rowB.lastElementChild.textContent) {
          return 1;
        }
        return 0;
      });
      break;
  }

  tbody.append(...compare);
};
