let toggleMenu = document.getElementById("asd")
let navigation = document.querySelector(".nav");
toggleMenu.addEventListener('click', (e) =>{
    e.preventDefault();
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
})

