let login=document.getElementById('login')
let logemail=document.getElementById('logemail')
let logpass=document.getElementById('logpass')
let alertlogin=document.getElementById('alertlogin')
let alertsucc=document.getElementById('alertsucc')


let users=[];
if(localStorage.getItem('alluser')!=null){
    users=JSON.parse(localStorage.getItem('alluser'))
}
console.log(users);

login.addEventListener('submit',function(e){
    e.preventDefault();
    logind()
    loginValid()
    
})

function logind(){
    let data ={
        email:logemail.value,
        pass:logpass.value
    };
    if (loginValid(data)==true){
        console.log('valid');
        alertlogin.classList.add('d-none')
        alertlogin.classList.remove('d-block')
        alertsucc.classList.add('d-block')
        alertsucc.classList.remove('d-none')
    //   window.location="../../home/home.html"
    }else{
        console.log('user not found');
        alertlogin.classList.add('d-block')
        alertlogin.classList.remove('d-none')
        alertsucc.classList.add('d-none')
        alertsucc.classList.remove('d-block')

        
    }
    console.log(data);
    // console.log(logpass.value);
}

function loginValid(data){
    for(let i=0; i<users.length ;i++){
        // console.log(users[i].pass);
        if(users[i].email == logemail.value && users[i].pass == logpass.value){
            console.log('true');
            localStorage.setItem('username',users[i].name)
            return true
        }
    }
}