const form = document.getElementById('myForm');
const inputs = document.querySelectorAll('.input');

let countEmptyInputs = 0;

form.addEventListener('submit', function(event) {
    inputs.forEach(item => {
        if (item.value.lenght === 0) {
            item.style.border = '1px solid red';
            countEmptyInputs++;
        } else {
            item.style.border = '1px solid green';
        }
    });
if (countEmptyInputs !== 0) {
    event.preventDefault();
} else if (countEmptyInputs === 0) {
    form.submit();
    console.log('You filled it out');
}
});