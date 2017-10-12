    var email = document.querySelector('#email-input');
    var password =document.querySelector('#password-input');
    var username= document.querySelector('#username-input');
    var retypePassword= document.querySelector('#retype-input');
    var singnedIn;

    document.querySelector('#register-button').addEventListener('click',setlocalData);

        if(JSON.parse(localStorage.getItem('singnedIn'))){
            document.querySelector('#logIn').innerHTML = 'Hi, ' +  window.localStorage.getItem('username');
            document.querySelector('.add-images').style.display = 'flex';
            document.querySelector('#login-button').setAttribute('href', 'javascript:exit()');
            console.log('ТРУ');
        }else{
            document.querySelector('#logIn').innerHTML = 'Log In';
            document.querySelector('.add-images').style.display = 'none';
            document.querySelector('#login-button').setAttribute('href', 'javascript:login()');
            console.log('НЕ ТРУ');
        }

        console.log(localStorage.getItem('singnedIn'));

    function setlocalData(){
            if((username.value != "")&&(email.value !="")&&(password.value != "")){
                localStorage.setItem('username', username.value);
                localStorage.setItem('email',email.value);
                localStorage.setItem('password', password.value);

                if(password.value === retypePassword.value){
                    localStorage.setItem('retypePassword', retypePassword.value);
                //Конец регистрации, автоматическая авторизация

                    singnedIn = true;

                    localStorage.setItem('singnedIn', JSON.stringify(singnedIn));

                    $("#sign-up-pop-up").hide();

                    location.reload()


                }
            }
            else{alert('Заполните все поля!');}





        }

function exit(){
    var conf  = confirm('Exit?');
    if(conf){
        singnedIn = false;
        localStorage.setItem('singnedIn', JSON.stringify(singnedIn));
        console.log(localStorage.getItem('singnedIn'));
        location.reload();
    }
}

function SignUpPopUpShow(){
    $("#login-pop-up").hide();
    $("#sign-up-pop-up").show();
}
