
function changeColor() {
    const button = document.getElementById('colorBtn');

    // Toggle between classes to change the color
    if (button.classList.contains('default')) {
      button.classList.remove('default');
      button.classList.add('clicked');
    } else {
      button.classList.remove('clicked');
      button.classList.add('default');
    }
  }
