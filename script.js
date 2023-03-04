const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

const btns = Array.from(buttons);

btns.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerHTML) {

            case 'C':
                display.innerHTML = '';
                break;

            case '←':
                display.innerHTML = display.innerHTML.slice(0, -1);
                break;

            case '=':
                try {
                    display.innerHTML = eval(display.innerHTML);
                } catch {
                    display.innerHTML = 'Bad Expression';
                }
                break;

            default:
                display.innerHTML += e.target.innerHTML;

        }
    })
})