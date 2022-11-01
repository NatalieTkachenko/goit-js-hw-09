const startBtn = document.querySelector( 'button[data-start]' );
const stopBtn = document.querySelector( 'button[data-stop]' );
const body = document.querySelector( 'body' );
let intervalId = null;

startBtn.disabled = false;
stopBtn.disabled = true;

console.log( body );
console.log( startBtn );
console.log( stopBtn );


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function newBodyColor()
{
body.style.backgroundColor = getRandomHexColor();
}

startBtn.addEventListener( 'click', switchColorHandler );
stopBtn.addEventListener( 'click', stopSwitcherHandler );


function switchColorHandler()
{
    startBtn.disabled = true;
    stopBtn.disabled = false;
    if ( startBtn.classList.contains( 'isActive' ) )
    {
        console.log( 'Не тикай більше "Start"! Вже працює!' );
        return;
    }    
    startBtn.classList.add( 'isActive' );
    intervalId = setInterval( () =>
    {
    newBodyColor()
    }, 1000 );
};


function stopSwitcherHandler()
{
    startBtn.disabled = false;
    stopBtn.disabled = true;
    startBtn.classList.remove( 'isActive' );
    clearInterval( intervalId );
    console.log('Норм колір, хай буде!)...Ну, якщо не подобається, тисни знову "Start"!')
}