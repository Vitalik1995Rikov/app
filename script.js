function makeBlock(parentTagName, childTagName, index) {
    if (index >=5) {
        console.error("Введите количество дочерних элементов меньше 5");
    } else {
        i = 0;
        let div = document.querySelector(parentTagName);
        
        while (i < index) {
            let span = document.createElement(childTagName);
            span.innerHTML = "Добавленный child <button onclick = 'deleteSpan(this)'></button>";
            i++;
            div.append(span);
        }
    }
}

function deleteSpan(button) {
    button.parentNode.remove();
}

makeBlock('div', 'span', 3);

