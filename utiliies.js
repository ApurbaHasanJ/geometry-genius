
// click blog btn for next page
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blogs.html';
})

// // Get Random color on hover
// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

//   var box = document.querySelector('.hover\\:bg-random-color');
//   box.addEventListener('mouseover', function() {
//     box.classList.remove('bg-white');
//     box.classList.add('bg-' + getRandomColor());
//   });
//   box.addEventListener('mouseout', function() {
//     box.classList.remove('bg-' + box.classList[3].split('-')[1]);
//     box.classList.add('bg-white');
//   });


// get input values
function getInputsValue(inputsValue){
    const inputValues = document.getElementById(inputsValue);
    const inputValuesString = inputValues.value;
    const inputValue = parseFloat(inputValuesString);
    return inputValue;
    
}

// get value from user
function getUserValue(inputsText){
    const inputTexts = document.getElementById(inputsText);
    const inputTextsString = inputTexts.innerText;
    const inputText = parseFloat(inputTextsString);
    return inputText;
}

// Set User value
function setInputValue(inputId, value) {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.innerText = value;
    } else {
      console.error(`Input element with ID "${inputId}" not found`);
    }
  }