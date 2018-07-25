const modalClass = document.getElementById('modal');
const trigger = document.getElementById('trigger');
const closeButton = document.getElementById('close-button');
const login = document.getElementById('login');
const signIn = document.getElementById('signIn');
const signUp = document.getElementById('signUp');
const register = document.getElementById('register');
const cancel = document.getElementById('cancel');
const h3 = document.querySelectorAll('h3');
const modal = document.getElementById('cover-div');
const edits = document.querySelectorAll('span button');

const toggleModal= () => {
	modal.classList.toggle('hide');
    }
const toggleModalClass = (e) => {
  e.preventDefault();
  modalClass.classList.toggle('hide');
    }
const displayForm = (e) => {
    e.preventDefault();
	signIn.classList.toggle('hide');
	signUp.classList.toggle('hide');
	};

if (trigger) {
	trigger.addEventListener('click', toggleModal);
}
if (closeButton) {
	closeButton.addEventListener('click', toggleModal);
}  

h3.forEach((h3Element) => {
  h3Element.addEventListener('click', (e) => {
    e.target.nextElementSibling.classList.toggle('hide')
  });
});

if (cancel) {
  cancel.addEventListener('click', toggleModalClass);
}

if (register) {
  register.onclick = displayForm;
}

if (login) {
  login.onclick = displayForm;
}

edits.forEach((edit) => {
  edit.addEventListener('click', toggleModalClass)
});


