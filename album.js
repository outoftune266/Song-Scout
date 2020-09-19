// let album = "Adore"

// let idAlbum; 
// Event handler for user clicking the select-artist button
$("#select-album").on("click", function(event) {
  // Preventing the button from trying to submit the form
  event.preventDefault();
  // Storing the artist name
  var inputArtist = $("#autocomplete-input").val().trim();
  // if(inputArtist === ""){
  //   return;
  // }
  //check the input is working right
  console.log(inputArtist)

  // Running the searchBandsInTown function(passing in the artist as an argument)
 getAlbum(inputArtist);
  
});



function getAlbum(album){
    var queryURL = "https://theaudiodb.com/api/v1/json/1/searchalbum.php?a=" + album + "&apikey=523532";
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){        
        

        console.log(response);

        var albumDiv = $("<div class = 'album'>"); 

        var artistName = response.album[0].strArtist;

        var pOne = $("<p>").text("Artist: " + artistName);

        albumDiv.append(pOne);

        var albumName = response.album[0].strAlbum;

        var pTwo = $("<p>").text("Album: " + albumName);

        albumDiv.append(pTwo);

        var releaseYear = response.album[0].intYearReleased;

        var pThree = $("<p>").text("Year Released: " + releaseYear);

        albumDiv.append(pThree);

        var albumGenre = response.album[0].strGenre;

        var pFour = $("<p>").text("Genre: " + albumGenre);

        albumDiv.append(pFour);

        var albumDescription = response.album[0].strDescriptionEN;

        var pFive = $("<p>").text("Album Description: " + albumDescription);

        albumDiv.append(pFive);
        
        var albumCover = response.album[0].strAlbumThumb;

        var image  = $("<img>").attr("src", albumCover);

        albumDiv.append(image);

        idAlbum = response.album[0].idAlbum;

        $(".albumInfo").prepend(albumDiv);

      })};