function all_product() {
    let ap = document.getElementById('all-products');
    ap.style.display = 'block'

    let tp = document.getElementById('trending-products');
    tp.style.display = 'none'

    let sp = document.getElementById('special-products');
    sp.style.display = 'none'
}
function trending_product() {
    let ap = document.getElementById('all-products');
    ap.style.display = 'none'

    let tp = document.getElementById('trending-products');
    tp.style.display = 'block'

    let sp = document.getElementById('special-products');
    sp.style.display = 'none'
}
function special_product() {
    let ap = document.getElementById('all-products');
    ap.style.display = 'none'

    let tp = document.getElementById('trending-products');
    tp.style.display = 'none'

    let sp = document.getElementById('special-products');
    sp.style.display = 'block'
}
function all_product_phone() {
  let ap = document.getElementById('all-products-fp');
    ap.style.display = 'block'

    let tp = document.getElementById('trending-products-fp');
    tp.style.display = 'none'

    let sp = document.getElementById('special-products-fp');
    sp.style.display = 'none'
}
function trending_product_phone() {
  let ap = document.getElementById('all-products-fp');
    ap.style.display = 'none'

    let tp = document.getElementById('trending-products-fp');
    tp.style.display = 'block'

    let sp = document.getElementById('special-products-fp');
    sp.style.display = 'none'
}
function special_product_phone() {
  let ap = document.getElementById('all-products-fp');
    ap.style.display = 'none'

    let tp = document.getElementById('trending-products-fp');
    tp.style.display = 'none'

    let sp = document.getElementById('special-products-fp');
    sp.style.display = 'block'
}
// img slider
let slider = document.querySelector('.slides');
let prevButton = document.querySelector('.prev-button');
let nextButton = document.querySelector('.next-button');

let slides = document.querySelectorAll('.slides img');
let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlides();
});

nextButton.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  showSlides();
});

function showSlides() {
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

let btnB = document.querySelectorAll("button")

let arr = Array.from(btnB)


arr.forEach((e) =>{
  e.addEventListener("click", ()=>{
    alert("Buy Item Successfully")
  })
})
