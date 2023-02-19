
// Triangle box
  document.getElementById('calculate-btn-1').addEventListener('click', function() {
    // Get input values
    const inputValue1 = getInputsValue('input-1');
    const inputValue2 = getInputsValue('input-2');
  
    // Get user-defined values
    const inputText1 = getUserValue('set-input-1');
    const inputText2 = getUserValue('set-input-2');
  
    // Set input values to user-defined values
    setInputValue('set-input-1', inputValue1);
    setInputValue('set-input-2', inputValue2);

    // Check if user input values are numbers
    if (isNaN(inputText1) || isNaN(inputText2)) {
    alert('Please enter valid numbers for both inputs.');
    return; // exit the function if input values are not numbers
    }

    // Multiplications
    const triangleAns = (0.5 * inputText1 * inputText2).toFixed(2);

    // Create a button element
     const convertButton = document.createElement('button');
     convertButton.textContent = 'Convert to m²';
     convertButton.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'ml-5', 'py-1', 'px-2', 'rounded');
 
    // Add an event listener to the button to convert the answer to square meters
     convertButton.addEventListener('click', function() {
     const triangleAnsInSquareMeters = triangleAns / 10000;
     document.getElementById('li-triangle').textContent = `Triangle ${triangleAnsInSquareMeters} m²`;
   })
  
      // Display the result and the button in the list item
  document.getElementById('li-triangle').textContent = `Triangle   ${triangleAns} cm²   `;
  document.getElementById('li-triangle').appendChild(convertButton);

  console.log(triangleAns);
});




// Rectangle Box
document.getElementById('calculate-btn-2').addEventListener('click', function(){
        
    // Get input values
    const inputValue3 = getInputsValue('input-3');
    const inputValue4 = getInputsValue('input-4');

    // Get user-defined values
    const inputText3 = getUserValue('set-input-3');
    const inputText4 = getUserValue('set-input-4');
  
    // Set input values to user-defined values
    setInputValue('set-input-3', inputValue3);
    setInputValue('set-input-4', inputValue4);

    // Check if user input values are numbers
    if (isNaN(inputText3) || isNaN(inputText4)) {
      alert('Please enter valid numbers for both inputs.');
      return; // exit the function if input values are not numbers
    }

    // Multiplications
    const rectangleAns = inputText3 * inputText4;
    // Create a button element
    const convertButton = document.createElement('button');
    convertButton.textContent = 'Convert to m²';
    convertButton.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'py-1', 'ml-5', 'px-2', 'rounded');

   // Add an event listener to the button to convert the answer to square meters
    convertButton.addEventListener('click', function() {
    const triangleAnsInSquareMeters = rectangleAns / 10000;
    document.getElementById('li-rectangle').textContent = `Rectangle ${triangleAnsInSquareMeters} m²`;
  })

    // Display the result in the list item
    document.getElementById('li-rectangle').textContent = `Rectangle  ${rectangleAns} cm²`;
    document.getElementById('li-rectangle').appendChild(convertButton);

    
  
    // console.log(inputValue1, inputValue2, inputText1, inputText2);
})


// Parallelogram Box
document.getElementById('calculate-btn-3').addEventListener('click', function(){
        
    // Get input values
    const inputValue5 = getInputsValue('input-5');
    const inputValue6 = getInputsValue('input-6');

    // Get user-defined values
    const inputText5 = getUserValue('set-input-5');
    const inputText6 = getUserValue('set-input-6');
  
    // Set input values to user-defined values
    setInputValue('set-input-5', inputValue5);
    setInputValue('set-input-6', inputValue6);

    // Check if user input values are numbers
    if (isNaN(inputText5) || isNaN(inputText6)) {
      alert('Please enter valid numbers for both inputs.');
      return; // exit the function if input values are not numbers
    }

    // Multiplications
    const parallelogramAns = (inputText5 * inputText6).toFixed(2);

    // Create a button element
    const convertButton = document.createElement('button');
    convertButton.textContent = 'Convert to m²';
    convertButton.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'ml-5', 'py-1', 'px-2', 'rounded');

   // Add an event listener to the button to convert the answer to square meters
    convertButton.addEventListener('click', function() {
    const parallelogramAnsInSquareMeters = parallelogramAns / 10000;
    document.getElementById('li-triangle').textContent = `Triangle ${parallelogramAnsInSquareMeters} m²`;
  })
 
     // Display the result and the button in the list item
 document.getElementById('li-parallelogram').textContent = `Parallelogram   ${parallelogramAns} cm²   `;
 document.getElementById('li-parallelogram').appendChild(convertButton);
  
    // console.log(inputValue1, inputValue2, inputText1, inputText2);
})




