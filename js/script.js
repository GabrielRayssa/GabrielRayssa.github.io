document.addEventListener('DOMContentLoaded', function () {
    carregarFotos();
    GerarImagem();
    Modal();
    ModalSurpresa();
    const camposSenha = ["Senha1", "Senha2", "Senha3", "Senha4"];
    camposSenha.forEach(id => {
        const campo = document.getElementById(id);
        campo.addEventListener("keydown", e => {
            previousField(e.target, e);
            campo.addEventListener("keyup", d => {
                nextField(d.target, d);
            });
        });
    });
}, false);
function Carregado() {
    document.getElementById("Loader").style.display = 'none';
    document.getElementById("Senha").style.display = 'block';
    //para debug document.getElementById("Conteudo").style.display = 'block';
}
function nextField(current, event) {
    if (event.key != 'Backspace' && isFinite(event.key)) {
        for (i = 0; i < current.form.elements.length; i++) {
            if (current.form.elements[i].tabIndex - current.tabIndex == 1) {
                current.form.elements[i].focus();
                if (current.form.elements[i].type == "text") {
                    current.form.elements[i].select();
                }
            }
        }
    }
}
function previousField(current, event) {
    if (event.key == 'Backspace' && event.target.value == "") {
        for (i = 0; i < current.form.elements.length; i++) {
            if (current.form.elements[i].tabIndex - current.tabIndex == -1) {
                current.form.elements[i].focus();
                if (current.form.elements[i].type == "text") {
                    current.form.elements[i].select();
                }
            }
        }
    }
}
function Acessar() {
    event.preventDefault()
    var numero1 = document.getElementById("Senha1").value;
    var numero2 = document.getElementById("Senha2").value;
    var numero3 = document.getElementById("Senha3").value;
    var numero4 = document.getElementById("Senha4").value;
    if (numero1 == 1 && numero2 == 8 && numero3 == 0 && numero4 == 8) {
        document.getElementById("Loader").style.display = 'none';
        document.getElementById("Senha").style.display = 'none';
        document.getElementById("Conteudo").style.display = 'block';
    }
    else {
        alert("Senha incorreta");
    }
}


window.onload = function () {
    Carregado();
}
function contador() {
    var hoje = moment(new Date()); //"now"
    var DataInicio = moment(new Date(2024, 7, 19));

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
    EnviarWhatsapp(duration);
    if(duration.months() >= 6){
        document.getElementById("modal-surpresa-open").className = "button";
    }
    if(duration.months() == 6 && duration.days() == 0 && duration.hours() == 0 && duration.minutes() == 0 && duration.seconds() > 0 && duration.seconds() < 5)
        {
        ExplosaoSentimentos()
        document.getElementById("ModalSurpresa").style.display = "block";
    }
}

function createHeart(innerText) {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    heart.innerText = innerText;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(contador, 1000);

function Modal() {
    var modal = document.getElementById("ModalSettings");
    modal.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    },

    document.getElementById("modal-open").onclick = function () {
        modal.style.display = "block";
    }
    let interval = 333;
    let handle = setInterval(function() { createHeart('💗'); }, interval);

    document.getElementById("spawnRateHidden").addEventListener("change", function () {
        
    });
    
    document.getElementById("modal-close").onclick = function () {
        document.getElementById("spawnRate").value = document.getElementById("spawnRateHidden").value;
        document.getElementById("spawnItem").value = document.getElementById("spawnItemHidden").value;
        document.getElementById("spawnRateValue").value = document.getElementById("spawnRateHidden").value + "/s"
        modal.style.display = "none";
    }
    
    document.getElementById("modal-overlay").onclick = function () {
        document.getElementById("spawnRate").value = document.getElementById("spawnRateHidden").value;
        document.getElementById("spawnItem").value = document.getElementById("spawnItemHidden").value;
        document.getElementById("spawnRateValue").value = document.getElementById("spawnRateHidden").value + "/s"
        modal.style.display = "none";
    }
    interval = document.getElementById("modal-save").onclick = function () {    
        spawnRate = document.getElementById("spawnRate").value;
        spawnItem = document.getElementById("spawnItem").value;
        document.getElementById("spawnRateHidden").value = spawnRate
        document.getElementById("spawnItemHidden").value = spawnItem
        
        interval = 1000 / spawnRate;
        clearInterval(handle);
        handle = setInterval(function() { createHeart(spawnItem); }, interval);
        modal.style.display = "none";
    };
    document.getElementById("spawnRate").addEventListener("change", function () {
        document.getElementById("spawnRateValue").value = document.getElementById("spawnRate").value + "/s";
    });

}


function ModalSurpresa(){
    var modal = document.getElementById("ModalSurpresa");
    document.getElementById("modal-surpresa-open").onclick = function () {
        ExplosaoSentimentos();
        modal.style.display = "block";
    }
    document.getElementById("modal-surpresa-fechar-x").onclick = function () {
        modal.style.display = "none";
    }
    document.getElementById("modal-surpresa-overlay").onclick = function () {
        modal.style.display = "none";
    }
}

