let artist;
let album = "tragic kingdom"
let song;
const APIURLgetArtist = "https://theaudiodb.com/api/v1/json/1/search.php?s=";
const APIURLgetAlbum = "https://theaudiodb.com/api/v1/json/1/searchalbum.php?a=";
const APIURLgetSong = "https://theaudiodb.com/api/v1/json/1/search.php?s=";
var granimInstance = new Granim({
      element: '#canvas-complex',
      direction: 'left-right',
      isPausedWhenNotInView: true,
      states : {
          "default-state": {
              gradients: [
                  [
                      { color: '#833ab4', pos: .2 },
                      { color: '#fd1d1d', pos: .8 },
                      { color: '#38ef7d', pos: 1 }
                  ], [
                      { color: '#40e0d0', pos: 0 },
                      { color: '#ff8c00', pos: .2 },
                      { color: '#ff0080', pos: .75 }
                  ],
              ]
          }
      }
  });

// var granimInstance = new Granim({
//       element: '#canvas-image-blending',
//       direction: 'top-bottom',
//       isPausedWhenNotInView: true,
//       image: {
//             source: './assets/Image/imagebg.jpg',
//             blendingMode: 'multiply'
//       },
//       states: {
//             "default-state": {
//                   gradients: [
//                         ['#29323c', '#485563'],
//                         ['#FF6B6B', '#556270'],
//                         ['#80d3fe', '#7ea0c4'],
//                         ['#f0ab51', '#eceba3']
//                   ],
//                   transitionSpeed: 7000
//             }
//       }
// });



function getArtist() {
      var queryURL = APIURLgetArtist + artist + "&apikey=523532";
      $.ajax({
            url: queryURL,
            method: "GET"
      }).then(function (response) {
            console.log(response)
      }
      )
}

function getAlbum() {
      var queryURL = APIURLgetAlbum + album + "&apikey=523532";
      $.ajax({
            url: queryURL,
            method: "GET"
      }).then(function (response) {
            console.log(response)
      }
      )
}

function getSong() {
      var queryURL = APIURLgetSong + song + "&apikey=523532";
      $.ajax({
            url: queryURL,
            method: "GET"
      }).then(function (response) {
            console.log(response)
      }
      )
}