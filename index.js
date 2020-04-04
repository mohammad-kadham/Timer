
const duration = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray',perimeter);
    let x;
const timer = new Timer(duration,startButton,pauseButton,{
    onStart(totalDuration){
        console.log('timer started');
        x = totalDuration;
    },
    onTick(timeRemaining){
       
       circle.setAttribute('stroke-dashoffset',perimeter*timeRemaining / x - perimeter);
      
    },onComplete(){
        console.log('Done !!!');
        
    }
});