var activator = document.getElementById('activator');
var leftTriangle = document.getElementById('leftTriangle');
var main = document.getElementById('main');

window.onscroll = function(){
    //TOP
    if(main.getBoundingClientRect().top <= 0){
        console.log("TRIGGER: top of div reached.");
        leftTriangle.style.backgroundColor = '#d4c29f';
        main.style.backgroundColor = '#d4c29f';
    }
    //BOTTOM
//     if(main.getBoundingClientRect().bottom <= 0){
//         console.log("TRIGGER: bottom of div reached.");
//     }
}
