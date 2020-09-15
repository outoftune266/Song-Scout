let artist;
let album = "tragic kingdom"
let song;







function getArtist(){
    var queryURL = "https://theaudiodb.com/api/v1/json/1/search.php?s=" + artist + "&apikey=523532";
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
console.log(response)
      }
      )}

      function getAlbum(){
        var queryURL = "https://theaudiodb.com/api/v1/json/1/searchalbum.php?a=" + album + "&apikey=523532";
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response){
    console.log(response)
          }
          )}

          function getSong(){
            var queryURL = "https://theaudiodb.com/api/v1/json/1/search.php?s=" + song + "&apikey=523532";
            $.ajax({
                url: queryURL,
                method: "GET"
              }).then(function(response){
        console.log(response)
              }
              )}