 //Reference display element
 const display= document.getElementById('display');

 //Track if we have performed calculation
 let justCalculated = false;

 function appendToDisplay(value){
      console.log('Button presssed:', value);

      let currentValue=display.value;
      if (justCalculated && !isNaN(value)) {
          display.value=value;
          justCalculated = false;
          return;
      }

      //If current display show 0 and user enters a number,we wanna replace the 0
      if (currentValue === '0' && !isNaN(value)) {
          display.value = value;
      } 
          else if (currentValue === '0' && value==='.') {
               display.value = currentValue+value;
          }
          else if(value==='.'){
               //Get the last number in display
               let lastNumber = currentValue.split(/[\+\-\*\/]/).pop();
               //Omly add the decimal if the current number doesnt have ont
               if (!lastNumber.includes('.')) {
                    display.value = currentValue + value;
               } 

          }
          else{
               display.value = currentValue + value;
          }

          //Reset the justCalculated to false flag when user starts typing
          justCalculated = false;

          console.log('Display updated to:',display.value);
               
          
 }
     function clearDisplay() {
          console.log('Clear button pressed.');

          alert('Display cleared.');
     }

     function deleteLast(){
          console.log('Backspace button pressed.');
          let currentValue = display.value;

          //if they is only one character or its 0; reset to 0
          if(currentValue.length<=1 || currentValue === '0'){
               display.value = '0';
          }
          else{
               display.value = currentValue.slice(0, -1);
          }
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
