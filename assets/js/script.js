
var granimInstance = new Granim({
      element: '#canvas-basic',
      direction: 'left-right',
      isPausedWhenNotInView: true,
      states : {
          "default-state": {
              gradients: [
                  ['#ff9966', '#ff5e62'],
                  ['#00F260', '#0575E6'],
                  ['#e1eec3', '#f05053']
              ]
          }
      }
  });


  $(document).ready(function () {

    $('.button-collapse').sideNav();
  
    $('.slider').slider({
      indicators: false,
      height: 570,
      transition: 500,
      interval: 6000
    });
   
  });
  