function contador() {
    var hoje = moment(new Date()); //"now"
    var DataInicio = moment(new Date(2024,7,18));
    
    var duration = moment.duration(hoje.diff(DataInicio))
    if(duration.years() != 0)
    {
        document.getElementById("anos").innerHTML = duration.years() + " anos";
    }
    document.getElementById("meses").innerHTML = duration.months() + " meses";
    document.getElementById("dias").innerHTML = duration.days() + " dias";
    document.getElementById("horas").innerHTML = duration.hours() + " horas";
    document.getElementById("minutos").innerHTML = duration.minutes() + " minutos";
    document.getElementById("segundos").innerHTML = duration.seconds() + " segundos";

    document.getElementById("asAnos").innerHTML = duration.as('years').toFixed(2) + " meses";
    document.getElementById("asMeses").innerHTML = duration.as('months').toFixed(2) + " meses";
    document.getElementById("asDias").innerHTML = duration.as('days').toFixed(2) + " dias";
    document.getElementById("asHoras").innerHTML = duration.as('hours').toFixed(2) + " horas";
    document.getElementById("asMinutos").innerHTML = duration.as('minutes').toFixed(1) + " minutos";
    document.getElementById("asSegundos").innerHTML = duration.as('seconds').toFixed(0) + " segundos";
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
				carousel.style.transform = `translateX(-${
					currentIndex * 100
				}%)`;
			}