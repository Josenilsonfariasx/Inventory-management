function ShowPassword(){

    const eye = document.getElementById('eye');
    const eyeClose = document.getElementById('eye-close');
    const fieldPassword = document.getElementById('field-password');

    if(eye.style.display === 'none'){
        eye.style.display = 'block';
        eyeClose.display = 'none';
        fieldPassword.type = 'text';
    }else{

        eye.style.display = 'none';
        eyeClose.display = 'block';
        fieldPassword.type = 'password'
    }
};

document.getElementById('bt-login').addEventListener('click', function(PaginaNaoRecarrega){

    PaginaNaoRecarrega.preventDefault();
    alert ('Logado com sucesso');

});