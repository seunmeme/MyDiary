
	 const login = document.getElementById('login');
	 const signIn = document.getElementById('signIn');
     const signUp = document.getElementById('signUp');
     const register = document.getElementById('register');
     const main = document.getElementById('main');
     const h3 = document.querySelectorAll('h3');
	 const modal = document.getElementById('cover-div');
	 const edits = document.querySelectorAll('span');

 let displayForm = () => {
    signUp.classList.toggle("hide");
    signIn.classList.toggle("hide");
	}	
	
//Get  all h3 target element 
 	h3.forEach(h3Element => {
     //Add Click event listener to all h3 tags
    	h3Element.addEventListener("click", function(e){
        //use event e to get the specific element that was clicked
        e.target.nextElementSibling.classList.toggle('hide')
   	 })
 	})

    if(register){
        register.onclick = displayForm;
    }
    
    if(login){
        login.onclick = displayForm;
	}
	
	edits.forEach(edit => {
	   edit.addEventListener("click", function(e){
		   modal.classList.toggle('hide')
	   })
	})
   
