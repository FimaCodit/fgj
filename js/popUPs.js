
function AddImagesDiplay(){
	$('.add-images').show();
}
function AddPictureShow(){
	$("#add-picture-pop-up").show();
}
function AddPictureHide(){
	$("#add-picture-pop-up").hide();
}
var closeform = document.querySelector('.close-form');
closeform.onclick = function() {
	 $("#login-pop-up").hide();
	 $("#sign-up-pop-up").hide();
}
var closeformReg = document.querySelector('.close-form-reg');
closeformReg.onclick = function() {

	 $("#sign-up-pop-up").hide();
}
