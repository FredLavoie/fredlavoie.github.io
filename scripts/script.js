document.addEventListener('DOMContentLoaded', function(){

  const menuItems = document.querySelector('#menu-items');
  const menuButton = document.querySelector('#menu');
  
  // hide menu items on load
  menuItems.style.display = 'none';
  
  // toggle show/hide menu on mobile
  menuButton.onclick = function() {
    if(menuItems.style.display === 'none') {
      menuItems.style.display = 'flex';
    } else if(menuItems.style.display === 'flex') {
      menuItems.style.display = 'none';
    }
  }

});
