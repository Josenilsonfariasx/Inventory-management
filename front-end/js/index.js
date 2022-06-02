function ShowPassword(){

    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const fieldPassword = document.getElementById('field-password');

    if(eye.style === 'none'){

        eye.style.display = 'block';
        eyeSlash.display = 'none';
        fieldPassword.type = 'password';
    }else{

        eye.style.display = 'none';
        eyeSlash.display = 'block';
        fieldPassword.type = 'password'
    }
};