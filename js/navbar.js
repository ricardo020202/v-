const navbar = document.querySelectorAll('.mynav');
window.onscroll = () => {
    for (var i = 0; i < navbar.length; i++){
        if (window.scrollY > 200) {
            navbar[i].classList.add('bg');
        } else {
            navbar[i].classList.remove('bg');
        }
    }
};