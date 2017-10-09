function login(){
    $("#login-pop-up").show();
}
document.querySelector('#authorization-button').addEventListener("click",function(){
    if(
        (document.querySelector("#email-input-login").value == localStorage.getItem('email')) &&
        (document.querySelector("#password-input-login").value == localStorage.getItem('password'))
     )
     {

        singnedIn = true;
        localStorage.setItem('singnedIn', singnedIn);

        location.reload()

     }
     $("#login-pop-up").hide();
});

