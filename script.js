const buttonEye = document.querySelector(".btn");
const inputPassword = document.querySelector(".password");

buttonEye.addEventListener('click', function () {
  if (inputPassword.type === 'password') {
    inputPassword.type = 'text';
    buttonEye.src = '/img/images.png';
  } else {
    inputPassword.type = 'password';
    buttonEye.src = '/img/icon-eyes-12.jpg'
  }
})