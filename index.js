const buttons = document.querySelectorAll('.box-item');
const body = document.querySelector("body");

buttons.forEach( function (buttons) {
    console.log(buttons);
    buttons.addEventListener('click' , function(event){
        console.log(event);
        console.log(event.target);
        if(event.target.id === 'red'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'white'){
            body.style.backgroundColor = event.target.id;
            body.style.color = "black"
        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'pink'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'orange'){
            body.style.backgroundColor = event.target.id;
        }
    })
} );