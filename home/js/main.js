var username=localStorage.getItem('username')
let name=document.getElementById('name')
let btn=document.getElementById('btn')

name.innerHTML=username

btn.addEventListener('click',function(){
    localStorage.removeItem('username')
})