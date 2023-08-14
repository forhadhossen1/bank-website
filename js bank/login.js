document.getElementById('btn-submit').addEventListener('click', function(){
    const mailField = document.getElementById('user-email');
    const email = mailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email === 'kasmir@gmail.com' && password === 'kasmir'){
        
    }else{
        return alert('Your are not wright this work')
    }
})