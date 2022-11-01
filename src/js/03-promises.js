import { Notify } from 'notiflix/build/notiflix-notify-aio';


const ref = {
  form: document.querySelector( 'form' ),
  firstDelay: document.querySelector( 'input[name="delay"]' ),
  delayStep: document.querySelector( 'input[name="step"]' ),
  amount: document.querySelector( 'input[name="amount"]' ),
  createBtn: document.querySelector( 'button' ),
}

console.log( ref.firstDelay );
console.log( ref.delayStep );
console.log( ref.amount );
console.log( ref.createBtn );
console.log( ref.form );

ref.form.addEventListener( 'submit', submitHandler );


function submitHandler( event )
{
  event.preventDefault();

  console.log( ref.firstDelay.value );
  console.log( ref.delayStep.value );
  console.log( ref.amount.value );

  let delay = Number(ref.firstDelay.value);

  for ( let i = 1; i <= Number(ref.amount.value); i += 1 )
  {
    
    console.log( 'The promis ', i, 'will be created with delay ', delay );
    createPromise( i, delay );
    delay += Number(ref.delayStep.value);    
  }  
  event.currentTarget.reset();
}


function createPromise( position, delay )
{
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise( ( resolve, reject ) => 
  {
    setTimeout( () => 
    {
      
      const promisObj = {
          position,
          delay
        };
      if ( shouldResolve ) 
      {
        Notify.success(`✅ Fulfilled promise ${ position } in ${ delay }ms`);
        console.log( promisObj );
      }
      else
      {
        Notify.failure( `❌ Rejected promise ${ position } in ${ delay }ms` );
        console.log( promisObj );
      }
    }, delay );
  });
}








