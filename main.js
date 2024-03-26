// cattura iconda manina schermi piccoli
let fingerIcon = document.querySelector("#fingerIcon");

// cattura navbar
let mainNavbar = document.querySelector('#mainNavbar')

// cattura loghi
let logo = document.querySelector('#logoViola');
let logo2 = document.querySelector('#logoVerde');

// cattura link navbar
let navLinks = document.querySelectorAll('.nav-link');

// cattura degli span con numero incrementale
let firstSpan = document.querySelector('#firstSpan');
let secondSpan = document.querySelector('#secondSpan');
let thirdSpan = document.querySelector('#thirdSpan');

// cattura dell h2 un pò di numeri
let h2Obs = document.querySelector('#h2Obs');
// cattura bordoIcona
let bordoIcona = document.querySelector('.bordoIcona');

let confirm = false;

fingerIcon.addEventListener("click", () => {

    // variabile d'appoggio per dito icona navbar

    if (confirm == false) {

        fingerIcon.style.transform = "rotate(180deg)";
        confirm = true
    } else {

        fingerIcon.style.transform = "rotate(0deg)";
        confirm = false
    }
});


// evento scroll
let lastScrollY = (window.scrollY > 0);

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Scroll verso il basso
        mainNavbar.classList.add('bg-accent');
        mainNavbar.classList.remove('bg-greenCus');
        logoVerde.classList.remove('d-none');
        logoViola.classList.add('d-none');
        fingerIcon.classList.remove('text-accent');
        fingerIcon.classList.add('text-greenCus');
        bordoIcona.classList.remove('bg-greenCus');
        bordoIcona.classList.add('bg-accent');


        // Cambiamo colore ai link navbar
        navLinks.forEach((link) => {
            link.classList.add('text-primaryCus');
            link.classList.remove('text-blackCus');
        });
    } else {
        // Scroll verso l'alto
        mainNavbar.classList.remove('bg-accent');
        mainNavbar.classList.add('bg-greenCus');
        logoVerde.classList.add('d-none');
        logoViola.classList.remove('d-none');
        fingerIcon.classList.add('text-accent');
        fingerIcon.classList.remove('text-greenCus');
        bordoIcona.classList.add('bg-greenCus');
        bordoIcona.classList.remove('bg-accent');
        // Cambiamo colore ai link navbar
        navLinks.forEach((link) => {
            link.classList.add('text-blackCus');
            link.classList.remove('text-primaryCus');
        });
    }

    lastScrollY = currentScrollY;
});



// chiamata asincrona -set interval
function createInterval(finalNumber, incrementNumberSpan) {

    // contatore
    let counter = 0;

    let interval = setInterval(() => {


        // voglio che il counter si fermi a 100
        if (counter < finalNumber) {

            counter++
            incrementNumberSpan.innerHTML = counter;

        } else {
            clearInterval(interval);
        }
    }, 1);

}

createInterval(666, firstSpan);
createInterval(999, secondSpan);
createInterval(354, thirdSpan);

// intersection-observer

// utilizzo della variabile d'appoggio
// quando è true  si potrebbe  omettere nella sintassi ma noi lo scriviamo per ricordarci
let insertionConfirm = true;

let observer = new IntersectionObserver(

    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                createInterval(666, firstSpan);
                createInterval(999, secondSpan);
                createInterval(354, thirdSpan);

                insertionConfirm = false
            }
        });

    }
)

observer.observe(h2Obs);


// sezione mouse enter camioncini

let trucks = document.querySelectorAll('.fa-truck');

let columns = document.querySelectorAll('.col-custom');



columns.forEach((colonna, i) => {

    // variabile d'appoggio
    let columnsConfirm = false;

    colonna.addEventListener('mouseenter', () => {

        if (columnsConfirm == false) {

            trucks[i].classList.remove('text-accent');
            trucks[i].classList.add('text-greenCus');
            trucks[i].style.transform = 'translatex(200px)'
        } else {
            trucks[i].classList.remove('text-secondaryCus');
            trucks[i].classList.add('text-accent');
            trucks[i].style.transform = 'translatex(200px)'

        }

    });

    colonna.addEventListener('mouseleave', () => {

        if (columnsConfirm == false) {

            trucks[i].classList.remove('text-greenCus');
            trucks[i].classList.add('text-orangeCus');
            trucks[i].style.transform = 'translatex(0px)'
            columnsConfirm = true;

        } else {
            trucks[i].classList.remove('text-accent');
            trucks[i].classList.add('text-secondaryCus');
            trucks[i].style.transform = 'translatex(0px)'
            columnsConfirm = false;
        }


    });

});