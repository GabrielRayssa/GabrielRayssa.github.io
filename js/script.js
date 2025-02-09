document.addEventListener('DOMContentLoaded', function() {
    carregarFotos();
    GerarImagem() 
}, false);


function Carregado(){
    document.getElementById("Loader").style.display = 'none';
    document.getElementById("Senha").style.display = 'block';
    //para debug document.getElementById("Conteudo").style.display = 'block';

}
function nextField(current){

    for (i = 0; i < current.form.elements.length; i++){
        if (current.form.elements[i].tabIndex - current.tabIndex == 1){
            current.form.elements[i].focus();
            if (current.form.elements[i].type == "text"){
                current.form.elements[i].select();
            }
        }
    }
}
function Acessar(){
    event.preventDefault()
    var numero1 = document.getElementById("Senha1").value;
    var numero2 = document.getElementById("Senha2").value;
    var numero3 = document.getElementById("Senha3").value;
    var numero4 = document.getElementById("Senha4").value;
    if(numero1 == 1 && numero2 == 8 && numero3 == 0 && numero4 == 8)
    {
        document.getElementById("Loader").style.display = 'none';
        document.getElementById("Senha").style.display = 'none';
        document.getElementById("Conteudo").style.display = 'block';
    }
    else
    {
        alert("Senha incorreta");
    }
}


window.onload = function(){
    Carregado(); 
}
function contador() {
    var hoje = moment(new Date()); //"now"
    var DataInicio = moment(new Date(2024, 7, 18));

    var duration = moment.duration(hoje.diff(DataInicio))
    if (duration.years() != 0) {
        document.getElementById("anos").innerHTML = duration.years() + " anos";
    }
    document.getElementById("meses").innerHTML = duration.months() + " meses";
    document.getElementById("dias").innerHTML = duration.days() + " dias";
    document.getElementById("horas").innerHTML = duration.hours() + " horas";
    document.getElementById("minutos").innerHTML = duration.minutes() + " minutos";
    document.getElementById("segundos").innerHTML = duration.seconds() + " segundos";

    document.getElementById("asAnos").innerHTML = parseFloat(duration.as('years').toFixed(2)).toLocaleString('pt-BR') + " anos";
    document.getElementById("asMeses").innerHTML = parseFloat(duration.as('months').toFixed(2)).toLocaleString('pt-BR') + " meses";
    document.getElementById("asDias").innerHTML = parseFloat(duration.as('days').toFixed(2)).toLocaleString('pt-BR') + " dias";
    document.getElementById("asHoras").innerHTML = parseFloat(duration.as('hours').toFixed(2)).toLocaleString('pt-BR') + " horas";
    document.getElementById("asMinutos").innerHTML = parseFloat(duration.as('minutes').toFixed(1)).toLocaleString('pt-BR') + " minutos";
    document.getElementById("asSegundos").innerHTML = parseFloat(duration.as('seconds').toFixed(0)).toLocaleString('pt-BR') + " segundos";
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    heart.innerText = '💗';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(contador, 1000);
setInterval(createHeart, 300);

let currentIndex = 0;

function scrollCarousel(direction) {
    const carousel = document.getElementById("carousel");
    const totalSlides = carousel.children.length;
    currentIndex =
        (currentIndex + direction + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(-${currentIndex * 100
        }%)`;
}

let currentIndexfotos = 0;

function scrollCarouselfotos(direction) {
    const carousel = document.getElementById("carouselfotos");
    const totalSlides = carousel.children.length;
    currentIndexfotos =
        (currentIndexfotos + direction + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(-${currentIndexfotos * 100
        }%)`;
}

function carregarFotos(){
    const imageContainer = document.getElementById('carouselfotos');
    let quantFotos = 17;
    for (let i = 0; i < quantFotos; i++) {
        const img = document.createElement('img'); // Create a new <img> element
        img.src = 'fotos\\'+(i+1)+'.jpg'; // Set the source of the image
        img.alt = `Image ${i + 1}`; // Set an alt attribute for accessibility
        img.className= 'fotos';
        const div = document.createElement('div');
        div.className = 'relative w-full max-w-4xl mx-auto min-w-full';
        imageContainer.appendChild(div); // Append the <img> to the container
        div.appendChild(img); // Append the <img> to the container
    }
}

function GerarImagem() {
    var hoje = moment(new Date()); //"now"
    var DataInicio = moment(new Date(2024, 7, 18));
    var duration = moment.duration(hoje.diff(DataInicio))
    var canvas = document.getElementById("Compartilhar");
    if (canvas.getContext) 
    {
    var ctx = canvas.getContext("2d");

    // const image = document.getElementById("scream");
    // image.addEventListener("load", (e) => {
    //   ctx.drawImage(image, 10, 10);
    // });
    const gradient = ctx.createLinearGradient(0, 100, 200, 300);
    gradient.addColorStop(0, '#991d99');
    gradient.addColorStop(1, '#4b0a4b');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 400);

    ctx.fillStyle = 'black';
    ctx.font = "bold 48px serif";
    ctx.fillText("Rayssa e Gabriel", 25, 90);

    ctx.fillStyle = 'white';
    ctx.font = "bold 48px serif";
    ctx.fillText("Rayssa e Gabriel", 22, 93);
    
    ctx.fillStyle = 'white';
    ctx.font = "20px serif";
    ctx.fillText(`juntos a:`, 160, 125);

    ctx.fillStyle = 'white';
    ctx.font = "30px serif";
    ctx.fillText(`${duration.months()} meses`, 150, 160);
    ctx.fillText(`${duration.days()} dias `, 152, 200);
    ctx.fillText(`${duration.hours()} horas `, 150, 240);
    ctx.fillText(`${duration.minutes()} minutos `, 130, 280);
    
    ctx.fillStyle = 'white';
    ctx.font = "20px serif";
    ctx.fillText(`e contando...`, 150, 310);
}
}

function BaixarImagem(){
    let canvasImage = document.getElementById('Compartilhar').toDataURL('image/png');
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function () {
        let a = document.createElement('a');
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = 'amor.png';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        a.remove();
      };
      xhr.open('GET', canvasImage); // This is to download the canvas Image
      xhr.send();
}