// Rhombus box
document.getElementById('calculate-btn-4').addEventListener('click', function(){
    // Get input values
    const inputValue7 = getInputsValue('input-7');
    const inputValue8 = getInputsValue('input-8');
  
    // Get user-defined values
    const inputText7 = getUserValue('set-input-7');
    const inputText8 = getUserValue('set-input-8');
  
    // Set input values to user-defined values
    setInputValue('set-input-7', inputValue7);
    setInputValue('set-input-8', inputValue8);

    // Check if user input values are numbers
    if (isNaN(inputText7) || isNaN(inputText8)) {
      alert('Please enter valid numbers for both inputs.');
      return; // exit the function if input values are not numbers
    }

    // Multiplications
    const rhombusAns = (0.5 * inputText7 * inputText8).toFixed(2);

    // Create a button element
    const convertButton = document.createElement('button');
    convertButton.textContent = 'Convert to m²';
    convertButton.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'ml-5', 'py-1', 'px-2', 'rounded');

   // Add an event listener to the button to convert the answer to square meters
    convertButton.addEventListener('click', function() {
    const rhombusAnsInSquareMeters = rhombusAns / 10000;
    document.getElementById('li-rhombus').textContent = `Triangle ${rhombusAnsInSquareMeters} m²`;
  })
 
     // Display the result and the button in the list item
 document.getElementById('li-rhombus').textContent = `Rhombus   ${rhombusAns} cm²   `;
 document.getElementById('li-rhombus').appendChild(convertButton);
  
  
    // console.log(inputValue1, inputValue2, inputText1, inputText2);
})




// Pentagon Box
document.getElementById('calculate-btn-5').addEventListener('click', function(){
    // Get input values
    const inputValue9 = getInputsValue('input-9');
    const inputValue10 = getInputsValue('input-10');
  
    // Get user-defined values
    const inputText9 = getUserValue('set-input-9');
    const inputText10 = getUserValue('set-input-10');
  
    // Set input values to user-defined values
    setInputValue('set-input-9', inputValue9);
    setInputValue('set-input-10', inputValue10);

    // Check if user input values are numbers
    if (isNaN(inputText9) || isNaN(inputText10)) {
      alert('Please enter valid numbers for both inputs.');
      return; // exit the function if input values are not numbers
    }
  

    // Multiplications
    const pentagonAns = (0.5 * inputText9 * inputText10).toFixed(2);

    // Create a button element
    const convertButton = document.createElement('button');
    convertButton.textContent = 'Convert to m²';
    convertButton.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'ml-5', 'py-1', 'px-2', 'rounded');

   // Add an event listener to the button to convert the answer to square meters
    convertButton.addEventListener('click', function() {
    const pentagonAnsInSquareMeters = pentagonAns / 10000;
    document.getElementById('li-pentagon').textContent = `Triangle ${pentagonAnsInSquareMeters} m²`;
  })
 
     // Display the result and the button in the list item
 document.getElementById('li-pentagon').textContent = `Pentagon   ${pentagonAns} cm²   `;
 document.getElementById('li-pentagon').appendChild(convertButton);
  

    // console.log(inputValue1, inputValue2, inputText1, inputText2);
})




// Ellipse Box
document.getElementById('calculate-btn-6').addEventListener('click', function() {
    // Get input values
    const inputValue11 = getInputsValue('input-11');
    const inputValue12 = getInputsValue('input-12');
  
    // Get user-defined values
    const inputText11 = getUserValue('set-input-11');
    const inputText12 = getUserValue('set-input-12');
  
    // Set input values to user-defined va1lues
    setInputValue('set-input-11', inputValue11);
    setInputValue('set-input-12', inputValue12);

    // Check if user input values are numbers
    if (isNaN(inputText11) || isNaN(inputText12)) {
      alert('Please enter valid numbers for both inputs.');
      return; // exit the function if input values are not numbers
    }


    // Multiplications
    const ellipseAns = (3.14 * inputText11 * inputText12).toFixed(2);

    // Create a button element
    const convertButton = document.createElement('button');
    convertButton.textContent = 'Convert to m²';
    convertButton.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'ml-5', 'py-1', 'px-2', 'rounded');

   // Add an event listener to the button to convert the answer to square meters
    convertButton.addEventListener('click', function() {
    const ellipseAnsInSquareMeters = ellipseAns / 10000;
    document.getElementById('li-Ellipse').textContent = `Ellipse ${ellipseAnsInSquareMeters} m²`;
  })
 
     // Display the result and the button in the list item
 document.getElementById('li-ellipse').textContent = `Ellipse   ${ellipseAns} cm²   `;
 document.getElementById('li-ellipse').appendChild(convertButton);
  
  
    // console.log(inputValue1, inputValue2, inputText1, inputText2);
  });
  
  


