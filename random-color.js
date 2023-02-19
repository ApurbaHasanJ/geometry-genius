
  function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  }
  
  const geometryEls = document.getElementsByClassName('geometry');
  for (let i = 0; i < geometryEls.length; i++) {
    geometryEls[i].addEventListener('mouseenter', event => {
      event.target.closest('.geometry').style.backgroundColor = randomColor();
    });
  }
  
