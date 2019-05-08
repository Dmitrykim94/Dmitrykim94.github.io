let show = document.querySelector('#show');
let buttons = document.querySelectorAll('.knopki');
let section = document.querySelector('section');
let equality = document.querySelector('#equality');
let remove = document.querySelector('#remove');
let counted = false;

section.addEventListener('click', function (e) {
    let blocker = ['+', '-', '/', '*', '.']
    let bracketBlocker = ['(', ')']
    let startBlocker = [')', '*', '+', '/']
    function checkAvailability(arr, val) {
        return arr.some(function (arrVal) {
            return val === arrVal;
        });
    }
    if (checkAvailability(blocker, e.target.innerText) && (show.innerText.substring(show.innerText.length - 1) == '+') ||
        (checkAvailability(blocker, e.target.innerText) && (show.innerText.substring(show.innerText.length - 1) == '/')) ||
        (checkAvailability(blocker, e.target.innerText) && (show.innerText.substring(show.innerText.length - 1) == '-')) ||
        (checkAvailability(blocker, e.target.innerText) && (show.innerText.substring(show.innerText.length - 1) == '*')) ||
        (checkAvailability(blocker, e.target.innerText) && (show.innerText.substring(show.innerText.length - 1) == '.'))) { console.log('odfoafom') } //ничего не делать
    else if (checkAvailability(startBlocker, e.target.innerText) && (show.innerText == '')) { console.log(show.innerText) } //ничего не делать
    else if (('(' == show.innerText.substring(show.innerText.length - 1)) && (e.target.innerText == ')')) { }
    
    else if (('0' == show.innerText.substring(show.innerText.length - 1)) && (e.target.innerText == '(')) { }
    else if (('1' == show.innerText.substring(show.innerText.length - 1)) && (e.target.innerText == '(')) { }
    else if (('2' == show.innerText.substring(show.innerText.length - 1)) && (e.target.innerText == '(')) { }
    else if (('3' == show.innerText.substring(show.innerText.length - 1)) && (e.target.innerText == '(')) { }
    else if (('4' == show.innerText.substring(show.innerText.length - 1)) && (e.target.innerText == '(')) { }
    else if (('5' == show.innerText.substring(show.innerText.length - 1)) && (e.target.innerText == '(')) { }
    else if (('6' == show.innerText.substring(show.innerText.length - 1)) && (e.target.innerText == '(')) { }
    else if (('7' == show.innerText.substring(show.innerText.length - 1)) && (e.target.innerText == '(')) { }
    else if (('8' == show.innerText.substring(show.innerText.length - 1)) && (e.target.innerText == '(')) { }
    else if (('9' == show.innerText.substring(show.innerText.length - 1)) && (e.target.innerText == '(')) { }
    else if (('-' == show.innerText.substring(show.innerText.length - 1)) && (e.target.innerText == '(')) { }
    else if (('-' == show.innerText.substring(show.innerText.length - 1)) && (e.target.innerText == ')')) { }

    else if (checkAvailability(bracketBlocker, e.target.innerText) && Number.isInteger(show.innerText.substring(show.innerText.length - 1))) { console.log('zdarova') }
    else if (e.target.innerText === '=') {
        let res = show.innerText;
        counted = true;
        show.innerText = eval(res);
    }
    
    else if (e.target === section){
        
    }
    else if (e.target.innerText === 'C') {
        show.innerText = '';
    }
    else {
        if (!counted)
            show.innerText += e.target.innerText;
        else {
            show.innerText = e.target.innerText;
            counted = false;
        }
    }

});