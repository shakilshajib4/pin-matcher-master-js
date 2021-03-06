function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin;
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
console.log('test');
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = (event.target.innerText);
    const calcInput = document.getElementById('type-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typeNumber = document.getElementById('type-numbers').value;
    const successNotify = document.getElementById('notify-success');
    const failNotify = document.getElementById('notify-fail');

    if (pin == typeNumber) {
        successNotify.style.display = 'block';
        failNotify.style.display = 'none';
    }
    else {

        failNotify.style.display = 'block';
        successNotify.style.display = 'none';
    }
}

