let numberX = document.getElementById('numberX');
let numberY = document.getElementById('numberY');
let result = document.getElementById('result');
let addForm = document.getElementById('addForm');

const { add } = require('./utils');

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('ewe');

  add(numberX.value, numberY.value, (err, msg) => {
    if (!err) {
      result.innerText = msg;
    } else {
      result.innerText = '';
      alert(msg);
    }
  });
});
