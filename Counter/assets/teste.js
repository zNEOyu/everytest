var currentnumberWrapper = document.getElementById("currentnumber")

var currentnumber = 0;

function increment() {
    currentnumber = currentnumber + 1;
    currentnumberWrapper.innerHTML = currentnumber;
}

function decrement() {
    currentnumber = currentnumber - 1;
    currentnumberWrapper.innerHTML = currentnumber;
}
