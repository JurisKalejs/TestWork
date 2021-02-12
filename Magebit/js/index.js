//Error check
function onSubmit(event) {  

event.preventDefault();
   
   const agree_checkbox = document.getElementById('ok');
   const email = document.getElementById('email');
   let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

   if (email.value === '') {

      document.getElementById("error").innerHTML = "Email address is required";

   } else if (email.value.match(/.co/)) {

      document.getElementById("error").innerHTML = "We are not accepting subscriptions from Colombia emails";

   } else if (agree_checkbox.checked == false) {

      document.getElementById("error").innerHTML = "You must accept the terms and conditions";

   } else if (reg.test(email.value) == false) {

         document.getElementById("error").innerHTML =  "Please provide a valid e-mail address";

   } else {

      window.location = '/success.html';
   }
 };
 
