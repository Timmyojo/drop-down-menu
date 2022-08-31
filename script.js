const toggleButton = document.querySelector('.title');
const dropDownBox = document.querySelector('.drop-down');


const dropDown = (e) => {
    dropDownBox.classList.toggle('active');
}
toggleButton.addEventListener('click', dropDown)

