const numbers = document.querySelectorAll('.numbers span');
const submitButton = document.querySelector('button');
const container1 = document.querySelector('.container');
const container2 = document.querySelector('.container2');
const selected = document.querySelector('.selected');

let selectedNumber; 


numbers.forEach((number) => {
  number.addEventListener('click', () => {
    numbers.forEach((num) => {
      num.classList.remove('selected');
    });
    number.classList.add('selected');
    selectedNumber = number.textContent;
  });
});

submitButton.addEventListener('click', () => {
  if (selectedNumber === undefined) {
    selectedNumber = '';
  }
  selected.textContent = `You selected ${selectedNumber} out of 5`;
  container1.hidden = true;
  container2.hidden = false;
});
