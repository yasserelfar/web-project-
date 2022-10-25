function addDAta() {
    // var fname = document.getElementById('fname').value;
    // var lname = document.getElementById('email').value;
    var us = document.getElementById('user').value;
    var pa = document.getElementById('pass').value;
    // var address = document.getElementById('address').value;
    // var phone = document.getElementById('phone').value;
    //  localStorage.setItem('first name'.fname);
    // localStorage.setItem('last name'.lname);
    if (us != "" && pa != "") {
        localStorage.setItem('user'.us);
        localStorage.setItem('pass'.pa);
        // localStorage.setItem('address'.address);
        // localStorage.setItem('phone'.phone);
    }
}
function checkData() {
    var enterUser = document.getElementById('use').value;
    var enterPass = document.getElementById('pas').value;

    var getUser = localStorage.getItem('user');
    var getPass = localStorage.getItem('pass');
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



