var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

var allPics = document.querySelectorAll("img")

allPics.forEach(elem => {
    elem.addEventListener('click', event =>{
        modal.style.display = "block";
        modalImg.src = event.target.src
    });
});

var span = document.getElementsByClassName("close")[0];
span.addEventListener('click', ()=>{
    modal.style.display = "none"
});