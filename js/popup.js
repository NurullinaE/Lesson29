let loginButton = document.querySelector('.login-button');
let loginPopUp = document.querySelector('.login-popup');
let closeButton = document.querySelector('.popup-close');

loginButton.addEventListener('click', showPopUp);
loginPopUp.addEventListener('click', close);


function showPopUp(evt) {
    console.log(evt);
    evt.preventDefault();

    loginPopUp.classList.add('show-popup')
};

function close () {
    loginPopUp.classList.remove('show-popup')
}