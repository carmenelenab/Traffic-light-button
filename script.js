var count = 1;

function changeColor() {
    var property = document.getElementById('acces-button');
    if (count == 1) {
        property.style.backgroundColor = '#ffc107'
        count = 2
    } else if (count == 2) {
        property.style.backgroundColor = '#28a745'
        count = 0
    } else {
        property.style.backgroundColor = '#dc3545'
        count = 1;
    }
}

setInterval(changeColor, 10000);