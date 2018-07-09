
	 const login = document.getElementById('login');
	 const signIn = document.getElementById('signIn');
	 const signUp = document.getElementById('signUp');
	 const register = document.getElementById('register')
 
	  register.onclick = function(event) {
		//   event.preventDefault();
		  signUp.classList.toggle("hide")
		  signIn.classList.toggle("hide")
		}

		login.onclick = function(event) {
		  //   event.preventDefault();
			signUp.classList.toggle("hide")
			signIn.classList.toggle("hide")
		  }