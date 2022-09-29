import { Notify } from 'notiflix/build/notiflix-notify-aio';


function createPromise( position, delay )
{
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise( ( resolve, reject ) => 
  {
    setTimeout( () => 
    {
      if ( shouldResolve ) 
      {
        const promisObj = {
          position,
          delay
        };
        Notify.success(`✅ Fulfilled promise ${ position } in ${ delay }ms`);
        console.log( promisObj );
      }
      else
      {
        Notify.failure(`❌ Rejected promise ${ position } in ${ delay }ms`);
      }
    }, delay );
  });
}




ref = {
  form: document.querySelector( 'form' ),
  delay: document.querySelector( 'input[name="delay"]' ),
  step: document.querySelector( 'input[name="step"]' ),
  amount: document.querySelector( 'input[name="amount"]' ),
  createBtn: document.querySelector( 'button' ),
}

console.log( ref.delay );
console.log( ref.step );
console.log( ref.amount );
console.log( ref.createBtn );
console.log( ref.form );

ref.form.addEventListener( 'submit', submitHandler );



function submitHandler()
{
  event.preventDefault();

  let delayTime = Number( ref.delay.value );
  const stepTime = Number( ref.step.value );
  const amountOfPromises = Number( ref.amount.value );
      
  for ( let i = 1; i <= amountOfPromises; i += 1 )
  {
    delayTime += stepTime;
    createPromise( i, delayTime );
  }
  
  event.currentTarget.reset();
}

