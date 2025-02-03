function contador() {
    var hoje = moment(new Date()); //"now"
    var DataInicio = moment(new Date(2024,7,18));
    
    var duration = moment.duration(hoje.diff(DataInicio))
    
    var anos = duration.years();
    var meses = duration.months();
    var dias = duration.days();
    var horas = duration.hours();
    var minutos = duration.minutes();
    var segundos = duration.seconds();
    
    if(anos != 0)
    {
        document.getElementById("anos").innerHTML = anos + " anos";
    }
    document.getElementById("meses").innerHTML = meses + " meses";
    document.getElementById("dias").innerHTML = dias + " dias";
    document.getElementById("horas").innerHTML = horas + " horas";
    document.getElementById("minutos").innerHTML = minutos + " minutos";
    document.getElementById("segundos").innerHTML = segundos + " segundos";
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