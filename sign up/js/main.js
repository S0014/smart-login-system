let signup=document.getElementById('sign-up')
let signName=document.getElementById('signName')
let signEmail=document.getElementById('signEmail')
let signPass=document.getElementById('signPass')
let alertName=document.getElementById('alertName')
let alertemail=document.getElementById('alertemail')
let alertpass=document.getElementById('alertpass')
 let alertsuccess=document.getElementById('alertsuccess')
 let alertexist=document.getElementById('alertexist')

let users=[];
if(localStorage.getItem('alluser')!=null){
    users=JSON.parse(localStorage.getItem('alluser'))
}
console.log(users);

signup.addEventListener('submit',function(e){
    e.preventDefault();
if (check()){
    adduser()
    Exist()
    
}


});
function adduser(){
    let newuser={
        name:signName.value,
        email:signEmail.value,
        pass:signPass.value
    }
    if(Exist(newuser)==true){
        console.log('email is already exist');
      

    }else{
        users.push(newuser)
        console.log(users);
        localStorage.setItem('alluser',JSON.stringify(users))
    
    }
    
        
  

}
function Exist(newuser){
    for(let i=0; i<users.length;i++){
        // console.log(users[i].email);
        if(users[i].email == signEmail.value){
            alertexist.classList.add('d-block');
            alertexist.classList.remove('d-none');
            return true
        }else{
            alertexist.classList.add('d-none');
            alertexist.classList.remove('d-block');
        }
    }
}


function validateInput(validate,el,alertel){
let pattern=validate
if(pattern.test(el.value)){
// console.log('valid')
alertel.classList.add('d-none');
alertel.classList.remove('d-block');

return true

}else{
    // console.log('invalid')
alertel.classList.add('d-block');
alertel.classList.remove('d-none');
return false
}
}

function check(){
    if (validateInput(/^[a-zA-Z0-9$_]{2,}/,signName,alertName)==true && validateInput(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,signEmail,alertemail)==true &&  validateInput(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,signPass,alertpass)==true ){
      console.log('all inputs valid');
      alertsuccess.classList.add('d-block')
      alertsuccess.classList.remove('d-none')
        return true
    }else{
        console.log('input invalid')
        return false
    }
}