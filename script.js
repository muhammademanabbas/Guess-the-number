let buttons  =  document.querySelectorAll('.buttons');
let reset =  document.querySelector('.reset');
let play =  document.querySelector('.play');
let attempt_1 =  document.querySelector('#attempt-1');
let attempt_2 =  document.querySelector('#attempt-2');
let attempt_3 =  document.querySelector('#attempt-3');
let attempt_4 =  document.querySelector('#attempt-4');
let hint =  document.querySelector('#grater-or-less');
let computerNumber =   undefined;   
let playerNumber = undefined ;
let howManyAttempt  = 0;
let play_flag  =  false  ;

computerNumber  =   Math.floor(Math.random()*9)  ;
    console.log(computerNumber)

play.addEventListener('click' ,  ()=>{
    play_flag  =  !play_flag ;
    console.log(play_flag)
    if(play.innerHTML  ==  'play'){
        play.innerHTML =  'pause';
    }
    else if (play.innerHTML  ==  'pause'){
        play.innerHTML =  'resume' ;
    }
    else{
        play.innerHTML =  'pause' ;
    }

})

buttons.forEach((v , i)=>{
    
        
        v.addEventListener(`click` ,  ()=>{
            if(play_flag){
                playerNumber  =      (i===9  ? 0  : i+1);
              if(howManyAttempt < 4){
                 if(playerNumber  ===  computerNumber){
                         hint.innerHTML = 'You Won By ' + (howManyAttempt<1 ? howManyAttempt=1 :howManyAttempt) + ' attempt' ;
                 }
                 else{
                    if(howManyAttempt  == 0 ){
                     if(playerNumber  >  computerNumber){
                         hint.innerHTML = 'Less than ' + (playerNumber+1) ;
                     }
                     else{
                         hint.innerHTML = 'Grater than ' + playerNumber ;
                     }
                     attempt_1.style.backgroundColor = 'rgba(251, 131, 18, 0.87)' ;
                     howManyAttempt++ ;
                 }
                 else if (howManyAttempt ==1){
                     if(playerNumber  >  computerNumber){
                         hint.innerHTML = 'Less than ' + playerNumber ;
                     }
                     else{
                         hint.innerHTML = 'Grater than ' + playerNumber ;
                     }
                     attempt_2.style.backgroundColor = 'rgba(251, 131, 18, 0.87)' ;
                     howManyAttempt++ ;
                 }
                 else if (howManyAttempt == 2){
                     if(playerNumber  >  computerNumber){
                         hint.innerHTML = 'Less than ' + playerNumber ;
                     }
                     else{
                         hint.innerHTML = 'Grater than ' + playerNumber ;
                     }
                     attempt_3.style.backgroundColor = 'rgba(251, 131, 18, 0.87)' ;
                     howManyAttempt++ ;
                 }
                 else if (howManyAttempt == 3){
                     hint.innerHTML = 'You Loss By ' + (howManyAttempt+1) + ' attempt' ;         
                     howManyAttempt++ ;
                     attempt_4.style.backgroundColor = 'rgba(251, 131, 18, 0.87)' ;
                     computerNumber  =   undefined  ; 
                     playerNumber    =   undefined  ; 
                     howManyAttempt  = 0 ;
                    }
                 }
            }
              }
              
         });
}) ;


    reset.addEventListener('click' ,  ()=>{
        computerNumber  =   undefined  ; 
        playerNumber    =   undefined  ; 
        howManyAttempt  = 0 ;
        attempt_1.style.color = 'red' ;
        attempt_2.style.color = 'red' ;
        attempt_3.style.color = 'red' ;
        attempt_4.style.color = 'red' ;
        hint.innerHTML = 'Choose a Number' ;
        play.innerHTML =   'play'
        play_flag  =  false ;
        computerNumber  =   Math.floor(Math.random()*9)  ;
        console.log(computerNumber)
     });