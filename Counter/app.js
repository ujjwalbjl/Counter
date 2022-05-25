let counter = 0;
const btns = document.querySelectorAll('.btn');
// console.log(btns);

const value = document.getElementById('number')
// console.log(value);

btns.forEach(function (btn) {
    // console.log(btn);
    btn.addEventListener('click', function (e) {
        styles = e.currentTarget.classList;
        // console.log(styles);
        if (styles.contains('btn-increase')) {
            counter++;
        }
        else if (styles.contains('btn-decrease')) {
            counter--;
        }
        else {
            counter = 0;
        }
        if (counter > 0) {
            value.style.color = 'green';
        }
        else if (counter < 0) {
            value.style.color = 'red'
        }
        else {
            value.style.color = 'black'
        }
        value.textContent = counter;
    })
    value.textContent = counter

});