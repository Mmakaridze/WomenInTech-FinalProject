let burger = document.getElementById('burger-bar');
let header = document.getElementById('header-h')

burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    header.classList.toggle('toggle');
})

document.getElementById('button-i').addEventListener('click',function(){
    alert('Error!')
})