function SignUpPopUpShow(){
    $("#login-pop-up").hide();
    $("#sign-up-pop-up").show();
}

function exit(){
    document.querySelector('#logIn').innerHTML = 'Log In';
    document.querySelector('.add-images').style.display = 'none';
    localStorage.clear();
}
    var email = document.querySelector('#email-input');
        password =document.querySelector('#password-input');
        username= document.querySelector('#username-input');
        retypePassword= document.querySelector('#retype-input');

    
   
    document.querySelector('#register-button').addEventListener(
        'click',function(){
            //Запись в LocalStorage
            localStorage.setItem('username', username.value);
            localStorage.setItem('email',email.value);
            localStorage.setItem('password', password.value);
            if(password.value === retypePassword.value){
                localStorage.setItem('retypePassword', retypePassword.value);

                $("#sign-up-pop-up").hide();
                document.querySelector('#logIn').innerHTML = 'Hi, ' +  username.value;
                document.querySelector('.add-images').style.display = 'flex';
                
               
                document.querySelector('#login-button').setAttribute('href', 'javascript:exit()');
                
            }

           
          
           
        });

    if(window.localStorage.key('username') != null){
       
       
        document.querySelector('#logIn').innerHTML = 'Hi, ' +  window.localStorage.getItem('username');
        document.querySelector('.add-images').style.display = 'flex';
        document.querySelector('#login-button').setAttribute('href', 'javascript:exit()');  
    }
