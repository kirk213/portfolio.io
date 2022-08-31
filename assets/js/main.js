let menu = document.querySelector('.menu-icon');
let bar = document.querySelectorAll('.menu');

//メニューアイコンにマウス載せた時に色変わる
menu.addEventListener('mouseenter',function(){
    bar.forEach(element => {
        element.classList.toggle('cc');
    });
})
menu.addEventListener('mouseleave',function(){
    bar.forEach(element => {
        element.classList.toggle('cc');
    });
})

//メニューアイコンクリックで開く
menu.onclick = function(){
    menu.classList.toggle('move');
}