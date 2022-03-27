// Mirseardhje ne faqe 
//alert("Miresevini ne faqen tone!");

// Shhfaqja e permbajtjes tek faqja 2-butoni 
function funksioniFshehe() {
    document.getElementById('faqja-2-fshehe').style.display = 'block'
};


// konstantet te pandryshueshme
const butoni = document.querySelectorAll(".btn");
const dyqaniproduktet = document.querySelectorAll(".produkti");


for (i = 0; i < butoni.length; i++) {
    butoni[i].addEventListener("click", (e) => {
        e.preventDefault()

        const filter = e.target.dataset.filter;
        console.log(filter);

        dyqaniproduktet.forEach((product) => {
            if (filter === "tegjitha") {
                product.style.display = "block";
            } else {
                if (product.classList.contains(filter)) {
                    product.style.display = "inline-block";
                } else {
                    product.style.display = "none";
                }
            }
        });
    });
};

const search = document.getElementById("search");
const tedhenateproduktit = document.querySelectorAll(".produkti-detaje h2");

search.addEventListener("keyup", filtroproduktet);

function filtroproduktet(e) {
    const text = e.target.value.toLowerCase();
    tedhenateproduktit.forEach(function (product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block"
        } else {
            product.parentElement.parentElement.style.display = "none"
        }
    })
}

let kornizaprodukti = document.getElementsByClassName("korniza-produkti");
let slider = document.getElementById("slider");
let butonidjathtas = document.getElementById("zvarrit-djathtas");
let butonimajtas = document.getElementById("zvarrit-majtas");

//Shigjetat me event
butonimajtas.addEventListener('click', function () {
    slider.scrollLeft -= 345;
})

butonidjathtas.addEventListener('click', function () {
    slider.scrollLeft += 345;
})

//Maksimumi i levizjeve
const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

// ketu krijohet funksioni i cili fillon me e leviz sliderin
function autoPlay() {
    if (slider.scrollLeft > (maxScrollLeft - 1)) {
        slider.scrollLeft -= maxScrollLeft
    } else {
        slider.scrollLeft += 1;
    }
}

//Koha ne te cilen kalon slideri
let play = setInterval(autoPlay, 13)

for (var i = 0; i < kornizaprodukti.length; i++) {
    kornizaprodukti[i].addEventListener("mouseover", function () {
        clearInterval(play);
    });

    kornizaprodukti[i].addEventListener("mouseout", function () {
        return play = setInterval(autoPlay, 10);
    });
}

//Zbritje-llogaritje
var Euro
document.getElementById('rezultati-sallon').innerHTML = 800 - 500 + 'Euro';

var Euro
document.getElementById('rezultati-ballkon').innerHTML = 900 - 400 + 'Euro';

var Euro
document.getElementById('rezultati-dhoma').innerHTML = 700 - 600 + 'Euro';

// Koha reale

function kohaTani() {
    var tani = new Date();
    var ora = tani.getHours(),
        minutat = tani.getMinutes(),
        sekondat = tani.getSeconds(),
        koha = document.getElementById('koha');

    if (ora >= 12) {
        koha.innerHTML = 'PM';
    } else {
        koha.innerHTML = 'AM';
    }

    if (ora > 12) {
        ora = ora - 12;
    }


    document.getElementById('ora').innerHTML = ora;
    document.getElementById('minutat').innerHTML = minutat;
    document.getElementById('sekondat').innerHTML = sekondat;
}
setInterval(kohaTani, 10);
