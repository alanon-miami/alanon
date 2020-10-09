document.addEventListener('DOMContentLoaded', () => {

    // floating
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'top',
      hoverEnabled: false
    });
    // Navegation Menu
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    
    // Slider
    var elems = document.querySelectorAll('.slider');
     var instances = M.Slider.init(elems, {
        indicators: true,
        height: 500,
        duration: 500,
        interval:3000
     });
 
 });