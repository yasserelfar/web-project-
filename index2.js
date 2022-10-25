function addDAta() {
    var fname = document.getElementById('fname').Value;
    var lname = document.getElementById('email').Value;
    var user = document.getElementById('user').Value;
    var pass = document.getElementById('pass').Value;
    var address = document.getElementById('address').Value;
    var phone = document.getElementById('phone').Value;
    localStorage.setItem('first name'.fname);
    localStorage.setItem('last name'.lname);
    localStorage.setItem('username'.user);
    localStorage.setItem('password'.pass);
    localStorage.setItem('address'.address);
    localStorage.setItem('phone'.phone);
}
function checkData() {
    var enterUser = document.getElementById('user').value;
    var enterPass = document.getElementById('pass').value;

    var getUser = localStorage.getItem('username');
    var getPass = localStorage.getItem('password');
    if (enterUser == getUser) {
        if (getPass == enterPass) {
            alert("login successful");
        }
        else { alert("wrong password"); }
    }
    else {
        alert("wrong username");
    }
}



var username = document.getElementById('username');
var loginForm = document.getElementById('login-form');
var usernameErrPara = document.getElementById('username-err');
username.addeventlistener('input',function(e) {
    var pattern = /^[a-z0-9_-]{3,16}$/;
    var currentValue = e.target.value;
    var valid = pattern.test(currentValue);

    if(valid) {
        usernameErrPara.style.display = 'none'
    } else{
        usernameErrPara.style.display = 'block'
    }
})