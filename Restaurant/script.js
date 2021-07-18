const header = document.querySelector('header');

window.addEventListener('scroll', function(){
    header.classList.toggle("sticky", window.scrollY >0)
});

const menuToggle = document.querySelector('.menuToggle'
);
const navigation = document.querySelector('.navigation');

function toggleMenu(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
