/* Add your JavaScript to this file */

window.onload = loadform;

function loadform(){
   const btn = document.getElementsByClassName('btn')[1];
   console.log(btn)

   btn.addEventListener('click', (a) =>{
    a.preventDefault();
    
    var email = document.getElementById('email').value;

    if(isValidEmail(email)){
        document.getElementsByClassName("message")[0].textContent = "Thank You! Your email address " +email+ " has been added to our mailing list!";
    } else{
        document.getElementsByClassName("message")[0].textContent = "Please enter a valid email address";
    }
   });
   
}
 
function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email));
}