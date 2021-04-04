function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}

function make(parentTagName, childTagName, index) {
    if (index >= 5) {
        console.error("Введите количество дочерних элементов меньше 5");
    } else {
        let div = document.querySelector(parentTagName);
        for (let i = 0; i < index; i++) {
            let span = document.createElement(childTagName);
            span.innerHTML = `Добавленный child ${i+1} <button id=${i} onclick = 'deleteSpan(${i})'></button>`;
            div.append(span);
        }
    }
}

function deleteSpan(i) {
    document.getElementById(i).parentNode.remove();
}

let makeBlock = curry(make);

// make('div')('span')(3)

