const img1 = document.querySelector('.img-container1');
const img2 = document.querySelector('.img-container2');
const img3 = document.querySelector('.img-container3');

const imgF1 = document.querySelector('#img-fondo1');
const imgF2 = document.querySelector('#img-fondo2');
const imgF3 = document.querySelector('#img-fondo3');


// No se refactoriza debido a que las imagenes se deberian tratar de otra forma
img1.addEventListener('mouseover', () => {
    imgF1.src = '/semana2/assets/img/c2.jpg';
});


img1.addEventListener('mouseout', () => {
    imgF1.src = '/semana2/assets/img/c1.jpg';
});


img2.addEventListener('mouseover', () => {
    imgF2.src = '/semana2/assets/img/f2.jpg';
});


img2.addEventListener('mouseout', () => {
    imgF2.src = '/semana2/assets/img/f1.jpg';
});


img3.addEventListener('mouseover', () => {
    imgF3.src = '/semana2/assets/img/t2.jpg';
});


img3.addEventListener('mouseout', () => {
    imgF3.src = '/semana2/assets/img/t1.jpg';
});
