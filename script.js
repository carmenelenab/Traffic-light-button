let count = 0;
const colors=['yellow', 'green', 'red']

function changeColor() {
    let property = document.getElementById('acces-button');
    count = (count + 1) % colors.length;
    property.style.backgroundColor = colors[count];
}

setInterval(changeColor, 10000);