function addDAtauser() {
    // var fnam = document.getElementById('fname').value;
    // var lnam = document.getElementById('lname').value;
    var us = document.getElementById('user').value;
    var pa = document.getElementById('pass').value;
    if(us!=""&&pa!=""){
    // var address = document.getElementById('adress').value;
    // var phon = document.getElementById('phone').value;
    // localStorage.setItem('username', us);
    localStorage.setItem(us, pa);}

    // localStorage.setItem('adress', address);
    // localStorage.setItem('phone', phon);
}
function addDAta() {
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;

    localStorage.setItem('username','yassoto');
    localStorage.setItem('password','123456789');

}

function checkData() {
    var enterUser = document.getElementById('use').value;
    var enterPass = document.getElementById('pas').value;

    var getUser = localStorage.getItem('username');
    var getPass = localStorage.getItem('password');
    if (enterUser == getUser) {
        if (getPass == enterPass) {
            alert("login successful");
            open("admin.html");
        }
        else { alert("wrong password"); }
    }
    else {
        alert("wrong username");
    }
}
function checkDataus() {
   
    var enteruser = document.getElementById('use').value;
    var enterpass = document.getElementById('pas').value;
    var i;
for(i=0;i<localStorage.length;i++)
{
    if(localStorage.key(i)==enteruser)
    {
        if(localStorage.getItem(enteruser)==enterpass)   
       { alert("login successful");
        open("cart.html");
        break;
    }
        else { alert("wrong password");
    break; }
    }
}
if(i==localStorage.length)
{
    alert("wrong username");
}
}
//  var username = document.getElementById('username');
//  var loginForm = document.getElementById('login-form');
//  var usernameErrPara = document.getElementById('username-err');
//  username.addeventlistener('input',function(e) 
//  {
//      var pattern = /^[a-z0-9_-]{3,16}$/;
//      var currentValue = e.target.value;
//      var valid = pattern.test(currentValue);

//      if(valid) {
//          usernameErrPara.style.display = 'none'
//      } else{
//          usernameErrPara.style.display = 'block'
//      }
//  })
 function validateform(){  
    var name=document.myform.Email.value;  
    var password=document.myform.pass.value;  
    var fname=document.myform.First.value;
    var lname=document.myform.Last.value;
    var phone=document.myform.phon.value;
    if (fname==null || fname==""){  
      alert("enter first name");  
      return false;  
    }else if(lname==null || lname=="")
    {alert("enter last name");  
    return false;}
    else if(name==null || name=="")
    {alert("enter user name");  
    return false;}
    else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
      else if(phone==null || phone==""){
        alert("enter phone number");  
        return false;}
      }
      function validatefor(){  
        var name=document.myform.Email.value;  
        var password=document.myform.pass.value;  
          
        if (name==null || name==""){  
          alert("enter user name");  
          return false;  
        }
        else if(password.length<6){  
          alert("Password must be at least 6 characters long.");  
          return false;  
          }  
        }  