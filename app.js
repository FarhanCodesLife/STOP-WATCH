
const sec = document.querySelector('#sec')
const min = document.querySelector('#min')
const hr = document.querySelector('#hr')
const btn = document.querySelector('#btnn')

// let timer = true
let secound = 0
let minutes = 0
let hour = 0
let startInterval;

function reset() {


    // btn.style.display.hidden
    btn.disabled = false ;
   
    console.log('reset');
    
    location.reload()
     
    
}
function start() {
    btn.disabled = true ;

    
    console.log("start");
     startInterval = setInterval(() => {

        secound += 1
        sec.innerHTML = secound
        if (secound <= 9) {
            sec.innerHTML = "0" + secound
            
        }
        else{sec.innerHTML = secound}
        if (secound == 59) {
            minutes += 1
            min.innerHTML = minutes
            if (minutes <= 9) {
                min.innerHTML = "0" + minutes
                
            } 
            secound = 0 

        }
        if (minutes == 59) {
            hour += 1
            hr.innerHTML = hour
            minutes = 0  
        }

    }, 1000);}


    
    

function stop(){
    btn.disabled = false;
    
    console.log('stop');
    clearInterval(startInterval)
}



function calculate() {

    if (start == true) {
        sec = sec + 1

        
    }
    
}