function ExplosaoSentimentos(){
    const heartCoords = [
        [500, 600],
        // bottom point
        [500, 410],
        // center point
        // left line (y = x + 100)
        [350, 450],
        [375, 475],
        [400, 500],
        [425, 525],
        [450, 550],
        [475, 575],
        // right line (y = -x + 1100)
        [650, 450],
        [623, 477],
        [600, 500],
        [550, 550],
        [574, 526],
        [526, 574],
        // left curve
        [340, 410],
        [340, 430],
        [350, 385],
        [370, 365],
        [400, 350],
        [430, 355],
        [460, 370],
        [480, 385],
        // right curve
        [520, 385],
        [540, 370],
        [570, 355],
        [600, 350],
        [630, 365],
        [650, 385],
        [660, 410],
        [660, 430]
      ];
      for (const [xCoordinate, yCoordinate] of heartCoords) {
        emojiBlast({
          emojiCount: 1,
          emojis: ["❤️‍🔥"],
          physics: {
            fontSize: 35,
            gravity: 0.05,
            initialVelocities: {
              x: 0,
              y: -5
            },
            rotation: 0,
            rotationDeceleration: 0
          },
          position: {
            x: xCoordinate -300,
            y: yCoordinate -650
          }
        });
      }
}

function EnviarWhatsapp(duration){
    let link;
    document.getElementById("lembranca-gabs").onclick = function () {
        if(duration.years() < 1){
            link = `https://api.whatsapp.com/send?phone=5527992294225&text=Oi%20amor%2C%20s%C3%B3%20queria%20te%20lembrar%20que%20estamos%20juntos%20a%20${duration.months()}%20meses%2C%20${duration.days()}%20dias%2C%20${duration.hours()}%20horas%2C%20${duration.minutes()}%20minutos%20e%20mais%20ou%20menos%20${duration.seconds()}%20segundos%20%0ATe%20amo%20%E2%9D%A4%EF%B8%8F`;
        }else{
            link = `https://api.whatsapp.com/send?phone=5527992294225&text=Oi%20amor%2C%20s%C3%B3%20queria%20te%20lembrar%20que%20estamos%20juntos%20a%20${duration.years()}%20ano%2C%20${duration.months()}%20meses%2C%20${duration.days()}%20dias%2C%20${duration.hours()}%20horas%2C%20${duration.minutes()}%20minutos%20e%20mais%20ou%20menos%20${duration.seconds()}%20segundos%20%0ATe%20amo%20%E2%9D%A4%EF%B8%8F`;
        }
        window.open(link, '_blank')
    }
    document.getElementById("lembranca-ray").onclick = function () {
        if(duration.years() < 1){
            link = `https://api.whatsapp.com/send?phone=5527996130860&text=Oi%20amor%2C%20s%C3%B3%20queria%20te%20lembrar%20que%20estamos%20juntos%20a%20${duration.months()}%20meses%2C%20${duration.days()}%20dias%2C%20${duration.hours()}%20horas%2C%20${duration.minutes()}%20minutos%20e%20mais%20ou%20menos%20${duration.seconds()}%20segundos%20%0ATe%20amo%20%E2%9D%A4%EF%B8%8F`;
        }else{
            link = `https://api.whatsapp.com/send?phone=5527996130860&text=Oi%20amor%2C%20s%C3%B3%20queria%20te%20lembrar%20que%20estamos%20juntos%20a%20${duration.years()}%20ano%2C%20${duration.months()}%20meses%2C%20${duration.days()}%20dias%2C%20${duration.hours()}%20horas%2C%20${duration.minutes()}%20minutos%20e%20mais%20ou%20menos%20${duration.seconds()}%20segundos%20%0ATe%20amo%20%E2%9D%A4%EF%B8%8F`;
        }
        
        window.open(link, '_blank')
    }
}

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

function carregarFotos() {
    const imageContainer = document.getElementById('carouselfotos');
    let quantFotos = 17;
    for (let i = 0; i < quantFotos; i++) {
        const img = document.createElement('img'); // Create a new <img> element
        img.src = 'fotos\\' + (i + 1) + '.jpg'; // Set the source of the image
        img.alt = `Image ${i + 1}`; // Set an alt attribute for accessibility
        img.className = 'fotos';
        const div = document.createElement('div');
        div.className = 'relative w-full max-w-4xl mx-auto min-w-full';
        imageContainer.appendChild(div); // Append the <img> to the container
        div.appendChild(img); // Append the <img> to the container
    }
}

function GerarImagem() {
    var hoje = moment(new Date()); //"now"
    var DataInicio = moment(new Date(2024, 7, 19));
    var duration = moment.duration(hoje.diff(DataInicio))
    var canvas = document.getElementById("Compartilhar");
    if (canvas.getContext) {
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
        ctx.font = "bold 40px serif";
        ctx.fillText("Rayssa e Gabriel", 40, 90);

        ctx.fillStyle = 'white';
        ctx.font = "bold 40px serif";
        ctx.fillText("Rayssa e Gabriel", 38, 93);

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

function BaixarImagem() {
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