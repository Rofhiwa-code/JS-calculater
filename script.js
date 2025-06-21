 //Reference display element
 const display= document.getElementById('display');

 //Track if we have performed calculation
 let justCalculated = false;

 function appendToDisplay(value){
      console.log('Button presssed:', value);

      alert('You pressed: ' + value);


 }
     function clearDisplay() {
          console.log('Clear button pressed.');

          alert('Display cleared.');
     }

     function deleteLast(){
          console.log('Backspace button pressed.');

          alert('Backspace button was clicked.');
     }

     function calculate() {
          console.log('Equals button pressed.');

          alert('Equals button was clicked.');
     
     }

     document.addEventListener('DOMContentLoaded', () => {
          console.log('Calculater loaded successfully.');
          console.log('Display elemt',display);

          if(display){
               console.log('Current display value:', display.value);

          }
          else{
               console.log('Display element not found.');
          }
     })
