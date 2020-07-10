var hour =0;
var min =0;
var sec =0;
var msec =0;
var hourHeading = document.getElementById("hour");
var  minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var intervel;

function timer() {
    msec++
    msecHeading.innerHTML = msec ;
    if (msec>= 100) {
        msec = 0  ;
        sec++
    secHeading.innerHTML = sec ;

        
    }else if (sec >= 60) {
        sec = 0;
        min ++
    minHeading.innerHTML = min ;

        
    } else if (min >= 60) {
        min = 0;
        hour ++
    hourHeading.innerHTML = hour ;

        
    } 
    
    
}



function start() {
intervel = setInterval(timer,10)

    
}
function stop() {
    clearInterval(intervel)
    
}
function reset() {
hour =0;
 min =0;
 sec =0;
 msec =0;
 hourHeading.innerHTML = hour ;

 minHeading.innerHTML = min ;
 secHeading.innerHTML = sec ;

 msecHeading.innerHTML = msec ;

stop()

 
    
}



function playstop(btn, vid) {
    var vid = document.getElementById(vid);
    let btnchangecolor = document.querySelector('#changecolor');

    if (vid.paused) {
        btnchangecolor.addEventListener('click', () => btnchangecolor.style.color = '#FFFFFF ')
        btnchangecolor.addEventListener('click', () => btnchangecolor.style.backgroundColor = '#51FF00 ')


        vid.play();
        btn.innerHTML = "stop";
        start()


    } else {
        btnchangecolor.addEventListener('click', () => btnchangecolor.style.color = '#FFFFFF ')
        btnchangecolor.addEventListener('click', () => btnchangecolor.style.backgroundColor = '#FF0000 ')



        vid.pause();
        btn.innerHTML = "start";
        stop()
    }

}