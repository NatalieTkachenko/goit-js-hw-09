import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const dateTimePicker = document.querySelector( '#datetime-picker' );
const startBtn = document.querySelector( 'button' );
const daysTable = document.querySelector( '[data-days]' );
const hourTable = document.querySelector( '[data-hours]' );
const minTable = document.querySelector( '[data-minutes]' );
const secTable = document.querySelector( '[data-seconds]' );
const timer = document.querySelector( '.timer' );
const field = document.querySelector( '.field' );
const label = document.querySelectorAll( '.label' );
const value = document.querySelectorAll( '.value' );

console.log( dateTimePicker );
console.log( startBtn );
console.log( daysTable );
console.log( hourTable );
console.log( minTable );
console.log( secTable );
console.log( timer );
console.log( value );
console.log( label );


timer.style.display = 'flex';
timer.style.justifyContent = 'flex-start';

value.forEach( ( item ) =>
{
  item.style.fontSize = '20px';
  item.style.fontWeight = '500';
  item.style.display = 'block';
  item.style.textAlign = 'center';
  item.style.marginRight = '12px';
  
  

});
  
label.forEach( ( item ) =>
{
  item.style.fontSize = '13px';
  item.style.fontStyle = 'normal';
  item.style.textTransform = 'uppercase';
  item.style.display = 'block';
  item.style.textAlign = 'center';
  item.style.marginRight = '12px';
} ); 


startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose( selectedDates )
  {
    console.log( selectedDates[ 0 ] );
    const selectedTime = selectedDates[ 0 ].getTime();
    console.log( selectedTime );
    console.log( Date.now() );
    if ( selectedTime <= Date.now() )
    {
      //alert( 'Please choose date in the future!' )
      Notify.failure('Please choose date in the future!');
    }    
    else
    {
      startBtn.disabled = false;
      startBtn.addEventListener( 'click', startTimerHandler );
    }
  },
};


flatpickr( dateTimePicker, options );



function startTimerHandler()
{
  if ( startBtn.classList.contains( 'active' ) )
  {
    return;
  };

  startBtn.classList.add( 'active' );
  let timeToParse = selectedTime - Date.now();
  const { days, hours, minutes, seconds } = convertMs( timeToParse );
  console.log( days, hours, minutes, seconds );
  daysTable.textContent = days;
  hourTable.textContent = hours;
  minTable.textContent = minutes;
  secTable.textContent = seconds;

  const intervalID = setInterval( () =>
  {
    timeToParse = selectedTime - Date.now();
    const { days, hours, minutes, seconds } = convertMs( timeToParse );
    console.log( days, hours, minutes, seconds );
    daysTable.textContent = days;
    hourTable.textContent = hours;
    minTable.textContent = minutes;
    secTable.textContent = seconds;

    if ( selectedTime - Date.now() <= 1000 )
    {
      clearInterval( intervalID );
      console.log( 'timer stopped' );
      //alert( 'Congratulations! The party has been started!' )
      Notify.success('Congratulations! The party has been started!');
    };
  }, 1000 );
          
};
  



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log( convertMs( 24140000 ) ); // {days: 0, hours: 6 minutes: 42, seconds: 20}


function addLeadingZero( value )
{
  return String( value ).padStart( 2, '0' );
};