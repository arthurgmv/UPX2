//Código feito por Arthur Gabriel https://github.com/arthurgmv
const elements = document.getElementsByClassName("navbar-brand");

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mouseover", function() {
        changeColor(this);
    });

    elements[i].addEventListener("mouseout", function() {
        restoreColor(this);
    });
}

function changeColor(element) {
    element.style.color = "#221c60";
}

function restoreColor(element) {
    element.style.color = "#37309FFF";
}