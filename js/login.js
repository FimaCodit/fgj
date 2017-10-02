function login(){
    $("#login-pop-up").show();

    var username;
    var password;
    
    username = document.querySelector('#username-input');
    password = document.querySelector('#password-input');
    document.querySelector('#login-button').addEventListener(
        'click',function(){
            window.location = 'index.html';
        });

}