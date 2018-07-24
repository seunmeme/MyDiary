const login = document.getElementById('login');
const signIn = document.getElementById('signIn');
const signUp = document.getElementById('signUp');
const register = document.getElementById('register');
const cancel = document.getElementById('cancel');
const h3 = document.querySelectorAll('h3');
const modal = document.getElementById('cover-div');
const edits = document.querySelectorAll('span');

const displayForm = () => {
  signUp.classList.toggle('hide');
  signIn.classList.toggle('hide');
};

h3.forEach((h3Element) => {
  h3Element.addEventListener('click', (e) => {
    e.target.nextElementSibling.classList.toggle('hide')
  });
});

if (cancel) {
  cancel.addEventListener('click', () => {
    modal.classList.toggle('hide');
  });
}

if (register) {
  register.onclick = displayForm;
}

if (login) {
  login.onclick = displayForm;
}

edits.forEach((edit) => {
  edit.addEventListener('click', () => {
    modal.classList.toggle('hide');
  });
});
